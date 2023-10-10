import type { Meta, StoryObj } from "@storybook/react";
import { FeedbackEmoji } from "../../../components";
import { ArgsTable, Story } from "@storybook/blocks";
import { setLocale, t } from "../../translations/i18n";
import { useState } from "react";

const meta = {
  title: "Blocks/User Feedback/Feedback Emotion",
  component: FeedbackEmoji,
  parameters: {
    layout: "centered",
    docs: {
      page: () => (
        <>
          <h1>{"<FeedbackEmoji/>"}</h1>
          <ArgsTable />
        </>
      ),
    },
  },
  tags: ["autodocs"],
} satisfies Meta<typeof FeedbackEmoji>;

export default meta;
type Story = StoryObj<typeof FeedbackEmoji>;

export const FeedbackEmotion: Story = {
  render: (args) => {
    const [isSuccess, setIsSuccess] = useState(false);
    const mockSubmit = async (data: any) => {
      return new Promise((resolve, reject) => {
        // Simulate an asynchronous operation (e.g., a 2-second delay)
        setTimeout(() => {
          // Simulate a successful submission
          setIsSuccess(true);
          resolve("Submission successful");
          // Simulate an error
          // reject("Submission failed");
        }, 2000); // 2-second delay
      });
    };
    return (
      <FeedbackEmoji
        {...args}
        handleSubmit={mockSubmit}
        showSuccess={isSuccess}
      />
    );
  },
};