import { SettingsProvider } from "../app-context/types";
import { AppPreferencesType } from "./types";
import { ApplicationPreferences } from "./ElectronStoreAppSettings";

export class ElectronSettingsProvider implements SettingsProvider {
  private _store: AppPreferencesType = null;

  get() {
    if (this._store === null) {
      this._store = new ApplicationPreferences();
    }

    return this._store;
  }
}
