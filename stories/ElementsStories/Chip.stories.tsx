import type { Meta, StoryObj } from "@storybook/react";
import { Chip } from "../../components/elements";
import { ArgsTable, Story, Title } from "@storybook/blocks";
import { setLocale, t } from "../translations/i18n";
import { Flame, KeyIcon, KeyRound } from "lucide-react";

const meta = {
  title: "Elements/Chip",
  component: Chip,
  parameters: {
    // layout: "centered",
    docs: {
      page: () => (
        <>
          <h1>{"<Chip/>"}</h1>
          <ArgsTable />
        </>
      ),
    },
  },
  tags: ["autodocs"],
} satisfies Meta<typeof Chip>;

export default meta;
type Story = StoryObj<typeof Chip>;

export const Colors: Story = {
  render: () => (
    <div className="hawa-flex hawa-flex-row hawa-gap-2">
      <Chip size="normal" label="Red" color={"red"} />
      <Chip size="normal" label="Green" color={"green"} />
      <Chip size="normal" label="Blue" color={"blue"} />
      <Chip size="normal" label="Yellow" color={"yellow"} />
      <Chip size="normal" label="Purple" color={"purple"} />
      <Chip size="normal" label="Cyan" color={"cyan"} />
      <Chip size="normal" label="Hyper" color={"hyper"} />
      <Chip size="normal" label="Oceanic" color={"oceanic"} />
      <Chip size="normal" label="No Color" />
    </div>
  ),
};
export const Sizes: Story = {
  render: () => (
    <div className="hawa-flex hawa-flex-row hawa-gap-2">
      <Chip size="small" label="Small" color={"green"} />
      <Chip size="normal" label="Normal" color={"green"} />
      <Chip size="large" label="Large" color={"green"} />
    </div>
  ),
};
export const AsStatus: Story = {
  render: () => (
    <div className="hawa-flex hawa-flex-row hawa-gap-2">
      <Chip
        size="normal"
        label="Unavailable"
        dotType="unavailable"
        color="red"
      />
      <Chip size="normal" label="Available" dotType="available" color="green" />
    </div>
  ),
};
export const WithIcons: Story = {
  render: () => (
    <div className="hawa-flex hawa-flex-row hawa-gap-2">
      <Chip
        icon={<KeyRound className="hawa-icon" />}
        size="normal"
        label="Unavailable"
        color="red"
      />
      <Chip size="normal" label="Available" dotType="available" color="green" />
      <Chip
        size="large"
        label="Available"
        icon={<Flame className="hawa-icon" />}
        color="hyper"
      />
    </div>
  ),
};
export const Radius: Story = {
  render: () => (
    <div className="hawa-flex hawa-flex-row hawa-gap-2">
      <Chip radius="none" size="large" label="None" color="green" />
      <Chip radius="inherit" size="large" label="Inherit" color="green" />
      <Chip radius="full" size="large" label="Full" color="green" />
    </div>
  ),
};
