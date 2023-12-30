import { Story } from "@storybook/blocks";
import type { Meta, StoryObj } from "@storybook/react";

import { AppStores } from "@/packages/components/elements/appStores";

import { setLocale } from "../../translations/i18n";

const meta = {
  title: "Elements/AppStores",
  component: AppStores,
  parameters: { layout: "centered" }
} satisfies Meta<typeof AppStores>;

export default meta;
type Story = StoryObj<typeof AppStores>;

export const AppleBadge: Story = {
  render: (args: any, globals: any) => {
    const locale = globals.globals?.locale === "ar" ? "ar" : "en";
    setLocale(locale);

    return (
      <div>
        <AppStores store="apple" {...args} />
      </div>
    );
  }
};
export const GoogleBadge: Story = {
  render: (args: any, globals: any) => {
    const locale = globals.globals?.locale === "ar" ? "ar" : "en";
    setLocale(locale);

    return (
      <div>
        <AppStores store="google" {...args} />
      </div>
    );
  }
};
