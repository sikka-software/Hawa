import * as React from "react";
import * as AccordionPrimitive from "@radix-ui/react-accordion";
import { cn } from "../util";
import { DirectionType } from "../types/commonTypes";

const Accordion = AccordionPrimitive.Root;

let triggerStyles =
  "hawa-flex hawa-flex-1 hawa-items-center hawa-duration-75 hawa-select-none hawa-cursor-pointer  hawa-rounded hawa-justify-between hawa-p-2 hawa-px-3 hawa-font-medium hawa-transition-all  [&[data-state=open]>svg]:hawa--rotate-90";
const AccordionItem = React.forwardRef<
  React.ElementRef<typeof AccordionPrimitive.Item>,
  React.ComponentPropsWithoutRef<typeof AccordionPrimitive.Item>
>(({ className, ...props }, ref) => (
  <AccordionPrimitive.Item ref={ref} className={cn(className)} {...props} />
));
AccordionItem.displayName = "AccordionItem";

type AccordionTriggerProps = React.ComponentPropsWithoutRef<
  typeof AccordionPrimitive.Trigger
> & {
  showArrow?: any;
};

const AccordionTrigger = React.forwardRef<
  React.ElementRef<typeof AccordionPrimitive.Trigger>,
  AccordionTriggerProps
>(({ className, showArrow, children, ...props }, ref) => (
  <AccordionPrimitive.Header className="flex">
    <AccordionPrimitive.Trigger
      ref={ref}
      className={cn(triggerStyles, className)}
      {...props}
    >
      {children}
      {showArrow && (
        <svg
          aria-label="Chevron Right Icon"
          stroke="currentColor"
          fill="currentColor"
          viewBox="0 0 16 16"
          height="1em"
          width="1em"
          className="hawa-h-4 hawa-w-4 hawa-shrink-0 hawa-rotate-90 hawa-transition-transform hawa-duration-200"
        >
          <path d="M4.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L10.293 8 4.646 2.354a.5.5 0 0 1 0-.708z"></path>
        </svg>
      )}
    </AccordionPrimitive.Trigger>
  </AccordionPrimitive.Header>
));
AccordionTrigger.displayName = AccordionPrimitive.Trigger.displayName;

const AccordionContent = React.forwardRef<
  React.ElementRef<typeof AccordionPrimitive.Content>,
  React.ComponentPropsWithoutRef<typeof AccordionPrimitive.Content>
>(({ className, children, ...props }, ref) => (
  <AccordionPrimitive.Content
    ref={ref}
    className={cn(
      "hawa-overflow-hidden hawa-text-sm hawa-transition-all data-[state=closed]:hawa-animate-accordion-up data-[state=open]:hawa-animate-accordion-down",
      className
    )}
    {...props}
  >
    <div>{children}</div>
  </AccordionPrimitive.Content>
));
AccordionContent.displayName = AccordionPrimitive.Content.displayName;

type Item = {
  value: string;
  label: string;
  icon?: any;
  subitems?: SubItem[];
  onClick?: () => void;
};
type SubItem = {
  value: string;
  label: string;
  icon?: any;
  onClick?: () => void;
};
interface SidebarGroupProps {
  title?: string;
  items: Item[];
  openedItem?: any;
  setOpenedItem?: any;
  selectedItem?: any;
  isOpen?: boolean;
  onItemClick?: (value: string[]) => void;
  onSubItemClick?: (values: string[]) => void;
  direction?: DirectionType;
}

