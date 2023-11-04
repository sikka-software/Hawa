import * as React from "react";
import * as DropdownMenuPrimitive from "@radix-ui/react-dropdown-menu";
import { cn } from "../util";
import { DirectionType } from "../types/commonTypes";

export const DropdownMenuRoot = DropdownMenuPrimitive.Root;
export const DropdownMenuTrigger = DropdownMenuPrimitive.Trigger;

const DropdownMenuGroup = DropdownMenuPrimitive.Group;
const DropdownMenuPortal = DropdownMenuPrimitive.Portal;
const DropdownMenuSub = DropdownMenuPrimitive.Sub;
const DropdownMenuRadioGroup = DropdownMenuPrimitive.RadioGroup;

export const DropdownMenuSubTrigger = React.forwardRef<
  React.ElementRef<typeof DropdownMenuPrimitive.SubTrigger>,
  React.ComponentPropsWithoutRef<typeof DropdownMenuPrimitive.SubTrigger> & {
    inset?: boolean;
  }
>(({ className, inset, children, ...props }, ref) => (
  <DropdownMenuPrimitive.SubTrigger
    ref={ref}
    className={cn(
      "hawa-flex hawa-cursor-default hawa-select-none hawa-items-center hawa-justify-between hawa-rounded-sm hawa-text-sm hawa-outline-none focus:hawa-bg-accent data-[state=open]:hawa-bg-accent",
      inset && "hawa-pl-8",
      className
    )}
    {...props}
  >
    <div className="hawa-flex hawa-flex-row hawa-items-center hawa-gap-2">
      {children}
    </div>{" "}
    <svg
      aria-label="Chevron Right Icon"
      stroke="currentColor"
      fill="currentColor"
      strokeWidth="0"
      viewBox="0 0 16 16"
      height="1em"
      width="1em"
      className={cn(props.dir === "rtl" ? "hawa-rotate-180" : "")}
    >
      <path
        fillRule="evenodd"
        d="M4.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L10.293 8 4.646 2.354a.5.5 0 0 1 0-.708z"
      ></path>
    </svg>
  </DropdownMenuPrimitive.SubTrigger>
));
DropdownMenuSubTrigger.displayName =
  DropdownMenuPrimitive.SubTrigger.displayName;

const DropdownMenuSubContent = React.forwardRef<
  React.ElementRef<typeof DropdownMenuPrimitive.SubContent>,
  React.ComponentPropsWithoutRef<typeof DropdownMenuPrimitive.SubContent>
>(({ className, ...props }, ref) => (
  <DropdownMenuPrimitive.SubContent
    ref={ref}
    className={cn(
      "hawa-z-50 hawa-min-w-[8rem] hawa-gap-1 hawa-overflow-hidden hawa-rounded-md hawa-border hawa-bg-popover hawa-p-1 hawa-text-popover-foreground hawa-shadow-lg data-[state=open]:hawa-animate-in data-[state=closed]:hawa-animate-out data-[state=closed]:hawa-fade-out-0 data-[state=open]:hawa-fade-in-0 data-[state=closed]:hawa-zoom-out-95 data-[state=open]:hawa-zoom-in-95 data-[side=bottom]:hawa-slide-in-from-top-2 data-[side=left]:hawa-slide-in-from-right-2 data-[side=right]:hawa-slide-in-from-left-2 data-[side=top]:hawa-slide-in-from-bottom-2",
      className
    )}
    {...props}
  />
));
DropdownMenuSubContent.displayName =
  DropdownMenuPrimitive.SubContent.displayName;

export const DropdownMenuContent = React.forwardRef<
  React.ElementRef<typeof DropdownMenuPrimitive.Content>,
  React.ComponentPropsWithoutRef<typeof DropdownMenuPrimitive.Content>
>(({ className, sideOffset = 4, ...props }, ref) => (
  <DropdownMenuPrimitive.Portal>
    <DropdownMenuPrimitive.Content
      ref={ref}
      sideOffset={sideOffset}
      className={cn(
        "hawa-z-50  hawa-overflow-hidden hawa-rounded-md hawa-border hawa-bg-popover hawa-p-1 hawa-text-popover-foreground hawa-shadow-md data-[state=open]:hawa-animate-in data-[state=closed]:hawa-animate-out data-[state=closed]:hawa-fade-out-0 data-[state=open]:hawa-fade-in-0 data-[state=closed]:hawa-zoom-out-95 data-[state=open]:hawa-zoom-in-95 data-[side=bottom]:hawa-slide-in-from-top-2 data-[side=left]:hawa-slide-in-from-right-2 data-[side=right]:hawa-slide-in-from-left-2 data-[side=top]:hawa-slide-in-from-bottom-2",
        className
      )}
      {...props}
    />
  </DropdownMenuPrimitive.Portal>
));
DropdownMenuContent.displayName = DropdownMenuPrimitive.Content.displayName;

