export type AppThemeType = "light" | "dark" | "system";
export const isAppThemeType = (value: string): value is AppThemeType => value === "light" || value === "dark" || value === "system";

// this is string, but eventually it will be converted to union/value object
export type LanguageType = string; // convert it to unine/value object | "en-US" | "fr-FR" | "de-DE";

export type AppPreferencesType = {
  language: LanguageType;
  darkMode: AppThemeType;
  allowBeta: boolean;
  backupFolder: string;
  backupFrequency: number;
  isStandardView: boolean;
  showDefaultLayers: boolean;
  showDeveloperConsole: boolean;
};
