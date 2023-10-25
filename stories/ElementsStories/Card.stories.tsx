import type { Meta, StoryObj } from "@storybook/react";
import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardFooter,
  CardContent,
} from "../../components/elements";

const meta = {
  title: "Elements/Cards/Container",
  component: Card,
  tags: ["autodocs"],
} satisfies Meta<typeof Card>;

export default meta;
type Story = StoryObj<typeof Card>;

export const Default: Story = {
  render: (args: any) => (
    <div className="hawa-flex hawa-flex-col hawa-gap-2 hawa-h-64 hawa-max-w-md">
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
  ),
};
export const Variants: Story = {
  render: (args: any) => (
    <div className="hawa-flex hawa-flex-col hawa-gap-2 hawa-h-64 hawa-max-w-md">
      <Card {...args}>
        <CardHeader>
          Header
          <CardTitle>Default Variant</CardTitle>
          <CardDescription>Description here</CardDescription>
        </CardHeader>
        <CardContent>Content here</CardContent>
        <CardFooter>Footer here</CardFooter>
      </Card>
      <Card {...args} clickable={true} variant="neoBrutalism">
        <CardHeader>
          Header
          <CardTitle>Neo-Brutalism Variant</CardTitle>
          <CardDescription>Description here</CardDescription>
        </CardHeader>
        <CardContent>Content here</CardContent>
        <CardFooter>Footer here</CardFooter>
      </Card>
    </div>
  ),
};
