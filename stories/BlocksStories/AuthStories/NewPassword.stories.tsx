import { ArgsTable, Story } from "@storybook/blocks";
import type { Meta, StoryObj } from "@storybook/react";

import { NewPasswordForm } from "@blocks/auth";

import { setLocale, t } from "../../translations/i18n";

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
      )
    }
  },
  tags: ["autodocs"]
} satisfies Meta<typeof NewPasswordForm>;

export default meta;
type Story = StoryObj<typeof NewPasswordForm>;

const Template = (args: any, globals: any) => {
  const locale = globals.globals?.locale === "ar" ? "ar" : "en";
  const direction = locale === "ar" ? "rtl" : "ltr";
  setLocale(locale);

  return (
    <div className="hawa-max-w-md" dir={direction}>
      <NewPasswordForm
        {...args}
        texts={{
          updatePassword: "Update Password",
          password: {
            label: t("passwordLabel"),
            placeholder: t("passwordPlaceholder"),
            required: t("passwordRequiredText"),
            tooShort: t("passwordTooShortText")
          },
          confirm: {
            label: t("confirmPasswordLabel"),
            placeholder: t("confirmPasswordPlaceholder"),
            required: t("confirmPasswordRequired"),
            dontMatch: t("passwordsDontMatch")
          },
          passwordChanged:
            "Your password has been changed, you'll be redirected to sign in page"
        }}
      />
    </div>
  );
};
export const Default: Story = {
  render: Template.bind({}),
  args: {
    passwordChanged: false
  },
  argTypes: {
    handleNewPassword: { action: "handleNewPassword" }
  }
};
