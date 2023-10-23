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
    // layout: "fullscreen",
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
          // menuItems={[
          //   {
          //     trigger: "item 2",
          //     action: () => console.log("clicked on item"),
          //   },
          //   {
          //     trigger: "item 3",
          //     content: <div className="hawa-p-4">something here</div>,
          //   },
          // ]}
          logo={<Logos.sikka className="hawa-h-6 hawa-w-6" />}
          buttons={
            <>
              <Button>Login</Button>
              <Button>Login</Button>
              <Button>Login</Button>
            </>
          }
        />
      </div>
    );
  },
};
