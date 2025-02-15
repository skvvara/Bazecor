import React, { useMemo, useCallback, useState } from "react";
import { withTheme, DefaultTheme } from "styled-components";
import { Popover, PopoverContent, PopoverTrigger } from "@Renderer/components/atoms/Popover";
import { i18n } from "@Renderer/i18n";
import {
  IconClone,
  IconThreeDots,
  IconPress,
  IconRelease,
  IconPressAndRelease,
  IconStopWatch,
  IconDragAndDrop,
  IconDelete,
  IconPen,
  IconCheckmark,
} from "@Renderer/components/atoms/icons";
import Heading from "@Renderer/components/atoms/Heading";
import { Button } from "@Renderer/components/atoms/Button";
import OSKey from "@Renderer/components/molecules/KeyTags/OSKey";
import { RowsRepresentation } from "@Renderer/types/macros";

interface Modifier {
  id: number;
  name: string;
}

interface ActionType {
  name: string;
}

interface KeyMacroProps {
  provided: any;
  snapshot: any;
  item: RowsRepresentation;
  modifiers: Modifier[];
  addModifier: (id: number, index: number) => void;
  actionTypes: Record<number, ActionType>;
  updateAction: (id: number, actionType: number) => void;
  onDeleteRow: (id: number) => void;
  onCloneRow: (id: number) => void;
  editDelay: (id: number, delay: number | number[]) => void;
  theme: DefaultTheme;
}

