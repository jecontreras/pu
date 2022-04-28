import { SettingsPrivacyLevel } from "../settings/settings.model";

export enum ItemState {
  REMOVED = -1,
  INACTIVE = 0,
  ACTIVE = 1
}

export interface ItemLocation {
  user: string;
  geopoint: any;
  photoId: string;
  time: any;
}
export interface Item {
  id: string;
  name: string;
  locations: ItemLocation[];
  createdAt: any;
  owner: string;
  icon: string;
  state: ItemState;
  privacy: SettingsPrivacyLevel;
}
export interface ItemCollection {
  [id: string]: Item;
}

export interface ItemMeta {
  received: number;
}
export interface ItemMetaCollection {
  [id: string]: ItemMeta;
}
