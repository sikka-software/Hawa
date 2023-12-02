import * as React from "react";
import * as NavigationMenuPrimitive from "@radix-ui/react-navigation-menu";
import { cva } from "class-variance-authority";

import { cn } from "../util";
import { DirectionType } from "../types/commonTypes";

const navigationMenuTriggerStyle = cva(
  "hawa-group hawa-inline-flex hawa-h-10 hawa-w-max hawa-items-center hawa-gap-1 hawa-justify-center hawa-rounded-md hawa-bg-background hawa-px-4 hawa-py-2 hawa-text-sm hawa-font-medium hawa-transition-colors hover:hawa-bg-accent hover:hawa-text-accent-foreground focus:hawa-bg-accent focus:hawa-text-accent-foreground focus:hawa-outline-none disabled:hawa-pointer-events-none disabled:hawa-opacity-50 data-[active]:hawa-bg-accent/50 "
);

type NavigationMenuRootProps = React.ComponentPropsWithoutRef<
  typeof NavigationMenuPrimitive.Root
> & {
  viewportClassNames?: string;
};

type NavMenuItemTypes = {
  icon?: React.ReactNode;
  title: string;
  subtitle?: string;
};

type NavigationMenuTypes = {
  items: { trigger: any; content?: any; action?: any }[];
  rootClassNames?: string;
  viewportClassNames?: string;
  triggerClassNames?: string;
  direction?: DirectionType;
};

const NavigationMenuRoot = React.forwardRef<
  React.ElementRef<typeof NavigationMenuPrimitive.Root>,
  NavigationMenuRootProps
>(({ className, children, viewportClassNames, ...props }, ref) => (
  <NavigationMenuPrimitive.Root
    ref={ref}
    className={cn(
      "hawa-relative hawa-z-10 hawa-flex  hawa-flex-1 hawa-items-center hawa-justify-center",
      // "hawa-max-w-max",
      className
    )}
    {...props}
  >
    {children}
    <NavigationMenuViewport className={viewportClassNames} />
  </NavigationMenuPrimitive.Root>
));
const NavigationMenuList = React.forwardRef<
  React.ElementRef<typeof NavigationMenuPrimitive.List>,
  React.ComponentPropsWithoutRef<typeof NavigationMenuPrimitive.List>
>(({ className, ...props }, ref) => (
  <NavigationMenuPrimitive.List
    ref={ref}
    className={cn(
      "hawa-group hawa-flex hawa-flex-1 hawa-list-none hawa-items-center hawa-justify-center hawa-gap-1",
      className
    )}
    {...props}
  />
));
const NavigationMenuTrigger = React.forwardRef<
  React.ElementRef<typeof NavigationMenuPrimitive.Trigger>,
  React.ComponentPropsWithoutRef<typeof NavigationMenuPrimitive.Trigger>
>(({ className, children, ...props }, ref) => (
  <NavigationMenuPrimitive.Trigger
    ref={ref}
    className={cn(navigationMenuTriggerStyle(), "hawa-group", className)}
    {...props}
  >
    {children}{" "}
    <svg
      aria-label="Chevron Icon"
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
      className="hawa-relative hawa-top-[1px] hawa-icon hawa-transition hawa-duration-200 group-data-[state=open]:hawa-rotate-180"
    >
      <path d="m6 9 6 6 6-6" />
    </svg>
  </NavigationMenuPrimitive.Trigger>
));
const NavigationMenuContent = React.forwardRef<
  React.ElementRef<typeof NavigationMenuPrimitive.Content>,
  React.ComponentPropsWithoutRef<typeof NavigationMenuPrimitive.Content>
>(({ className, ...props }, ref) => (
  <NavigationMenuPrimitive.Content
    ref={ref}
    className={cn(
      "hawa-absolute  hawa-w-full hawa-rounded hawa-left-0 hawa-top-0 ",
      // "md:hawa-absolute md:hawa-w-auto  hawa-left-0 hawa-top-0 ",
      //   animation
      "data-[motion^=from-]:hawa-animate-in data-[motion^=to-]:hawa-animate-out data-[motion^=from-]:hawa-fade-in data-[motion^=to-]:hawa-fade-out data-[motion=from-end]:hawa-slide-in-from-right-52 data-[motion=from-start]:hawa-slide-in-from-left-52 data-[motion=to-end]:hawa-slide-out-to-right-52 data-[motion=to-start]:hawa-slide-out-to-left-52",
      className
    )}
    {...props}
  />
));
const NavMenuItem: React.FC<
  NavMenuItemTypes & React.ComponentProps<typeof NavigationMenuPrimitive.Link>
