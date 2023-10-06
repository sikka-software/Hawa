import type { Meta, StoryObj } from "@storybook/react";
import { FeedbackForm } from "../../../components";
import { ArgsTable, Story, Title } from "@storybook/blocks";
import { setLocale, t } from "../../translations/i18n";

const meta = {
  title: "Blocks/User Feedback/Feedback Form",
  component: FeedbackForm,
  parameters: {
    layout: "centered",
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
    <div dir={direction}>
      <FeedbackForm
        onSubmit={(e) => console.log("submitting feedback form : ", e)}
      />
    </div>
  );
};
export const Default: Story = {
  render: Template.bind({}),
};
