import type { Meta, StoryObj } from "@storybook/react";
import { Button, Logos, Navbar } from "../../components";
import { ArgsTable, Story, Title } from "@storybook/blocks";
import { setLocale, t } from "../translations/i18n";
import {
  BarChart,
  FolderArchive,
  FolderClosed,
  LayoutDashboard,
  PhoneCall,
  Users2,
} from "lucide-react";
import { useState } from "react";

const meta = {
  title: "Layout/Navbar",
  component: Navbar,
  parameters: {
    layout: "fullscreen",
    docs: {
      page: () => (
        <>
          <h1>{"<Navbar/>"}</h1>
          <ArgsTable />
        </>
      ),
    },
  },
  tags: ["autodocs"],
} satisfies Meta<typeof Navbar>;

export default meta;
type Story = StoryObj<typeof Navbar>;

export const Default: Story = {
  render: (args: any, globals: any) => {
    const locale = globals.globals?.locale === "ar" ? "ar" : "en";
    const direction = locale === "ar" ? "rtl" : "ltr";
    setLocale(locale);
    return (
      <div>
        <Navbar
          menuItems={[
            {
              label: "item 1",
              trigger: "item 1",
              action: () => console.log("clicked on item 1"),
            },
            {
              label: "item 2",
              trigger: "item 2",
              action: () => console.log("clicked on item 2"),
            },
            {
              label: "item 3",
              trigger: "item 3",
              action: () => console.log("clicked on item 3"),
            },
          ]}
          logo={<Logos.sikka className="hawa-h-6 hawa-w-6" />}
          buttons={
            <>
              <Button>Login</Button>
              <Button>Login</Button>
              <Button>Login</Button>
            </>
          }
        />
        <div className="hawa-bg-card hawa-h-[calc(200dvh)] hawa-p-10 hawa-m-2 hawa-rounded hawa-border-spacing-3 hawa-border-dashed hawa-border-2 hawa-border-gray-500">
          Content Area
        </div>
      </div>
    );
  },
};
