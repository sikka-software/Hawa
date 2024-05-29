import * as React from "react";

import { useMeasureDirty } from "@hooks/index";
import * as TabsPrimitive from "@radix-ui/react-tabs";
import { cn } from "@util/index";
import { tv } from "tailwind-variants";

import { OrientationType } from "@_types/commonTypes";

import { Chip, ChipTypes } from "../chip";
import { FloatBox } from "../floatBox";
import { ScrollArea } from "../scrollArea";

const tabsListVariant = tv({
  base: "",
  variants: {
    variant: {
      default:
        "hawa-flex hawa-w-fit hawa-items-center hawa-justify-start hawa-gap-1 hawa-rounded hawa-border hawa-bg-muted hawa-p-1 hawa-text-muted-foreground  dark:hawa-border-primary/10",
      underlined:
        "hawa-flex hawa-w-fit hawa-items-center hawa-justify-start hawa-gap-1 hawa-rounded  hawa-p-1 hawa-text-muted-foreground  dark:hawa-border-primary/10",
      underlined_tabs:
        "hawa-flex hawa-w-fit hawa-items-center hawa-justify-start hawa-gap-1 hawa-text-muted-foreground",
    },
    orientation: { horizontal: "", vertical: "" },
  },
  compoundVariants: [
    {
      variant: "underlined_tabs",
      orientation: "vertical",
      class: "hawa-border-e-2 hawa-border-e-primary",
    },
    {
      variant: "underlined_tabs",
      orientation: "horizontal",
      class: "hawa-border-b-2 hawa-border-b-primary",
    },
  ],
  defaultVariants: { variant: "default", orientation: "horizontal" },
});

const tabsTriggerVariant = tv({
  base: "",
  variants: {
    variant: {
      default:
        "hawa-inline-flex hawa-w-full hawa-flex-1 hawa-select-none hawa-items-center hawa-justify-center hawa-gap-2 hawa-whitespace-nowrap hawa-rounded hawa-border hawa-px-3 hawa-py-1.5 hawa-text-sm hawa-font-medium hawa-ring-offset-background hawa-transition-all focus-visible:hawa-outline-none focus-visible:hawa-ring-2 focus-visible:hawa-ring-ring focus-visible:hawa-ring-offset-2 disabled:hawa-pointer-events-none disabled:hawa-opacity-50 data-[state=active]:hawa-bg-primary data-[state=active]:hawa-text-primary-foreground data-[state=active]:hawa-shadow-sm  dark:hawa-border-primary/10",
      underlined:
        "hawa-inline-flex  hawa-w-full hawa-flex-1 hawa-select-none hawa-items-center hawa-justify-center hawa-gap-2 hawa-whitespace-nowrap hawa-rounded hawa-rounded-none hawa-px-3 hawa-py-1.5 hawa-text-sm hawa-font-medium hawa-ring-offset-background hawa-transition-all focus-visible:hawa-outline-none focus-visible:hawa-ring-2 focus-visible:hawa-ring-ring focus-visible:hawa-ring-offset-2 disabled:hawa-pointer-events-none disabled:hawa-opacity-50",
      underlined_tabs:
        "hawa-inline-flex hawa-w-full hawa-flex-1 hawa-select-none hawa-items-center hawa-justify-center hawa-gap-2 hawa-whitespace-nowrap hawa-rounded   hawa-px-3 hawa-py-1.5 hawa-text-sm hawa-font-medium hawa-ring-offset-background hawa-transition-all focus-visible:hawa-outline-none focus-visible:hawa-ring-2 focus-visible:hawa-ring-ring focus-visible:hawa-ring-offset-2 disabled:hawa-pointer-events-none disabled:hawa-opacity-50 hawa-bg-primary/10 data-[state=active]:hawa-bg-primary data-[state=active]:hawa-text-primary-foreground  dark:hawa-border-primary/10",
    },
    orientation: { horizontal: "", vertical: "" },
  },
  compoundVariants: [
    {
      variant: "underlined",
      orientation: "horizontal",
      class:
        "data-[state=active]:hawa-border-b-primary hawa-border-b hawa-border-b-2",
    },
    {
      variant: "underlined",
      orientation: "vertical",
      class:
        "data-[state=active]:hawa-border-e-primary hawa-border-e hawa-border-e-2",
    },
    {
      variant: "underlined_tabs",
      orientation: "horizontal",
      class: "hawa-rounded-b-none",
    },
    {
      variant: "underlined_tabs",
      orientation: "vertical",
      class: "hawa-rounded-e-none",
    },
  ],
  defaultVariants: { variant: "default", orientation: "horizontal" },
});

type TabsVariants = "default" | "underlined" | "underlined_tabs";