export const DropdownMenuItem = React.forwardRef<
  React.ElementRef<typeof DropdownMenuPrimitive.Item>,
  React.ComponentPropsWithoutRef<typeof DropdownMenuPrimitive.Item> & {
    inset?: boolean;
    end?: any;
    shortcut?: React.ReactNode;
    badged?: boolean;
  }
>(({ className, inset, ...props }, ref) => {
  return (
    <DropdownMenuPrimitive.Item
      disabled={props.disabled}
      ref={ref}
      className={cn(
        "hawa-relative hawa-flex hawa-cursor-pointer hawa-select-none hawa-items-center hawa-justify-between hawa-rounded-sm hawa-text-sm hawa-outline-none hawa-transition-colors focus:hawa-text-accent-foreground data-[disabled]:hawa-pointer-events-none data-[disabled]:hawa-opacity-50",
        inset && "hawa-pl-8",
        props.end &&
          Array.isArray(props.children) &&
          props.children[1] &&
          "hawa-gap-6",
        className
      )}
      {...props}
    >
      <div className="hawa-flex hawa-flex-row hawa-items-center hawa-gap-2 ">
        {props.children}
      </div>

      {props.end && props.end}
      {!props.end && props.shortcut && (
        <DropdownMenuShortcut>{props.shortcut}</DropdownMenuShortcut>
      )}
      {!props.end && props.badged && (
        <div className="hawa-h-3 hawa-w-3 hawa-bg-red-500 hawa-rounded-full" />
      )}
    </DropdownMenuPrimitive.Item>
  );
});
DropdownMenuItem.displayName = DropdownMenuPrimitive.Item.displayName;

export const DropdownMenuCheckboxItem = React.forwardRef<
  React.ElementRef<typeof DropdownMenuPrimitive.CheckboxItem>,
  React.ComponentPropsWithoutRef<typeof DropdownMenuPrimitive.CheckboxItem>
>(({ className, children, checked, ...props }, ref) => (
  <DropdownMenuPrimitive.CheckboxItem
    ref={ref}
    className={cn(
      "hawa-relative hawa-flex hawa-cursor-default hawa-select-none hawa-items-center hawa-rounded-sm hawa-py-1.5 hawa-pl-8 hawa-pr-2 hawa-text-sm hawa-outline-none hawa-transition-colors focus:hawa-bg-accent focus:hawa-text-accent-foreground data-[disabled]:hawa-pointer-events-none data-[disabled]:hawa-opacity-50",
      className
    )}
    checked={checked}
    {...props}
  >
    <span className="hawa-absolute hawa-left-2 hawa-flex hawa-h-3.5 hawa-w-3.5 hawa-items-center hawa-justify-center">
      <DropdownMenuPrimitive.ItemIndicator>
        {/* <Check className="h-4 w-4" /> */}
        <svg
          aria-label="Check Mark"
          stroke="currentColor"
          fill="currentColor"
          strokeWidth="0"
          viewBox="0 0 512 512"
          height="0.60em"
          width="0.60em"
        >
          <path d="M173.898 439.404l-166.4-166.4c-9.997-9.997-9.997-26.206 0-36.204l36.203-36.204c9.997-9.998 26.207-9.998 36.204 0L192 312.69 432.095 72.596c9.997-9.997 26.207-9.997 36.204 0l36.203 36.204c9.997 9.997 9.997 26.206 0 36.204l-294.4 294.401c-9.998 9.997-26.207 9.997-36.204-.001z"></path>
        </svg>{" "}
      </DropdownMenuPrimitive.ItemIndicator>
    </span>
    {children}
  </DropdownMenuPrimitive.CheckboxItem>
));
DropdownMenuCheckboxItem.displayName =
  DropdownMenuPrimitive.CheckboxItem.displayName;

const DropdownMenuRadioItem = React.forwardRef<
  React.ElementRef<typeof DropdownMenuPrimitive.RadioItem>,
  React.ComponentPropsWithoutRef<typeof DropdownMenuPrimitive.RadioItem>
