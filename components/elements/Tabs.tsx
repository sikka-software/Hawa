import * as React from "react";
import * as TabsPrimitive from "@radix-ui/react-tabs";
import { cn } from "../util";

const TabsContext = React.createContext<{
  orientation?: "vertical" | "horizontal";
}>({ orientation: "vertical" });

type TabsRootProps = React.ComponentPropsWithoutRef<
  typeof TabsPrimitive.Root
> & { orientation?: "vertical" | "horizontal" };

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
  console.log("orient ", orientation);
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

const TabsTrigger = React.forwardRef<
  React.ElementRef<typeof TabsPrimitive.Trigger>,
  React.ComponentPropsWithoutRef<typeof TabsPrimitive.Trigger>
>(({ className, ...props }, ref) => {
  return (
    <TabsPrimitive.Trigger
      ref={ref}
      className={cn(
        "hawa-inline-flex hawa-w-full hawa-flex-1 hawa-select-none hawa-items-center hawa-justify-center hawa-whitespace-nowrap hawa-rounded hawa-border hawa-px-3 hawa-py-1.5 hawa-text-sm hawa-font-medium hawa-ring-offset-background hawa-transition-all focus-visible:hawa-outline-none focus-visible:hawa-ring-2 focus-visible:hawa-ring-ring focus-visible:hawa-ring-offset-2 disabled:hawa-pointer-events-none disabled:hawa-opacity-50 data-[state=active]:hawa-bg-primary data-[state=active]:hawa-text-primary-foreground data-[state=active]:hawa-shadow-sm  dark:hawa-border-primary/10",
        className
      )}
      {...props}
    />
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
      "hawa-w-full hawa-ring-offset-hawa-background focus-visible:hawa-outline-none focus-visible:hawa-ring-2 focus-visible:hawa-ring-ring focus-visible:hawa-ring-offset-2",
      className
    )}
    {...props}
  />
));
TabsContent.displayName = TabsPrimitive.Content.displayName;

export { Tabs, TabsList, TabsTrigger, TabsContent };