const TabsContext = React.createContext<{
  orientation?: OrientationType;
  variant?: TabsVariants;
}>({ orientation: "horizontal", variant: "default" });

type TabsRootProps = React.ComponentPropsWithoutRef<
  typeof TabsPrimitive.Root
> & { variant?: TabsVariants };

const Tabs = React.forwardRef<
  React.ElementRef<typeof TabsPrimitive.Root>,
  TabsRootProps
>(({ className, orientation, variant = "default", ...props }, ref) => (
  <TabsPrimitive.Root
    ref={ref}
    className={cn(
      "hawa-flex hawa-gap-2",
      orientation === "vertical" ? "hawa-flex-row" : "hawa-flex-col",
      className,
    )}
    {...props}
  >
    <TabsContext.Provider value={{ orientation, variant }}>
      {props.children}
    </TabsContext.Provider>
  </TabsPrimitive.Root>
));

type TabsListProps = React.ComponentPropsWithoutRef<
  typeof TabsPrimitive.List
> & {
  scrollable?: boolean;
  classNames?: {
    scrollArea?: string;
  };
};

const TabsList = React.forwardRef<
  React.ElementRef<typeof TabsPrimitive.List>,
  TabsListProps
>(({ className, classNames, ...props }, ref) => {
  const { orientation, variant } = React.useContext(TabsContext);
  const [size, setSize] = React.useState(
    (typeof window !== "undefined" && window.innerWidth) || 1200,
  );
  React.useEffect(() => {
    if (typeof window !== "undefined") {
      const resize = () => {
        setSize(window.innerWidth);
      };
      resize();
      window.addEventListener("resize", resize);
      return () => {
        window.removeEventListener("resize", resize);
      };
    }
  }, []);

  if (props.scrollable && size < 768 && orientation === "horizontal") {
    return (
      <ScrollArea orientation="horizontal" className={classNames?.scrollArea}>
        <TabsPrimitive.List
          ref={ref}
          className={cn(
            tabsListVariant({ variant, orientation }),
            "hawa-flex-row hawa-flex-nowrap",
            className,
          )}
          {...props}
        />
      </ScrollArea>
    );
  } else {
    return (
      <TabsPrimitive.List
        ref={ref}
        className={cn(
          tabsListVariant({ variant, orientation }),
          orientation === "vertical" ? "hawa-flex-col" : "hawa-flex-row",
          "hawa-flex-wrap",
          className,
        )}
        {...props}
      />
    );
  }
});

type TabsTriggerProps = React.ComponentPropsWithoutRef<
  typeof TabsPrimitive.Trigger
> & {
  chipProps?: ChipTypes;
  className?: string;
  showPopover?: boolean;
  popoverContent?: React.ReactNode;
};

const TabsTrigger = React.forwardRef<
  React.ElementRef<typeof TabsPrimitive.Trigger>,
  TabsTriggerProps
>(({ className, chipProps, ...props }, ref) => {
  const { orientation, variant } = React.useContext(TabsContext);
  const tabTriggerRef = React.useRef(null);
  const { width } = useMeasureDirty(tabTriggerRef);

  return (
    <TabsPrimitive.Trigger
      ref={tabTriggerRef}
      className={cn(
        tabsTriggerVariant({ variant, orientation }),
        "hawa-relative",
        className,
      )}
      {...props}
    >
      {props.children}
      {chipProps && <Chip {...chipProps} />}

      <FloatBox
        withArrow
        align={orientation === "vertical" ? "start" : "start"}
        side={orientation === "vertical" ? "right" : "bottom"}
        sideOffset={orientation === "vertical" ? width + 30 : 45}
        open={props.showPopover}
      >
        {props.popoverContent}
      </FloatBox>
    </TabsPrimitive.Trigger>
  );
});

const TabsContent = React.forwardRef<
  React.ElementRef<typeof TabsPrimitive.Content>,
  React.ComponentPropsWithoutRef<typeof TabsPrimitive.Content>
>(({ className, ...props }, ref) => (
  <TabsPrimitive.Content
    ref={ref}
    className={cn(
      "hawa-ring-offset-hawa-background hawa-w-full focus-visible:hawa-outline-none focus-visible:hawa-ring-2 focus-visible:hawa-ring-ring focus-visible:hawa-ring-offset-2",
      className,
    )}
    {...props}
  />
));

Tabs.displayName = TabsPrimitive.Root.displayName;
TabsList.displayName = TabsPrimitive.List.displayName;
TabsTrigger.displayName = TabsPrimitive.Trigger.displayName;
TabsContent.displayName = TabsPrimitive.Content.displayName;

export { Tabs, TabsList, TabsTrigger, TabsContent };
