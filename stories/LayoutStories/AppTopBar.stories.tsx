import { useState } from "react";
import type { Meta, StoryObj } from "@storybook/react";
import { AppLayout, AppTopbar, Button } from "../../components";
import { ArgsTable, Story } from "@storybook/blocks";
import { setLocale, t } from "../translations/i18n";
import { useDarkMode } from "storybook-dark-mode";

const meta = {
  title: "Layout/App Topbar",
  tags: ["autodocs"],
  component: AppLayout,
  parameters: {
    docs: {
      page: () => (
        <>
          <h1>{"<AppLayout/>"}</h1>
          <ArgsTable />
        </>
      ),
    },
  },
} satisfies Meta<typeof AppLayout>;

export default meta;
type Story = StoryObj<typeof AppLayout>;

export const Default: Story = {
  render: (args: any, globals: any) => {
    const locale = globals.globals?.locale === "ar" ? "ar" : "en";
    const dark = useDarkMode();
    const direction = locale === "ar" ? "rtl" : "ltr";

    return (
      <AppTopbar
        avatarImage="https://source.unsplash.com/tVqQSfXQ_SI"
        profileMenuItems={[
          { label: "Profile", value: "Dashboard" },
          { value: "Billing", label: "Billing" },
          { value: "عربي", label: "عربي" },
          { label: "Sign Out", value: "Sign Out", highlighted: true },
        ]}
      />
    );
  },
  args: {},
  argTypes: {},
};
