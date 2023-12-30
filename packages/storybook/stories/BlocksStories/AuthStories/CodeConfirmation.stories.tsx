import { ArgsTable, Story } from "@storybook/blocks";
import type { Meta, StoryObj } from "@storybook/react";

import { CodeConfirmation } from "@/packages/components/blocks/auth";

import { setLocale, t } from "../../../translations/i18n";

const meta = {
  title: "Blocks/User Auth/CodeConfirmation",
  component: CodeConfirmation,
  parameters: {
    docs: {
      page: () => (
        <>
          <h1>{"<CodeConfirmation/>"}</h1>
          <ArgsTable />
        </>
      )
    }
  },
  tags: ["autodocs"]
} satisfies Meta<typeof CodeConfirmation>;

export default meta;
type Story = StoryObj<typeof CodeConfirmation>;

const Template = (args: any, globals: any) => {
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
};
export const Default: Story = {
  render: Template.bind({}),
  args: {},
  argTypes: {
    handleConfirm: { action: "handleConfirm" }
  }
};
