import { MacrosType } from "@Types/macros";
import { SuperkeysType } from "@Types/superkeys";
import { LayerType, Neuron } from "./neurons";

export interface StorageType {
  settings: {
    backupFolder: string;
    backupFrequency: number;
    language: string;
    darkMode: string;
    showDefaults: boolean;
    isStandardView: boolean;
  };

  neurons: Neuron[];
}
export interface ApplicationConfiguration {
  getLanguage(): string;
  setLanguage(language: string): ApplicationConfiguration;

  /*
  getDarkMode(): DarkMode;
  setDarkMode(mode: DarkMode): ApplicationConfiguration;

  getAllowBeta(): boolean;
  setAllowBeta(allowBeta: boolean): ApplicationConfiguration;

  getBackUpFolder(): string;
  setBackUpFolder(backupFolder: string): ApplicationConfiguration;

  getBackupFrequency(): number;
  setBackupFrequency(backupFrequency: number): ApplicationConfiguration;

  isStandardView(): boolean;
  setStandardView(standardView: boolean): ApplicationConfiguration;

  showDefaults(): boolean;
  setShowDefaults(showDefaults: boolean): ApplicationConfiguration;

  isStandardViewSuperKeys(): boolean;
  setStandardViewSuperKeys(standardViewSuperKeys: boolean): ApplicationConfiguration;

  getLayersNames(): readonly LayerType[];
  setLayersNames(layers: LayerType[]): ApplicationConfiguration;

  getMacros(): readonly MacrosType[];
  setMacros(macros: MacrosType[]): ApplicationConfiguration;

  getSuperKeys(): readonly SuperkeysType[];
  setSuperKeys(superkeys: SuperkeysType[]): ApplicationConfiguration;

  getNeurons(): readonly Neuron[];
  setNeurons(neurons: Neuron[]): ApplicationConfiguration; */
}
