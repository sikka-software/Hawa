import * as React from "react";

import * as TabsPrimitive from "@radix-ui/react-tabs";

import { OrientationType } from "@/types/commonTypes";

import { cn } from "../../util";
import { Chip, ChipTypes } from "../chip/Chip";

const TabsContext = React.createContext<{
  orientation?: OrientationType;
}>({ orientation: "vertical" });

type TabsRootProps = React.ComponentPropsWithoutRef<
  typeof TabsPrimitive.Root
> & { orientation?: OrientationType };

const Tabs = React.forwardRef<
  React.ElementRef<typeof TabsPrimitive.Root>,
  TabsRootProps
>(({ className, orientation, ...props }, ref) => (
  <TabsPrimitive.Root
    ref={ref}
    className={cn(
      "hawa-flex hawa-gap-2",
      orientation === "vertical" ? "hawa-flex-row" : "hawa-flex-col",
      className
    )}
    {...props}
  >
    <TabsContext.Provider value={{ orientation }}>
      {props.children}
    </TabsContext.Provider>
  </TabsPrimitive.Root>
));
Tabs.displayName = TabsPrimitive.Root.displayName;

const TabsList = React.forwardRef<
  React.ElementRef<typeof TabsPrimitive.List>,
  React.ComponentPropsWithoutRef<typeof TabsPrimitive.List>
>(({ className, ...props }, ref) => {
  const { orientation } = React.useContext(TabsContext);
  return (
    <TabsPrimitive.List
      ref={ref}
      className={cn(
        "hawa-flex hawa-w-fit hawa-flex-wrap hawa-items-center hawa-justify-start hawa-gap-1 hawa-rounded hawa-border hawa-bg-muted hawa-p-1 hawa-text-muted-foreground  dark:hawa-border-primary/10",
        orientation === "vertical" ? "hawa-flex-col" : "hawa-flex-row",
        className
      )}
      {...props}
    />
  );
});
TabsList.displayName = TabsPrimitive.List.displayName;

type TabsTriggerProps = React.ComponentPropsWithoutRef<
  typeof TabsPrimitive.Trigger
> & {
  chipProps?: ChipTypes;
  className?: string;
};

const TabsTrigger = React.forwardRef<
  React.ElementRef<typeof TabsPrimitive.Trigger>,
  TabsTriggerProps
>(({ className, chipProps, ...props }, ref) => {
  return (
    <TabsPrimitive.Trigger
      ref={ref}
      className={cn(
        "hawa-inline-flex hawa-w-full hawa-flex-1 hawa-select-none hawa-items-center hawa-justify-center hawa-gap-2 hawa-whitespace-nowrap hawa-rounded hawa-border hawa-px-3 hawa-py-1.5 hawa-text-sm hawa-font-medium hawa-ring-offset-background hawa-transition-all focus-visible:hawa-outline-none focus-visible:hawa-ring-2 focus-visible:hawa-ring-ring focus-visible:hawa-ring-offset-2 disabled:hawa-pointer-events-none disabled:hawa-opacity-50 data-[state=active]:hawa-bg-primary data-[state=active]:hawa-text-primary-foreground data-[state=active]:hawa-shadow-sm  dark:hawa-border-primary/10",
        className
      )}
      {...props}
    >
      {props.children}
      {chipProps && <Chip {...chipProps} />}
    </TabsPrimitive.Trigger>
  );
});
TabsTrigger.displayName = TabsPrimitive.Trigger.displayName;

const TabsContent = React.forwardRef<
  React.ElementRef<typeof TabsPrimitive.Content>,
  React.ComponentPropsWithoutRef<typeof TabsPrimitive.Content>
>(({ className, ...props }, ref) => (
  <TabsPrimitive.Content
    ref={ref}
    className={cn(
      "hawa-ring-offset-hawa-background hawa-w-full focus-visible:hawa-outline-none focus-visible:hawa-ring-2 focus-visible:hawa-ring-ring focus-visible:hawa-ring-offset-2",
      className
    )}
    {...props}
  />
));
TabsContent.displayName = TabsPrimitive.Content.displayName;

export { Tabs, TabsList, TabsTrigger, TabsContent };
