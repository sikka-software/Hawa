import type { Meta, StoryObj } from "@storybook/react";
import { Label, Progress } from "../../components/elements";
import {
  ArgsTable,
  Story,
  Title,
  extractComponentArgTypes,
} from "@storybook/blocks";
import { setLocale, t } from "../translations/i18n";

const meta = {
  title: "Elements/Progress",
  component: Progress,
  parameters: {
    // layout: "centered",
    docs: {
      extractArgTypes: () => ({
        value: {
          name: "value",
          description: "The position of the progress bar, out of 100",
          type: "number",
        },
      }),
      page: () => (
        <>
          <h1>{"<Progress/>"}</h1>
          <ArgsTable />
        </>
      ),
    },
  },
  tags: ["autodocs"],
} satisfies Meta<typeof Progress>;

export default meta;
type Story = StoryObj<typeof Progress>;

const Template = (args: any, globals: any) => {
  const locale = globals.globals?.locale === "ar" ? "ar" : "en";
  setLocale(locale);

  return (
    <div className="hawa-flex hawa-flex-col hawa-gap-2 hawa-max-w-md">
      <Label>Progress Component</Label>
      <Progress value={33} />
    </div>
  );
};
export const Default: Story = {
  render: (args) => (
    <div className="hawa-flex hawa-flex-col hawa-gap-2 hawa-max-w-md">
      <Label>Progress Component</Label>
      <Progress {...args} />
    </div>
  ),
  args: {
    value: 22,
  },

  argTypes: {
    value: {
      name: "value",
      description: "The position of the progress bar, out of 100",
      type: "number",
    },
  },
};
