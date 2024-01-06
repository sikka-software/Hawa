import { Story } from "@storybook/blocks";
import type { Meta, StoryObj } from "@storybook/react";

import { Button } from "@sikka/hawa/elements/button";
import { Tooltip } from "@sikka/hawa/elements/tooltip";

const meta = {
  title: "Elements/Tooltip",
  component: Tooltip,
  parameters: { layout: "centered" }
} satisfies Meta<typeof Tooltip>;

export default meta;
type Story = StoryObj<typeof Tooltip>;

export const Default: Story = {
  render: (args) => (
    <div>
      <Tooltip
        side={args.side}
        triggerProps={{ asChild: true }}
        delayDuration={200}
        content={
          <div className="hawa-max-w-xs">
            A tooltip is a brief, informative message that appears when a user
            interacts with an element in a graphical interface. Tooltips are
            usually displayed on hover or on focus. They provide extra
            information about the function of the element, often displaying text
            explaining the element's purpose, which helps to improve the user
            experience and guide users through the interface efficiently.
          </div>
        }
      >
        <Button>Hover to show tooltip</Button>
      </Tooltip>
    </div>
  ),
  args: { side: "top" }
};
export const Sides: Story = {
  render: () => (
    <>
      <div>
        <div className="hawa-flex hawa-flex-col hawa-gap-2">
          <Tooltip
            triggerProps={{ asChild: true }}
            side={"top"}
            content={<div className="hawa-max-w-xs">Top</div>}
          >
            <Button>👆</Button>
          </Tooltip>
          <div className="hawa-flex hawa-flex-row hawa-gap-2">
            <Tooltip
              triggerProps={{ asChild: true }}
              side={"left"}
              content={<div className="hawa-max-w-xs">Left</div>}
            >
              <Button>👈</Button>
            </Tooltip>
            <Tooltip
              triggerProps={{ asChild: true }}
              side={"right"}
              content={<div className="hawa-max-w-xs">Right</div>}
            >
              <Button>👉</Button>
            </Tooltip>
          </div>
          <Tooltip
            triggerProps={{ asChild: true }}
            side={"bottom"}
            content={<div className="hawa-max-w-xs">Bottom</div>}
          >
            <Button>👇</Button>
          </Tooltip>
        </div>
      </div>
    </>
  )
};
