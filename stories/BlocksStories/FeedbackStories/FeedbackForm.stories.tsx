import { ArgsTable, Story } from "@storybook/blocks";
import type { Meta, StoryObj } from "@storybook/react";

import { FeedbackForm } from "@blocks/feedback";

import { TranslationTable } from "../../../sharedUI/docsUI";
import { setLocale, t } from "../../translations/i18n";

const meta = {
  title: "Blocks/User Feedback/Feedback Form",
  component: FeedbackForm,
  parameters: {
    docs: {
      page: () => (
        <>
          <h1>{"<FeedbackForm/>"}</h1>
          <ArgsTable exclude={["texts"]} />
          <h2>Texts Object</h2>

          <TranslationTable
            componentProps={[
              {
                key: "requestType",
                description: "Label for the request type select input",
                default: "Request Type"
              },
              {
                key: "requestTypeRequired",
                description: "Error text if request type is not selected",
                default: "Request type is required"
              },
              {
                key: "description",
                description: "Label for the description textarea input",
                default: "Description"
              },
              {
                key: "descriptionRequired",
                description: "Error text if description is not provided",
                default: "Description is required"
              },
              {
                key: "descriptionTooShort",
                description: "Error text if description text is too short",
                default: "Description is too short"
              },
              {
                key: "submit",
                description: "Text for the submit button",
                default: "Submit"
              }
            ]}
          />
        </>
      )
    }
  },
  tags: ["autodocs"]
} satisfies Meta<typeof FeedbackForm>;

export default meta;
type Story = StoryObj<typeof FeedbackForm>;

const Template = (args: any, globals: any) => {
  const locale = globals.globals?.locale === "ar" ? "ar" : "en";
  const direction = locale === "ar" ? "rtl" : "ltr";
  setLocale(locale);

  return (
    <div dir={direction} className="hawa-max-w-sm">
      <FeedbackForm
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
      />
    </div>
  );
};
export const Default: Story = {
  render: Template.bind({}),
  argTypes: {
    onSubmit: { action: "onSubmit" }
  },
  args: {
    cardless: false,
    requestTypes: [
      {
        label: "Custom Type",
        value: "custom-type"
      },
      {
        label: "Bug",
        value: "bug"
      },
      {
        label: "Feature",
        value: "feature"
      },
      {
        label: "Complain",
        value: "complain"
      },
      {
        label: "Support",
        value: "support"
      }
    ]
  }
};