> = ({ icon, title, subtitle, ...linkProps }) => (
  <NavigationMenuLink {...linkProps}>
    <div className="hawa-max-w-md hawa-rounded-inner hawa-cursor-pointer hawa-p-4 hawa-py-2 hawa-flex hawa-flex-row hawa-gap-4 hawa-items-center hawa-transition-all  hover:hawa-bg-muted">
      {icon && icon}
      <div className="hawa-flex hawa-flex-col">
        <h1 className="hawa-font-bold hawa-text-xl">{title}</h1>
        <p className="hawa-text-sm">{subtitle}</p>
      </div>
    </div>
  </NavigationMenuLink>
);
const NavigationMenuViewport = React.forwardRef<
  React.ElementRef<typeof NavigationMenuPrimitive.Viewport>,
  React.ComponentPropsWithoutRef<typeof NavigationMenuPrimitive.Viewport>
>(({ className, ...props }, ref) => (
  <div
    className={cn(
      "hawa-absolute hawa-w-full hawa-top-full hawa-flex hawa-justify-center"
    )}
  >
    <NavigationMenuPrimitive.Viewport
      className={cn(
        "hawa-origin-top-center hawa-relative hawa-mt-1.5  hawa-w-full hawa-overflow-hidden hawa-rounded-md hawa-border hawa-bg-popover hawa-text-popover-foreground hawa-shadow-lg data-[state=open]:hawa-animate-in data-[state=closed]:hawa-animate-out data-[state=closed]:hawa-zoom-out-95 data-[state=open]:hawa-zoom-in-90 ",
        // hawa-h-[var(--radix-navigation-menu-viewport-height)]
        // "md:hawa-w-[var(--radix-navigation-menu-viewport-width)]",
        className
      )}
      style={{
        height: "calc(var(--radix-navigation-menu-viewport-height) + 1px)",
      }}
      ref={ref}
      {...props}
    />
  </div>
));
const NavigationMenuIndicator = React.forwardRef<
  React.ElementRef<typeof NavigationMenuPrimitive.Indicator>,
  React.ComponentPropsWithoutRef<typeof NavigationMenuPrimitive.Indicator>
>(({ className, ...props }, ref) => (
  <NavigationMenuPrimitive.Indicator
    ref={ref}
    className={cn(
      "hawa-top-full hawa-z-[1] hawa-flex hawa-h-1.5 hawa-items-end hawa-justify-center hawa-overflow-hidden data-[state=visible]:hawa-animate-in data-[state=hidden]:hawa-animate-out data-[state=hidden]:hawa-fade-out data-[state=visible]:hawa-fade-in",
      className
    )}
    {...props}
  >
    <div className="hawa-relative hawa-top-[60%] hawa-h-2 hawa-w-2 hawa-rotate-45 hawa-rounded-tl-sm hawa-bg-border hawa-shadow-md" />
  </NavigationMenuPrimitive.Indicator>
));

const NavigationMenu: React.FC<NavigationMenuTypes> = ({
  viewportClassNames,
  rootClassNames,
  triggerClassNames,
  ...props
}) => {
  return (
    <NavigationMenuRoot
      dir={props.direction}
      delayDuration={0}
      className={rootClassNames}
      viewportClassNames={viewportClassNames}
    >
      <NavigationMenuList>
        {props.items.map((item, i) => (
          <NavigationMenuItem key={i}>
            {item.content ? (
              <>
                <NavigationMenuTrigger className={cn(triggerClassNames)}>
                  {item.trigger}
                </NavigationMenuTrigger>
                <NavigationMenuContent>{item.content}</NavigationMenuContent>
              </>
            ) : (
              <NavigationMenuLink
                onClick={() => {
                  if (item.action) {
                    item.action();
                  }
                }}
                className={cn(
                  navigationMenuTriggerStyle(),
                  "hawa-cursor-pointer hawa-select-none",
                  triggerClassNames
                )}
              >
                {item.trigger}
              </NavigationMenuLink>
            )}
          </NavigationMenuItem>
        ))}
      </NavigationMenuList>
    </NavigationMenuRoot>
  );
};

const NavigationMenuItem = NavigationMenuPrimitive.Item;
const NavigationMenuLink = NavigationMenuPrimitive.Link;

NavigationMenuContent.displayName = NavigationMenuPrimitive.Content.displayName;
NavigationMenuTrigger.displayName = NavigationMenuPrimitive.Trigger.displayName;
NavigationMenuList.displayName = NavigationMenuPrimitive.List.displayName;
NavigationMenuRoot.displayName = NavigationMenuPrimitive.Root.displayName;
NavigationMenuIndicator.displayName =
  NavigationMenuPrimitive.Indicator.displayName;
NavigationMenuViewport.displayName =
  NavigationMenuPrimitive.Viewport.displayName;

export {
  NavigationMenuLink,
  NavigationMenuItem,
  NavigationMenu,
  NavigationMenuIndicator,
  NavMenuItem,
  NavigationMenuContent,
  NavigationMenuList,
  navigationMenuTriggerStyle,
  NavigationMenuRoot,
  NavigationMenuTrigger,
  NavigationMenuViewport,
};
