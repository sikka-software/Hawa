import * as React from "react"
import * as AccordionPrimitive from "@radix-ui/react-accordion"

import { cn } from "../util"

const Accordion = AccordionPrimitive.Root

let triggerStyles =
  "flex flex-1 items-center cursor-pointer bg-primary-foreground rounded justify-between p-2 px-3 font-medium transition-all  [&[data-state=open]>svg]:-rotate-90"
const AccordionItem = React.forwardRef<
  React.ElementRef<typeof AccordionPrimitive.Item>,
  React.ComponentPropsWithoutRef<typeof AccordionPrimitive.Item>
>(({ className, ...props }, ref) => (
  <AccordionPrimitive.Item ref={ref} className={cn(className)} {...props} />
))
AccordionItem.displayName = "AccordionItem"

const AccordionTrigger = React.forwardRef<
  React.ElementRef<typeof AccordionPrimitive.Trigger>,
  React.ComponentPropsWithoutRef<typeof AccordionPrimitive.Trigger>
>(({ className, children, ...props }, ref) => (
  <AccordionPrimitive.Header className="flex">
    <AccordionPrimitive.Trigger
      ref={ref}
      className={cn(triggerStyles, className)}
      {...props}
    >
      {children}
      <svg
        aria-label="Chevron Right Icon"
        stroke="currentColor"
        fill="currentColor"
        stroke-width="1"
        viewBox="0 0 16 16"
        height="1em"
        width="1em"
        className="h-4 w-4 shrink-0 rotate-90 transition-transform duration-200"
      >
        <path
          fill-rule="evenodd"
          d="M4.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L10.293 8 4.646 2.354a.5.5 0 0 1 0-.708z"
        ></path>
      </svg>
    </AccordionPrimitive.Trigger>
  </AccordionPrimitive.Header>
))
AccordionTrigger.displayName = AccordionPrimitive.Trigger.displayName

const AccordionContent = React.forwardRef<
  React.ElementRef<typeof AccordionPrimitive.Content>,
  React.ComponentPropsWithoutRef<typeof AccordionPrimitive.Content>
>(({ className, children, ...props }, ref) => (
  <AccordionPrimitive.Content
    ref={ref}
    className={cn(
      "overflow-hidden text-sm transition-all data-[state=closed]:animate-accordion-up data-[state=open]:animate-accordion-down",
      className
    )}
    {...props}
  >
    <div>{children}</div>
  </AccordionPrimitive.Content>
))
AccordionContent.displayName = AccordionPrimitive.Content.displayName

type Item = {
  value: string
  label: string
  icon?: any
  subitems?: SubItem[]
  onClick?: () => void
}
type SubItem = {
  value: string
  label: string
  icon?: any
  onClick?: () => void
}
interface SidebarGroupProps {
  title?: string
  items: Item[]
  collapsed?: any
  selectedItem?: any
  isOpen?: boolean
  onItemClick?: (value: string[]) => void
  onSubItemClick?: (values: string[]) => void
}
interface SidebarRootProps {
  children: any
}

const SidebarRoot: React.FC<SidebarRootProps> = ({ children }) => (
  <div className="flex flex-col gap-2">{children}</div>
)
const SidebarGroup: React.FC<SidebarGroupProps> = ({
  title,
  items,
  selectedItem,
  collapsed,
  onItemClick,
  onSubItemClick,
  isOpen,
}) => {
  React.useEffect(() => {
    if (collapsed) {
      // Logic to close all groups
    }
  }, [collapsed])

  return (
    <div>
      {title && <h3 className="mb-1 font-bold">{title}</h3>}
      <ul className="flex flex-col gap-2">
        <Accordion
          type="single"
          // defaultValue="item-1"
          collapsible
          className="flex flex-col gap-1"
        >
          {items.map((item, idx) => (
            <SidebarItem
              isOpen={isOpen}
              isSelected={selectedItem}
              key={idx}
              item={item}
              onItemClick={onItemClick}
              onSubItemClick={onSubItemClick}
            />
          ))}
        </Accordion>
      </ul>
    </div>
  )
}
const SidebarItem: React.FC<{
  item: Item
  isSelected: any
  onItemClick?: (value: string[]) => void
  onSubItemClick?: (values: string[]) => void
  isOpen?: boolean
}> = ({ item, isSelected, onItemClick, onSubItemClick, isOpen = true }) => {
  const getSelectedStyle = (value: string, index: number) => {
    return isSelected && isSelected[index] === value
      ? "bg-primary text-primary-foreground  cursor-default"
      : ""
  }
  if (item.subitems) {
    return (
      <AccordionItem value={item.value} className="overflow-x-clip">
        <AccordionTrigger
          className={cn(getSelectedStyle(item.value, 0), "hover:bg-primary/30")}
        >
          <div className={"flex flex-row items-center gap-2 "}>
            {item.icon}
            {/* {isOpen ? item.label : ""} */}

            <span
              className={cn(
                "transition-all",
                isOpen ? "opacity-100" : "opacity-0"
              )}
            >
              {item.label}
            </span>
          </div>
        </AccordionTrigger>
        {item.subitems && (
          <AccordionContent className=" mt-1 h-full rounded  ">
            <div
              className={cn("flex h-full flex-col gap-2 bg-foreground/5 p-1")}
            >
              {item.subitems.map((subitem, idx) => (
                <li
                  onClick={(e) => {
                    e.stopPropagation()
                    if (onSubItemClick) {
                      onSubItemClick([item.value, subitem.value])
                    }
                  }}
                  className={cn(
                    "flex h-full cursor-pointer flex-row items-center gap-2 rounded bg-foreground/10 p-2 transition-all hover:bg-foreground/30",
                    getSelectedStyle(subitem.value, 1)
                  )}
                  key={idx}
                >
                  {subitem.icon}
                  {subitem.label}
                </li>
              ))}
            </div>
          </AccordionContent>
        )}
      </AccordionItem>
    )
  } else {
    return (
      <div
        onClick={() => {
          if (onItemClick) {
            onItemClick([item.value])
          }
        }}
        className={cn(
          triggerStyles,
          getSelectedStyle(item.value, 0),
          "overflow-x-clip hover:bg-primary/30"
        )}
      >
        <div className={"flex flex-row items-center gap-2 "}>
          {item.icon}
          <span
            className={cn(
              "transition-all",
              isOpen ? "opacity-100" : "opacity-0"
            )}
          >
            {item.label}
          </span>
        </div>
      </div>
    )
  }
}
export { SidebarRoot, SidebarGroup, SidebarItem }
