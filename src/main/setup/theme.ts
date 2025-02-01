import { nativeTheme } from "electron";
import { AppContext } from "../../common/app-context/AppContext";
import sendToRenderer from "../utils/sendToRenderer";

const onThemeChange = () => () => {
  sendToRenderer("darkTheme-update", nativeTheme.shouldUseDarkColors);
};

const configureNativeTheme = () => {
  nativeTheme.on("updated", onThemeChange());
};

const setTheme = () => {
  nativeTheme.themeSource = AppContext.settings.darkMode;
};

export { configureNativeTheme, setTheme, onThemeChange };
