import { Story } from "@storybook/blocks";
import type { Meta, StoryObj } from "@storybook/react";

import { CodeConfirmation } from "@sikka/hawa/blocks/auth";

import { setLocale, t } from "../../../translations/i18n";

const meta = {
  title: "Blocks/User Auth/CodeConfirmation",
  component: CodeConfirmation
} satisfies Meta<typeof CodeConfirmation>;

export default meta;
type Story = StoryObj<typeof CodeConfirmation>;

export const Default: Story = {
  render: (args: any, globals: any) => {
    const locale = globals.globals?.locale === "ar" ? "ar" : "en";
    const direction = locale === "ar" ? "rtl" : "ltr";
    setLocale(locale);

    return (
      <div className="hawa-max-w-md" dir={direction}>
        <CodeConfirmation
          showError={args.showError}
          {...args}
          texts={{
            checkYourPhone: t("checkYourPhone"),
            weSentCode: t("weSentCode"),
            didntGetCode: t("didntGetCode"),
            resendCode: t("resendCode"),
            resendCodeTimer: t("resendCodeTimer"),
            codeLabel: "Code",
            codeRequiredText: t("codeRequiredText"),
            codeTooShort: t("codeTooShort"),
            cancel: t("cancel"),
            confirm: t("confirm"),
            seconds: t("seconds")
          }}
        />
      </div>
    );
  },
  args: {},
  argTypes: { handleConfirm: { action: "handleConfirm" } }
};
