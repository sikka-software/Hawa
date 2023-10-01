import type { Meta, StoryObj } from "@storybook/react";

import { ActionCard, Button } from "../../components/elements";

// More on how to set up stories at: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
const meta = {
  title: "Elements/Cards/Action Card",
  component: ActionCard,
  parameters: {
    layout: "centered",
  },
  // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/react/writing-docs/autodocs
  tags: ["autodocs"],
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  argTypes: {
    // backgroundColor: { control: "color" },
  },
} satisfies Meta<typeof ActionCard>;

export default meta;
type Story = StoryObj<typeof ActionCard>;

// More on writing stories with args: https://storybook.js.org/docs/react/writing-stories/args

const Template = (args: any) => (
  <div className="hawa-flex hawa-flex-col hawa-gap-2 hawa-h-64">
    {" "}
    <ActionCard {...args}>tet</ActionCard>
  </div>
);

export const Default: Story = {
  name: "Action Card",
  render: (args) => <Template {...args} />,
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
    ),
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
