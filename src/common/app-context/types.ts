import { AppPreferencesType } from "@Common/store/types";

interface Supplier<T> {
  get: () => T;
}

export type SettingsProvider = Supplier<AppPreferencesType>;

export type AppContextType = {
  settings: AppPreferencesType;
};
