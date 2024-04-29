import { AppContextType, SettingsProvider } from "./types";
import { AppPreferencesType } from "../store/types";
import { ApplicationPreferences } from "../store/ElectronStoreAppSettings";

class ElectronSettingsProvider implements SettingsProvider {
  private _store: AppPreferencesType = null;

  get() {
    if (this._store === null) {
      this._store = new ApplicationPreferences();
    }

    return this._store;
  }
}

class AppContext implements AppContextType {
  constructor(private readonly settingsProvider: SettingsProvider) {}

  get settings() {
    return this.settingsProvider.get();
  }
}

const appContext = new AppContext(new ElectronSettingsProvider());
export function getAppContext(): AppContextType {
  return appContext;
}