const SidebarGroup: React.FC<SidebarGroupProps> = ({
  title,
  items,
  selectedItem,
  openedItem,
  setOpenedItem,
  onItemClick,
  onSubItemClick,
  direction,
  isOpen,
}) => {
  // console.log("selected item is ", selectedItem)
  return (
    <div className="hawa-m-2">
      {title && <h3 className="hawa-mb-1 hawa-font-bold">{title}</h3>}
      <ul className="hawa-flex hawa-flex-col hawa-gap-2">
        <Accordion
          value={openedItem}
          type="single"
          onValueChange={(e) => {
            setOpenedItem(e);
          }}
          collapsible
          className="hawa-flex hawa-flex-col hawa-gap-1"
        >
          {items.map((item, idx) => (
            <SidebarItem
              isOpen={isOpen}
              selectedItem={selectedItem}
              key={idx}
              direction={direction}
              item={item}
              onItemClick={onItemClick}
              onSubItemClick={onSubItemClick}
            />
          ))}
        </Accordion>
      </ul>
    </div>
  );
};
const SidebarItem: React.FC<{
  item: Item;
  selectedItem?: any;
  direction?: "rtl" | "ltr";
  onItemClick?: (value: string[]) => void;
  onSubItemClick?: (values: string[]) => void;
  isOpen?: boolean;
}> = ({
  item,
  onItemClick,
  onSubItemClick,
  direction,
  isOpen = true,
  ...props
}) => {
  const getSelectedStyle = (value: string) => {
    return props.selectedItem === value
      ? "hawa-bg-primary hawa-text-primary-foreground  hawa-cursor-default"
      : "hover:hawa-bg-primary/10";
  };
  if (item.subitems) {
    return (
      <AccordionItem
        value={item.value}
        className="hawa-overflow-x-clip"
        dir={direction}
      >
        <AccordionTrigger
          className={cn(
            "hawa-overflow-x-clip hawa-w-full",
            props.selectedItem === item.value
              ? "hawa-cursor-default hawa-bg-primary  hawa-text-primary-foreground"
              : "hover:hawa-bg-primary/10 hawa-h-10",
            item.subitems &&
              item.subitems.some(
                (subitem) => props.selectedItem === subitem.value
              )
              ? "hawa-bg-primary/90 hawa-text-primary-foreground hover:hawa-bg-primary/90"
              : ""
          )}
          showArrow={isOpen}
        >
          <div
            className={cn(
              !isOpen && "hawa-py-1",
              "hawa-flex hawa-w-fit hawa-flex-row hawa-items-center  hawa-gap-2"
            )}
          >
            {item.icon && item.icon}
            <span
              className={cn(
                "hawa-transition-all ",
                isOpen ? "hawa-opacity-100" : "hawa-opacity-0"
              )}
            >
              {item.label}
            </span>
          </div>
        </AccordionTrigger>
        {item.subitems && (
          <AccordionContent className="hawa-mt-1 hawa-h-full hawa-rounded">
            <div
              className={cn(
                "hawa-flex hawa-h-full hawa-flex-col hawa-gap-2 hawa-bg-foreground/5 hawa-p-1"
              )}
            >
              {item.subitems.map((subitem, idx) => (
                <li
                  key={idx}
                  onClick={(e) => {
                    e.stopPropagation();
                    if (subitem.onClick) {
                      subitem.onClick();
                    }
                    if (onSubItemClick) {
                      onSubItemClick([item.value, subitem.value]);
                    }
                  }}
                  className={cn(
                    "hawa-flex hawa-h-full hawa-cursor-pointer hawa-flex-row hawa-items-center hawa-gap-2 hawa-rounded  hawa-p-2 hawa-transition-all hawa-overflow-x-clip hawa-whitespace-nowrap",
                    // bg-foreground/10
                    getSelectedStyle(subitem.value)
                  )}
                >
                  {subitem.icon && subitem.icon}
                  {subitem.label}
                </li>
              ))}
            </div>
          </AccordionContent>
        )}
      </AccordionItem>
    );
  } else {
    return (
      <div
        dir={direction}
        onClick={() => {
          if (item.onClick) {
            item.onClick();
          }
          if (onItemClick) {
            onItemClick([item.value]);
          }
        }}
        className={cn(
          triggerStyles,
          getSelectedStyle(item.value),
          "hawa-overflow-x-clip "
        )}
      >
        <div className={"hawa-flex hawa-flex-row hawa-items-center hawa-gap-2"}>
          {item.icon && item.icon}
          <span
            className={cn(
              "hawa-whitespace-nowrap hawa-transition-all",
              isOpen ? "hawa-opacity-100" : "hawa-opacity-0"
            )}
          >
            {item.label}
          </span>
        </div>
      </div>
    );
  }
};
export { SidebarGroup, SidebarItem };
