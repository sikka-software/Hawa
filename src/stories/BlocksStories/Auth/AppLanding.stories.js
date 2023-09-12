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
        texts={{
          signIn: "Sign In",
          signUp: "Sign Up",
          lang: "عربي",
          emailLabel: t("emailLabel"),
          emailPlaceholder: t("emailPlaceholder"),
          emailRequiredText: t("emailRequiredText"),
          emailInvalidText: t("emailInvalidText"),
          usernameLabel: t("usernameLabel"),
          usernamePlaceholder: t("usernamePlaceholder"),
          usernameRequired: t("usernameRequired"),
          phoneRequiredText: t("phoneRequiredText"),
          passwordLabel: t("passwordLabel"),
          passwordPlaceholder: t("passwordPlaceholder"),
          passwordRequiredText: t("passwordRequiredText"),
          forgotPasswordText: t("forgotPasswordText"),
          newUserText: t("newUserText"),
          createAccount: t("createAccount"),
          signInText: t("signInText"),
          signInViaGoogleLabel: t("signInViaGoogleLabel"),
          signInViaGithubLabel: t("signInViaGithubLabel"),
          signInViaTwitterLabel: t("signInViaTwitterLabel")
        }}
      />
    </div>
  );
};

export const Landing = AppLandingTemplate.bind({});
Landing.args = {
  handleSignIn: () => console.log("routing to sign in page"),
  handleSignUp: () => console.log("routing to sign up page"),
  handleLanguage: () => console.log("changing language")
};
