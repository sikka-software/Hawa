import type { Meta, StoryObj } from "@storybook/react";
import { NewPasswordForm } from "../../../components";
import { ArgsTable, Story, Title } from "@storybook/blocks";
import { setLocale, t } from "../../translations/i18n";

const meta = {
  title: "Blocks/User Auth/New Password Form",
  component: NewPasswordForm,
  parameters: {
    // layout: "centered",
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
      {" "}
      <NewPasswordForm {...args} />
    </div>
  );
};
export const Default: Story = {
  render: Template.bind({}),
  args: {
    passwordChanged: false,
    texts: {
      passwordPlaceholder: "Enter password",
      updatePassword: "Update Password",
      passwordRequiredText: "Password is required",
      passwordLabel: "Choose new password",
      confirmPasswordPlaceholder: "Confirm password",
      confirmPasswordLabel: "Confirm",
      confirmPasswordRequired: "Confirmation is required",
      confirmPasswordRequiredText: "Confirmation is required",
      passwordTooShortText: "Pasword must be more than 5 characters",
      passwordMatchError: "Password doesn't match",
      passwordChanged:
        "Your password has been changed, you'll be redirected to sign in page",
    },
  },
  argTypes: {
    handleNewPassword: { action: "handleNewPassword" },
  },
};
