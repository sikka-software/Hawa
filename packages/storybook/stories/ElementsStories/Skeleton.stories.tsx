import { ArgsTable, Markdown, Story } from "@storybook/blocks";
import type { Meta, StoryObj } from "@storybook/react";
import { Image } from "lucide-react";

import { Skeleton } from "@sikka/hawa/elements/skeleton";

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
      )
    }
  },
  tags: ["autodocs"]
} satisfies Meta<typeof Skeleton>;

export default meta;
type Story = StoryObj<typeof Skeleton>;

export const Default: Story = {
  render: (args: any) => {
    return (
      <div className="hawa-flex hawa-flex-col hawa-gap-4">
        <div className="hawa-flex hawa-flex-row hawa-gap-4">
          <Skeleton className="hawa-h-10 hawa-w-10" />
          <Skeleton className="hawa-h-10 hawa-w-64" content="Text here" />
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
  }
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
        <Skeleton
          className="hawa-h-20 hawa-w-20"
          content={<Image className="hawa-text-gray-500" />}
        />
        <Skeleton className="hawa-h-20 hawa-w-40" />
      </div>
      <div className="hawa-flex hawa-flex-row hawa-gap-4">
        <Skeleton className="hawa-h-10 hawa-w-10" />
        <Skeleton className="hawa-h-10 hawa-w-32" />
      </div>
    </div>
  )
};

export const Animations: Story = {
  render: () => (
    <div className="hawa-flex hawa-flex-col hawa-gap-4">
      <div className="hawa-flex hawa-flex-col hawa-gap-4">
        <h1>No Animation (Static)</h1>
        <Skeleton animation="none" className="hawa-h-10 hawa-w-10" />
        <Skeleton animation="none" className="hawa-h-10 hawa-w-64" />
      </div>
      <div className="hawa-flex hawa-flex-col hawa-gap-4">
        <h1>Pulse Animation (Default)</h1>
        <Skeleton className="hawa-h-10 hawa-w-10" />
        <Skeleton className="hawa-h-10 hawa-w-64" />
      </div>
      <div className="hawa-flex hawa-flex-col hawa-gap-4">
        <h1>Shimmer Animation</h1>
        <Skeleton animation="shimmer" className="hawa-h-10 hawa-w-10" />
        <Skeleton animation="shimmer" className="hawa-h-10 hawa-w-64" />
      </div>
    </div>
  )
};

export const withContent: Story = {
  render: () => (
    <div className="hawa-flex hawa-flex-col hawa-gap-4">
      <div className="hawa-flex hawa-flex-row hawa-gap-4">
        <Skeleton
          className="hawa-h-20 hawa-w-20"
          content={<Image className="hawa-text-gray-500" />}
        />
        <Skeleton className="hawa-h-20 hawa-w-40" content="Text here" />
      </div>
    </div>
  )
};
export const withFade: Story = {
  render: () => (
    <div className="hawa-flex hawa-flex-col hawa-gap-4">
      <Skeleton
        content="Top"
        fade="top"
        className="hawa-h-[500px] hawa-w-[500px]"
      />
      <Skeleton
        content="Right"
        fade="right"
        className="hawa-h-[500px] hawa-w-[500px]"
      />
      <Skeleton
        content="Bottom"
        fade="bottom"
        className="hawa-h-[500px] hawa-w-[500px]"
      />
      <Skeleton
        content="Left"
        fade="left"
        className="hawa-h-[500px] hawa-w-[500px]"
      />
    </div>
  )
};
