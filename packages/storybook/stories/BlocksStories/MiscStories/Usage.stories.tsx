import { Story } from "@storybook/blocks";
import type { Meta, StoryObj } from "@storybook/react";

import { Usage } from "@sikka/hawa/blocks";

const meta = {
  title: "Blocks/Misc/Usage",
  component: Usage
} satisfies Meta<typeof Usage>;

export default meta;
type Story = StoryObj<typeof Usage>;

export const Default: Story = {
  render: (args) => (
    <div className="hawa-max-w-md">
      <Usage {...args} />
    </div>
  ),
  args: {
    currentUsage: "22.11 MB",
    percent: 40,
    title: "Storage",
    tooltip: "22.32 MB / 1 GB "
  }
};
