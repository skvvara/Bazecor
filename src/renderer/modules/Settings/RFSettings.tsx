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

import React from "react";
import { i18n } from "@Renderer/i18n";
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@Renderer/components/atoms/Tooltip";

// Custom components
import { Card, CardContent, CardHeader, CardTitle } from "@Renderer/components/atoms/Card";
import Heading from "@Renderer/components/atoms/Heading";
import { Button } from "@Renderer/components/atoms/Button";

import ToggleGroup from "@Renderer/components/molecules/CustomToggleGroup/ToggleGroup";

// Assets
import { IconSignal, IconRadar, IconInformation, IconThunder } from "@Renderer/components/atoms/icons";
// import { Badge } from "@Renderer/component/Badge";
import { Badge } from "@Renderer/components/atoms/Badge";
import { RFSettingsProps } from "@Renderer/types/wireless";

function RFSettings(props: RFSettingsProps) {
  const { sendRePair, wireless, changeWireless } = props;

  const RFModes = [
    {
      name: "Low",
      value: 0,
      index: 0,
    },
    {
      name: "Medium",
      value: 1,
      index: 1,
    },
    {
      name: "High",
      value: 2,
      index: 2,
    },
  ];
  const setRfPower = async (value: number) => {
    const newWireless = { ...wireless };
    newWireless.rf.power = value;
    changeWireless(newWireless);
  };
  return (
    <>
      <Card className="max-w-2xl mx-auto" variant="default">
        <CardHeader>
          <CardTitle>
            <IconSignal /> {i18n.wireless.RFPreferences.RFSettings}
          </CardTitle>
        </CardHeader>
        <CardContent className="py-0">
          <Heading headingLevel={2} renderAs="h4" className="mb-1">
            {i18n.wireless.RFPreferences.repairChannel}
          </Heading>
          <Button onClick={sendRePair} size="sm" variant="secondary">
            {i18n.wireless.RFPreferences.reconnectSides}
          </Button>
          <div className="py-3 mb-2 text-sm font-normal tracking-tight text-gray-400 dark:text-gray-100">
            <p>{i18n.wireless.RFPreferences.repairChannelDescription}</p>
          </div>
        </CardContent>
      </Card>
      <Card className="mt-3 max-w-2xl mx-auto" variant="default">
        <CardHeader>
          <CardTitle className="flex flex-row items-center justify-between">
            <div className="flex items-center gap-2">
              <IconRadar /> {i18n.wireless.RFPreferences.RFRadioSignal}
            </div>{" "}
            <Badge variant="subtle" size="sm">
              {i18n.wireless.energyManagement.settings.lowBatteryImpact}
            </Badge>
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="flex flex-row gap-2 items-center justify-between">
            <Heading headingLevel={2} renderAs="paragraph-sm" className="flex flex-row gap-2 items-center">
              {i18n.wireless.energyManagement.settings.manageRFSignal}
              <TooltipProvider delayDuration={200}>
                <Tooltip>
                  <TooltipTrigger className="[&_svg]:text-purple-100 [&_svg]:dark:text-purple-200">
                    <IconInformation />
                  </TooltipTrigger>
                  <TooltipContent className="max-w-xs">
                    <>
                      <p className="text-left">
                        <strong>High</strong>
                        <br />
                        {i18n.wireless.energyManagement.settings.tooltipHighConsumptionMessage}
                      </p>
                      <p className="text-left">
                        <strong>Medium</strong>
                        <br />
                        {i18n.wireless.energyManagement.settings.tooltipMediumConsumptionMessage}
                      </p>
                      <p className="text-left">
                        <strong>Low</strong>
                        <br />
                        {i18n.wireless.energyManagement.settings.tooltipLowConsumptionMessage}
                      </p>
                    </>
                  </TooltipContent>
                </Tooltip>
              </TooltipProvider>
            </Heading>
            <ToggleGroup triggerFunction={setRfPower} value={wireless.rf.power} listElements={RFModes} variant="flex" size="sm" />
          </div>
          <div className="rounded-sm bg-gray-100/20 dark:bg-gray-900/20 py-3 px-3 mt-3">
            <p className="flex flex-row gap-2 items-center text-xs text-gray-300 dark:text-gray-100">
              <IconThunder /> Consider minimize radio signal strength for power savings.
            </p>
          </div>
        </CardContent>
      </Card>
    </>
  );
}

export default RFSettings;
