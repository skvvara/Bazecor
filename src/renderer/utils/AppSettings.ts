import Store from "electron-store";
import { LanguageType } from "../../api/keymap/types";

type Version = number;

type AppPreferencesType = {
  language: LanguageType;
};

export interface StorageType {
  version: Version;
  settings: AppPreferencesType;
}

const LATEST = 1;

class AppSettings implements AppPreferencesType {
  private static instance: AppSettings;

  private store: Store<StorageType>;

  constructor() {
    this.store = new Store<StorageType>({
      defaults: {
        version: LATEST,
        settings: {
          language: "en-US",
        },
      },
    });
  }

  static getInstance(): AppSettings {
    if (!AppSettings.instance) {
      AppSettings.instance = new AppSettings();
    }

    return AppSettings.instance;
  }

  get language(): LanguageType {
    return this.store.get("settings.language", "en-US");
  }

  set language(val: LanguageType | string) {
    this.store.set("settings.language", val);
  }
}

export const store = AppSettings.getInstance();
