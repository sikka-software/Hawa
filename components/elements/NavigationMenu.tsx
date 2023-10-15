import * as React from "react";
import * as NavigationMenuPrimitive from "@radix-ui/react-navigation-menu";
import { cva } from "class-variance-authority";

import { cn } from "../util";

type NavigationMenuRootProps = React.ComponentPropsWithoutRef<
  typeof NavigationMenuPrimitive.Root
> & {
  viewportClassNames?: string;
};

const NavigationMenuRoot = React.forwardRef<
  React.ElementRef<typeof NavigationMenuPrimitive.Root>,
  NavigationMenuRootProps
>(({ className, children, ...props }, ref) => (
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
    <NavigationMenuViewport className={props.viewportClassNames} />
  </NavigationMenuPrimitive.Root>
));
NavigationMenuRoot.displayName = NavigationMenuPrimitive.Root.displayName;

const NavigationMenuList = React.forwardRef<
  React.ElementRef<typeof NavigationMenuPrimitive.List>,
  React.ComponentPropsWithoutRef<typeof NavigationMenuPrimitive.List>
>(({ className, ...props }, ref) => (
  <NavigationMenuPrimitive.List
    ref={ref}
    className={cn(
      "hawa-group hawa-flex hawa-flex-1 hawa-list-none hawa-items-center hawa-justify-center hawa-space-x-1",
      className
    )}
    {...props}
  />
));
NavigationMenuList.displayName = NavigationMenuPrimitive.List.displayName;

const NavigationMenuItem = NavigationMenuPrimitive.Item;

const navigationMenuTriggerStyle = cva(
  "hawa-group hawa-inline-flex hawa-h-10 hawa-w-max hawa-items-center hawa-justify-center hawa-rounded-md hawa-bg-background hawa-px-4 hawa-py-2 hawa-text-sm hawa-font-medium hawa-transition-colors hover:hawa-bg-accent hover:hawa-text-accent-foreground focus:hawa-bg-accent focus:hawa-text-accent-foreground focus:hawa-outline-none disabled:hawa-pointer-events-none disabled:hawa-opacity-50 data-[active]:hawa-bg-accent/50 data-[state=open]:hawa-bg-accent/50"
);

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
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      stroke-width="2"
      stroke-linecap="round"
      stroke-linejoin="round"
      aria-hidden="true"
      className="hawa-relative hawa-top-[1px] hawa-ml-1 hawa-h-4 hawa-w-4 hawa-transition hawa-duration-200 group-data-[state=open]:hawa-rotate-180"
    >
      <path d="m6 9 6 6 6-6" />
    </svg>
  </NavigationMenuPrimitive.Trigger>
));
NavigationMenuTrigger.displayName = NavigationMenuPrimitive.Trigger.displayName;

const NavigationMenuContent = React.forwardRef<
  React.ElementRef<typeof NavigationMenuPrimitive.Content>,
  React.ComponentPropsWithoutRef<typeof NavigationMenuPrimitive.Content>
>(({ className, ...props }, ref) => (
  <NavigationMenuPrimitive.Content
    ref={ref}
    className={cn(
      "hawa-absolute  hawa-w-full  hawa-left-0 hawa-top-0 ",
      // "md:hawa-absolute md:hawa-w-auto  hawa-left-0 hawa-top-0 ",
      //   animation
      "data-[motion^=from-]:hawa-animate-in data-[motion^=to-]:hawa-animate-out data-[motion^=from-]:hawa-fade-in data-[motion^=to-]:hawa-fade-out data-[motion=from-end]:hawa-slide-in-from-right-52 data-[motion=from-start]:hawa-slide-in-from-left-52 data-[motion=to-end]:hawa-slide-out-to-right-52 data-[motion=to-start]:hawa-slide-out-to-left-52",
      className
    )}
    {...props}
  />
));
NavigationMenuContent.displayName = NavigationMenuPrimitive.Content.displayName;

export const NavigationMenuLink = NavigationMenuPrimitive.Link;

type NavMenuItemTypes = {
  icon?: any;
  title: string;
  subtitle?: string;
};

export const NavMenuItem: React.FC<NavMenuItemTypes> = (props) => (
  <NavigationMenuLink>
    <div className="hawa-max-w-md hawa-cursor-pointer hawa-p-4 hawa-py-2 hawa-rounded hawa-flex hawa-flex-row hawa-gap-4 hawa-items-center hawa-transition-all  hover:hawa-bg-muted">
      {props.icon && props.icon}
      <div className="hawa-flex hawa-flex-col">
        <h1 className="hawa-font-bold ">{props.title}</h1>
        <p className="hawa-text-sm">{props.subtitle}</p>
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
        "hawa-origin-top-center hawa-relative hawa-mt-1.5 hawa-h-[var(--radix-navigation-menu-viewport-height)] hawa-w-full hawa-overflow-hidden hawa-rounded-md hawa-border hawa-bg-popover hawa-text-popover-foreground hawa-shadow-lg data-[state=open]:hawa-animate-in data-[state=closed]:hawa-animate-out data-[state=closed]:hawa-zoom-out-95 data-[state=open]:hawa-zoom-in-90 ",

        // "md:hawa-w-[var(--radix-navigation-menu-viewport-width)]",
        className
      )}
      ref={ref}
      {...props}
    />
  </div>
));
NavigationMenuViewport.displayName =
  NavigationMenuPrimitive.Viewport.displayName;

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
NavigationMenuIndicator.displayName =
  NavigationMenuPrimitive.Indicator.displayName;

type NavigationMenuTypes = {
  items: { trigger: any; content?: any }[];
  rootClassNames?: string;
  viewportClassNames?: string;
};

export const NavigationMenu: React.FC<NavigationMenuTypes> = (props) => {
  return (
    <NavigationMenuRoot
      delayDuration={0}
      className={props.rootClassNames}
      viewportClassNames={props.viewportClassNames}
    >
      <NavigationMenuList>
        {props.items.map((item, i) => (
          <NavigationMenuItem key={i}>
            {item.content ? (
              <>
                <NavigationMenuTrigger>{item.trigger}</NavigationMenuTrigger>
                <NavigationMenuContent>{item.content}</NavigationMenuContent>
              </>
            ) : (
              <NavigationMenuLink
                className={cn(
                  navigationMenuTriggerStyle(),
                  "hawa-cursor-pointer hawa-select-none"
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
// export {
//   navigationMenuTriggerStyle,
//   NavigationMenu,
//   NavigationMenuRoot,
//   NavigationMenuList,
//   NavigationMenuItem,
//   NavigationMenuContent,
//   NavigationMenuTrigger,
//   NavigationMenuLink,
//   NavigationMenuIndicator,
//   NavigationMenuViewport,
// };
