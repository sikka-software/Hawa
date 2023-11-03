import * as React from "react";
import * as MenubarPrimitive from "@radix-ui/react-menubar";
import { cn } from "../util";

const MenubarMenu = MenubarPrimitive.Menu;
const MenubarGroup = MenubarPrimitive.Group;
const MenubarPortal = MenubarPrimitive.Portal;
const MenubarSub = MenubarPrimitive.Sub;
const MenubarRadioGroup = MenubarPrimitive.RadioGroup;

const Menubar = React.forwardRef<
  React.ElementRef<typeof MenubarPrimitive.Root>,
  React.ComponentPropsWithoutRef<typeof MenubarPrimitive.Root>
>(({ className, ...props }, ref) => (
  <MenubarPrimitive.Root
    ref={ref}
    className={cn(
      "hawa-flex hawa-h-10 hawa-items-center hawa-space-x-1 hawa-rounded-md hawa-border hawa-bg-background hawa-p-1",
      className
    )}
    {...props}
  />
));
Menubar.displayName = MenubarPrimitive.Root.displayName;

const MenubarTrigger = React.forwardRef<
  React.ElementRef<typeof MenubarPrimitive.Trigger>,
  React.ComponentPropsWithoutRef<typeof MenubarPrimitive.Trigger>
>(({ className, ...props }, ref) => (
  <MenubarPrimitive.Trigger
    ref={ref}
    className={cn(
      "hawa-flex hawa-cursor-default hawa-select-none hawa-items-center hawa-rounded-sm hawa-px-3 hawa-py-1.5 hawa-text-sm hawa-font-medium hawa-outline-none focus:hawa-bg-accent focus:hawa-text-accent-foreground data-[state=open]:hawa-bg-accent data-[state=open]:hawa-text-accent-foreground",
      className
    )}
    {...props}
  />
));
MenubarTrigger.displayName = MenubarPrimitive.Trigger.displayName;

const MenubarSubTrigger = React.forwardRef<
  React.ElementRef<typeof MenubarPrimitive.SubTrigger>,
  React.ComponentPropsWithoutRef<typeof MenubarPrimitive.SubTrigger> & {
    inset?: boolean;
  }
>(({ className, inset, children, ...props }, ref) => (
  <MenubarPrimitive.SubTrigger
    ref={ref}
    className={cn(
      "hawa-flex hawa-cursor-default hawa-select-none hawa-items-center hawa-rounded-sm hawa-px-2 hawa-py-1.5 hawa-text-sm hawa-outline-none focus:hawa-bg-accent focus:hawa-text-accent-foreground data-[state=open]:hawa-bg-accent data-[state=open]:hawa-text-accent-foreground",
      inset && "pl-8",
      className
    )}
    {...props}
  >
    {children}

    <svg
      aria-label="Chevron Right Icon"
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      stroke-width="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className="hawa-ml-auto hawa-icon"
    >
      <path d="m9 18 6-6-6-6" />
    </svg>
  </MenubarPrimitive.SubTrigger>
));
MenubarSubTrigger.displayName = MenubarPrimitive.SubTrigger.displayName;

const MenubarSubContent = React.forwardRef<
  React.ElementRef<typeof MenubarPrimitive.SubContent>,
  React.ComponentPropsWithoutRef<typeof MenubarPrimitive.SubContent>
>(({ className, ...props }, ref) => (
  <MenubarPrimitive.SubContent
    ref={ref}
    className={cn(
      "hawa-z-50 hawa-min-w-[8rem] hawa-overflow-hidden hawa-rounded-md hawa-border hawa-bg-popover hawa-p-1 hawa-text-popover-foreground data-[state=open]:hawa-animate-in data-[state=closed]:hawa-animate-out data-[state=closed]:hawa-fade-out-0 data-[state=open]:hawa-fade-in-0 data-[state=closed]:hawa-zoom-out-95 data-[state=open]:hawa-zoom-in-95 data-[side=bottom]:hawa-slide-in-from-top-2 data-[side=left]:hawa-slide-in-from-right-2 data-[side=right]:hawa-slide-in-from-left-2 data-[side=top]:hawa-slide-in-from-bottom-2",
      className
    )}
    {...props}
  />
));
MenubarSubContent.displayName = MenubarPrimitive.SubContent.displayName;

const MenubarContent = React.forwardRef<
  React.ElementRef<typeof MenubarPrimitive.Content>,
  React.ComponentPropsWithoutRef<typeof MenubarPrimitive.Content>
>(
  (
    { className, align = "start", alignOffset = -4, sideOffset = 8, ...props },
    ref
  ) => (
    <MenubarPrimitive.Portal>
      <MenubarPrimitive.Content
        ref={ref}
        align={align}
        alignOffset={alignOffset}
        sideOffset={sideOffset}
        className={cn(
          "hawa-z-50 hawa-min-w-[12rem] hawa-overflow-hidden hawa-rounded-md hawa-border hawa-bg-popover hawa-p-1 hawa-text-popover-foreground hawa-shadow-md data-[state=open]:hawa-animate-in data-[state=closed]:hawa-fade-out-0 data-[state=open]:hawa-fade-in-0 data-[state=closed]:hawa-zoom-out-95 data-[state=open]:hawa-zoom-in-95 data-[side=bottom]:hawa-slide-in-from-top-2 data-[side=left]:hawa-slide-in-from-right-2 data-[side=right]:hawa-slide-in-from-left-2 data-[side=top]:hawa-slide-in-from-bottom-2",
          className
        )}
        {...props}
      />
    </MenubarPrimitive.Portal>
  )
);
MenubarContent.displayName = MenubarPrimitive.Content.displayName;

