/**
 * Is an Array of objects of values that have to be modified.
 *   ISO
 *   .------┬------┬------┬------┬------┬------┬------┬------┬------┬------┬------┬------┬------┬--------.
 *   |  53  |  30  |  31  |  32  |  33  |  34€ |  35  |  36  |  37  |  38  |  39  |  45  |  46  |   42   |
 *   |------┴-┬----┴-┬----┴-┬----┴-┬----┴-┬----┴-┬----┴-┬----┴-┬----┴-┬----┴-┬----┴-┬----┴-┬----┴-┬------|
 *   |  43    |  20  |  26  |  8 € |  21  |  23  |  28  |  24  |  12  |  18  |  19  |  47  |  48  |  40  |
 *   |--------┴-┬----┴-┬----┴-┬----┴-┬----┴-┬----┴-┬----┴-┬----┴-┬----┴-┬----┴-┬----┴-┬----┴-┬----┴-┐    |
 *   |   57     |  4   |  22  |  7   |  9   |  10  |  11  |  13  |  14  |  15  |  51@ |  52# |  49  |    |
 *   |-------┬--┴---┬--┴---┬--┴---┬--┴---┬--┴---┬--┴---┬--┴---┬--┴---┬--┴---┬--┴---┬--┴---┬--┴------┴----|
 *   |  225  |  100 |  29  |  27  |  6   |  25  |  5   |  17  |  16  |  54  |  55  |  56  |     229      |
 *   |-------+------┴┬-----┴-┬----┴------┴------┴------┴------┴------┴---┬--┴----┬-┴-----┬┴------┬-------|
 *   |  224  |  227  |  226  |                     44                    |  230  |  231  |  101  |  228  |
 *   '-------┴-------┴-------┴-------------------------------------------┴-------┴-------┴-------┴-------'
 *
 */

import { withModifiers, ModifierCodes } from "../../db/utils";
import { BaseKeycodeTableType, KeymapCodeTableType } from "../../types";

const itXXiso105Letters: KeymapCodeTableType[] = [];

const itXXiso105ModifierKeys: KeymapCodeTableType[] = [
  // R4
  {
    code: 53,
    labels: {
      primary: "\\",
    },
  },
  {
    code: 45,
    labels: {
      primary: "'",
    },
  },
  {
    code: 46,
    labels: {
      primary: "ì",
    },
  },
  // R3
  {
    code: 47,
    labels: {
      primary: "è",
    },
  },
  {
    code: 48,
    labels: {
      primary: "+",
    },
  },
  // R2
  {
    code: 49,
    labels: {
      primary: "ù",
    },
  },
  {
    code: 51,
    labels: {
      primary: "ò",
    },
  },
  {
    code: 52,
    labels: {
      primary: "à",
    },
  },
  // R1
  {
    code: 100,
    labels: {
      primary: "<",
    },
  },
  {
    code: 54,
    labels: {
      primary: ",",
    },
  },
  {
    code: 55,
    labels: {
      primary: ".",
    },
  },
  {
    code: 56,
    labels: {
      primary: "-",
    },
  },
];

const shiftModifier: BaseKeycodeTableType = {
  groupName: "Shifted Italian ISO105",
  keys: [
    // R4
    {
      code: ModifierCodes.SHIFT + 53,
      labels: {
        primary: "|",
      },
      alt: true,
    },
    {
      code: ModifierCodes.SHIFT + 31,
      labels: {
        primary: '"',
      },
      alt: true,
    },
    {
      code: ModifierCodes.SHIFT + 32,
      labels: {
        primary: "£",
      },
      alt: true,
    },
    {
      code: ModifierCodes.SHIFT + 35,
      labels: {
        primary: "&",
      },
      alt: true,
    },
    {
      code: ModifierCodes.SHIFT + 36,
      labels: {
        primary: "/",
      },
      alt: true,
    },
    {
      code: ModifierCodes.SHIFT + 37,
      labels: {
        primary: "(",
      },
      alt: true,
    },
    {
      code: ModifierCodes.SHIFT + 38,
      labels: {
        primary: ")",
      },
      alt: true,
    },
    {
      code: ModifierCodes.SHIFT + 39,
      labels: {
        primary: "=",
      },
      alt: true,
    },
    {
      code: ModifierCodes.SHIFT + 45,
      labels: {
        primary: "?",
      },
      alt: true,
    },
    {
      code: ModifierCodes.SHIFT + 46,
      labels: {
        primary: "^",
      },
      alt: true,
    },
    // R3
    {
      code: ModifierCodes.SHIFT + 47,
      labels: {
        primary: "é",
      },
      alt: true,
    },
    {
      code: ModifierCodes.SHIFT + 48,
      labels: {
        primary: "*",
      },
      alt: true,
    },
    // R2
    {
      code: ModifierCodes.SHIFT + 49,
      labels: {
        primary: "§",
      },
      alt: true,
    },
    {
      code: ModifierCodes.SHIFT + 51,
      labels: {
        primary: "ç",
      },
      alt: true,
    },
    {
      code: ModifierCodes.SHIFT + 52,
      labels: {
        primary: "°",
      },
      alt: true,
    },
    // R1
    {
      code: ModifierCodes.SHIFT + 100,
      labels: {
        primary: ">",
      },
      alt: true,
    },
    {
      code: ModifierCodes.SHIFT + 54,
      labels: {
        primary: ";",
      },
      alt: true,
    },
    {
      code: ModifierCodes.SHIFT + 55,
      labels: {
        primary: ":",
      },
      alt: true,
    },
    {
      code: ModifierCodes.SHIFT + 56,
      labels: {
        primary: "_",
      },
      alt: true,
    },
  ],
};

