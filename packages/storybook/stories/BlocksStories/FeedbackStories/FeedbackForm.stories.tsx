import { useState } from "react";

import { ArgsTable, Story } from "@storybook/blocks";
import type { Meta, StoryObj } from "@storybook/react";

import { FeedbackForm } from "@sikka/hawa/blocks/feedback";

import { setLocale, t } from "../../../translations/i18n";
import { TranslationTable } from "../../../utils";

const meta = {
  title: "Blocks/User Feedback/Feedback Form",
  component: FeedbackForm
  // parameters: {
  //   docs: {
  //     page: () => (
  //       <>
  //         <h1>{"<FeedbackForm/>"}</h1>
  //         <ArgsTable exclude={["texts"]} />
  //         <h2>Texts Object</h2>

  //         <TranslationTable
  //           componentProps={[
  //             {
  //               key: "requestType",
  //               description: "Label for the request type select input",
  //               default: "Request Type"
  //             },
  //             {
  //               key: "requestTypeRequired",
  //               description: "Error text if request type is not selected",
  //               default: "Request type is required"
  //             },
  //             {
  //               key: "description",
  //               description: "Label for the description textarea input",
  //               default: "Description"
  //             },
  //             {
  //               key: "descriptionRequired",
  //               description: "Error text if description is not provided",
  //               default: "Description is required"
  //             },
  //             {
  //               key: "descriptionTooShort",
  //               description: "Error text if description text is too short",
  //               default: "Description is too short"
  //             },
  //             {
  //               key: "submit",
  //               description: "Text for the submit button",
  //               default: "Submit"
  //             }
  //           ]}
  //         />
  //       </>
  //     )
  //   }
  // },
  // tags: ["autodocs"]
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
              required: t("descriptionRequired")
            },
            requestType: {
              label: t("requestType"),
              required: t("requestTypeRequired"),
              placeholder: t("requestTypePlaceholder"),
              noOptions: t("noOptions")
            },
            submit: t("submit")
          }}
          {...args}
          onSubmit={mockSubmit}
        />
      </div>
    );
  },
  argTypes: {
    onSubmit: { action: "onSubmit" }
  },
  args: {
    cardless: false,
    requestTypes: [
      { label: "Custom Type", value: "custom-type" },
      { label: "Bug", value: "bug" },
      { label: "Feature", value: "feature" },
      { label: "Complain", value: "complain" },
      { label: "Support", value: "support" }
    ]
  }
};
