import type { Meta, StoryObj } from "@storybook/react";
import { PinInput } from "../../components/elements";
import { ArgsTable, Story } from "@storybook/blocks";

const meta = {
  title: "Elements/Inputs/Pin Input",
  component: PinInput,
  parameters: {
    backgrounds: {
      default: "offwhite",
      values: [{ name: "offwhite", value: "#ededed" }],
    },
    layout: "centered",

    docs: {
      page: () => (
        <>
          <h1>{"<PinInput/>"}</h1>
          <ArgsTable />
        </>
      ),
    },
  },
  tags: ["autodocs"],
} satisfies Meta<typeof PinInput>;

export default meta;
type Story = StoryObj<typeof PinInput>;

export const Default: Story = {
  render: (args) => <PinInput {...args} />,
  parameters: {
    backgrounds: { default: "offwhite" },
  },
  args: {
    getPins: () => console.log("getting pins"),
    width: "normal",
    digits: 6,
  },
};
