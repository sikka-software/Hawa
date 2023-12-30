import { Story } from "@storybook/blocks";
import type { Meta, StoryObj } from "@storybook/react";

import { Usage } from "@/packages/components/blocks/Usage";

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
    // label: "Profit",
    // number: "SAR 333.22",
    // variant: "contained",
    currentUsage: "22.11 MB",
    percent: 40,
    title: "Storage",
    tooltip: "22.32 MB / 1 GB "
  },
  argTypes: {
    // label: {
    //   control: "text",
    //   description: "The title of the alert in bold",
    // },
    // number: {
    //   control: "text",
    //   description: "The content text of the alert",
    // },
    // variant: {
    //   control: "select",
    //   options: ["plain", "contained", "outlined"],
    // },
  }
};
