/* eslint-disable no-console */
/* Bazecor
 * Copyright (C) 2024  DygmaLab SE.
 *
 * This program is free software: you can redistribute it and/or modify it under
 * the terms of the GNU General Public License as published by the Free Software
 * Foundation, version 3.
 *
 * This program is distributed in the hope that it will be useful,
 * but WITHOUT ANY WARRANTY; without even the implied warranty of
 * MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
 * GNU General Public License for more details.
 *
 * You should have received a copy of the GNU General Public License
 * along with this program.  If not, see <http://www.gnu.org/licenses/>.
 */

import React, { useState, useEffect } from "react";
import { ipcRenderer } from "electron";
import { toast } from "react-toastify";
import fs from "fs";
import log from "electron-log/renderer";

// React Bootstrap Components
import { Card, CardContent, CardHeader, CardTitle } from "@Renderer/components/atoms/Card";

// Own Components
import { useDevice } from "@Renderer/DeviceContext";
import ToastMessage from "@Renderer/components/atoms/ToastMessage";
import { i18n } from "@Renderer/i18n";
import { Button } from "@Renderer/components/atoms/Button";

// Icons Imports
import { IconArrowDownWithLine, IconFloppyDisk } from "@Renderer/components/atoms/icons";

// Utils
import { BackupSettingsProps } from "@Renderer/types/preferences";
import WaitForRestoreDialog from "@Renderer/components/molecules/CustomModal/WaitForRestoreDialog";
import { BackupType } from "@Renderer/types/backups";
import { VirtualType } from "@Renderer/types/virtual";
import { ApplicationPreferencesProvider as storage } from "../../../common/store/AppSettings";
import Backup from "../../../api/backup";

const BackupSettings = (props: BackupSettingsProps) => {
  const [backupFolder, setBackupFolder] = useState("");
  const [performingBackup, setPerformingBackup] = useState(false);
  const { state } = useDevice();

  const { connected, neurons, neuronID, toggleBackup, destroyContext } = props;
  useEffect(() => {
    setBackupFolder(storage.backupFolder);
  }, []);

  const openPerformingBackup = () => {
    setPerformingBackup(true);
  };

  const closePerformingBackup = () => {
    setPerformingBackup(false);
  };

  const localRestoreBackup = async (backup: BackupType) => {
    try {
      openPerformingBackup();
      toggleBackup(true);
      await Backup.restoreBackup(neurons, neuronID, backup, state.currentDevice);
      toast.success(
        <ToastMessage
          title="Backup restored successfully"
          content="Your backup was restored successfully to the device!"
          icon={<IconArrowDownWithLine />}
        />,
        {
          autoClose: 2000,
          icon: "",
        },
      );
      closePerformingBackup();
      toggleBackup(false);
      return true;
    } catch (e) {
      closePerformingBackup();
      toggleBackup(false);
      return false;
    }
  };

  const localRestoreVirtual = async (virtual: VirtualType) => {
    try {
      openPerformingBackup();
      toggleBackup(true);
      await Backup.restoreVirtual(virtual, state.currentDevice);
      toast.success(
        <ToastMessage
          title="Backup restored successfully"
          content="Your backup was restored successfully to the device!"
          icon={<IconArrowDownWithLine />}
        />,
        {
          autoClose: 2000,
          icon: "",
        },
      );
      closePerformingBackup();
      toggleBackup(false);
      return true;
    } catch (e) {
      closePerformingBackup();
      toggleBackup(false);
      return false;
    }
  };

  const GetBackup = async () => {
    const options = {
      title: i18n.keyboardSettings.backupFolder.restoreTitle,
      buttonLabel: i18n.keyboardSettings.backupFolder.windowRestore,
      defaultPath: backupFolder,
      filters: [
        { name: "Json", extensions: ["json"] },
        { name: i18n.dialog.allFiles, extensions: ["*"] },
      ],
    };

    const resp = await ipcRenderer.invoke("open-dialog", options);

    if (!resp.canceled) {
      log.info(resp.filePaths);
      let loadedFile;
      try {
        loadedFile = JSON.parse(fs.readFileSync(resp.filePaths[0], "utf-8"));
        if (loadedFile.virtual !== undefined) {
          await localRestoreVirtual(loadedFile as VirtualType);
          await destroyContext();
          log.info("Restored Virtual backup");
          return;
        }
        if (loadedFile.backup !== undefined || loadedFile[0].command !== undefined) {
          await localRestoreBackup(loadedFile);
          await destroyContext();
          log.info("Restored normal backup");
        }
      } catch (e) {
        log.error(e);
        alert("The file is not a valid global backup");
      }
    } else {
      log.info("user closed SaveDialog");
    }
  };

  const localGetLatestBackup = async () => {
    try {
      const loadedFile = await Backup.getLatestBackup(backupFolder, neuronID, state.currentDevice);
      await localRestoreBackup(loadedFile);
      await destroyContext();
      log.info("Restored latest backup");
    } catch (error) {
      log.error(error);
      alert(`The loaded backup could not be restored`);
    }
  };

  const triggerGetLatestBackup = (event: React.MouseEvent<HTMLButtonElement>) => {
    event.preventDefault();
    localGetLatestBackup();
  };

  const triggerGetBackup = (event: React.MouseEvent<HTMLButtonElement>) => {
    event.preventDefault();
    GetBackup();
  };

  return (
    <Card className="mt-3 max-w-2xl mx-auto" variant="default">
      <CardHeader>
        <CardTitle variant="default">
          <IconFloppyDisk /> {i18n.keyboardSettings.backupFolder.header}
        </CardTitle>
      </CardHeader>
      <CardContent>
        <form>
          <h3 className="mb-1 text-gray-400 dark:text-gray-100 tracking-tight font-semibold">Backup actions</h3>
          <div className="flex gap-3">
            <Button variant="short" onClick={event => triggerGetBackup(event)} disabled={!connected}>
              Restore backup from file...
            </Button>
            <Button variant="short" onClick={event => triggerGetLatestBackup(event)} disabled={!connected}>
              Restore from last backup
            </Button>
            <WaitForRestoreDialog title="Restoring Backup" open={performingBackup} />
          </div>
        </form>
      </CardContent>
    </Card>
  );
};

export default BackupSettings;
