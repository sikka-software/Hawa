import type { Meta, StoryObj } from "@storybook/react";
import { ArgsTable, Story } from "@storybook/blocks";
import { setLocale, t } from "../../translations/i18n";

import { NewPasswordForm } from "../../../components";

const meta = {
  title: "Blocks/User Auth/New Password Form",
  component: NewPasswordForm,
  parameters: {
    docs: {
      page: () => (
        <>
          <h1>{"<NewPasswordForm/>"}</h1>
          <ArgsTable />
        </>
      ),
    },
  },
  tags: ["autodocs"],
} satisfies Meta<typeof NewPasswordForm>;

export default meta;
type Story = StoryObj<typeof NewPasswordForm>;

const Template = (args: any, globals: any) => {
  const locale = globals.globals?.locale === "ar" ? "ar" : "en";
  const direction = locale === "ar" ? "rtl" : "ltr";
  setLocale(locale);

  return (
    <div className="hawa-max-w-md" dir={direction}>
      <NewPasswordForm {...args} />
    </div>
  );
};
export const Default: Story = {
  render: Template.bind({}),
  args: {
    passwordChanged: false,
    texts: {
      updatePassword: "Update Password",
      confirmPasswordPlaceholder: "Confirm password",
      confirmPasswordLabel: "Confirm",
      confirmPasswordRequired: "Confirmation is required",
      passwordPlaceholder: "Enter password",
      passwordRequired: "Password is required",
      passwordLabel: "Choose new password",
      passwordTooShort: "Pasword must be more than 5 characters",
      passwordMatchError: "Password doesn't match",
      passwordChanged:
        "Your password has been changed, you'll be redirected to sign in page",
    },
  },
  argTypes: {
    handleNewPassword: { action: "handleNewPassword" },
  },
};
