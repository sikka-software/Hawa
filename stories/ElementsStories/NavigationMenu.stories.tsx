import type { Meta, StoryObj } from "@storybook/react";
import { Button, NavigationMenu } from "../../components/elements";
import { ArgsTable, Story, Title } from "@storybook/blocks";
import { setLocale, t } from "../translations/i18n";
import { useState } from "react";

const meta = {
  title: "Elements/Navigation Menu",
  component: NavigationMenu,
  parameters: {
    // backgrounds: {
    //   default: "offwhite",
    //   values: [{ name: "offwhite", value: "#ededed" }],
    // },
    // layout: "centered",
    docs: {
      page: () => (
        <>
          <h1>{"<NavigationMenu/>"}</h1>
          <ArgsTable />
        </>
      ),
    },
  },
  tags: ["autodocs"],
} satisfies Meta<typeof NavigationMenu>;

export default meta;
type Story = StoryObj<typeof NavigationMenu>;

const Template = (args: any, globals: any) => {
  const locale = globals.globals?.locale === "ar" ? "ar" : "en";
  setLocale(locale);

  return <div>NavigationMenu story</div>;
};

export const Default: Story = {
  render: () => {
    return (
      <NavigationMenu
        items={[
          {
            trigger: "item 1",
            content: (
              <div className="hawa-bg-red-500 hawa-p-4">This is a html element</div>
            ),
          },
          {
            trigger: "item 2",
          },
          {
            trigger: "item 3",
            content: <div>something here</div>,
          },
        ]}
      />
    );
  },
};
