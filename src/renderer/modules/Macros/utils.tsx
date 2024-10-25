/* eslint-disable no-bitwise */
import { MacroActionsType, MacroEAType, MacroModType, MacrosType, RowsRepresentation } from "@Renderer/types/macros";
import React from "react";

import { MdUnfoldLess, MdKeyboardArrowUp, MdKeyboardArrowDown, MdTimer } from "react-icons/md";
import { KeymapDB } from "../../../api/keymap";

const keymapDB = new KeymapDB();

export const modifiers: MacroModType[] = [
  { id: 0, name: "LEFT SHIFT", keyCode: 225, color: "#e1f3f7" },
  { id: 1, name: "RIGHT SHIFT", keyCode: 229, color: "#e1f3f7" },
  { id: 2, name: "LEFT CTRL", keyCode: 224, color: "#f5e4e4" },
  { id: 3, name: "RIGHT CTRL", keyCode: 228, color: "#f5e4e4" },
  { id: 4, name: "LEFT ALT", keyCode: 226, color: "#faf8e1" },
  { id: 5, name: "RIGHT ALT", keyCode: 230, color: "#f2e7f5" },
  { id: 6, name: "LEFT OS", keyCode: 227, color: "#e6f0e4" },
  { id: 7, name: "RIGHT OS", keyCode: 231, color: "#e6f0e4" },
];
export const actionTypes: MacroEAType[] = [
  {
    enum: "MACRO_ACTION_END",
    name: "End macro",
    icon: "",
    smallIcon: "",
  },
  {
    enum: "MACRO_ACTION_STEP_INTERVAL",
    name: "Delay",
    icon: <MdTimer fontSize="large" />,
    smallIcon: <MdTimer />,
  },
  {
    enum: "MACRO_ACTION_STEP_WAIT",
    name: "Delay",
    icon: <MdTimer fontSize="large" />,
    smallIcon: <MdTimer />,
  },
  {
    enum: "MACRO_ACTION_STEP_KEYDOWN",
    name: "Function Key Press",
    icon: <MdKeyboardArrowDown fontSize="large" />,
    smallIcon: <MdKeyboardArrowDown />,
  },
  {
    enum: "MACRO_ACTION_STEP_KEYUP",
    name: "Function Key Release",
    icon: <MdKeyboardArrowUp fontSize="large" />,
    smallIcon: <MdKeyboardArrowUp />,
  },
  {
    enum: "MACRO_ACTION_STEP_TAP",
    name: "Fn. Press & Release",
    icon: <MdUnfoldLess fontSize="large" />,
    smallIcon: <MdUnfoldLess />,
  },
  {
    enum: "MACRO_ACTION_STEP_KEYCODEDOWN",
    name: "Key Press",
    icon: <MdKeyboardArrowDown fontSize="large" />,
    smallIcon: <MdKeyboardArrowDown />,
  },
  {
    enum: "MACRO_ACTION_STEP_KEYCODEUP",
    name: "Key Release",
    icon: <MdKeyboardArrowUp fontSize="large" />,
    smallIcon: <MdKeyboardArrowUp />,
  },
  {
    enum: "MACRO_ACTION_STEP_TAPCODE",
    name: "Key Press & Rel.",
    icon: <MdUnfoldLess fontSize="large" />,
    smallIcon: <MdUnfoldLess />,
  },
  {
    enum: "MACRO_ACTION_STEP_EXPLICIT_REPORT",
    name: "Explicit Report",
    icon: <></>,
    smallIcon: <></>,
  },
  {
    enum: "MACRO_ACTION_STEP_IMPLICIT_REPORT",
    name: "Implicit Report",
    icon: <></>,
    smallIcon: <></>,
  },
  { enum: "MACRO_ACTION_STEP_SEND_REPORT", id: 11, name: "Send Report" },
  {
    enum: "MACRO_ACTION_STEP_TAP_SEQUENCE",
    name: "Intervaled Special Keys",
    icon: <></>,
    smallIcon: <></>,
  },
  {
    enum: "MACRO_ACTION_STEP_TAP_CODE_SEQUENCE",
    name: "Intervaled Key Press & Release",
    icon: <></>,
    smallIcon: <></>,
  },
];

