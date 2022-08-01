import React from "react";
import { CodeConfirmation } from "../../../blocks/AuthForms";

export default {
  title: "Blocks/Auth/Confirmation",
  component: [CodeConfirmation],
  parameters: {
    docs: {
      description: {
        component: "`<CodeConfirmation/>` Authentication block for user sign in"
      }
    }
  },
  argTypes: {
    lang: {
      default: true,
      control: "select",
      options: ["ar", "en"],
      description: "The language of the form",
      table: { defaultValue: { summary: "en" } }
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
    handleSignIn: {
      action: "Signing in Via Email",
      description: "The function to sign in user"
    },
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

export const Confirmation = (args) => {
  return (
    <CodeConfirmation
      {...args}
      error={args.showError}
      texts={{
        codeLabel: "Code",
        codePlaceholder: "123456",
        codeRequiredText: "Code is required",
        emailInvalidText: "Invalid email address",
        passwordLabel: "Password",
        passwordPlaceholder: "Enter password",
        passwordRequiredText: "Password is required",
        forgotPasswordText: "Forgot password?",
        newUserText: "New user?",
        signUpText: "Sign up",
        confirmText: "Confirm",
        googleButtonLabel: "Sign in with Google",
        githubButtonLabel: "Sign in with Github",
        twitterButtonLabel: "Sign in with Twitter"
      }}
      viaGoogle={args.viaGoogle}
      viaGithub={args.viaGithub}
      viaTwitter={args.viaTwitter}
    />
  );
};