>(({ className, children, ...props }, ref) => (
  <DropdownMenuPrimitive.RadioItem
    ref={ref}
    className={cn(
      "hawa-relative hawa-flex hawa-cursor-default hawa-select-none hawa-items-center hawa-rounded-sm hawa-py-1.5 hawa-pl-8 hawa-pr-2 hawa-text-sm hawa-outline-none hawa-transition-colors focus:hawa-bg-accent focus:hawa-text-accent-foreground data-[disabled]:hawa-pointer-events-none data-[disabled]:hawa-opacity-50",
      className
    )}
    {...props}
  >
    <span className="hawa-absolute hawa-left-2 hawa-flex hawa-h-3.5 hawa-w-3.5 hawa-items-center hawa-justify-center">
      <DropdownMenuPrimitive.ItemIndicator>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          aria-label="Circle"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          className="hawa-h-2 hawa-w-2 hawa-fill-current"
        >
          <circle cx="12" cy="12" r="10"></circle>
        </svg>
      </DropdownMenuPrimitive.ItemIndicator>
    </span>
    {children}
  </DropdownMenuPrimitive.RadioItem>
));
DropdownMenuRadioItem.displayName = DropdownMenuPrimitive.RadioItem.displayName;

export const DropdownMenuLabel = React.forwardRef<
  React.ElementRef<typeof DropdownMenuPrimitive.Label>,
  React.ComponentPropsWithoutRef<typeof DropdownMenuPrimitive.Label> & {
    inset?: boolean;
  }
>(({ className, inset, ...props }, ref) => (
  <DropdownMenuPrimitive.Label
    ref={ref}
    className={cn(
      "hawa-px-2 hawa-py-1.5 hawa-text-sm hawa-font-semibold",
      inset && "hawa-pl-8",
      className
    )}
    {...props}
  />
));
DropdownMenuLabel.displayName = DropdownMenuPrimitive.Label.displayName;

export const DropdownMenuSeparator = React.forwardRef<
  React.ElementRef<typeof DropdownMenuPrimitive.Separator>,
  React.ComponentPropsWithoutRef<typeof DropdownMenuPrimitive.Separator>
>(({ className, ...props }, ref) => (
  <DropdownMenuPrimitive.Separator
    ref={ref}
    className={cn("hawa--mx-1 hawa-my-1 hawa-h-px hawa-bg-muted", className)}
    {...props}
  />
));
DropdownMenuSeparator.displayName = DropdownMenuPrimitive.Separator.displayName;

const DropdownMenuShortcut = ({
  className,
  ...props
}: React.HTMLAttributes<HTMLSpanElement>) => {
  return (
    <span
      className={cn(
        "hawa-text-xs hawa-tracking-widest hawa-opacity-60",
        className
      )}
      {...props}
    />
  );
};
DropdownMenuShortcut.displayName = "DropdownMenuShortcut";

type ExtendedDropdownMenuContentProps = Partial<
  React.ComponentPropsWithoutRef<typeof DropdownMenuPrimitive.Content>
> & {
  // Add any additional types or overrides here, for example:
  //   side?: "left" | "right" | "top" | "bottom"
};
type ExtendedDropdownMenuTriggerProps = Partial<
  React.ComponentPropsWithoutRef<typeof DropdownMenuPrimitive.Trigger>
> & {
  // Add any additional types or overrides here, for example:
  //   side?: "left" | "right" | "top" | "bottom"
};

