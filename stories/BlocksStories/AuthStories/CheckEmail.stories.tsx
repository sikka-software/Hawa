import type { Meta, StoryObj } from "@storybook/react";
import { CheckEmail } from "../../../components";
import { ArgsTable, Story, Title } from "@storybook/blocks";
import { setLocale, t } from "../../translations/i18n";

const meta = {
  title: "Blocks/User Auth/CheckEmail",
  component: CheckEmail,
  parameters: {
    // layout: "centered",
    docs: {
      page: () => (
        <>
          <h1>{"<CheckEmail/>"}</h1>
          <ArgsTable />
        </>
      ),
    },
  },
  tags: ["autodocs"],
} satisfies Meta<typeof CheckEmail>;

export default meta;
type Story = StoryObj<typeof CheckEmail>;

const Template = (args: any, globals: any) => {
  const locale = globals.globals?.locale === "ar" ? "ar" : "en";
  const direction = locale === "ar" ? "rtl" : "ltr";
  setLocale(locale);

  return (
    <div className="hawa-max-w-md" dir={direction}>
      <CheckEmail
        {...args}
        email="contact@sikka.io"
        texts={{
          checkEmail: t("checkEmail"),
          pleaseVerify: t("pleaseVerify"),
          resendEmail: t("resendEmail"),
        }}
      />
    </div>
  );
};
export const Default: Story = {
  render: Template.bind({}),
};
