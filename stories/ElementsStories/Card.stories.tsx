import type { Meta, StoryObj } from "@storybook/react";

import {
  Card,
  Button,
  CardHeader,
  CardTitle,
  CardDescription,
  CardFooter,
  CardContent,
} from "../../components/elements";

// More on how to set up stories at: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
const meta = {
  title: "Elements/Cards/Container",
  component: Card,
  parameters: {
    layout: "centered",
  },
  // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/react/writing-docs/autodocs
  tags: ["autodocs"],
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  argTypes: {
    // backgroundColor: { control: "color" },
  },
} satisfies Meta<typeof Card>;

export default meta;
type Story = StoryObj<typeof Card>;

// More on writing stories with args: https://storybook.js.org/docs/react/writing-stories/args

const CardTemplate = (args: any) => (
  <div className="hawa-flex hawa-flex-col hawa-gap-2 hawa-h-64">
    {" "}
    <Card {...args}>
      <CardHeader>
        Header
        <CardTitle>Title here</CardTitle>
        <CardDescription>Description here</CardDescription>
      </CardHeader>
      <CardContent>Content here</CardContent>
      <CardFooter>Footer here</CardFooter>
    </Card>
  </div>
);

export const CardStory: Story = {
  name: "Card",
  render: (args) => <CardTemplate {...args} />,
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
