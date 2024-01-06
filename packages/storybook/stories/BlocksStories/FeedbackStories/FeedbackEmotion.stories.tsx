import { useState } from "react";

import { Story } from "@storybook/blocks";
import type { Meta, StoryObj } from "@storybook/react";

import { FeedbackEmoji } from "@sikka/hawa/blocks/feedback";

const meta = {
  title: "Blocks/User Feedback/Feedback Emotion",
  component: FeedbackEmoji,
  parameters: { layout: "centered" }
} satisfies Meta<typeof FeedbackEmoji>;

export default meta;
type Story = StoryObj<typeof FeedbackEmoji>;

export const FeedbackEmotion: Story = {
  render: (args) => {
    const [isSuccess, setIsSuccess] = useState(false);
    const mockSubmit = async (data: any) => {
      return new Promise((resolve, reject) => {
        setTimeout(() => {
          setIsSuccess(true);
          resolve("Submission successful");
        }, 2000);
      });
    };
    return (
      <FeedbackEmoji
        {...args}
        handleSubmit={mockSubmit}
        showSuccess={isSuccess}
      />
    );
  }
};
