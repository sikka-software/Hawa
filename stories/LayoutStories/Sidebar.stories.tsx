import type { Meta, StoryObj } from "@storybook/react";
import { Button, SidebarGroup } from "../../components";
import { ArgsTable, Story, Title } from "@storybook/blocks";
import { setLocale, t } from "../translations/i18n";
import { useState } from "react";

const meta = {
  title: "Layout/Sidebar",
  component: SidebarGroup,
  parameters: {
    docs: {
      page: () => (
        <>
          <h1>{"<SidebarGroup/>"}</h1>
          <ArgsTable />
        </>
      ),
    },
  },
  tags: ["autodocs"],
} satisfies Meta<typeof SidebarGroup>;

export default meta;
type Story = StoryObj<typeof SidebarGroup>;

let items = [
  { value: "item-1", label: "item 1" },
  {
    value: "item-2",
    label: "item 2",
    subitems: [
      { value: "subitem-1", label: "subitem 1" },
      { value: "subitem-2", label: "subitem 2" },
    ],
  },
  { value: "item-3", label: "item 3" },
  { value: "item-4", label: "item 4" },
  {
    value: "item-5",
    label: "item 5",
    subitems: [
      { value: "subitem-1", label: "subitem 1" },
      { value: "subitem-2", label: "subitem 2" },
    ],
  },
];

const Template = (args: any, globals: any) => {
  const locale = globals.globals?.locale === "ar" ? "ar" : "en";
  const direction = locale === "ar" ? "rtl" : "ltr";
  const [selectedItem, setSelectedItem] = useState<string[]>([]);
  const [val, setVal] = useState(null);
  setLocale(locale);

  return (
    <div className="hawa-max-w-xs" dir={direction}>
      <Button onClick={() => setVal(null)}>Collapse Them</Button>
      <SidebarGroup
        openedItem={val}
        setOpenedItem={(e: any) => setVal(e)}
        onItemClick={(values) => {
          console.log("Clicked main item value:", values[0]);
          setSelectedItem(values);
        }}
        onSubItemClick={(values) => {
          console.log("Parent item value:", values[0]);
          console.log("Subitem value:", values[1]);
          setSelectedItem(values);
        }}
        selectedItem={selectedItem}
        title="Group 1"
        items={items}
      />
    </div>
  );
};
export const Default: Story = {
  render: Template.bind({}),
};