const altCtrlModifier: BaseKeycodeTableType = {
  groupName: "AltCtrl Italian ISO105",
  keys: [
    // R4
    {
      code: ModifierCodes.CONTROL_ALT + 34,
      labels: {
        primary: "€",
      },
      alt: true,
    },
    // R3
    {
      code: ModifierCodes.CONTROL_ALT + 8,
      labels: {
        primary: "€",
      },
      alt: true,
    },
    {
      code: ModifierCodes.CONTROL_ALT + 47,
      labels: {
        primary: "[",
      },
      alt: true,
    },
    {
      code: ModifierCodes.CONTROL_ALT + 48,
      labels: {
        primary: "]",
      },
      alt: true,
    },
    // R2
    {
      code: ModifierCodes.CONTROL_ALT + 51,
      labels: {
        primary: "@",
      },
      alt: true,
    },
    {
      code: ModifierCodes.CONTROL_ALT + 52,
      labels: {
        primary: "#",
      },
      alt: true,
    },
  ],
};

const altGrModifier: BaseKeycodeTableType = {
  groupName: "AltGr Italian ISO105",
  keys: [
    // R4
    {
      code: ModifierCodes.ALTGR + 34,
      labels: {
        primary: "€",
      },
      alt: true,
    },
    // R3
    {
      code: ModifierCodes.ALTGR + 8,
      labels: {
        primary: "€",
      },
      alt: true,
    },
    {
      code: ModifierCodes.ALTGR + 47,
      labels: {
        primary: "[",
      },
      alt: true,
    },
    {
      code: ModifierCodes.ALTGR + 48,
      labels: {
        primary: "]",
      },
      alt: true,
    },
    // R2
    {
      code: ModifierCodes.ALTGR + 51,
      labels: {
        primary: "@",
      },
      alt: true,
    },
    {
      code: ModifierCodes.ALTGR + 52,
      labels: {
        primary: "#",
      },
      alt: true,
    },
  ],
};

const altGrShiftModifier: BaseKeycodeTableType = {
  groupName: "AltGrShift Italian ISO105",
  keys: [
    // R3
    {
      code: ModifierCodes.ALTGR_SHIFT + 47,
      labels: {
        primary: "{",
      },
      alt: true,
    },
    {
      code: ModifierCodes.ALTGR_SHIFT + 48,
      labels: {
        primary: "}",
      },
      alt: true,
    },
  ],
};

const itXXiso105 = itXXiso105Letters.concat(itXXiso105ModifierKeys);

const table: BaseKeycodeTableType = { keys: itXXiso105, groupName: "" };
const tableWithoutModifier: BaseKeycodeTableType = { keys: itXXiso105Letters, groupName: "" };

const itXXiso105CtrlTable = withModifiers(table, "Control +", "C+", 256);
const itXXiso105LAltTable = withModifiers(table, "Alt +", "A+", 512);
const itXXiso105RAltTable = withModifiers(table, "AltGr +", "AGr+", 1024);
const itXXiso105ShiftTable = withModifiers(tableWithoutModifier, "Shift +", "S+", 2048);
const itXXiso105GuiTable = withModifiers(table, "Os+", "O+", 4096);

// Double

const itXXiso105CATable = withModifiers(table, "Control + Alt +", "C+A+", 768);
const itXXiso105CAGrTable = withModifiers(table, "Control + AltGr +", "C+AGr+", 1280);
const itXXiso105CSTable = withModifiers(table, "Control + Shift +", "C+S+", 2304);
const itXXiso105CGTable = withModifiers(table, "Control + Os +", "C+O+", 4352);
const itXXiso105AAGrTable = withModifiers(table, "Alt + AltGr +", "A+AGr+", 1536);
const itXXiso105ASTable = withModifiers(table, "Alt + Shift +", "A+S+", 2560);
const itXXiso105AGTable = withModifiers(table, "Alt + Os +", "A+O+", 4608);
const itXXiso105AGrSTable = withModifiers(altGrShiftModifier, "AltGr + Shift +", "AGr+S+", 3072);
const itXXiso105AGrGTable = withModifiers(table, "AltGr + Os +", "AGr+O+", 5120);
const itXXiso105SGTable = withModifiers(table, "Shift + Os +", "S+O+", 6144);

// Triple

