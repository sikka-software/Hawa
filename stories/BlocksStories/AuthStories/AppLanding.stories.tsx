import type { Meta, StoryObj } from "@storybook/react";
import { AppLanding } from "../../../components";
import { ArgsTable, Story, Title } from "@storybook/blocks";
import { setLocale, t } from "../../translations/i18n";

const meta = {
  title: "Blocks/User Auth/App Landing",
  component: AppLanding,
  parameters: {
    // layout: "centered",
    docs: {
      page: () => (
        <>
          <h1>{"<AppLanding/>"}</h1>
          <ArgsTable />
        </>
      ),
    },
  },
  tags: ["autodocs"],
} satisfies Meta<typeof AppLanding>;

export default meta;
type Story = StoryObj<typeof AppLanding>;

const Template = (args: any, globals: any) => {
  const locale = globals.globals?.locale === "ar" ? "ar" : "en";
  const direction = locale === "ar" ? "rtl" : "ltr";
  setLocale(locale);

  return (
    <div className="hawa-max-w-md">
      <AppLanding
        {...args}
        direction={locale === "ar" ? "rtl" : "ltr"}
        texts={{
          lang: "عربي",
          newUserText: t("newUserText"),
          createAccount: t("createAccount"),
          continueWithGoogle: t("continueWithGoogle"),
          continueWithTwitter: t("continueWithTwitter"),
          continueWithApple: t("continueWithApple"),
          continueWithMicrosoft: t("continueWithMicrosoft"),
          continueWithEmail: t("continueWithEmail"),
          continueWithPhone: t("continueWithPhone"),
          continueWithGithub: t("continueWithGithub"),
        }}
      />
    </div>
  );
};
export const Default: Story = {
  render: Template.bind({}),
  args: {
    handleSignIn: () => console.log("routing to sign in page"),
    handleSignUp: () => console.log("routing to sign up page"),
    handleLanguage: () => console.log("changing language"),
    viaGoogle: true,
    viaTwitter: true,
    viaGithub: true,
    viaMicrosoft: true,
    viaEmail: true,
    viaPhone: true,
    viaApple: true,
  },
};
