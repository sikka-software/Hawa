import type { Meta, StoryObj } from "@storybook/react";

import { ActionCard } from "@/packages/components/blocks/cards";

import { Button } from "@/packages/components/elements/button";

const meta = {
  title: "Blocks/Cards/Action Card",
  component: ActionCard,
  parameters: { layout: "centered" }
} satisfies Meta<typeof ActionCard>;

export default meta;
type Story = StoryObj<typeof ActionCard>;

export const Default: Story = {
  render: (args: any) => (
    <div className="hawa-flex hawa-h-64 hawa-flex-col hawa-gap-2">
      <ActionCard {...args}>tet</ActionCard>
    </div>
  ),
  args: {
    title: "Bismillah",
    subtitle: "By the name of Allah",
    cardImage: "https://source.unsplash.com/tVqQSfXQ_SI",
    bottomElement: (
      <>
        <div>Thikr</div>
        <div>100 Times</div>
      </>
    ),
    inCardActions: (
      <>
        <Button variant="secondary" size="xs">
          + Use Template
        </Button>
      </>
    )
  }
};
