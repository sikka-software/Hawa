import React from "react";
import { AppLanding } from "../../../blocks/AuthForms/AppLanding";
import { setLocale, t } from "../../../translations/i18n";

export default {
  title: "Blocks/Auth/Landing",
  component: [AppLanding],
  parameters: {
    docs: {
      description: {
        component:
          "`<AppLanding/>` The first block the users sees when visiting the app"
      }
    }
  },
  argTypes: {
    size: {
      default: "normal",
      control: "select",
      options: ["normal", "small", "full"],
      description: "The max width of the block",
      table: { defaultValue: { summary: "normal" } },
      type: {
        summary: "string"
      }
    },
    texts: {
      description: "The texts used in the block",
      control: "object",
      type: {
        summary: "object"
      }
    },
    handleSignIn: {
      description: "Action to redirect user to sign in page",
      type: {
        summary: "function"
      }
    },
    handleSignUp: {
      description: "Action to redirect user to sign up page",
      type: {
        summary: "function"
      }
    },
    handleLanguage: {
      description: "Action to change the language",
      type: {
        summary: "function"
      }
    }
  }
};

const AppLandingTemplate = (args, globals) => {
  const locale = globals.globals.locale === "ar" ? "ar" : "en";
  setLocale(locale);
  return (
    <div className="max-w-md">
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
          continueWithGithub: t("continueWithGithub")
        }}
      />
    </div>
  );
};

export const Landing = AppLandingTemplate.bind({});
Landing.args = {
  handleSignIn: () => console.log("routing to sign in page"),
  handleSignUp: () => console.log("routing to sign up page"),
  handleLanguage: () => console.log("changing language"),
  viaGoogle: true,
  viaTwitter: true,
  viaGithub: true,
  viaMicrosoft: true,
  viaEmail: true,
  viaPhone: true,
  viaApple: true
};
