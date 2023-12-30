import { useState } from "react";

import { Story } from "@storybook/blocks";
import type { Meta, StoryObj } from "@storybook/react";

import { AppSidebarItemProps, SidebarGroup } from "@/packages/components/layout/sidebar";

import { Button } from "@/packages/components/elements/button";

import { setLocale, t } from "../translations/i18n";

const meta = {
  title: "Layout/Sidebar",
  component: SidebarGroup
} satisfies Meta<typeof SidebarGroup>;

export default meta;
type Story = StoryObj<typeof SidebarGroup>;

let items: AppSidebarItemProps[] = [
  { value: "item-1", label: "item 1" },
  {
    value: "item-2",
    label: "item 2 (With subitems)",
    subitems: [
      { value: "subitem-1", label: "subitem 1" },
      { value: "subitem-2", label: "subitem 2" }
    ]
  },
  {
    value: "item-3",
    label: "item 3",
    badge: { label: "with badge", color: "oceanic" }
  },
  { value: "item-4", label: "item 4" },
  {
    value: "item-5",
    label: "item 5 (With subitems)",
    subitems: [
      { value: "subitem-1", label: "subitem 1" },
      { value: "subitem-2", label: "subitem 2" }
    ]
  }
];

const Template = (args: any, globals: any) => {
  const locale = globals.globals?.locale === "ar" ? "ar" : "en";
  const direction = locale === "ar" ? "rtl" : "ltr";
  const [selectedItem, setSelectedItem] = useState<string[]>([]);
  const [val, setVal] = useState<any>(null);
  setLocale(locale);

  return (
    <div
      className="hawa-flex hawa-max-w-xs hawa-flex-col hawa-gap-4"
      dir={direction}
    >
      <Button onClick={() => setVal(null)}>Collapse All</Button>
      <div
        className="hawa-max-w-xs hawa-rounded hawa-border hawa-bg-card"
        dir={direction}
      >
        <SidebarGroup
          openedItem={val}
          setOpenedItem={(e: any) => setVal(e)}
          onItemClick={(values) => {
            console.log("Clicked main item value:", values[0]);
            setVal(values[1]);
          }}
          onSubItemClick={(values) => {
            console.log("Parent item value:", values[0]);
            console.log("Subitem value:", values[1]);
            setVal(values[1]);
          }}
          selectedItem={selectedItem}
          // title="Group 1"
          items={items}
        />
      </div>
    </div>
  );
};
export const Default: Story = {
  render: Template.bind({})
};
