import type { Meta, StoryObj } from "@storybook/react";
import { AppStores } from "../../components/elements";
import { ArgsTable, Story, Title } from "@storybook/blocks";
import { setLocale, t } from "../translations/i18n";

const meta = {
  title: "Elements/AppStores",
  component: AppStores,
  parameters: {
    layout: "centered",
    docs: {
      page: () => (
        <>
          <h1>{"<AppStores/>"}</h1>
          <ArgsTable />
        </>
      ),
    },
  },
  tags: ["autodocs"],
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
  },
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
  },
};
