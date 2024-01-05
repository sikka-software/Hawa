import { Story } from "@storybook/blocks";
import type { Meta, StoryObj } from "@storybook/react";

import { UserReferralSource } from "@sikka/hawa/blocks/feedback";

const meta = {
  title: "Blocks/User Feedback/Referral Source",
  component: UserReferralSource,
  parameters: { layout: "centered" }
} satisfies Meta<typeof UserReferralSource>;

export default meta;
type Story = StoryObj<typeof UserReferralSource>;

export const UserSource: Story = {
  render: (args) => (
    <UserReferralSource
      {...args}
      options={[
        { label: "Coworker/Friend", value: "friend" },
        { label: "Research", value: "research" },
        { label: "TikTok", value: "tiktok" },
        { label: "Advertisement", value: "ad" },
        { label: "Twitter", value: "twitter" }
      ]}
      onSubmitForm={args.onSubmitForm}
    />
  ),
  args: {
    question: "How did you hear about us?",
    texts: {
      pleaseSelectOption: "Please select an option",
      textTooShort: "Please add more details"
    }
  },
  argTypes: { onSubmitForm: { action: "onSubmitForm" } }
};
