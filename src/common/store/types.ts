export type DarkModeType = string; // convert it to unine/value object | "dark" | "light" | "system";

// this is string, but eventually it will be converted to union/value object
export type LanguageType = string; // convert it to unine/value object | "en-US" | "fr-FR" | "de-DE";

export type AppPreferencesType = {
  language: LanguageType;
  darkMode: DarkModeType;
  allowBeta: boolean;
  backupFolder: string;
  backupFrequency: number;
  isStandardView: boolean;
  showDefaultLayers: boolean;
  showDeveloperConsole: boolean;
};
