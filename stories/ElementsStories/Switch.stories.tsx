import { ArgsTable, Story, Markdown } from "@storybook/blocks";
import type { Meta, StoryObj } from "@storybook/react";

import { Switch } from "@elements/switch";

const meta = {
  title: "Elements/Switch",
  component: Switch,
  parameters: {
    layout: "centered",
    docs: {
      page: () => (
        <>
          <h1>{"<Switch/>"}</h1>
          <ArgsTable />
          <p>
            In order to to use switch as RTL, you must wrap it with a component
            that has a direction of 'rtl'.
            <Markdown
              children="
              ```jsx
              <div dir='rtl'>
                  <Switch/>
              </div>
              ```
              "
            />
          </p>
        </>
      )
    }
  },
  tags: ["autodocs"]
} satisfies Meta<typeof Switch>;

export default meta;
type Story = StoryObj<typeof Switch>;

export const Default: Story = {
  render: (args: any) => <Switch {...args} />,
  argTypes: { onCheckedChange: { action: "onCheckedChange" } }
};
export const withLabel: Story = {
  render: () => <Switch label="This is a switch component" />
};
export const Sizes: Story = {
  render: () => (
    <div className="hawa-flex hawa-flex-col hawa-gap-4">
      <Switch size="sm" label="Small" />
      <Switch size="default" label="Default" />
      <Switch size="lg" label="Large" />
    </div>
  )
};
export const Direction: Story = {
  render: () => (
    <div className="hawa-flex hawa-flex-col hawa-gap-4">
      <Switch label="LTR" />
      <div dir="rtl">
        <Switch label="RTL" />
      </div>
    </div>
  )
};
export const Roundedness: Story = {
  render: () => (
    <div className="hawa-flex hawa-flex-col hawa-gap-4">
      <Switch roundedness="none" label="None" />
      <Switch roundedness="full" label="Full" />
      <Switch roundedness="inherit" label="Inherit" />
    </div>
  )
};
