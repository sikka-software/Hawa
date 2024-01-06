import { Story } from "@storybook/blocks";
import type { Meta, StoryObj } from "@storybook/react";

import { NewPasswordForm } from "@sikka/hawa/blocks/auth";

import { setLocale, t } from "../../../translations/i18n";

const meta = {
  title: "Blocks/User Auth/New Password Form",
  component: NewPasswordForm
} satisfies Meta<typeof NewPasswordForm>;

export default meta;
type Story = StoryObj<typeof NewPasswordForm>;

export const Default: Story = {
  render: (args: any, globals: any) => {
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
  },
  args: { passwordChanged: false },
  argTypes: { handleNewPassword: { action: "handleNewPassword" } }
};
