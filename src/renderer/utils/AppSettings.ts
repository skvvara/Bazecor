import Store from "electron-store";
import { toast } from "react-toastify";
import { LanguageType } from "../../api/keymap/types";
import dark = toast.dark;

type Version = number;

type DarkModeType = string | "dark" | "light" | "system";

type AppPreferencesType = {
  language: LanguageType;
  darkMode: DarkModeType;
};

export interface StorageType {
  version: Version;
  settings: AppPreferencesType;
}

const getFallbackSettings = (): AppPreferencesType => ({
  language: "en-US",
  darkMode: "system",
});

function normalizeDarkMode(darkMode: unknown): DarkModeType {
  if (darkMode === null || darkMode === undefined) {
    return "system";
  }

  if (["dark", "light", "system"].indexOf(darkMode as string) >= 0) {
    return darkMode as string;
  }

  if (darkMode === "true") {
    return "dark";
  }

  return "system";
}

class ApplicationPreferences implements AppPreferencesType {
  private static instance: ApplicationPreferences;

  private store: Store<StorageType>;

  constructor() {
    this.store = new Store<StorageType>({
      defaults: {
        version: 1,
        settings: getFallbackSettings(),
      },
    });
    this.migrateData();
  }

  static getInstance(): ApplicationPreferences {
    if (!ApplicationPreferences.instance) {
      ApplicationPreferences.instance = new ApplicationPreferences();
    }

    return ApplicationPreferences.instance;
  }

  get language(): LanguageType {
    return this.store.get("settings.language");
  }

  set language(val: LanguageType | string) {
    this.store.set("settings.language", val);
  }

  get darkMode(): DarkModeType {
    return this.store.get("settings.darkMode");
  }

  set darkMode(val: DarkModeType) {
    this.store.set("settings.darkMode", val);
  }

  private migrateData() {
    const data = this.store.get("settings");
    normalizeDarkMode(data.darkMode);
  }
}

export const ApplicationPreferencesProvider = ApplicationPreferences.getInstance();
