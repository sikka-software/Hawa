import { Story } from "@storybook/blocks";
import type { Meta, StoryObj } from "@storybook/react";

import { PhoneMockup } from "@sikka/hawa/elements";

const meta = {
  title: "Elements/Phone Mockup",
  component: PhoneMockup,
  parameters: { layout: "fullscreen" }
} satisfies Meta<typeof PhoneMockup>;

export default meta;
type Story = StoryObj<typeof PhoneMockup>;

const Default: Story = {
  render: (args: any) => {
    return (
      <PhoneMockup {...args}>
        <div className="hawa-w-full hawa-h-full hawa-flex hawa-flex-col hawa-justify-center hawa-items-center hawa-bg-gray-200">
          Content here
        </div>
      </PhoneMockup>
    );
  },
  args: {
    upperOverlayGradiant: false,
    lowerOverlayGradiant: false
  }
};

export { Default as iPhone };
