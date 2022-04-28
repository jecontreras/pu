import { SettingsPrivacyLevel } from "../settings/settings.model";

export interface User {
  name: string;
  createdAt: any;
  items: string[];
  fovorited: string[];
  history: string[];
  icon: string;
}
export interface UserCollection {
  [id: string]: User;
}

export interface UserSettings {
  privacy: UserSettingsPrivacy;
}

export interface UserSettingsPrivacy {
  profile: SettingsPrivacyLevel;
  profileIcon: SettingsPrivacyLevel;
  profileName: SettingsPrivacyLevel;
  profileActivity: SettingsPrivacyLevel;
}
