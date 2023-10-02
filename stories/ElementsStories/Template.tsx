import type { Meta, StoryObj } from "@storybook/react";
import { Button } from "../../components/elements";
import { ArgsTable, Story, Title } from "@storybook/blocks";
import { setLocale, t } from "../translations/i18n";

const meta = {
  title: "Elements/Template",
  component: Button,
  parameters: {
    layout: "centered",
    docs: {
      page: () => (
        <>
          <h1>{"<Template/>"}</h1>
          <ArgsTable />
        </>
      ),
    },
  },
  tags: ["autodocs"],
} satisfies Meta<typeof Button>;

export default meta;
type Story = StoryObj<typeof Button>;

const Template = (args: any, globals: any) => {
  const locale = globals.globals?.locale === "ar" ? "ar" : "en";
  setLocale(locale);

  return <div>Template story</div>;
};
export const Default: Story = {
  render: () => <Template />,
};
