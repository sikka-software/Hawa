import type { Meta, StoryObj } from "@storybook/react";
import { FeedbackForm } from "../../../components";
import { ArgsTable, Story, Title } from "@storybook/blocks";
import { setLocale, t } from "../../translations/i18n";

const meta = {
  title: "Blocks/User Feedback/Feedback Form",
  component: FeedbackForm,
  parameters: {
    // layout: "centered",
    docs: {
      page: () => (
        <>
          <h1>{"<FeedbackForm/>"}</h1>
          <ArgsTable />
        </>
      ),
    },
  },
  tags: ["autodocs"],
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
          description: t("description"),
          descriptionTooShort: t("descriptionTooShort"),
          descriptionRequired: t("descriptionRequired"),
          requestType: t("requestType"),
          requestTypeRequired: t("requestTypeRequired"),
          submit: t("submit"),
        }}
        {...args}
      />
    </div>
  );
};
export const Default: Story = {
  render: Template.bind({}),
  argTypes: {
    onSubmit: { action: "onSubmit" },
  },
};
