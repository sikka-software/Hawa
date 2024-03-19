import { useState } from "react";

import { Story } from "@storybook/blocks";
import type { Meta, StoryObj } from "@storybook/react";

import { FeedbackForm } from "@sikka/hawa/blocks/feedback";

import { setLocale, t } from "../../../translations/i18n";

const meta = {
  title: "Blocks/User Feedback/Feedback Form",
  component: FeedbackForm,
} satisfies Meta<typeof FeedbackForm>;

export default meta;
type Story = StoryObj<typeof FeedbackForm>;

export const Default: Story = {
  render: (args: any, globals: any) => {
    const locale = globals.globals?.locale === "ar" ? "ar" : "en";
    const direction = locale === "ar" ? "rtl" : "ltr";
    setLocale(locale);
    const [isLoading, setIsLoading] = useState(false);
    const [sent, setSent] = useState(false);
    const mockSubmit = async (data: any) => {
      return new Promise((resolve, reject) => {
        setIsLoading(true);
        setTimeout(() => {
          resolve("Submission successful");
          setIsLoading(false);
          setSent(true);
        }, 2000);
      });
    };
    return (
      <div dir={direction} className="hawa-max-w-sm">
        <FeedbackForm
          sent={sent}
          loadingSubmission={isLoading}
          texts={{
            description: {
              label: t("description"),
              tooShort: t("descriptionTooShort"),
              required: t("descriptionRequired"),
            },
            requestType: {
              label: t("requestType"),
              required: t("requestTypeRequired"),
              placeholder: t("requestTypePlaceholder"),
              noOptions: t("noOptions"),
            },
            submit: t("submit"),
          }}
          {...args}
          onSubmit={mockSubmit}
        />
      </div>
    );
  },
  argTypes: {
    onSubmit: { action: "onSubmit" },
  },
  args: {
    cardless: false,
    requestTypes: [
      { label: "Custom Type", value: "custom-type" },
      { label: "Bug", value: "bug" },
      { label: "Feature", value: "feature" },
      { label: "Complain", value: "complain" },
      { label: "Support", value: "support" },
    ],
  },
};
