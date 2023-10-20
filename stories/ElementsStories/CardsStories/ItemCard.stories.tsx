import type { Meta, StoryObj } from "@storybook/react";

import { ItemCard, Button, Tooltip, Count } from "../../../components/elements";
import {
  ArrowBigDownDash,
  ArrowRightCircle,
  CalendarHeart,
  CloverIcon,
  CornerUpLeft,
  Edit2,
  Heart,
  Trash2,
} from "lucide-react";

// More on how to set up stories at: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
const meta = {
  title: "Elements/Cards/Item Card",
  component: ItemCard,
  parameters: {
    layout: "centered",
  },
  // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/react/writing-docs/autodocs
  tags: ["autodocs"],
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  argTypes: {
    // backgroundColor: { control: "color" },
  },
} satisfies Meta<typeof ItemCard>;

export default meta;
type Story = StoryObj<typeof ItemCard>;

// More on writing stories with args: https://storybook.js.org/docs/react/writing-stories/args

const Template = (args: any) => (
  <div className="hawa-flex hawa-flex-col hawa-gap-2 hawa-h-64">
    {" "}
    <ItemCard
      {...args}
      cardImage={"ji"}
      // onCardClick={() => console.log("card clicked")}
      headerActions={[
        { label: "QR Code", action: () => console.log("clicking on QR") },
        {
          label: "Menu Settings",
          value: "Menu Settings",
          action: () => console.log("clicking on Settings"),
        },
        {
          label: "Menu Styles",
          value: "Menu Styles",
          action: () => console.log("clicking on Styles"),
        },
        {
          label: "Analytics",
          value: "Analytics",
          action: () => console.log("clicking on Analytics"),
        },
      ]}
      header={
        <div>
          <h1>Menu</h1>
        </div>
      }
      content={
        <div>
          <p>
            Here are the biggest enterprise technology acquisitions of 2021 so
            far, in reverse chronological order.
          </p>
        </div>
      }
      actions={
        <div className="hawa-flex hawa-flex-row hawa-gap-2 ">
          <Tooltip delayDuration={200} content={"Duplicate"}>
            <Button size="icon" variant="ghost">
              <CloverIcon className="hawa-w-5 hawa-h-5" />
            </Button>
          </Tooltip>

          <Tooltip delayDuration={200} content={"Delete"}>
            <Button size="icon" variant="ghost">
              <Trash2 className="hawa-w-5 hawa-h-5" />
            </Button>
          </Tooltip>

          <Tooltip delayDuration={200} content={"Edit"}>
            <Button size="icon" variant="ghost">
              <Edit2 className="hawa-w-5 hawa-h-5" />
            </Button>
          </Tooltip>
        </div>
      }
      counts={
        <div className="hawa-flex hawa-flex-row ">
          <Tooltip delayDuration={200} content={"Counts"}>
            <div>
              <Count
                icon={<ArrowRightCircle className="hawa-w-4 hawa-h-4" />}
                count="30"
              />
            </div>
          </Tooltip>
          <Tooltip delayDuration={200} content={"Likes"}>
            <div>
              <Count
                icon={<Heart className="hawa-w-4 hawa-h-4" />}
                count="20"
              />
            </div>
          </Tooltip>
        </div>
      }
      {...args}
    >
      tet
    </ItemCard>
  </div>
);

export const Default: Story = {
  render: (args) => <Template {...args} />,
  args: {},
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