const KeyMacro: React.FC<KeyMacroProps> = ({
  provided,
  snapshot,
  item,
  modifiers,
  addModifier,
  actionTypes,
  updateAction,
  onDeleteRow,
  onCloneRow,
  editDelay,
  theme,
}) => {
  const getItemStyle = useCallback(
    (isDragging: boolean, draggableStyle: any) => ({
      ...draggableStyle,
      ...(isDragging && {
        backgroundColor: theme.styles.macroKey.backgroundColorDrag,
        backgroundImage: theme.styles.macroKey.backgroundDrag,
        backgroundSize: "56.57px 56.57px",
        borderRadius: "6px",
        boxShadow: theme.styles.macroKey.boxShadowOnDrag,
      }),
    }),
    [theme.styles.macroKey],
  );
  const isModifier = useMemo(() => (item.keyCode as number) > 223 && (item.keyCode as number) < 232 && item.type !== 2, [item]);
  const [delay, setDelay] = useState<number | number[]>(item.keyCode);
  const [enableEdit, setEnableEdit] = useState(false);

  const setDelayHandler = (value: string) => {
    const randomDelay = Array.isArray(item.keyCode);
    const allNumbers = randomDelay ? value.split("-").filter(v => v !== "").length === 2 : value !== "";

    if (allNumbers) {
      if (randomDelay) {
        const newDelay = value
          .trim()
          .split("-")
          .map(s => parseInt(s, 10));
        setDelay(newDelay);
      } else {
        setDelay(parseInt(value, 10));
      }
    } else {
      setDelay(randomDelay ? [0, 0] : 0);
    }
  };

  const finishDelayEdit = () => {
    editDelay(item.id, delay);
    setEnableEdit(false);
  };

  const visualKeycode = Array.isArray(item.keyCode) ? item.keyCode.join("-") : item.keyCode;

  return (
    <div>
      <div
        ref={provided.innerRef}
        {...provided.draggableProps} // eslint-disable-line
        {...provided.dragHandleProps} // eslint-disable-line
        style={getItemStyle(snapshot.isDragging, provided.draggableProps.style)}
      >
        <div
          className={`keyMacroWrapper relative flex flex-wrap flex-col p-0 !m-0 after:absolute after:content-[' '] after:w-full after:h-[1px] after:top-[71px] after:left-0 after:bg-white/80 after:dark:bg-[#2B2C43] keyCode-${item.keyCode} ${isModifier ? "isModifier" : ""} ${
            item.type === 1 || item.type === 2 ? "isDelay" : ""
          } item-id-${item.id}`}
        >
          <div className="keyMacro">
            <div className="headerDrag">
              <div className="dragable">
                <IconDragAndDrop />
              </div>
              <div className="moreOptions flex items-center gap-1 !m-0">
                <Button
                  variant="link"
                  size="icon"
                  onClick={() => onDeleteRow(item.id)}
                  className="trash-icon w-[24px] h-[24px] bg-tranparent hover:bg-white/20 transition-all"
                >
                  <IconDelete size="sm" strokeWidth={1.2} />
                </Button>
                <Popover>
                  <PopoverTrigger className="bg-tranparent hover:bg-white/20 transition-all rounded-md">
                    <IconThreeDots />
                  </PopoverTrigger>
                  <PopoverContent align="start">
                    <div className="keyMacroMiniDashboard rounded-regular overflow-hidden">
                      <div className="keyInfo pt-[16px] pb-[12px] pl-[12px] pr-[12px] bg-gray-50/70 dark:bg-gray-800">
                        <Heading
                          headingLevel={4}
                          renderAs="h4"
                          className="m-0 uppercase !text-ssm text-gray-300 dark:text-gray-500"
                        >
                          {item.type === 1 || item.type === 2 ? i18n.editor.macros.delay : i18n.general.key}
                        </Heading>
                        <div className="keyValue text-2xl">
                          {(item.type === 1 || item.type === 2) && enableEdit ? (
                            <input
                              id="changeDelay"
                              type="text"
                              value={Array.isArray(delay) ? `${delay[0]}-${delay[1]}` : `${delay}`}
                              onChange={event => setDelayHandler(event.target.value)}
                              className="form-input form-input-lg p-3 align-top"
                            />
                          ) : (
                            visualKeycode
                          )}
                          {(item.type === 1 || item.type === 2) && !enableEdit ? <small>ms</small> : ""}
                          {(item.type === 1 || item.type === 2) && !enableEdit ? (
                            <Button variant="ghost" onClick={() => setEnableEdit(true)}>
                              <IconPen />{" "}
                            </Button>
                          ) : (
                            ""
                          )}
                          {(item.type === 1 || item.type === 2) && enableEdit ? (
                            <Button variant="ghost" onClick={() => finishDelayEdit()} className="pl-3">
                              <IconCheckmark size="md" />{" "}
                            </Button>
                          ) : (
                            ""
                          )}
                        </div>
                      </div>
                      <div className="keyFunctions py-[12px] px-[12px] bg-gray-50/40 dark:bg-gray-800 border-t-[1px] border-gray-50 dark:border-gray-700">
                        <Heading
                          headingLevel={5}
                          renderAs="h5"
                          className="normal-case tracking-normal font-medium !text-ssm mb-[8px] text-gray-500 dark:text-gray-50"
                        >
                          Edit function
                        </Heading>
                        <div className="keyFunctionsButtons flex gap-1">
                          <Button
                            iconDirection="left"
                            variant="config"
                            icon={<IconPress size="sm" />}
                            selected={actionTypes[item.type].name === "Key Press"}
                            disabled={!!(item.type === 1 || item.type === 2)}
                            onClick={() => updateAction(item.id, 6)}
                            size="sm"
                          >
                            Press
                          </Button>
                          <Button
                            iconDirection="left"
                            variant="config"
                            icon={<IconRelease size="sm" />}
                            selected={actionTypes[item.type].name === "Key Release"}
                            disabled={!!(item.type === 1 || item.type === 2)}
                            onClick={() => updateAction(item.id, 7)}
                            size="sm"
                          >
                            Release
                          </Button>
                          <Button
                            iconDirection="left"
                            variant="config"
                            icon={<IconPressAndRelease size="sm" />}
                            selected={actionTypes[item.type].name === "Key Press & Rel."}
                            disabled={!!(item.type === 1 || item.type === 2)}
                            onClick={() => updateAction(item.id, 8)}
                            size="sm"
                          >
                            Press & Release
                          </Button>
                        </div>
                      </div>
                      <div className="keyModifiers py-[12px] px-[12px] bg-gray-25/40 dark:bg-gray-700">
                        <Heading
                          headingLevel={4}
                          renderAs="h4"
                          className="normal-case tracking-normal font-medium !text-ssm mb-[8px] text-gray-500 dark:text-gray-50"
                        >
                          Add modifier
                        </Heading>
                        <div className="keyModifiersButtons grid grid-cols-4 gap-1">
                          {modifiers.map((modifier, id) => (
                            <Button
                              variant="config"
                              size="sm"
                              className="w-full text-center"
                              onClick={() => addModifier(item.id, id)}
                              // eslint-disable-next-line
                              key={`addModifierMacro-${id}`}
                            >
                              {modifier.name === "LEFT SHIFT" ? <OSKey renderKey="shift" direction="Left" /> : ""}
                              {modifier.name === "RIGHT SHIFT" ? <OSKey renderKey="shift" direction="Right" /> : ""}
                              {modifier.name === "LEFT CTRL" ? <OSKey renderKey="control" direction="Left" /> : ""}
                              {modifier.name === "RIGHT CTRL" ? <OSKey renderKey="control" direction="Right" /> : ""}
                              {modifier.name === "LEFT OS" ? <OSKey renderKey="os" direction="Left" /> : ""}
                              {modifier.name === "RIGHT OS" ? <OSKey renderKey="os" direction="Right" /> : ""}
                              {modifier.name === "LEFT ALT" ? <OSKey renderKey="alt" direction="Left" /> : ""}
                              {modifier.name === "RIGHT ALT" ? <OSKey renderKey="altGr" /> : ""}
                            </Button>
                          ))}
                        </div>
                      </div>
                    </div>
                    <div className="keyMacroItemOptions flex flex-col gap-1 mt-1">
                      <Button
                        variant="dropdownLink"
                        icon={<IconClone />}
                        iconDirection="left"
                        size="sm"
                        onClick={() => onCloneRow(item.id)}
                        className="!justify-start"
                      >
                        Clone
                      </Button>
                      <Button
                        variant="dropdownLink"
                        iconDirection="left"
                        icon={<IconDelete />}
                        size="sm"
                        onClick={() => onDeleteRow(item.id)}
                        className="!justify-start"
                      >
                        Delete
                      </Button>
                    </div>
                  </PopoverContent>
                </Popover>
              </div>
            </div>
            <div className="bodyDrag">
              <p className="chip font-semibold pt-[6px] pr-0 pb-[6px] pl-[6px] bg-transparent text-ssm whitespace-nowrap text-ellipsis overflow-hidden m-0 w-[74px]">
                {item.symbol}
              </p>
              <div className="actionicon">
                {actionTypes[item.type].name === "Key Press" ? <IconPress size="sm" /> : ""}
                {actionTypes[item.type].name === "Key Release" ? <IconRelease size="sm" /> : ""}
                {actionTypes[item.type].name === "Key Press & Rel." ? <IconPressAndRelease size="sm" /> : ""}
                {actionTypes[item.type].name === "Delay" ? <IconStopWatch size="sm" /> : ""}
              </div>
            </div>
          </div>
          <div className="keyMacro keyMacroFreeSlot" />
        </div>
      </div>
    </div>
  );
};

export default withTheme(KeyMacro);
