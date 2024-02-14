import { Story } from "@storybook/blocks";
import type { Meta, StoryObj } from "@storybook/react";

import { AuthButtons } from "@sikka/hawa/blocks/auth/AuthButtons";

import { setLocale, t } from "../../../translations/i18n";

const meta = {
  title: "Blocks/User Auth/Auth Buttons",
  component: AuthButtons
} satisfies Meta<typeof AuthButtons>;

export default meta;
type Story = StoryObj<typeof AuthButtons>;

const Default: Story = {
  render: (args: any, globals: any) => {
    const locale = globals.globals?.locale === "ar" ? "ar" : "en";
    const direction = locale === "ar" ? "rtl" : "ltr";
    setLocale(locale);

    return (
      <div className="hawa-max-w-sm hawa-drop-shadow-xl" dir={direction}>
        <AuthButtons {...args} />
      </div>
    );
  },
  args: {
    viaMetamask: true,
    viaNafath: true,
    viaEmail: true,
    viaPhone: true,
    viaApple: true,
    viaGoogle: true,
    viaGithub: true,
    viaTwitter: true,
    viaMicrosoft: true
  },
  argTypes: {
    handleMetamask: { action: "handleMetamask" },
    handleNafath: { action: "handleNafath" },
    handlePhone: { action: "handlePhone" },
    handleApple: { action: "handleApple" },
    handleEmail: { action: "handleEmail" },
    handleGithub: { action: "handleGithub" },
    handleGoogle: { action: "handleGoogle" },
    handleTwitter: { action: "handleTwitter" },
    handleMicrosoft: { action: "handleMicrosoft" }
  }
};

export { Default as AuthButtons };
