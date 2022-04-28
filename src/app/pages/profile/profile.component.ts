import { Component, OnInit, Inject } from "@angular/core";
import { Observable } from "rxjs";
import { AngularFirestore } from "@angular/fire/compat/firestore";
import { Item, ItemCollection } from "../../items/items.model";
import { ItemsService } from "../../items/items.service";

import { User } from "../../users/users.model";

@Component({
  selector: "app-profile",
  templateUrl: "./profile.component.html",
  styleUrls: ["./profile.component.scss"]
})
export class ProfileComponent implements OnInit {
  public item$: Observable<any[]>;
  public items: Item[] = [];
  public user: User;

  constructor(
    @Inject(AngularFirestore) private afs: AngularFirestore,
    @Inject(ItemsService) private itemService: ItemsService
  ) {
    // Unit Tests //

    // Load User
    this.loadUser("aQTu6QfvvT9QsU63iV9O")
      .then((res) => {
        console.log("loadUser === User Received:", res);
        this.user = res as User;
      })
      .catch((err) => console.error("loadUser === Error", err));
  }

  // firestore: collections
  public collections = {
    items: this.afs.collection<Item>("items"),
    users: this.afs.collection<User>("users")
  };

  /**
   * Load A User
   * @param userId
   */
  async loadUser(userId): Promise<User | Error> {
    try {
      // get catalog
      const snapshot = this.collections.users.doc(userId).get();

      const doc = await snapshot.toPromise();
      const user: User = doc.data();

      return user;
    } catch (error) {
      throw error || new Error();
    }
  }

  ngOnInit() {}
}
