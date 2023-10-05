import type { Meta, StoryObj } from "@storybook/react";
import { ResetPasswordForm } from "../../../components";
import { ArgsTable, Story, Title } from "@storybook/blocks";
import { setLocale, t } from "../../translations/i18n";

const meta = {
  title: "Blocks/User Auth/Reset Password Form",
  component: ResetPasswordForm,
  parameters: {
    // layout: "centered",
    docs: {
      page: () => (
        <>
          <h1>{"<ResetPasswordForm/>"}</h1>
          <ArgsTable />
        </>
      ),
    },
  },
  tags: ["autodocs"],
} satisfies Meta<typeof ResetPasswordForm>;

export default meta;
type Story = StoryObj<typeof ResetPasswordForm>;

const Template = (args: any, globals: any) => {
  const locale = globals.globals?.locale === "ar" ? "ar" : "en";
  const direction = locale === "ar" ? "rtl" : "ltr";
  setLocale(locale);

  return (
    <div className="hawa-max-w-md" dir={direction}>
      {" "}
      <ResetPasswordForm
        {...args}
        direction={globals.globals.locale === "ar" ? "rtl" : "ltr"}
      />
    </div>
  );
};
export const Default: Story = {
  render: Template.bind({}),
  args: {
    sent: false,
    handleResetPassword: (e) => console.log("resetting password,", e),

    texts: {
      emailLabel: "Email",
      emailPlaceholder: "Enter your email",
      emailRequiredText: "Email is required",
      emailInvalidText: "Invalid email address",
      emailSentText: "The reset password link was sent to your email",
      resetPassword: "Reset Password",
      registerText: "Register",
      dontHaveAccount: "Don't have an account? ",
    },
  },
};
