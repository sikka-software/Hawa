import { useState } from "react";
import type { Meta, StoryObj } from "@storybook/react";
import { AppLayout, AppTopbar, AppTabs } from "../../components";
import { ArgsTable, Story } from "@storybook/blocks";
import { setLocale, t } from "../translations/i18n";
import { useDarkMode } from "storybook-dark-mode";
import { DownloadCloud, GalleryHorizontal, KeyRound, PanelTopClose, Settings2, Smile, User2, UserSquare } from "lucide-react";

const meta = {
  title: "Layout/AppTabs",
  tags: ["autodocs"],
  component: AppTabs,
  parameters: {
    layout: "fullscreen",
    docs: {
      page: () => (
        <>
          <h1>{"<AppTabs/>"}</h1>
          <ArgsTable />
        </>
      ),
    },
  },
} satisfies Meta<typeof AppTabs>;

export default meta;
type Story = StoryObj<typeof AppTabs>;

export const Default: Story = {
  render: (args: any, globals: any) => {
    const locale = globals.globals?.locale === "ar" ? "ar" : "en";
    const dark = useDarkMode();

    return <AppTabs {...args} />;
  },
  args: {
    tabs: [
      { icon: <User2 className="hawa-icon" />, label: "Users" },
      { icon: <KeyRound className="hawa-icon" />, label: "Roles" },
      { icon: <Smile className="hawa-icon" />, label: "Customers" },
      { icon: <UserSquare className="hawa-icon" />, label: "Clients" },
      { icon: <DownloadCloud className="hawa-icon" />, label: "Invoices" },
      { icon: <PanelTopClose className="hawa-icon" />, label: "Community" },
      { icon: <Settings2 className="hawa-icon" />, label: "Settings" },
    ],
  },
  argTypes: {},
};