const MenubarItem = React.forwardRef<
  React.ElementRef<typeof MenubarPrimitive.Item>,
  React.ComponentPropsWithoutRef<typeof MenubarPrimitive.Item> & {
    inset?: boolean;
  }
>(({ className, inset, ...props }, ref) => (
  <MenubarPrimitive.Item
    ref={ref}
    className={cn(
      "hawa-relative hawa-flex hawa-cursor-default hawa-select-none hawa-items-center hawa-rounded-sm hawa-px-2 hawa-py-1.5 hawa-text-sm hawa-outline-none focus:hawa-bg-accent focus:hawa-text-accent-foreground data-[disabled]:hawa-pointer-events-none data-[disabled]:hawa-opacity-50",
      inset && "pl-8",
      className
    )}
    {...props}
  />
));
MenubarItem.displayName = MenubarPrimitive.Item.displayName;

const MenubarCheckboxItem = React.forwardRef<
  React.ElementRef<typeof MenubarPrimitive.CheckboxItem>,
  React.ComponentPropsWithoutRef<typeof MenubarPrimitive.CheckboxItem>
>(({ className, children, checked, ...props }, ref) => (
  <MenubarPrimitive.CheckboxItem
    ref={ref}
    className={cn(
      "hawa-relative hawa-flex hawa-cursor-default hawa-select-none hawa-items-center hawa-rounded-sm hawa-py-1.5 hawa-pl-8 hawa-pr-2 hawa-text-sm hawa-outline-none focus:hawa-bg-accent focus:hawa-text-accent-foreground data-[disabled]:hawa-pointer-events-none data-[disabled]:hawa-opacity-50",
      className
    )}
    checked={checked}
    {...props}
  >
    <span className="hawa-absolute hawa-left-2 hawa-flex hawa-h-3.5 hawa-w-3.5 hawa-items-center hawa-justify-center">
      <MenubarPrimitive.ItemIndicator>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          stroke-width="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          className="hawa-icon"
        >
          <path d="M20 6 9 17l-5-5" />
        </svg>
      </MenubarPrimitive.ItemIndicator>
    </span>
    {children}
  </MenubarPrimitive.CheckboxItem>
));
MenubarCheckboxItem.displayName = MenubarPrimitive.CheckboxItem.displayName;

const MenubarRadioItem = React.forwardRef<
  React.ElementRef<typeof MenubarPrimitive.RadioItem>,
  React.ComponentPropsWithoutRef<typeof MenubarPrimitive.RadioItem>
>(({ className, children, ...props }, ref) => (
  <MenubarPrimitive.RadioItem
    ref={ref}
    className={cn(
      "hawa-relative hawa-flex hawa-cursor-default hawa-select-none hawa-items-center hawa-rounded-sm hawa-py-1.5 hawa-pl-8 hawa-pr-2 hawa-text-sm hawa-outline-none focus:hawa-bg-accent focus:hawa-text-accent-foreground data-[disabled]:hawa-pointer-events-none data-[disabled]:hawa-opacity-50",
      className
    )}
    {...props}
  >
    <span className="hawa-absolute hawa-left-2 hawa-flex hawa-h-3.5 hawa-w-3.5 hawa-items-center hawa-justify-center">
      <MenubarPrimitive.ItemIndicator>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          stroke-width="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          className="hawa-h-2 hawa-w-2 hawa-fill-current"
        >
          <circle cx="12" cy="12" r="10" />
        </svg>
      </MenubarPrimitive.ItemIndicator>
    </span>
    {children}
  </MenubarPrimitive.RadioItem>
));
MenubarRadioItem.displayName = MenubarPrimitive.RadioItem.displayName;

const MenubarLabel = React.forwardRef<
  React.ElementRef<typeof MenubarPrimitive.Label>,
  React.ComponentPropsWithoutRef<typeof MenubarPrimitive.Label> & {
    inset?: boolean;
  }
>(({ className, inset, ...props }, ref) => (
  <MenubarPrimitive.Label
    ref={ref}
    className={cn(
      "hawa-px-2 hawa-py-1.5 hawa-text-sm hawa-font-semibold",
      inset && "hawa-pl-8",
      className
    )}
    {...props}
  />
));
MenubarLabel.displayName = MenubarPrimitive.Label.displayName;

const MenubarSeparator = React.forwardRef<
  React.ElementRef<typeof MenubarPrimitive.Separator>,
  React.ComponentPropsWithoutRef<typeof MenubarPrimitive.Separator>
>(({ className, ...props }, ref) => (
  <MenubarPrimitive.Separator
    ref={ref}
    className={cn("hawa--mx-1 hawa-my-1 hawa-h-px hawa-bg-muted", className)}
    {...props}
  />
));
MenubarSeparator.displayName = MenubarPrimitive.Separator.displayName;

const MenubarShortcut = ({
  className,
  ...props
}: React.HTMLAttributes<HTMLSpanElement>) => {
  return (
    <span
      className={cn(
        "hawa-ml-auto hawa-text-xs hawa-tracking-widest hawa-text-muted-foreground",
        className
      )}
      {...props}
    />
  );
};
MenubarShortcut.displayname = "MenubarShortcut";

export {
  Menubar,
  MenubarMenu,
  MenubarTrigger,
  MenubarContent,
  MenubarItem,
  MenubarSeparator,
  MenubarLabel,
  MenubarCheckboxItem,
  MenubarRadioGroup,
  MenubarRadioItem,
  MenubarPortal,
  MenubarSubContent,
  MenubarSubTrigger,
  MenubarGroup,
  MenubarSub,
  MenubarShortcut,
};
