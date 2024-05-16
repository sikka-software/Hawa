import type { Meta, StoryObj } from "@storybook/react";

import { ImageCard } from "@sikka/hawa/elements/imageCard";

const meta = {
  title: "Elements/ImageCard",
  component: ImageCard,
} satisfies Meta<typeof ImageCard>;

export default meta;
type Story = StoryObj<typeof ImageCard>;

export const Default: Story = {
  render: (args: any) => (
    <div className="hawa-flex hawa-h-64 hawa-flex-row hawa-flex-wrap hawa-gap-2">
      {[1, 2, 3, 4, 5, 6, 7, 8, 9, 7, 87, 984, 9].map((i) => (
        <ImageCard
          overlay={true}
          imageUrl={`https://sikka-images.s3.ap-southeast-1.amazonaws.com/pixel_patterns/alpha_bg/alpha-pattern-${Math.floor(Math.random() * 22) + 1}.png`}
          className="hawa-max-w-[300px] hawa-max-h-[100px] hawa-border"
          imageClassName="group-hover:hawa-scale-100 hawa-scale-[1.1]"
        >
          <div className="hawa-p-2 hawa-pt-4 hawa-ps-4 hawa-text-white ">
            <h1 className="hawa-text-3xl hawa-font-bold">Title here</h1>
            <p className="hawa-text-lg">Description here</p>
          </div>
        </ImageCard>
      ))}
    </div>
  ),
};