const itXXiso105CAAGTable = withModifiers(table, "Control + Alt + AltGr +", "C+A+AGr+", 1792);
const itXXiso105CASTable = withModifiers(table, "Meh +", "Meh+", 2816);
const itXXiso105CAGTable = withModifiers(table, "Control + Alt + Os +", "C+A+O+", 4864);
const itXXiso105CAGSTable = withModifiers(table, "Control + AltGr + Shift +", "C+AGr+S+", 3328);
const itXXiso105CAGGTable = withModifiers(table, "Control + AltGr + Os +", "C+AGr+O+", 5376);
const itXXiso105CSGTable = withModifiers(table, "Control + Shift + Os +", "C+S+O+", 6400);
const itXXiso105AAGSTable = withModifiers(table, "Alt + AltGr + Shift +", "A+AGr+S+", 3584);
const itXXiso105AAGGTable = withModifiers(table, "Alt + AltGr + Os +", "A+AGr+O+", 5632);
const itXXiso105ASGTable = withModifiers(table, "Alt + Shift + Os +", "A+S+O+", 6656);
const itXXiso105AGSGTable = withModifiers(table, "AltGr + Shift + Os +", "AGr+S+O+", 7168);

// Quad

const itXXiso105CAAGrSTable = withModifiers(table, "Meh + AltGr +", "M+AGr+", 3840);
const itXXiso105CAAGrGTable = withModifiers(table, "Control + Alt + AltGr + Os +", "C+A+AGr+O+", 5888);
const itXXiso105CAGrSGTable = withModifiers(table, "Control + AltGr + Shift + Os +", "C+AGr+S+O+", 7424);
const itXXiso105AAGrSGTable = withModifiers(table, "Alt + AltGr + Shift + Os +", "A+AGr+S+O+", 7680);
const itXXiso105AllModTable = withModifiers(table, "Hyper + AltGr +", "H+AGr+", 7936);

const DualUseCtrlTable = withModifiers(table, "Control /", "CTRL/", 49169);
const DualUseShiftTable = withModifiers(table, "Shift /", "SHIFT/", 49425);
const DualUseAltTable = withModifiers(table, "Alt /", "ALT/", 49681);
const DualUseGuiTable = withModifiers(table, "Os /", "OS/", 49937);
const DualUseAltGrTable = withModifiers(table, "AltGr /", "ALTGR/", 50705);
const DualUseLayer1Tables = withModifiers(table, "Layer #1 /", "L#1/", 51218);
const DualUseLayer2Tables = withModifiers(table, "Layer #2 /", "L#2/", 51474);
const DualUseLayer3Tables = withModifiers(table, "Layer #3 /", "L#3/", 51730);
const DualUseLayer4Tables = withModifiers(table, "Layer #4 /", "L#4/", 51986);
const DualUseLayer5Tables = withModifiers(table, "Layer #5 /", "L#5/", 52242);
const DualUseLayer6Tables = withModifiers(table, "Layer #6 /", "L#6/", 52498);
const DualUseLayer7Tables = withModifiers(table, "Layer #7 /", "L#7/", 52754);
const DualUseLayer8Tables = withModifiers(table, "Layer #8 /", "L#8/", 53010);

const itXXiso105ModifiedTables = [
  shiftModifier,
  itXXiso105CtrlTable,
  itXXiso105LAltTable,
  itXXiso105RAltTable,
  itXXiso105ShiftTable,
  itXXiso105GuiTable,
  itXXiso105CATable,
  altCtrlModifier,
  altGrModifier,
  altGrShiftModifier,
  itXXiso105CAGrTable,
  itXXiso105CSTable,
  itXXiso105CGTable,
  itXXiso105AAGrTable,
  itXXiso105ASTable,
  itXXiso105AGTable,
  itXXiso105AGrSTable,
  itXXiso105AGrGTable,
  itXXiso105SGTable,
  itXXiso105CAAGTable,
  itXXiso105CASTable,
  itXXiso105CAGTable,
  itXXiso105CAGSTable,
  itXXiso105CAGGTable,
  itXXiso105CSGTable,
  itXXiso105AAGSTable,
  itXXiso105AAGGTable,
  itXXiso105ASGTable,
  itXXiso105AGSGTable,
  itXXiso105CAAGrSTable,
  itXXiso105CAAGrGTable,
  withModifiers(table, "Hyper +", "Hyper+", 6912),
  itXXiso105CAGrSGTable,
  itXXiso105AAGrSGTable,
  itXXiso105AllModTable,
  DualUseCtrlTable,
  DualUseShiftTable,
  DualUseAltTable,
  DualUseGuiTable,
  DualUseAltGrTable,
  DualUseLayer1Tables,
  DualUseLayer2Tables,
  DualUseLayer3Tables,
  DualUseLayer4Tables,
  DualUseLayer5Tables,
  DualUseLayer6Tables,
  DualUseLayer7Tables,
  DualUseLayer8Tables,
];

export { itXXiso105, itXXiso105ModifiedTables };
