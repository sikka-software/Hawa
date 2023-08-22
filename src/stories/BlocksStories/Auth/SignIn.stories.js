import React, { useState } from "react";
import { SignInForm } from "../../../blocks/AuthForms";
import { t, setLocale } from "../../../translations/i18n";

export default {
  title: "Blocks/Auth/Sign In",
  component: [SignInForm],
  parameters: {
    docs: {
      description: {
        component: "`<SignInForm/>` Authentication block for user sign in"
      }
    }
  },
  argTypes: {
    texts: { default: "" },

    signInType: {
      default: "email",
      control: "select",
      options: ["email", "username", "phone"],

      description: "For setting the type of sign in the user will use",
      table: { defaultValue: { summary: "email" } }
    },
    isLoading: {
      default: false,
      control: "boolean",
      description:
        "a boolean that changes the main button into a loading button",
      table: { defaultValue: { summary: "false" } }
    },
    direction: {
      default: true,
      control: "select",
      options: ["rtl", "ltr"],
      description: "The direction of the form",
      table: { defaultValue: { summary: "ltr" } }
    },
    viaGoogle: {
      default: true,
      control: "boolean",
      description: "Display the sign in via Google button",
      table: { defaultValue: { summary: true } }
    },
    viaTwitter: {
      default: true,
      control: "boolean",
      description: "Display the sign in via Twitter button",
      table: { defaultValue: { summary: true } }
    },
    viaGithub: {
      default: true,
      control: "boolean",
      description: "Display the sign in via Github button",
      table: { defaultValue: { summary: true } }
    },
    showError: {
      default: false,
      control: "boolean",
      description: "Display the error when auth fails",
      table: { defaultValue: { summary: true } }
    },
    errorTitle: {
      default: " ",
      control: "text",
      description: "The error text for the auth failure",
      table: { defaultValue: { summary: "" } }
    },
    errorText: {
      default: "Something went wrong",
      control: "text",
      description: "The error text for the auth failure",
      table: { defaultValue: { summary: "Something went wrong" } }
    },

    // handleSignIn: {
    //   action: "Signing in Via Email",
    //   description: "The function to sign in user"
    // },
    handleForgotPassword: {
      action: "Redirecting to reset password",
      description: "Directing user to forgot password block"
    },
    handleRouteToSignUp: {
      action: "Redirecting to sign up block",
      description: "Directing user to signup block"
    },
    handleGoogleSignIn: {
      action: "Signing in via Google",
      description: "Function to sign in user via Google"
    },
    handleGithubSignIn: {
      action: "Signing in via Github",
      description: "Function to sign in user via Github"
    },
    handleTwitterSignIn: {
      action: "Signing in via Twitter",
      description: "Function to sign in user via Twitter"
    }
  }
};

const SignInTemplate = (args, globals) => {
  const locale = globals.globals.locale === "ar" ? "ar" : "en";
  setLocale(locale);

  const [isLoading, setIsLoading] = useState(false);
  return (
    <div className="max-w-md">
      <SignInForm
        direction={globals.globals.locale === "ar" ? "rtl" : "ltr"}
        isLoading={isLoading}
        handleForgotPassword={() => console.log("forgot password")}
        handleSignIn={(e) => {
          console.log("Form result: ", e);
        }}
        {...args}
        texts={{
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

export const SignIn = SignInTemplate.bind({});
SignIn.args = {
  viaGoogle: true,
  viaGithub: true,
  viaTwitter: true,
  showError: false,
  withoutSignUp: false,
  withoutResetPassword: false,
  signInType: "email",
  errorTitle: "Error",
  errorText: "Something went wrong"
  // direction: "en"
  // texts: {
  //   emailLabel: "Email",
  //   emailPlaceholder: "Enter your email",
  //   emailRequiredText: "Email is required",
  //   emailInvalidText: "Invalid email address",
  //   usernameLabel: "Username",
  //   usernamePlaceholder: "Enter your username",
  //   usernameRequired: " Username is required",
  //   phoneRequiredText: "Phone is required",
  //   passwordLabel: "Password",
  //   passwordPlaceholder: "Enter password",
  //   passwordRequiredText: "Password is required",
  //   forgotPasswordText: "Forgot password?",
  //   newUserText: "New user?",
  //   signUpText: "Sign up",
  //   signInText: "Sign in",
  //   googleButtonLabel: "Sign in with Google",
  //   githubButtonLabel: "Sign in with Github",
  //   twitterButtonLabel: "Sign in with Twitter"
  // }
};
