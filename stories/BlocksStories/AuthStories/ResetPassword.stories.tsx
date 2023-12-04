import { ArgsTable, Story } from "@storybook/blocks";
import type { Meta, StoryObj } from "@storybook/react";

import { ResetPasswordForm } from "@blocks/auth";

import { setLocale, t } from "../../translations/i18n";

const meta = {
  title: "Blocks/User Auth/Reset Password Form",
  component: ResetPasswordForm,
  parameters: {
    docs: {
      page: () => (
        <>
          <h1>{"<ResetPasswordForm/>"}</h1>
          <ArgsTable />
        </>
      )
    }
  },
  tags: ["autodocs"]
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
        direction={direction}
        {...args}
        texts={{
          email: {
            label: t("emailLabel"),
            placeholder: t("emailPlaceholder"),
            required: t("emailRequiredText"),
            invalid: t("emailInvalidText")
          },
          emailSentText: "The reset password link was sent to your email",
          resetPassword: "Reset Password",
          registerText: "Register",
          dontHaveAccount: "Don't have an account? "
        }}
      />
    </div>
  );
};
export const Default: Story = {
  render: Template.bind({}),
  args: {
    sent: false
  },
  argTypes: {
    handleResetPassword: { action: "handleResetPassword" },
    handleRouteToRegister: { action: "handleRouteToRegister" }
  }
};
