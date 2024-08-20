import React, { useState } from "react";

import { cn } from "@util/index";

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
  className?: string;
  tabs: SingleAppTab[];
};

export const AppTabs: React.FC<AppTabsType> = ({ tabs, className }) => {
  const [selectedIndex, setSelectedIndex] = useState(0);

  return (
    <div className={cn("hawa-w-full hawa-border-b hawa-bg-card hawa-p-6 hawa-pb-0", className)}>
      <div className="hawa-flex hawa-flex-row hawa-justify-center">
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
              className={cn(
                "hawa-z-10 hawa-flex hawa-items-center hawa-translate-y-[1.1px] hawa-select-none hawa-flex-row hawa-gap-2 hawa-rounded-t hawa-p-4 hawa-py-2 hawa-text-sm hawa-transition-all",
                "hawa-border", // Always have a border but make it transparent
                selected
                  ? "hawa-border hawa-border-b-transparent hawa-bg-background" // Use a background color for the bottom border
                  : "hawa-cursor-pointer hawa-border-transparent hover:hawa-bg-card-foreground/5",
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
