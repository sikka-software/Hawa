import type { Meta, StoryObj } from "@storybook/react";
import { ArrowRightCircle, CopyIcon, Edit2, Heart, Trash2 } from "lucide-react";

import { ItemCard } from "../../../components/blocks";
import { Button, Tooltip, Count } from "../../../components/elements";

// More on how to set up stories at: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
const meta = {
  title: "Blocks/Cards/Item Card",
  component: ItemCard,
  //   parameters: {
  //     layout: "centered",
  //   },
  // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/react/writing-docs/autodocs
  tags: ["autodocs"],
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  argTypes: {
    // backgroundColor: { control: "color" },
  }
} satisfies Meta<typeof ItemCard>;

export default meta;
type Story = StoryObj<typeof ItemCard>;

// More on writing stories with args: https://storybook.js.org/docs/react/writing-stories/args

const Template = (args: any) => (
  <div className="hawa-flex hawa-h-64 hawa-flex-col hawa-gap-2">
    <ItemCard
      headerActions={[
        { label: "QR Code", action: () => console.log("clicking on QR") },
        {
          label: "Menu Settings",
          value: "Menu Settings",
          action: () => console.log("clicking on Settings")
        },
        {
          label: "Menu Styles",
          value: "Menu Styles",
          action: () => console.log("clicking on Styles")
        },
        {
          label: "Analytics",
          value: "Analytics",
          action: () => console.log("clicking on Analytics")
        }
      ]}
      header={
        <div>
          <h1>Menu</h1>
        </div>
      }
      content={
        <div>
          <p>
            All the icons and buttons of this card are customizable, yet all the
            props are optional.
          </p>
        </div>
      }
      actions={
        <div className="hawa-flex hawa-flex-row hawa-gap-2 ">
          <Tooltip
            triggerProps={{ asChild: true }}
            delayDuration={200}
            content={"Duplicate"}
          >
            <Button size="icon" variant="ghost">
              <CopyIcon className="hawa-h-5 hawa-w-5" />
            </Button>
          </Tooltip>

          <Tooltip
            triggerProps={{ asChild: true }}
            delayDuration={200}
            content={"Delete"}
          >
            <Button size="icon" variant="ghost">
              <Trash2 className="hawa-h-5 hawa-w-5" />
            </Button>
          </Tooltip>

          <Tooltip
            triggerProps={{ asChild: true }}
            delayDuration={200}
            content={"Edit"}
          >
            <Button size="icon" variant="ghost">
              <Edit2 className="hawa-h-5 hawa-w-5" />
            </Button>
          </Tooltip>
        </div>
      }
      counts={
        <div className="hawa-flex hawa-flex-row ">
          <Tooltip delayDuration={200} content={"Counts"}>
            <div>
              <Count
                icon={<ArrowRightCircle className="hawa-icon" />}
                count="30"
              />
            </div>
          </Tooltip>
          <Tooltip delayDuration={200} content={"Likes"}>
            <div>
              <Count icon={<Heart className="hawa-icon" />} count="20" />
            </div>
          </Tooltip>
        </div>
      }
      {...args}
    />
  </div>
);

export const Default: Story = {
  render: (args) => <Template {...args} />,
  args: {},
  argTypes: {
    onCardClick: { action: "onCardClick" }
  }
};
