import type { Meta, StoryObj } from "@storybook/react";
import { Button, SidebarGroup } from "../../components";
import { ArgsTable, Story, Title } from "@storybook/blocks";
import { setLocale, t } from "../translations/i18n";
import { useState } from "react";

const meta = {
  title: "Layout/Sidebar",
  component: SidebarGroup,
  parameters: {
    // layout: "centered",
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
  {
    value: "item-1",
    label: "item 1",
    // icon: <FaHome />
  },
  {
    value: "item-2",
    label: "item 2",
    //   icon: <FaFolderOpen />,

    subitems: [
      {
        value: "subitem-1",
        label: "subitem 1",
        // icon: <FaFolderOpen />
      },
      {
        value: "subitem-2",
        label: "subitem 2",
        // icon: <FaFolderOpen />
      },
    ],
  },
  {
    value: "item-3",
    label: "item 3",
    //  icon: <FaPoll />
  },
  {
    value: "item-4",
    label: "item 4",
    //  icon: <FaPodcast />
  },
  {
    value: "item-5",
    label: "item 5",
    //   icon: <FaAddressBook />,
    subitems: [
      {
        value: "subitem-1",
        label: "subitem 1",
        // icon: <FaFolderOpen />
      },
      {
        value: "subitem-2",
        label: "subitem 2",
        //  icon: <FaFolderOpen />
      },
    ],
  },
];

const Template = (args: any, globals: any) => {
  const locale = globals.globals?.locale === "ar" ? "ar" : "en";
  const direction = locale === "ar" ? "rtl" : "ltr";
  setLocale(locale);
  const [selectedItem, setSelectedItem] = useState<string[]>([]);
  const [val, setVal] = useState(null);

  return (
    <div className="hawa-max-w-xs">
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
