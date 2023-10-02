import type { Meta, StoryObj } from "@storybook/react";
import { Label, Skeleton } from "../../components/elements";
import { ArgsTable, Story, Title } from "@storybook/blocks";
import { setLocale, t } from "../translations/i18n";

const meta = {
  title: "Elements/Label",
  component: Label,
  parameters: {
    layout: "centered",
    docs: {
      page: () => (
        <>
          <h1>{"<Label/>"}</h1>
          <ArgsTable />
        </>
      ),
    },
  },
  tags: ["autodocs"],
} satisfies Meta<typeof Label>;

export default meta;
type Story = StoryObj<typeof Label>;

const Template = (args: any, globals: any) => {
  const locale = globals.globals?.locale === "ar" ? "ar" : "en";
  setLocale(locale);

  return (
    <div>
      <Label>This is a label</Label>
      <Skeleton className="hawa-w-64 hawa-h-10" />
    </div>
  );
};
export const Default: Story = {
  render: () => <Template />,
};
