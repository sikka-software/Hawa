import { Story } from "@storybook/blocks";
import type { Meta, StoryObj } from "@storybook/react";

import { PinInput } from "@sikka/hawa/elements/pinInput";

const meta = {
  title: "Elements/Inputs/Pin Input",
  component: PinInput,
} satisfies Meta<typeof PinInput>;

export default meta;
type Story = StoryObj<typeof PinInput>;

export const Default: Story = {
  name: "Pin Input",
  render: (args) => <PinInput {...args} />,
  parameters: { backgrounds: { default: "offwhite" } },
  args: {
    maxLength: 12,
    pattern: "^[0-9a-zA-Z]*$",
    separatorPosition: 50,
  },
};
