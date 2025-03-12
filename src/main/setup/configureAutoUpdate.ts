import log from "electron-log/main";
import { updateElectronApp, UpdateSourceType } from "update-electron-app";
import { AppContext } from "../../common/app-context/AppContext";

const configureAutoUpdate = () => {
  const autoUpdate = AppContext.settings.autoUpdateEnabled;

  if (autoUpdate === true && process.platform !== "linux") {
    updateElectronApp({
      updateSource: {
        type: UpdateSourceType.ElectronPublicUpdateService,
        host: "https://update.electronjs.org",
        repo: "dygmalab/bazecor",
      },
      updateInterval: "24 hour",
      logger: log,
      notifyUser: true,
    });
  }
};

export default configureAutoUpdate;
