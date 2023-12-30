import type { Meta, StoryObj } from "@storybook/react";

import { AdCard } from "@/packages/components/blocks/cards";

const meta = {
  title: "Blocks/Cards/Ad Card",
  component: AdCard,
  parameters: { layout: "centered" }
} satisfies Meta<typeof AdCard>;

export default meta;
type Story = StoryObj<typeof AdCard>;

export const Default: Story = {
  render: (args: any) => (
    <>
      <div>
        <div className="hawa-m-2 hawa-ml-0 hawa-text-lg hawa-font-bold">
          Horizontal
        </div>
        <AdCard orientation="horizontal" {...args} />
      </div>
      <div>
        <div className="hawa-m-2 hawa-ml-0 hawa-text-lg hawa-font-bold">
          Vertical
        </div>
        <AdCard orientation="vertical" {...args} />
      </div>
    </>
  ),
  args: {
    handleCantHide: () => console.log("cant hide the ad, please sub to pro"),
    canHide: false,
    title: "Seera App",
    description:
      "Increase your hiring chances by turning your CV into a digital one with a link"
  },
  argTypes: {
    handleClick: {
      action: "clicking ad"
    }
  }
};