export type SubItem = {
  label?: string;
  value?: any;
  icon?: any;
  action?: () => void;
  highlighted?: boolean;
  disabled?: boolean;
};
export type MenuItemType = {
  icon?: React.ReactNode;
  label?: string;
  shortcut?: React.ReactNode;
  badged?: boolean;
  value?: any;
  content?: any;
  end?: any;
  presist?: boolean;
  itemType?: "separator" | "label" | string;
  action?: () => void;
  highlighted?: boolean;
  subitems?: SubItem[];
  disabled?: boolean;
  onMiddleClick?: any;
  onClick?: any;
};
interface DropdownMenuProps {
  trigger?: any;
  items?: MenuItemType[];
  direction?: DirectionType;
  className?: ExtendedDropdownMenuContentProps["className"];
  triggerClassname?: ExtendedDropdownMenuTriggerProps["className"];
  sideOffset?: ExtendedDropdownMenuContentProps["sideOffset"];
  side?: ExtendedDropdownMenuContentProps["side"];
  align?: ExtendedDropdownMenuContentProps["align"];
  alignOffset?: ExtendedDropdownMenuContentProps["alignOffset"];
  width?: "default" | "sm" | "lg" | "parent";
  size?: "default" | "sm";
  onItemSelect?: any;
  onOpenChange?: any;
  header?: React.ReactNode;
  open?: any;
}
export const DropdownMenu: React.FC<DropdownMenuProps> = ({
  trigger,
  items,
  direction,
  sideOffset,
  side,
  className,
  triggerClassname,
  align,
  alignOffset,
  onItemSelect,
  size = "default",
  width = "default",
  header,
  onOpenChange,
  open,
}) => {
  const widthStyles = {
    default: "hawa-min-w-[8rem]",
    sm: "hawa-w-fit",
    lg: "hawa-w-[200px]",
    parent: "ddm-w-parent",
  };
  const sizeStyles = {
    default: "hawa-px-2 hawa-py-3 ",
    sm: "hawa-text-xs hawa-px-1.5 hawa-py-1.5 ",
  };
  return (
    <DropdownMenuRoot
      onOpenChange={onOpenChange}
      open={open}
      modal={false}
      dir={direction}
    >
      <DropdownMenuTrigger asChild className={triggerClassname}>
        {trigger}
      </DropdownMenuTrigger>
      <DropdownMenuPortal>
        <DropdownMenuContent
          side={side}
          sideOffset={sideOffset}
          className={cn(
            className,
            widthStyles[width],
            "hawa-flex hawa-flex-col hawa-gap-1"
          )}
          align={align}
          alignOffset={alignOffset}
        >
          {header && header}
          {items &&
            items.map((item, index) => {
              if (item.itemType === "separator") {
                return <DropdownMenuSeparator key={index} />;
              } else if (item.itemType === "label") {
                return (
                  <DropdownMenuLabel key={index}>
                    {item.label}
                  </DropdownMenuLabel>
                );
              } else if (item.itemType === "custom") {
                return <div key={index}>{item.content}</div>;
              } else {
                return item.subitems ? (
                  <DropdownMenuSub key={index}>
                    <DropdownMenuSubTrigger
                      className={cn(sizeStyles[size])}
                      dir={direction}
                    >
                      {item.icon && item.icon}
                      {item.label && item.label}
                    </DropdownMenuSubTrigger>
                    <DropdownMenuPortal>
                      <DropdownMenuSubContent>
                        {item.subitems.map((subitem, subIndex) => (
                          <DropdownMenuItem
                            key={subIndex}
                            className={cn(
                              sizeStyles[size],

                              !item.icon && !item.label
                                ? "hawa-px-0 hawa-py-0 focus:hawa-bg-transparent"
                                : "focus:hawa-bg-accent"
                            )}
                            disabled={subitem.disabled}
                            // className="flex flex-row gap-2"
                            onSelect={() => {
                              subitem.action && subitem.action();
                              if (onItemSelect) {
                                onItemSelect(subitem.value);
                              }
                            }}
                          >
                            {subitem.icon && subitem.icon}
                            {subitem.label && subitem.label}
                          </DropdownMenuItem>
                        ))}
                      </DropdownMenuSubContent>
                    </DropdownMenuPortal>
                  </DropdownMenuSub>
                ) : (
                  <DropdownMenuItem
                    key={index}
                    disabled={item.disabled}
                    onMouseDown={(event: any) => {
                      if (event.button === 1) {
                        event.preventDefault(); // This line prevents the default behavior of the middle button
                        if (item.onMiddleClick) {
                          item.onMiddleClick(item.value);
                        }
                      }
                    }}
                    onClick={(event: any) => {
                      if (item.onClick) {
                        item.onClick(item.value);
                      }
                    }}
                    onSelect={(e) => {
                      if (item.presist) {
                        e.preventDefault();
                      }
                      if (item.action) {
                        item.action();
                        if (onItemSelect) {
                          onItemSelect(item.value);
                        }
                      } else {
                        if (onItemSelect) {
                          onItemSelect(item.value);
                        }
                      }
                    }}
                    end={item.end}
                    shortcut={item.shortcut}
                    badged={item.badged}
                    className={cn(
                      sizeStyles[size],
                      !item.icon && !item.label
                        ? "hawa-px-0 hawa-py-0 focus:hawa-bg-transparent "
                        : "focus:hawa-bg-accent ",
                      item.presist && "focus:hawa-bg-transparent"
                    )}
                  >
                    {item.icon && item.icon}
                    {item.label && item.label}
                  </DropdownMenuItem>
                );
              }
            })}
        </DropdownMenuContent>
      </DropdownMenuPortal>
    </DropdownMenuRoot>
  );
};
