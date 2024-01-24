import { ArgsTable } from "@storybook/blocks";
import type { Meta, StoryObj } from "@storybook/react";

import { Loading } from "@sikka/hawa/elements/loading";
import { Tooltip } from "@sikka/hawa/elements/tooltip";

const meta = {
  title: "Elements/Loading",
  component: Loading,
  // parameters: {
  //   docs: {
  //     page: () => (
  //       <>
  //         <h1>{"<Loading/>"}</h1>
  //         <span>
  //           The Loading component provides visual feedback during data fetching
  //           or other asynchronous tasks. It offers two design variations: a
  //           spinner and a dots-pulse animation (more to come). <br /> This
  //           loading component is already built-in{" "}
  //           <span className="inline-code">{"<Button/>"}</span> and other
  //           components & blocks.
  //         </span>
  //         <ArgsTable />
  //       </>
  //     )
  //   }
  // },
  // tags: ["autodocs"],
  argTypes: {
    design: { options: ["spinner", "dots"], control: { type: "radio" } }
  }
} satisfies Meta<typeof Loading>;

export default meta;
type Story = StoryObj<typeof Loading>;

export const Designs: Story = {
  render: (args: any) => {
    let sizes = [{ prop: "xl", title: "Extra Large" }];
    return (
      <div className="hawa-flex hawa-flex-col hawa-gap-2">
        <div className="hawa-flex hawa-flex-row hawa-gap-6 ">
          <Tooltip content={"default"}>
            <div>
              <Loading {...args} />
            </div>
          </Tooltip>
          <Tooltip content={"squircle"}>
            <div>
              <Loading design={"squircle"} {...args} />
            </div>
          </Tooltip>
          <Tooltip content={"square"}>
            <div>
              <Loading design={"square"} {...args} />
            </div>
          </Tooltip>
          <Tooltip content={"progress"}>
            <div>
              <Loading design={"progress"} {...args} />
            </div>
          </Tooltip>
          <Tooltip content={"orbit"}>
            <div>
              <Loading design={"orbit"} {...args} />
            </div>
          </Tooltip>
        </div>
      </div>
    );
  },
  args: {
    // design: "spinner",
    size: "normal"
  }
};
export const Spinner: Story = {
  render: (args: any) => {
    let sizes = [
      { prop: "xl", title: "Extra Large" },
      { prop: "lg", title: "Large" },
      { prop: "normal", title: "Normal" },
      { prop: "sm", title: "Small" },
      { prop: "button", title: "Button Size" },
      { prop: "xs", title: "Extra Small" }
    ];
    return (
      <div className="hawa-flex hawa-flex-col hawa-gap-2">
        <div className="hawa-flex hawa-flex-row hawa-gap-6 ">
          {sizes.map((s, i) => (
            <div
              key={i}
              className=" hawa-flex hawa-w-full hawa-flex-col hawa-items-center hawa-justify-between hawa-gap-4 hawa-border hawa-p-4  "
            >
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
  },
  args: { design: "spinner" }
};
export const Dots: Story = {
  render: (args: any) => {
    let sizes = [
      { prop: "xl", title: "Extra Large" },
      { prop: "lg", title: "Large" },
      { prop: "normal", title: "Normal" },
      { prop: "sm", title: "Small" },
      { prop: "button", title: "Button Size" },
      { prop: "xs", title: "Extra Small" }
    ];
    return (
      <div className="hawa-flex hawa-flex-col hawa-gap-2">
        <div className="hawa-flex hawa-flex-row hawa-gap-6 ">
          {sizes.map((s, i) => (
            <div
              key={i}
              className=" hawa-flex hawa-w-full hawa-flex-col hawa-items-center hawa-justify-between hawa-gap-4 hawa-border hawa-p-4  "
            >
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
  },
  args: { design: "dots-pulse" }
};
