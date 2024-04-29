import Store from "electron-store";
import { AppPreferencesType, DarkModeType, LanguageType } from "@Common/store/types";

interface JsonSettingsType {
  language: string;
  darkMode: string;
  allowBeta: boolean;
  backupFolder: string;
  backupFrequency: number;
  isStandardView: boolean;
  showDefaults: boolean;
}

export class ApplicationPreferences implements AppPreferencesType {
  private store: Store<JsonSettingsType>;

  constructor() {
    this.store = new Store<JsonSettingsType>();
  }

  get language(): LanguageType {
    return this.store.get("settings.language", "en-US");
  }

  set language(val: LanguageType) {
    this.store.set("settings.language", val);
  }

  get darkMode(): DarkModeType {
    return this.store.get("settings.darkMode", "system");
  }

  set darkMode(val: DarkModeType) {
    this.store.set("settings.darkMode", val);
  }

  get allowBeta(): boolean {
    return this.store.get("settings.allowBeta", false);
  }

  set allowBeta(val: boolean) {
    this.store.set("settings.allowBeta", val);
  }

  get backupFolder(): string {
    return this.store.get("settings.backupFolder", "");
  }

  set backupFolder(val: string) {
    this.store.set("settings.backupFolder", val);
  }

  get backupFrequency(): number {
    return this.store.get("settings.backupFrequency", 0);
  }

  set backupFrequency(val: number) {
    this.store.set("settings.backupFrequency", val);
  }

  get isStandardView(): boolean {
    return this.store.get("settings.isStandardView", true);
  }

  set isStandardView(val: boolean) {
    this.store.set("settings.isStandardView", val);
  }

  get showDefaultLayers(): boolean {
    return this.store.get("settings.showDefaults", false);
  }

  set showDefaultLayers(val: boolean) {
    this.store.set("settings.showDefaults", val);
  }
}

export const ApplicationPreferencesProvider = new ApplicationPreferences();
