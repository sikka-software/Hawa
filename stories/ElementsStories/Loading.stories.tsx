import type { Meta, StoryObj } from "@storybook/react";
import { ArgsTable, Title } from "@storybook/blocks";
// import { Button } from "../../components/elements";
import { CodeBlock, Loading } from "../../components/elements";

const meta = {
  title: "Elements/Loading",
  component: Loading,
  parameters: {
    docs: {
      page: () => (
        <>
          <h1>{"<Loading/>"}</h1>
          <span>
            The Loading component provides visual feedback during data fetching
            or other asynchronous tasks. It offers two design variations: a
            spinner and a dots-pulse animation (more to come). <br /> This
            loading component is already built-in{" "}
            <span className="inline-code">{"<Button/>"}</span> and other
            components & blocks.
          </span>
          <ArgsTable />
        </>
      ),
    },
  },
  tags: ["autodocs"],
  argTypes: {
    design: {
      options: ["spinner", "dots"],
      control: { type: "radio" },
    },
  },
} satisfies Meta<typeof Loading>;

export default meta;
type Story = StoryObj<typeof Loading>;

const Template = (args: any) => {
  let sizes = [
    { prop: "xl", title: "Extra Large" },
    { prop: "lg", title: "Large" },
    { prop: "normal", title: "Normal" },
    { prop: "sm", title: "Small" },
    { prop: "button", title: "Button Size" },
    { prop: "xs", title: "Extra Small" },
  ];
  return (
    <div className="hawa-flex hawa-flex-col hawa-gap-2">
      <div className="hawa-flex hawa-flex-row hawa-gap-6 ">
        {sizes.map((s) => (
          <div className=" hawa-p-4 hawa-border hawa-flex hawa-flex-col hawa-gap-4 hawa-justify-between hawa-items-center hawa-w-full  ">
            <h3>{s.title}</h3>
            <Loading
              design={args.design}
              size={s.prop as "xs" | "button" | "sm" | "normal" | "lg" | "xl"}
            />
          </div>
        ))}
      </div>
    </div>
  );
};
export const Spinner: Story = {
  render: (args) => <Template {...args} />,
  args: {
    design: "spinner",
  },
};
export const Dots: Story = {
  render: (args) => <Template {...args} />,
  args: {
    design: "dots-pulse",
  },
};
