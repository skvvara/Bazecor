import { ElectronSettingsProvider } from "../store/ElectronStoreBasedSettingsProvider";
import { AppContextType, SettingsProvider } from "./types";

class AppContextImpl implements AppContextType {
  constructor(private readonly settingsProvider: SettingsProvider) {}

  get settings() {
    return this.settingsProvider.get();
  }
}

export const AppContext = new AppContextImpl(new ElectronSettingsProvider());
