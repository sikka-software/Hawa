import { Story } from "@storybook/blocks";
import type { Meta, StoryObj } from "@storybook/react";

import { AppLanding } from "@sikka/hawa/blocks/auth";

import { setLocale, t } from "../../../translations/i18n";

const meta = {
  title: "Blocks/User Auth/App Landing",
  component: AppLanding
} satisfies Meta<typeof AppLanding>;

export default meta;
type Story = StoryObj<typeof AppLanding>;

export const Default: Story = {
  render: (args: any, globals: any) => {
    const locale = globals.globals?.locale === "ar" ? "ar" : "en";
    const direction = locale === "ar" ? "rtl" : "ltr";
    setLocale(locale);

    return (
      <div className="hawa-max-w-md hawa-drop-shadow-xl">
        <AppLanding
          direction={direction}
          {...args}
          texts={{
            newUserText: t("newUserText"),
            createAccount: t("createAccount"),
            continueWithGoogle: t("continueWithGoogle"),
            continueWithTwitter: t("continueWithTwitter"),
            continueWithApple: t("continueWithApple"),
            continueWithMicrosoft: t("continueWithMicrosoft"),
            continueWithEmail: t("continueWithEmail"),
            continueWithPhone: t("continueWithPhone"),
            continueWithGithub: t("continueWithGithub")
          }}
        />
      </div>
    );
  },
  args: {
    viaEmail: true,
    viaPhone: true,
    viaApple: true,
    viaGoogle: true,
    viaGithub: true,
    viaTwitter: true,
    viaMicrosoft: true,
    allowRegister: true
  },
  argTypes: {
    handlePhone: { action: "handlePhone" },
    handleApple: { action: "handleApple" },
    handleEmail: { action: "handleEmail" },
    handleGithub: { action: "handleGithub" },
    handleGoogle: { action: "handleGoogle" },
    handleTwitter: { action: "handleTwitter" },
    handleMicrosoft: { action: "handleMicrosoft" },
    handleRouteToRegister: { action: "handleRouteToRegister" }
  }
};
