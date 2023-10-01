import type { Meta, StoryObj } from "@storybook/react";

// import { Button } from "../../components/elements";
import { Loading } from "../../components/elements";

// More on how to set up stories at: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
const meta = {
  title: "Elements/Loading",
  component: Loading,
  parameters: {
    layout: "centered",
  },
  // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/react/writing-docs/autodocs
  tags: ["autodocs"],
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  argTypes: {
    // design: {
    //   options: ["spinner", "dots"],
    //   control: { type: "radio" },
    // },
    // backgroundColor: { control: "color" },
  },
} satisfies Meta<typeof Loading>;

export default meta;
type Story = StoryObj<typeof Loading>;

// More on writing stories with args: https://storybook.js.org/docs/react/writing-stories/args
const StoryTemplate = (args: any) => (
  <div className="hawa-flex hawa-flex-col hawa-gap-2">
    <div className="hawa-flex hawa-flex-col hawa-gap-6 hawa-divide-y-2">
      <div className="hawa-flex hawa-flex-row hawa-gap-4 hawa-justify-between hawa-items-center hawa-w-full  ">
        <h3>Extra Small</h3>
        <Loading design={args.design} size="xs" />
      </div>
      <div className="hawa-flex hawa-flex-row hawa-gap-4 hawa-justify-between hawa-items-center hawa-w-full ">
        <h3>Button Size</h3>
        <Loading design={args.design} size="button" />
      </div>
      <div className="hawa-flex hawa-flex-row hawa-gap-4 hawa-justify-between hawa-items-center hawa-w-full ">
        <h3>Small</h3>
        <Loading design={args.design} size="sm" />
      </div>
      <div className="hawa-flex hawa-flex-row hawa-gap-4 hawa-justify-between hawa-items-center hawa-w-full ">
        <h3>Normal</h3>
        <Loading design={args.design} size="normal" />
      </div>
      <div className="hawa-flex hawa-flex-row hawa-gap-4 hawa-justify-between hawa-items-center hawa-w-full ">
        <h3>Large</h3>
        <Loading design={args.design} size="lg" />
      </div>
      <div className="hawa-flex hawa-flex-row hawa-gap-4 hawa-justify-between hawa-items-center hawa-w-full ">
        <h3>Extra Large</h3>
        <Loading design={args.design} size="xl" />
      </div>
      {/* <Loading design={args.design} size="button" />
      <Loading design={args.design} size="sm" />
      <Loading design={args.design} size="normal" />
      <Loading design={args.design} size="lg" />
      <Loading design={args.design} size="xl" /> */}
    </div>
  </div>
);
export const Spinner: Story = {
  render: (args) => <StoryTemplate {...args} />,
  args: {
    design: "dots-pulse",
  },
};
export const Dots: Story = {
  render: (args) => <StoryTemplate {...args} />,
  args: {
    design: "dots-pulse",
  },
};
