import { Story } from "@storybook/blocks";
import type { Meta, StoryObj } from "@storybook/react";

import { Label } from "@sikka/hawa/elements/label";
import { Progress } from "@sikka/hawa/elements/progress";

const meta = {
  title: "Elements/Progress",
  component: Progress
} satisfies Meta<typeof Progress>;

export default meta;
type Story = StoryObj<typeof Progress>;

const Default: Story = {
  render: (args) => (
    <div className="hawa-flex hawa-max-w-md hawa-flex-col hawa-gap-2">
      <Progress label="Progress Component" {...args} />
    </div>
  ),
  args: { value: 22 },
  argTypes: {
    value: {
      name: "value",
      description: "The position of the progress bar, out of 100",
      type: "number"
    }
  }
};

export { Default as Progress };
