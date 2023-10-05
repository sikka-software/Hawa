import type { Meta, StoryObj } from "@storybook/react";
import { Usage } from "../../../components";
import { ArgsTable, Story, Title } from "@storybook/blocks";
import { setLocale, t } from "../../translations/i18n";

const meta = {
  title: "Blocks/Misc/Usage",
  component: Usage,
  parameters: {
    // layout: "centered",
    docs: {
      page: () => (
        <>
          <h1>{"<Usage/>"}</h1>
          <ArgsTable />
        </>
      ),
    },
  },
  tags: ["autodocs"],
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
    // helperText: "warning",
    currentUsage: "22.11 MB",
    percent: 40,
    title: "Storage",
    tooltip: "22.32 MB / 1 GB ",
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
    // helperText: {
    //   control: "text",
    //   description: "The content text of the alert",
    // },
    // variant: {
    //   control: "select",
    //   options: ["plain", "contained", "outlined"],
    // },
  },
};
