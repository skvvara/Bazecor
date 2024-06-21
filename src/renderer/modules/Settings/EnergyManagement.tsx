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
import Styled from "styled-components";

// Modules
import { SavingMode } from "@Renderer/modules/Battery";

// Custom components
import { Card, CardContent, CardHeader, CardTitle } from "@Renderer/components/atoms/Card";
import { Switch } from "@Renderer/components/atoms/Switch";
import { Badge } from "@Renderer/components/atoms/Badge";
import { IconFlashlight, IconLeaf, IconInformation } from "@Renderer/components/atoms/icons";
import Heading from "@Renderer/components/atoms/Heading";
import { Slider } from "@Renderer/components/atoms/slider";
import { i18n } from "@Renderer/i18n";
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@Renderer/components/atoms/Tooltip";

// Import Types for wireless
import { EnergyManagementProps } from "@Renderer/types/wireless";

const Styles = Styled.div`
.card {
  height: inherit;
}
.battery-defy--indicator {
  display: flex;
  grid-gap: 8px;
  margin-bottom: 42px;
  position: relative;
  max-width: 202px;
}
.custom-switch {
  min-height: 36px;
}
.savingModedescription {
  margin-top: 24px;
  p {
    font-size: 0.75rem;
    font-weight: 401;
    letter-spacing: -0.01em;
    color: ${({ theme }) => theme.styles.batterySettings.descriptionColor};
    strong {
      font-weight: 401;
      color: ${({ theme }) => theme.styles.batterySettings.descriptionHighlightColor};
    }
  }
}
`;

function EnergyManagement(props: EnergyManagementProps) {
  const { wireless, changeWireless, updateTab } = props;

  const setTrueSleep = async (checked: boolean) => {
    const newWireless = { ...wireless };
    newWireless.true_sleep = checked;
    changeWireless(newWireless);
  };

  const setTrueSleepTime = async (value: number[]) => {
    const newWireless = { ...wireless };
    newWireless.true_sleep_time = value[0] * 60;
    changeWireless(newWireless);
  };

  const setApplicationTab = () => {
    // Call the onTabChange function from props with the desired value
    updateTab("LED");
  };

  return (
    <Styles>
      <Card className="mt-3 max-w-2xl mx-auto" variant="default">
        <CardHeader>
          <CardTitle>
            <IconLeaf /> {i18n.wireless.energyManagement.savingMode}
          </CardTitle>
        </CardHeader>
        <CardContent className="pt-0 pb-3">
          <SavingMode wireless={wireless} changeWireless={changeWireless} />
        </CardContent>
      </Card>
      <Card className="mt-3 max-w-2xl mx-auto" variant="default">
        <CardHeader>
          <CardTitle className="flex flex-row items-center justify-between">
            <div className="flex items-center gap-2">
              <IconFlashlight /> {i18n.wireless.energyManagement.settings.trueSleepEnabling}
            </div>
            <Badge content={i18n.wireless.energyManagement.settings.highBatteryImpact} variant="danger" size="sm" />
          </CardTitle>
        </CardHeader>
        <CardContent className="pb-3 pt-0">
          <div className="flex flex-col">
            <div className="flex items-center w-full justify-between py-2 border-b-[1px] border-gray-50 dark:border-gray-700">
              <Heading headingLevel={2} renderAs="paragraph-sm" className="flex flex-row gap-2 items-center">
                Enable true sleep mode
                <TooltipProvider delayDuration={100}>
                  <Tooltip>
                    <TooltipTrigger className="[&_svg]:text-purple-100 [&_svg]:dark:text-purple-200">
                      <IconInformation />
                    </TooltipTrigger>
                    <TooltipContent className="max-w-xs">
                      {i18n.wireless.energyManagement.settings.trueSleepEnablingDesc}
                    </TooltipContent>
                  </Tooltip>
                </TooltipProvider>
              </Heading>

              <Switch
                id="TrueSleepSwitch"
                checked={wireless.true_sleep}
                onCheckedChange={setTrueSleep}
                variant="default"
                size="sm"
              />
            </div>
            <div className={`flex flex-col pt-3 ${!wireless.true_sleep ? "opacity-50 pointer-events-none" : "opacity-100"}`}>
              <div className="block w-full relative">
                <Slider
                  min={0}
                  max={100}
                  step={1}
                  value={[Math.round(wireless.true_sleep_time / 60)]}
                  onValueChange={setTrueSleepTime}
                  className="slider-danger"
                  disabled={wireless.true_sleep === true}
                />
              </div>
              <div className="flex justify-between">
                <span className="text-xs text-gray-300 dark:text-gray-200">1 min</span>
                <span className="text-xs text-gray-300 dark:text-gray-200">240 min</span>
              </div>
            </div>
            <div className="mt-3 text-sm font-semibold tracking-tight text-gray-500 dark:text-gray-100">
              The timer will only begin when the LEDs turn off. Your LED off time is currently{" "}
              <button
                type="button"
                className="p-0 m-0 decoration-1 text-purple-300 hover:text-purple-300 dark:text-purple-200 dark:hover:text-purple-100 inline-block"
                value="Application"
                onClick={setApplicationTab}
              >
                {wireless.idleleds > 0 ? `set to ${wireless.idleleds / 60}min` : "deactivated"}
              </button>
            </div>
          </div>
        </CardContent>
      </Card>
    </Styles>
  );
}

export default EnergyManagement;
