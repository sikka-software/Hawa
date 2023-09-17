import * as React from "react"
import * as AccordionPrimitive from "@radix-ui/react-accordion"
import { cn } from "../util"

const Accordion = AccordionPrimitive.Root

let triggerStyles =
  "flex flex-1 items-center select-none cursor-pointer bg-primary-foreground rounded justify-between p-2 px-3 font-medium transition-all  [&[data-state=open]>svg]:-rotate-90"
const AccordionItem = React.forwardRef<
  React.ElementRef<typeof AccordionPrimitive.Item>,
  React.ComponentPropsWithoutRef<typeof AccordionPrimitive.Item>
>(({ className, ...props }, ref) => (
  <AccordionPrimitive.Item ref={ref} className={cn(className)} {...props} />
))
AccordionItem.displayName = "AccordionItem"

type AccordionTriggerProps = React.ComponentPropsWithoutRef<
  typeof AccordionPrimitive.Trigger
> & {
  showArrow?: any
}

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
          className="h-4 w-4 shrink-0 rotate-90 transition-transform duration-200"
        >
          <path d="M4.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L10.293 8 4.646 2.354a.5.5 0 0 1 0-.708z"></path>
        </svg>
      )}
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
  openedItem?: any
  setOpenedItem?: any
  selectedItem?: any
  isOpen?: boolean
  onItemClick?: (value: string[]) => void
  onSubItemClick?: (values: string[]) => void
  direction?: "rtl" | "ltr"
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
  return (
    <div>
      {title && <h3 className="mb-1 font-bold">{title}</h3>}
      <ul className="flex flex-col gap-2">
        <Accordion
          value={openedItem}
          type="single"
          onValueChange={(e) => {
            setOpenedItem(e)
          }}
          collapsible
          className="flex flex-col gap-1"
        >
          {items.map((item, idx) => (
            <SidebarItem
              isOpen={isOpen}
              isSelected={selectedItem}
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
  )
}
const SidebarItem: React.FC<{
  item: Item
  isSelected: any
  direction?: "rtl" | "ltr"

  onItemClick?: (value: string[]) => void
  onSubItemClick?: (values: string[]) => void
  isOpen?: boolean
}> = ({
  item,
  isSelected,
  onItemClick,
  onSubItemClick,
  direction,
  isOpen = true,
}) => {
  const getSelectedStyle = (value: string, index: number) => {
    return isSelected && isSelected[index] === value
      ? "bg-primary text-primary-foreground  cursor-default"
      : "hover:bg-primary/10"
  }
  if (item.subitems) {
    return (
      <AccordionItem
        value={item.value}
        className="overflow-x-clip"
        dir={direction}
      >
        <AccordionTrigger
          className={cn(getSelectedStyle(item.value, 0))}
          showArrow={isOpen}
        >
          <div
            className={cn(
              !isOpen && "py-1",
              "flex w-fit flex-row items-center  gap-2"
            )}
          >
            {item.icon}
            {isOpen && (
              <span
                className={cn(
                  "transition-all ",
                  isOpen ? "opacity-100" : "opacity-0"
                )}
              >
                {item.label}
              </span>
            )}
          </div>
        </AccordionTrigger>
        {item.subitems && (
          <AccordionContent className=" mt-1 h-full rounded  ">
            <div
              className={cn("flex h-full flex-col gap-2 bg-foreground/5 p-1")}
            >
              {item.subitems.map((subitem, idx) => (
                <li
                  key={idx}
                  onClick={(e) => {
                    e.stopPropagation()
                    item.onClick()
                    if (onSubItemClick) {
                      onSubItemClick([item.value, subitem.value])
                    }
                  }}
                  className={cn(
                    "flex h-full cursor-pointer flex-row items-center gap-2 rounded bg-foreground/10 p-2 transition-all",
                    getSelectedStyle(subitem.value, 1)
                  )}
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
        dir={direction}
        onClick={() => {
          item.onClick()
          if (onItemClick) {
            onItemClick([item.value])
          }
        }}
        className={cn(
          triggerStyles,
          getSelectedStyle(item.value, 0),
          "overflow-x-clip "
        )}
      >
        <div className={"flex flex-row items-center gap-2 "}>
          {item.icon}
          <span
            className={cn(
              "whitespace-nowrap transition-all",
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
export { SidebarGroup, SidebarItem }
