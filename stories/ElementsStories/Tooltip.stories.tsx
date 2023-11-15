import type { Meta, StoryObj } from "@storybook/react";
import { Button, Switch, Tooltip } from "../../components/elements";
import { ArgsTable, Story, Title } from "@storybook/blocks";

const meta = {
  title: "Elements/Tooltip",
  component: Tooltip,
  parameters: {
    layout: "centered",
    docs: {
      page: () => (
        <>
          <h1>{"<Tooltip/>"}</h1>

          <ArgsTable />
        </>
      ),
    },
  },
  tags: ["autodocs"],
} satisfies Meta<typeof Tooltip>;

export default meta;
type Story = StoryObj<typeof Tooltip>;

const Template = (args: any) => (
  <div>
    <Tooltip
      side={args.side}
      delayDuration={200}
      content={
        <div className="hawa-max-w-xs">
          A tooltip is a brief, informative message that appears when a user
          interacts with an element in a graphical interface. Tooltips are
          usually displayed on hover or on focus. They provide extra information
          about the function of the element, often displaying text explaining
          the element's purpose, which helps to improve the user experience and
          guide users through the interface efficiently.
        </div>
      }
    >
      <Button>Show Tooltip</Button>
    </Tooltip>{" "}
  </div>
);

export const Default: Story = {
  render: () => <Template />,
  args: {
    side: "right",
  },
};
export const Sides: Story = {
  render: () => (
    <>
      <div>
        <div className="hawa-flex hawa-flex-col hawa-gap-2">
          <Tooltip
            side={"top"}
            content={<div className="hawa-max-w-xs">Top</div>}
          >
            <Button>👆</Button>
          </Tooltip>
          <div className="hawa-flex hawa-flex-row hawa-gap-2">
            <Tooltip
              side={"left"}
              content={<div className="hawa-max-w-xs">Left</div>}
            >
              <Button>👈</Button>
            </Tooltip>
            <Tooltip
              side={"right"}
              content={<div className="hawa-max-w-xs">Right</div>}
            >
              <Button>👉</Button>
            </Tooltip>
          </div>
          <Tooltip
            side={"bottom"}
            content={<div className="hawa-max-w-xs">Bottom</div>}
          >
            <Button>👇</Button>
          </Tooltip>
        </div>
      </div>
    </>
  ),
  args: {
    side: "right",
  },
};
