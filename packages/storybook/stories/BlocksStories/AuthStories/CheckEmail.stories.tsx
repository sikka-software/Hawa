import { Story } from "@storybook/blocks";
import type { Meta, StoryObj } from "@storybook/react";

import { CheckEmail } from "@sikka/hawa/blocks/auth";

import { setLocale, t } from "../../../translations/i18n";

const meta = {
  title: "Blocks/User Auth/CheckEmail",
  component: CheckEmail
} satisfies Meta<typeof CheckEmail>;

export default meta;
type Story = StoryObj<typeof CheckEmail>;

export const Default: Story = {
  render: (args: any, globals: any) => {
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
            resendEmail: t("resendEmail")
          }}
        />
      </div>
    );
  },
  argTypes: { handleResend: { action: "handleResend" } }
};
