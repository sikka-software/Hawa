import { Story } from "@storybook/blocks";
import type { Meta, StoryObj } from "@storybook/react";

import { FeedbackRating } from "@sikka/hawa/blocks/feedback";

const meta = {
  title: "Blocks/User Feedback/Feedback Rating",
  component: FeedbackRating,
  parameters: { layout: "centered" }
} satisfies Meta<typeof FeedbackRating>;

export default meta;
type Story = StoryObj<typeof FeedbackRating>;

export const Popup: Story = {
  render: (args) => <FeedbackRating {...args} />,
  name: "Popup",
  args: {
    title: "Quick question",
    question: "How satisfied are you with the invoicing system?",
    texts: {
      least: "Not at all satisfied",
      most: "Extremely satisfied"
    },
    options: [1, 2, 3, 4, 5],
    onOptionClicked: (e) => console.log("clicking option ", e)
  }
};
export const Banner: Story = {
  render: (args) => <FeedbackRating {...args} />,
  args: {
    banner: true,
    title: "Quick question",
    question: "How satisfied are you with the invoicing system?",
    texts: {
      least: "Not at all satisfied",
      most: "Extremely satisfied"
    },
    options: [1, 2, 3, 4, 5],
    onOptionClicked: (e) => console.log("clicking option ", e)
  }
};
