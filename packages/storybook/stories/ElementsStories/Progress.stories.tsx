import { ArgsTable, Story } from "@storybook/blocks";
import type { Meta, StoryObj } from "@storybook/react";

import { Label } from "@sikka/hawa/label";
import { Progress } from "@sikka/hawa/progress";

import { setLocale, t } from "../../translations/i18n";

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
          type: "number"
        }
      }),
      page: () => (
        <>
          <h1>{"<Progress/>"}</h1>
          <ArgsTable />
        </>
      )
    }
  },
  tags: ["autodocs"]
} satisfies Meta<typeof Progress>;

export default meta;
type Story = StoryObj<typeof Progress>;

export const Default: Story = {
  render: (args) => (
    <div className="hawa-flex hawa-max-w-md hawa-flex-col hawa-gap-2">
      <Label>Progress Component</Label>
      <Progress {...args} />
    </div>
  ),
  args: {
    value: 22
  },

  argTypes: {
    value: {
      name: "value",
      description: "The position of the progress bar, out of 100",
      type: "number"
    }
  }
};
