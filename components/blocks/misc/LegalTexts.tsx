import React from "react";

import {
  ScrollArea,
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger
} from "@elements/index";

import { cn } from "../../util";

type TabType = {
  title: string;
  content: string;
  value: string;
};

type LegalTextsType = {
  tabs: TabType[];
  activeTab?: any;
  handleTabChange?: any;
  direction?: any;
  defaultTab?: any;
  scrollAreaClassName?: string;
};

export const LegalTexts: React.FC<LegalTextsType> = ({ tabs, ...props }) => {
  return (
    <Tabs
      value={props.activeTab}
      onValueChange={props.handleTabChange}
      defaultValue={props.defaultTab || tabs[0].value}
      dir={props.direction}
    >
      <TabsList className="hawa-w-full">
        {tabs.map((tab, index) => (
          <TabsTrigger key={index} value={tab.value}>
            {tab.title}
          </TabsTrigger>
        ))}
      </TabsList>
      {tabs.map((tab, index) => (
        <TabsContent key={index} value={tab.value}>
          <ScrollArea
            className={cn(
              "hawa-rounded  hawa-border hawa-bg-muted hawa-p-4",
              props.scrollAreaClassName
            )}
          >
            {tab.content}
          </ScrollArea>
        </TabsContent>
      ))}
    </Tabs>
  );
};
