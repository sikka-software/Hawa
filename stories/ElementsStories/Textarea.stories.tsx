import type { Meta, StoryObj } from "@storybook/react";
import { Label, Textarea } from "../../components/elements";
import { ArgsTable, Story } from "@storybook/blocks";
import { setLocale } from "../translations/i18n";

const meta = {
  title: "Elements/Textarea",
  component: Textarea,
  parameters: {
    layout: "centered",
    docs: {
      page: () => (
        <>
          <h1>{"<Textarea/>"}</h1>
          <ArgsTable />
        </>
      ),
    },
  },
  tags: ["autodocs"],
} satisfies Meta<typeof Textarea>;

export default meta;
type Story = StoryObj<typeof Textarea>;

const Template = (args: any, globals: any) => {
  const locale = globals.globals?.locale === "ar" ? "ar" : "en";
  setLocale(locale);

  return (
    <div className="hawa-w-64 hawa-flex hawa-flex-col hawa-gap-4">
      <Label>Textarea Component</Label>
      <Textarea />
    </div>
  );
};
export const Default: Story = {
  render: Template.bind({}),
};
