import React, { useEffect, useState, useCallback, useMemo, FC } from "react";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectFixedValue } from "@Renderer/components/atoms/select";
import { KeymapDB } from "../../../../api/keymap";

interface SelectF13PlusKeysProps {
  keyCode: { base: number };
  onSelect: (value: number) => void;
  value: number;
  listElements: number[];
  content?: any;
  disabled?: boolean;
}

const SelectF13PlusKeys: FC<SelectF13PlusKeysProps> = ({ keyCode, onSelect, value, listElements, content, disabled = false }) => {
  const [load, setLoad] = useState(true);
  const keymapDB = useMemo(() => new KeymapDB(), []);

  const labelKey = useCallback(
    (id: number): string => {
      const aux = keymapDB.parse(id);
      return String(aux.label);
    },
    [keymapDB],
  );

  useEffect(() => {
    if (content !== undefined) {
      setLoad(false);
    }
  }, [content, value, keyCode]);

  if (load) return null;

  return (
    <div>
      <Select onValueChange={val => onSelect(parseInt(val, 10))} disabled={disabled}>
        <SelectTrigger
          variant="comboButton"
          size="sm"
          className={`w-full pr-[4px] ${
            keyCode.base > 0 && listElements.includes(keyCode.base)
              ? "!bg-configButtonActive dark:!bg-configButtonDarkActive bg-purple-200 dark:!bg-purple-300 !border-purple-200 dark:border-none text-white !shadow-buttonConfigLightActive !text-white [&_svg]:!text-white relative after:absolute after:top-[-4px] after:right-[-2px] after:w-[8px] after:h-[8px] after:rounded-full after:bg-primary/100"
              : ""
          } ${disabled ? "!pointer-events-none !opacity-50" : ""}`}
        >
          <SelectFixedValue label="F13+" />
        </SelectTrigger>
        <SelectContent>
          {listElements.map((item, index) => (
            // eslint-disable-next-line
            <SelectItem value={item.toString()} key={`f13Plus-${index}`}>
              {labelKey(item)}
            </SelectItem>
          ))}
        </SelectContent>
      </Select>
    </div>
  );
};

export default SelectF13PlusKeys;
