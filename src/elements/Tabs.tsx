import * as React from "react"
import * as TabsPrimitive from "@radix-ui/react-tabs"

import { cn } from "../util"

const TabsContext = React.createContext<{
  orientation?: "vertical" | "horizontal"
}>({
  orientation: "vertical", // default value
})

// const Tabs = TabsPrimitive.Root
type TabsRootProps = React.ComponentPropsWithoutRef<
  typeof TabsPrimitive.Root
> & {
  orientation?: "vertical" | "horizontal"
}

const Tabs = React.forwardRef<
  React.ElementRef<typeof TabsPrimitive.Root>,
  TabsRootProps
>(({ className, orientation, ...props }, ref) => (
  <TabsPrimitive.Root
    ref={ref}
    className={cn(
      className,
      "flex gap-2",
      orientation === "horizontal" ? "flex-row" : "flex-col"
    )}
    {...props}
  >
    <TabsContext.Provider value={{ orientation }}>
      {props.children}
    </TabsContext.Provider>
  </TabsPrimitive.Root>
))
Tabs.displayName = TabsPrimitive.Root.displayName

// type TabsListProps = React.ComponentPropsWithoutRef<
//   typeof TabsPrimitive.List
// > & {
//   //   orientation?: "vertical" | "horizontal"
// }

const TabsList = React.forwardRef<
  React.ElementRef<typeof TabsPrimitive.List>,
  React.ComponentPropsWithoutRef<typeof TabsPrimitive.List>
>(({ className, ...props }, ref) => {
  const { orientation } = React.useContext(TabsContext)

  return (
    <TabsPrimitive.List
      ref={ref}
      className={cn(
        "flex w-fit flex-wrap items-center justify-start gap-1  rounded bg-muted p-1  text-muted-foreground ",
        orientation === "horizontal" ? "flex-col" : "flex-row",
        className
      )}
      {...props}
    />
  )
})
TabsList.displayName = TabsPrimitive.List.displayName

const TabsTrigger = React.forwardRef<
  React.ElementRef<typeof TabsPrimitive.Trigger>,
  React.ComponentPropsWithoutRef<typeof TabsPrimitive.Trigger>
>(({ className, ...props }, ref) => {
  return (
    <TabsPrimitive.Trigger
      ref={ref}
      className={cn(
        "inline-flex w-full flex-1 select-none items-center justify-center whitespace-nowrap rounded border px-3 py-1.5 text-sm font-medium ring-offset-background transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 data-[state=active]:bg-primary data-[state=active]:text-primary-foreground data-[state=active]:shadow-sm ",
        className
      )}
      {...props}
    />
  )
})
TabsTrigger.displayName = TabsPrimitive.Trigger.displayName

const TabsContent = React.forwardRef<
  React.ElementRef<typeof TabsPrimitive.Content>,
  React.ComponentPropsWithoutRef<typeof TabsPrimitive.Content>
>(({ className, ...props }, ref) => (
  <TabsPrimitive.Content
    ref={ref}
    className={cn(
      "w-full ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2",
      className
    )}
    {...props}
  />
))
TabsContent.displayName = TabsPrimitive.Content.displayName

export { Tabs, TabsList, TabsTrigger, TabsContent }
