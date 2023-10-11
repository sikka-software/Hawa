import type { Meta, StoryObj } from "@storybook/react";

import { AdCard, Button } from "../../../components/elements";

// More on how to set up stories at: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
const meta = {
  title: "Elements/Cards/Ad Card",
  component: AdCard,
  parameters: {
    layout: "centered",
  },
  // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/react/writing-docs/autodocs
  tags: ["autodocs"],
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  argTypes: {
    // backgroundColor: { control: "color" },
  },
} satisfies Meta<typeof AdCard>;

export default meta;
type Story = StoryObj<typeof AdCard>;

// More on writing stories with args: https://storybook.js.org/docs/react/writing-stories/args

const Template = (args: any) => (
  <>
    <div>
      <div className="hawa-m-2 hawa-ml-0 hawa-text-lg hawa-font-bold dark:hawa-text-white">
        Horizontal
      </div>
      <AdCard orientation="horizontal" {...args} />
    </div>
    <div>
      <div className="hawa-m-2 hawa-ml-0 hawa-text-lg hawa-font-bold dark:hawa-text-white">
        Vertical
      </div>
      <AdCard orientation="vertical" {...args} />
    </div>
  </>
);

export const Default: Story = {
  //   name: "Action Card",
  render: (args) => <Template {...args} />,
  args: {
    handleCantHide: () => console.log("cant hide the ad, please sub to pro"),
    canHide: false,
    title: "Seera App",
    description:
      "Increase your hiring chances by turning your CV into a digital one with a link",
  },
  argTypes: {
    handleClick: {
      action: "clicking ad",
    },
  },
};

// export const Large: Story = {
//   args: {
//     size: "large",
//     label: "Button",
//   },
// };

// export const Small: Story = {
//   args: {
//     label: "Button",
//   },
// };
