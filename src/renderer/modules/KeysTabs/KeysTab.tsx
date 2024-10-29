import React from "react";
import { KeyPickerReduced } from "@Renderer/modules/KeyPickerKeyboard";
import { LangOptions } from "../KeyPickerKeyboard/KeyPickerLanguage";

interface KeysTabProps {
  actTab: string;
  superkeyAction: number;
  selectedlanguage: LangOptions;
  onKeyPress: (key: number) => void;
}

const KeysTab: React.FC<KeysTabProps> = ({ actTab, superkeyAction, selectedlanguage, onKeyPress }) => (
  <div className="tabsKey flex flex-wrap h-full">
    <div className="tabContentWrapper w-full">
      <KeyPickerReduced
        onKeySelect={onKeyPress}
        code={{ base: 4, modified: 0 }}
        showSelected={false}
        disableMove={false}
        disableMods={!!((superkeyAction === 0 || superkeyAction === 3) && actTab === "disabled")}
        selectedlanguage={selectedlanguage}
        disableAll={false}
      />
    </div>
  </div>
);
export default KeysTab;
