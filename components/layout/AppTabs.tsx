import React, { useState } from "react";

import { cn } from "../util";

type SingleAppTab = {
  label: string;
  value?: string;
  icon?: React.ReactNode;
  path?: string;
  action?: any;
  onMouseDown?: any;
  onClick?: any;
};
type AppTabsType = {
  tabs: SingleAppTab[];
};

export const AppTabs: React.FC<AppTabsType> = ({ tabs, ...props }) => {
  const [selectedIndex, setSelectedIndex] = useState(0);

  return (
    <div className="hawa-w-full hawa-border-b hawa-bg-gray-100 hawa-p-6 hawa-pb-0 dark:hawa-bg-gray-900 ">
      <div className="hawa-flex hawa-flex-row hawa-justify-center ">
        {tabs.map((tab: SingleAppTab, index: number) => {
          const selected = index === selectedIndex;

          return (
            <a
              href={tab.path}
              key={index}
              onMouseDown={(e) => {
                if (tab.onMouseDown) {
                  tab.onMouseDown(e);
                }
              }}
              onClick={(e) => {
                if (tab.onClick) {
                  tab.onClick(e);
                }
                setSelectedIndex(index);
              }}
              // onClick={() => {
              //   if (tab.action) {
              //     tab.action();
              //   }
              //   setSelectedIndex(index);
              // }}
              className={cn(
                "hawa-z-10 hawa-flex hawa-translate-y-[1.1px] hawa-select-none hawa-flex-row hawa-gap-2 hawa-rounded-t hawa-p-4 hawa-py-2 hawa-text-sm hawa-transition-all ",
                "hawa-border", // Always have a border but make it transparent
                selected
                  ? "hawa-border hawa-border-b-transparent hawa-bg-background" // Use a background color for the bottom border
                  : "hawa-cursor-pointer hawa-border-transparent hover:hawa-bg-gray-200  dark:hover:hawa-bg-gray-700"
              )}
            >
              {tab.icon && tab.icon}
              {tab.label}
            </a>
          );
        })}
      </div>
    </div>
  );
};

const AppSingleTab = ({ tab, ...props }: any) => {
  return (
    <a
      href={props.href}
      key={props.key}
      onClick={props.onClick}
      className={cn(
        "hawa-z-10 hawa-flex hawa-translate-y-[1.1px] hawa-select-none hawa-flex-row hawa-gap-2 hawa-rounded-t hawa-p-4 hawa-py-2 hawa-text-sm hawa-transition-all ",
        "hawa-border", // Always have a border but make it transparent
        props.isSelected
          ? "hawa-border hawa-border-b-transparent hawa-bg-background" // Use a background color for the bottom border
          : "hawa-cursor-pointer hawa-border-transparent hover:hawa-bg-gray-200  dark:hover:hawa-bg-gray-700"
      )}
    >
      {tab.icon && tab.icon}
      {tab.label}
    </a>
  );
};
