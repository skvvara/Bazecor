// -*- mode: js-jsx -*-
/* Bazecor
 * Copyright (C) 2024  Dygmalab, Inc.
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

import React, { useState } from "react";
import { i18n } from "@Renderer/i18n";

import NameModal from "@Renderer/components/molecules/CustomModal/ModalName";

import { IconDelete, IconPen, IconClone, IconAddNew } from "@Renderer/components/atoms/icons";

import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@Renderer/components/atoms/Select";
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@Renderer/components/atoms/Tooltip";
import { Button } from "@Renderer/components/atoms/Button";

interface ItemList {
  id: number;
  name: string;
}

const SuperkeysSelector: React.FC<any> = ({
  onSelect,
  itemList,
  selectedItem,
  deleteItem,
  addItem,
  updateItem,
  cloneItem,
  subtitle,
}) => {
  const [show, setShow] = useState(false);
  const toggleShow = () => setShow(!show);
  const [showAdd, setShowAdd] = useState(false);
  const toggleShowAdd = () => setShowAdd(!showAdd);

  const handleSave = (data: string) => {
    toggleShow();
    updateItem(data);
  };

  const handleAdd = (data: string) => {
    toggleShowAdd();
    addItem(data);
  };

  return (
    <div className="flex items-center gap-1">
      <div className="itemListelector dropdownMultipleActions max-w-[350px] min-w-[350px]">
        <Select onValueChange={value => onSelect(parseInt(value, 10))} value={selectedItem}>
          <SelectTrigger variant="combo" className="pr-[136px]">
            {/* dropdownListInner */}
            <div className="flex flex-nowrap items-center">
              {/* dropdownListNumber */}
              <div className="relative self-center w-[34px] text-center pr-[8px] text-[13px] font-semibold tracking-tight text-gray-500 dark:text-gray-200 after:content-[' '] after:absolute after:flex after:w-[1px] after:h-[30px] after:right-0 after:top-1/2 after:transform-style-3d after:translate-y-[-50%] after:bg-gray-200/50 dark:after:bg-gray-500/50">
                {itemList.length === 0 ? "#0" : `#${parseInt(selectedItem, 10) + 1}`}
              </div>
              {/* dropdownListItem style={{ width: "calc(100% - 42px)" }} */}
              <div className="flex flex-wrap pl-[12px] leading-[1.25em] text-left">
                {/* dropdownListItemInner */}
                <div className="relative w-full leading-[1em]">
                  {/* dropdownListItemLabel */}
                  <div className="tracking-tight text-[11px] text-gray-200 dark:text-gray-200">{subtitle}</div>
                  {/* dropdownListItemSelected */}
                  <div className="max-w-[200px] whitespace-nowrap overflow-hidden text-ellipsis text-[13px] text-gray-600 dark:text-gray-100 [&_em]:hidden">
                    <SelectValue placeholder="Theme" />
                  </div>
                  {/* <span className="caret right-4 text-gray-300 dark:text-gray-300">
                    <IconArrowsSmallSeparating />
                  </span> */}
                </div>
              </div>
            </div>
          </SelectTrigger>
          <SelectContent>
            {itemList.map((item: ItemList, i: string) => (
              <SelectItem key={`item-macro-id-${item.id}`} value={i}>
                <em className="itemIndex inline-block w-7 mr-1 text-right not-italic">#{i + 1}.</em>
                {item.name === "" ? i18n.general.noname : item.name}
              </SelectItem>
            ))}
          </SelectContent>
        </Select>
        <div className="absolute top-[2px] right-[2px] flex gap-0.5">
          <TooltipProvider delayDuration={50}>
            <Tooltip>
              <TooltipTrigger asChild>
                <div>
                  <Button variant="config" size="icon" onClick={toggleShow}>
                    <IconPen />
                  </Button>
                </div>
              </TooltipTrigger>
              <TooltipContent className="max-w-xs" side="bottom" size="sm">
                {i18n.app.menu.changeName}
              </TooltipContent>
            </Tooltip>
          </TooltipProvider>

          <TooltipProvider delayDuration={50}>
            <Tooltip>
              <TooltipTrigger asChild>
                <div>
                  <Button variant="config" size="icon" onClick={cloneItem}>
                    <IconClone />
                  </Button>
                </div>
              </TooltipTrigger>
              <TooltipContent className="max-w-xs" side="bottom" size="sm">
                {i18n.general.clone}
              </TooltipContent>
            </Tooltip>
          </TooltipProvider>

          <TooltipProvider delayDuration={50}>
            <Tooltip>
              <TooltipTrigger asChild>
                <div>
                  <Button variant="config" size="icon" onClick={deleteItem}>
                    <IconDelete />
                  </Button>
                </div>
              </TooltipTrigger>
              <TooltipContent className="max-w-xs" side="bottom" size="sm">
                {i18n.general.delete}
              </TooltipContent>
            </Tooltip>
          </TooltipProvider>
        </div>
      </div>
      <TooltipProvider delayDuration={50}>
        <Tooltip>
          <TooltipTrigger asChild>
            <div>
              <Button variant="secondary" size="icon" onClick={toggleShowAdd}>
                <IconAddNew />
              </Button>
            </div>
          </TooltipTrigger>
          <TooltipContent className="max-w-xs" side="bottom" size="sm">
            {i18n.general.new} superkey
          </TooltipContent>
        </Tooltip>
      </TooltipProvider>

      {itemList === undefined || itemList.length === 0 || itemList.length <= selectedItem ? (
        ""
      ) : (
        <NameModal
          show={show}
          name={itemList[selectedItem]?.name}
          toggleShow={toggleShow}
          handleSave={handleSave}
          modalTitle={i18n.editor.superkeys.createModal.createNew}
          labelInput={i18n.editor.superkeys.createModal.inputLabel}
        />
      )}
      <NameModal
        show={showAdd}
        name=""
        toggleShow={toggleShowAdd}
        handleSave={handleAdd}
        modalTitle={i18n.editor.superkeys.createModal.createNew}
        labelInput={i18n.editor.superkeys.createModal.inputLabel}
      />
    </div>
  );
};

export default SuperkeysSelector;
