import React, { useState } from "react";
import { cn } from "../util";

type AppTabsType = {
  tabs: { label: string; icon?: React.ReactNode }[];
};

export const AppTabs: React.FC<AppTabsType> = ({ tabs, ...props }) => {
  const [selectedIndex, setSelectedIndex] = useState(0);

  return (
    <div className="hawa-bg-gray-100 hawa-w-full dark:hawa-bg-gray-900 hawa-p-6 hawa-pb-0 hawa-border-b ">
      <div className="hawa-flex hawa-flex-row hawa-justify-center ">
        {tabs.map((tab: any, index: number) => {
          const selected = index === selectedIndex;

          return (
            <AppSingleTab
              tab={tab}
              onClick={() => setSelectedIndex(index)}
              isSelected={selected}
            />
          );
        })}
      </div>
    </div>
  );
};

const AppSingleTab = (props: any) => {
  return (
    <div
      onClick={props.onClick}
      className={cn(
        "hawa-p-4 hawa-py-2 hawa-flex hawa-flex-row hawa-gap-2 hawa-translate-y-[1.1px] hawa-text-sm hawa-rounded-t hawa-transition-all hawa-select-none hawa-z-10 ",
        "hawa-border", // Always have a border but make it transparent
        props.isSelected
          ? "hawa-bg-background hawa-border hawa-border-b-transparent" // Use a background color for the bottom border
          : "dark:hover:hawa-bg-gray-700 hover:hawa-bg-gray-200 hawa-cursor-pointer  hawa-border-transparent"
      )}
    >
      {props.tab.icon && props.tab.icon}
      {props.tab.label}
    </div>
  );
};