export const assignColor = (keyCode: number) => {
  let result: string;

  const color: MacroModType = modifiers.find(x => x.keyCode === keyCode);
  if (color === undefined) {
    result = "#ededed";
  } else {
    result = color.color;
  }
  return result;
};

export const createConversion = (actions: MacroActionsType[], macros: MacrosType[]) => {
  const converted: RowsRepresentation[] = actions.map((action, i) => {
    const randID = new Date().getTime() + Math.floor(Math.random() * 1000);
    let km;
    let txt;
    switch (action.type) {
      case 1:
        return {
          symbol: `${(action.keyCode as Array<number>)[0]} - ${(action.keyCode as Array<number>)[1]}`,
          keyCode: action.keyCode,
          type: action.type,
          id: i,
          uid: randID,
          color: "#faf0e3",
          ucolor: "transparent",
        };
      case 2:
        return {
          symbol: String(action.keyCode as number),
          keyCode: action.keyCode,
          type: action.type,
          id: i,
          uid: randID,
          color: "#faf0e3",
          ucolor: "transparent",
        };
      case 3:
      case 4:
      case 5:
        km = keymapDB.parse(action.keyCode as number);
        if (km.extraLabel === "MACRO") {
          const mName = macros[km.keyCode - 53852].name;
          txt = `M. ${mName}`;
        } else if (React.isValidElement(km.label) || React.isValidElement(km.extraLabel)) {
          txt = km.extraLabel ? (
            <>
              {km.extraLabel} {km.label}
            </>
          ) : (
            km.label
          );
        } else {
          txt = `${km.extraLabel} ${km.label}`;
        }
        return {
          symbol: txt,
          keyCode: action.keyCode,
          type: action.type,
          id: i,
          uid: randID,
          color: assignColor(action.keyCode as number),
          ucolor: "transparent",
        };
      case 6:
      case 7:
      case 8:
        km = keymapDB.parse(action.keyCode as number);
        if (React.isValidElement(km.label) || React.isValidElement(km.extraLabel)) {
          txt = km.extraLabel ? (
            <>
              {km.extraLabel} {km.label}
            </>
          ) : (
            km.label
          );
        } else {
          txt = km.extraLabel ? `${km.extraLabel} ${km.label}` : km.label;
        }
        return {
          symbol: txt,
          keyCode: action.keyCode,
          type: action.type,
          id: i,
          uid: randID,
          color: assignColor(action.keyCode as number),
          ucolor: "transparent",
        };
      default:
        return undefined;
    }
  });
  return converted;
};

export const revertConversion = (actions: RowsRepresentation[]) => {
  const converted: MacroActionsType[] = actions.map(({ keyCode, type, id }) => ({
    keyCode,
    type,
    id,
  }));
  return converted;
};

export const addModToKey = (rows: any[], modID: number, modBit: number) => {
  const { name, keyCode, color } = modifiers[modID];
  const randID = new Date().getTime() + Math.floor(Math.random() * 1000);
  const randColor = `#${Math.floor(Math.abs(Math.sin(randID) * 16777215) % 16777215).toString(16)}`;
  const actions = rows;
  actions.splice(1, 0, {
    symbol: name,
    keyCode,
    type: 7,
    id: 2,
    color,
    uid: randID,
    ucolor: randColor,
  });
  actions.splice(0, 0, {
    symbol: name,
    keyCode,
    type: 6,
    id: 0,
    color,
    uid: randID,
    ucolor: randColor,
  });
  actions[1].keyCode ^= modBit;
  actions[1].symbol = keymapDB.parse(actions[1].keyCode).label;
  return actions;
};
