import Store from "electron-store";

type Version = number;

export interface StorageType {
  version: Version;
  settings: {
    language: string;
  };
}

const LATEST = 1;

class AppSettings {
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

  get language(): string {
    return this.store.get("settings.language");
  }

  set language(val: string) {
    this.store.set("settings.language", val);
  }
}

export const store = AppSettings.getInstance();
