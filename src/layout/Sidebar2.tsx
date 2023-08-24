import {
  AccordionItem,
  AccordionTrigger,
  AccordionContent,
  Accordion,
} from "@radix-ui/react-accordion"
import React from "react"
import { cn } from "../util"

type Item = {
  value: string
  label: string
  icon?: any
  subitems?: Item[]
}

interface SidebarGroupProps {
  title: string
  items: Item[]
}
interface SidebarRootProps {
  children: any
}

const SidebarRoot: React.FC<SidebarRootProps> = ({ children }) => (
  <div className="flex flex-col gap-2 rounded bg-red-200 p-2">{children}</div>
)

const SidebarGroup: React.FC<SidebarGroupProps> = ({ title, items }) => (
  <div>
    <h3 className="mb-1 font-bold">{title}</h3>
    <ul className="flex flex-col gap-2">
      {items.map((item, idx) => (
        <SidebarItem key={idx} item={item} />
      ))}
    </ul>
  </div>
)

const SidebarItem: React.FC<{ item: Item }> = ({ item }) => (
  // <li className="rounded bg-red-400 p-2">
  <Accordion
    // className="bg-mauve6 w-[300px] rounded-md shadow-[0_2px_10px] shadow-black/5"
    type="single"
    defaultValue="item-1"
    collapsible
  >
    <AccordionItem value={item.value}>
      <AccordionTrigger
        className={cn()
        // "flex flex-1 items-center justify-between py-4 font-medium transition-all hover:underline [&[data-state=open]>svg]:rotate-180",
        // className
        }
      >
        <div className="flex flex-row items-center gap-2">
          {item.icon}
          {item.label}
        </div>
      </AccordionTrigger>

      {item.subitems && (
        <AccordionContent
        //  className="flex flex-col gap-1 bg-blue-400"
        >
          {item.subitems.map((subitem, idx) => (
            <li className="rounded bg-yellow-300 p-1" key={idx}>
              {subitem.label}
            </li>
          ))}
        </AccordionContent>
      )}
    </AccordionItem>
  </Accordion>
  // </li>
)

export { SidebarRoot, SidebarGroup, SidebarItem }
