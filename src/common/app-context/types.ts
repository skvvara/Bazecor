import { AppPreferencesType } from "../store/types";

interface Supplier<T> {
  get: () => T;
}

export type SettingsProvider = Supplier<AppPreferencesType>;

export interface AppContextType {
  get settings(): AppPreferencesType;
}
