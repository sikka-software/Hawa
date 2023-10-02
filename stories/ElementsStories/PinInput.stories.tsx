import type { Meta, StoryObj } from "@storybook/react";
import { PinInput } from "../../components/elements";
import { ArgsTable, Story, Title } from "@storybook/blocks";
import { setLocale, t } from "../translations/i18n";

const meta = {
  title: "Elements/PinInput",
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
  args: {
    getPins: () => console.log("getting pins"),
    width: "normal",
    digits: 6,
  },
};
