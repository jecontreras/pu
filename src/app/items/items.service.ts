import { Injectable, Inject } from "@angular/core";
import { AngularFirestore } from "@angular/fire/compat/firestore";

import { Observable, of } from "rxjs";
import { tap, delay } from "rxjs/operators";

import {
  Item,
  ItemCollection,
  ItemMeta,
  ItemMetaCollection
} from "./items.model";

@Injectable({
  providedIn: "root"
})
export class ItemsService {
  constructor(@Inject(AngularFirestore) private afs: AngularFirestore) {
    // Unit Tests //

    // Load item
    this.loadItem("5JzwhjC7QvMqkCyReVrM")
      .then((res: Item) => {
        console.log("loadItem === Item Received:", res);
      })
      .catch((err) => console.error("loadItem === Error", err));
  }

  // memory: collections
  public itemCollection: ItemCollection = {};
  public itemMetaCollection: ItemMetaCollection = {};

  // firestore: collection refs
  public collections = {
    items: this.afs.collection<Item>("items")
  };

  // settings
  private Settings = {
    ItemRefreshAfter: 60 // seconds
  };

  /**
   * Load A Item
   * @param itemId
   */
  public async loadItem(itemId: string): Promise<Item | Error> {
    try {
      // check cache
      const cachedItem: Item = this.getCachedItem(itemId);
      if (cachedItem) {
        console.log("Returning Cached Item: ", cachedItem.name);
        return cachedItem;
      }

      // get catalog
      const snapshot = this.collections.items.doc(itemId).get();

      // get doc
      const doc = await snapshot.toPromise();
      const item: Item = doc.data();
      item.id = doc.id;

      // cache
      this.cacheItem(item);

      return item;
    } catch (error) {
      throw error || new Error();
    }
  }

  private getCachedItem(itemId: string): Item | null {
    if (this.itemCollection.hasOwnProperty(itemId)) {
      const item: Item = this.itemCollection[itemId];
      const itemMeta: ItemMeta = this.itemMetaCollection[itemId];
      if (item && itemMeta) {
        if (itemMeta.received - Date.now() < this.Settings.ItemRefreshAfter) {
          return item;
        }
      }
    }
    return null;
  }

  private cacheItem(item: Item): void {
    if (!item || !item.id) {
      console.warn("cacheItem === invalid item:", item);
      return;
    }

    this.itemCollection[item.id] = item;
    this.itemMetaCollection[item.id] = {
      received: Date.now()
    } as ItemMeta;
  }

  private destroyItem(item: Item): void {
    if (!item || !item.id) {
      console.warn("destroyItem === invalid item:", item);
      return;
    }

    if (this.itemCollection.hasOwnProperty(item.id)) {
      delete this.itemCollection[item.id];
    }

    if (this.itemMetaCollection.hasOwnProperty(item.id)) {
      delete this.itemMetaCollection[item.id];
    }
  }
}
