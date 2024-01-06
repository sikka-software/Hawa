import { ArgsTable, Story } from "@storybook/blocks";
import type { Meta, StoryObj } from "@storybook/react";
import { useDarkMode } from "storybook-dark-mode";

import { AppLayout, AppTopbar } from "@sikka/hawa/layout";

const meta = {
  title: "Layout/App Topbar",
  component: AppLayout
} satisfies Meta<typeof AppLayout>;

export default meta;
type Story = StoryObj<typeof AppLayout>;

export const Default: Story = {
  render: (args: any, globals: any) => {
    const locale = globals.globals?.locale === "ar" ? "ar" : "en";
    const dark = useDarkMode();

    return (
      <AppTopbar
        avatarImage="https://source.unsplash.com/tVqQSfXQ_SI"
        profileMenuItems={[
          { label: "Profile", value: "Dashboard" },
          { value: "Billing", label: "Billing" },
          { value: "عربي", label: "عربي" },
          { label: "Sign Out", value: "Sign Out", highlighted: true }
        ]}
      />
    );
  }
};
