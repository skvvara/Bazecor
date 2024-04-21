import { nativeTheme, NativeTheme } from "electron";
import { ApplicationPreferencesProvider } from "@Renderer/utils/AppSettings";
import Store from "../../renderer/utils/Store";
import sendToRenderer from "../utils/sendToRenderer";

const onThemeChange = () => () => {
  sendToRenderer("darkTheme-update", nativeTheme.shouldUseDarkColors);
};

const configureNativeTheme = () => {
  nativeTheme.on("updated", onThemeChange());
};

const setTheme = () => {
  nativeTheme.themeSource = ApplicationPreferencesProvider.darkMode as NativeTheme["themeSource"];
};

export { configureNativeTheme, setTheme, onThemeChange };
