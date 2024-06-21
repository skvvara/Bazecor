import React from "react";
import Styled from "styled-components";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@Renderer/components/atoms/Accordion";
import IconCheckmarkSm from "@Assets/base/icon-checkmark-green.svg";
import { i18n } from "@Renderer/i18n";

const Style = Styled.div`
.card-header:hover {
  cursor: pointer;
}
h5 {
  color: ${({ theme }) => theme.colors.gray400};
  font-size: 14px;
  margin-bottom: 32px;
  text-transform: none;
  letter-spacing: -0.03em;
}
.gridSuperKeys {
    display: grid;
    grid-template-columns: repeat(5, 1fr);
    grid-gap: 32px;
}
.gridSuperKeysItem {
    padding: 14px 16px;
    border-radius: 3px;
    background-color: ${({ theme }) => theme.styles.collpase.gridItemBackground};
    h6 {
        text-transform: uppercase;
        letter-spacing: 0.04em;
        font-size: 11px;
        color: ${({ theme }) => theme.styles.collpase.gridItemTitle};
        font-weight: 700;
    }
    ul {
        padding-left: 26px;
        list-style: none;
        line-height: 1.45em;
        margin-bottom: 0;
        color:  ${({ theme }) => theme.styles.collpase.gridItemBody};
    }
    li {
        font-size: 11px;
        font-weight: 600;
        position: relative;
        &:before {
            content: '';
            width: 8px;
            height:1px;
            position:absolute;
            left: -24px;
            top: 50%;
            transform: translate3d(0,-50%,0);
            background-color:  ${({ theme }) => theme.styles.collpase.gridItemCaret};
        }
    }
    li.active {
        color: ${({ theme }) => theme.colors.brandSuccess};
        &:before {
            width: 16px;
            height:16px;
            left: -26px;
            background-color: transparent;
            background-image: url(${IconCheckmarkSm});
        }
    }
}
`;

function SuperKeysFeatures() {
  return (
    <Style>
      <Accordion type="single" collapsible className="w-full rounded bg-gray-25/80 dark:bg-gray-600 mt-3">
        <AccordionItem value="item-1" className="border-0">
          <AccordionTrigger className="flex justify-between items-center py-3 px-3 mt-0 mb-[-1px] rounded-none text-purple-200 dark:text-gray-25 border-b border-solid border-gray-50 dark:border-gray-600">
            <strong className="text-xs tracking-tight font-semibold">{i18n.editor.superkeys.collapse.title}</strong>
          </AccordionTrigger>
          <AccordionContent className="px-3 py-3 bg-transparent border-0">
            <div className="versionContent">
              <div className="gridSuperKeys">
                <div className="gridSuperKeysItem">
                  <h6>Tap</h6>
                  <ul>
                    <li className="active">Keys</li>
                    <li>Modifiers</li>
                    <li className="active">Macros</li>
                    <li className="active">Media & LED</li>
                    <li className="active">Mouse</li>
                    <li className="active">Layer Lock</li>
                    <li>Layer Shift</li>
                    <li>Dual-function</li>
                    <li>OneShot</li>
                    <li>Superkeys</li>
                  </ul>
                </div>
                <div className="gridSuperKeysItem">
                  <h6>Hold</h6>
                  <ul>
                    <li className="active">Keys</li>
                    <li className="active">Modifiers</li>
                    <li className="active">Macros</li>
                    <li className="active">Media & LED</li>
                    <li className="active">Mouse</li>
                    <li className="active">Layer Lock</li>
                    <li className="active">Layer Shift</li>
                    <li>Dual-function</li>
                    <li>OneShot</li>
                    <li>Superkeys</li>
                  </ul>
                </div>
                <div className="gridSuperKeysItem">
                  <h6>Tap & Hold</h6>
                  <ul>
                    <li className="active">Keys</li>
                    <li className="active">Modifiers</li>
                    <li className="active">Macros</li>
                    <li className="active">Media & LED</li>
                    <li className="active">Mouse</li>
                    <li className="active">Layer Lock</li>
                    <li className="active">Layer Shift</li>
                    <li>Dual-function</li>
                    <li>OneShot</li>
                    <li>Superkeys</li>
                  </ul>
                </div>
                <div className="gridSuperKeysItem">
                  <h6>2Tap</h6>
                  <ul>
                    <li className="active">Keys</li>
                    <li>Modifiers</li>
                    <li className="active">Macros</li>
                    <li className="active">Media & LED</li>
                    <li className="active">Mouse</li>
                    <li className="active">Layer Lock</li>
                    <li>Layer Shift</li>
                    <li>Dual-function</li>
                    <li>OneShot</li>
                    <li>Superkeys</li>
                  </ul>
                </div>
                <div className="gridSuperKeysItem">
                  <h6>2Tap & Hold</h6>
                  <ul>
                    <li className="active">Keys</li>
                    <li className="active">Modifiers</li>
                    <li className="active">Macros</li>
                    <li className="active">Media & LED</li>
                    <li className="active">Mouse</li>
                    <li className="active">Layer Lock</li>
                    <li className="active">Layer Shift</li>
                    <li>Dual-function</li>
                    <li>OneShot</li>
                    <li>Superkeys</li>
                  </ul>
                </div>
              </div>
            </div>
          </AccordionContent>
        </AccordionItem>
      </Accordion>
    </Style>
  );
}

export default SuperKeysFeatures;
