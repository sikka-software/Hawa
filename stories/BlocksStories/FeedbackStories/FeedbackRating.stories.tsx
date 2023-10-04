import type { Meta, StoryObj } from "@storybook/react";
import { UserReferralSource, FeedbackRating } from "../../../components/blocks";
import { ArgsTable, Story, Title } from "@storybook/blocks";
import { setLocale, t } from "../../translations/i18n";

const meta = {
  title: "Blocks/User Feedback/Feedback Rating",
  component: FeedbackRating,
  parameters: {
    layout: "centered",
    docs: {
      page: () => (
        <>
          <h1>{"<FeedbackRating/>"}</h1>
          <ArgsTable />
        </>
      ),
    },
  },
  tags: ["autodocs"],
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
      most: "Extremely satisfied",
    },
    options: [1, 2, 3, 4, 5],
    onOptionClicked: (e) => console.log("clicking option ", e),
  },
};
export const Banner: Story = {
  render: (args) => <FeedbackRating {...args} />,
  args: {
    banner: true,
    title: "Quick question",
    question: "How satisfied are you with the invoicing system?",
    texts: {
      least: "Not at all satisfied",
      most: "Extremely satisfied",
    },
    options: [1, 2, 3, 4, 5],
    onOptionClicked: (e) => console.log("clicking option ", e),
  },
};
