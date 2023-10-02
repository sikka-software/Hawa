import type { Meta, StoryObj } from "@storybook/react";
import { Skeleton } from "../../components/elements";
import { ArgsTable, Markdown, Story } from "@storybook/blocks";

const meta = {
  title: "Elements/Skeleton",
  component: Skeleton,
  parameters: {
    docs: {
      page: () => (
        <>
          <h1>{"<Skeleton/>"}</h1>
          <p>
            You can customize the shape and size of the component simply by
            passing a height and width. For example
            <Markdown
              children='
              ```jsx
              <Skeleton className="h-10 w-10" /> //This will show a square skeleton
              ```
              '
            />
          </p>
          <ArgsTable />
        </>
      ),
    },
  },
  tags: ["autodocs"],
} satisfies Meta<typeof Skeleton>;

export default meta;
type Story = StoryObj<typeof Skeleton>;

const Template = (args: any) => {
  return (
    <div className="hawa-flex hawa-flex-col hawa-gap-4">
      <div className="hawa-flex hawa-flex-row hawa-gap-4">
        <Skeleton className="hawa-h-10 hawa-w-10" />
        <Skeleton className="hawa-h-10 hawa-w-64" />
      </div>
      <div className="hawa-flex hawa-flex-row hawa-gap-4">
        <Skeleton className="hawa-h-10 hawa-w-10" />
        <Skeleton className="hawa-h-10 hawa-w-64" />
      </div>
      <div className="hawa-flex hawa-flex-row hawa-gap-4">
        <Skeleton className="hawa-h-10 hawa-w-10" />
        <Skeleton className="hawa-h-10 hawa-w-64" />
      </div>
      <div className="hawa-flex hawa-flex-row hawa-gap-4">
        <Skeleton className="hawa-h-10 hawa-w-10" />
        <Skeleton className="hawa-h-10 hawa-w-64" />
      </div>
    </div>
  );
};
export const Default: Story = {
  render: () => <Template />,
};
export const Sizes: Story = {
  name: "Shapes & Sizes",
  render: () => (
    <div className="hawa-flex hawa-flex-col hawa-gap-4">
      <div className="hawa-flex hawa-flex-row hawa-gap-4">
        <Skeleton className="hawa-h-10 hawa-w-10 hawa-rounded-full" />
        <Skeleton className="hawa-h-10 hawa-w-10" />
        <Skeleton className="hawa-h-10 hawa-w-64" />
      </div>
      <div className="hawa-flex hawa-flex-row hawa-gap-4">
        <Skeleton className="hawa-h-20 hawa-w-20" />
        <Skeleton className="hawa-h-20 hawa-w-40" />
      </div>
      <div className="hawa-flex hawa-flex-row hawa-gap-4">
        <Skeleton className="hawa-h-10 hawa-w-10" />
        <Skeleton className="hawa-h-10 hawa-w-32" />
      </div>
    </div>
  ),
};
export const Animations: Story = {
  render: () => (
    <div className="hawa-flex hawa-flex-col hawa-gap-4">
      <div className="hawa-flex hawa-flex-col hawa-gap-4">
        <h1>Pulse Animation</h1>
        <Skeleton className="hawa-h-10 hawa-w-10" />
        <Skeleton className="hawa-h-10 hawa-w-64" />
      </div>
      <div className="hawa-flex hawa-flex-col hawa-gap-4">
        <h1>Shear Animation</h1>
        <Skeleton animation="shimmer" className="hawa-h-10 hawa-w-10" />
        <Skeleton animation="shimmer" className="hawa-h-10 hawa-w-64" />
      </div>
    </div>
  ),
};
