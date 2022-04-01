import React from "react";
import { SignInForm } from "../../../blocks/AuthForms";

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
    }
  }
};

const SignInTemplate = (args) => {
  return (
    <SignInForm
      {...args}
      error={args.showError}
      texts={{
        emailLabel: "Email",
        emailPlaceholder: "Enter your email",
        emailRequiredText: "Email is required",
        emailInvalidText: "Invalid email address",
        passwordLabel: "Password",
        passwordPlaceholder: "Enter password",
        passwordRequiredText: "Password is required",
        forgotPasswordText: "Forgot password?",
        newUserText: "New user?",
        signUpText: "Sign up",
        signInText: "Sign in",
        googleButtonLabel: "Sign in with Google",
        githubButtonLabel: "Sign in with Github",
        twitterButtonLabel: "Sign in with Twitter"
      }}
      handleSignIn={(e) => console.log("singing in via email", e)}
      handleForgotPassword={() => console.log("user forgot password")}
      handleGoogleSignIn={() => console.log("signing in via google")}
      handleGithubSignIn={() => console.log("signing in via github")}
      handleTwitterSignIn={() => console.log("signing in via Twitter")}
      handleRouteToSignUp={() => console.log("switching to sign up")}
      viaGoogle={args.viaGoogle}
      viaGithub={args.viaGithub}
      viaTwitter={args.viaTwitter}
    />
  );
};

export const SignIn = SignInTemplate.bind({});
SignIn.args = {
  viaGoogle: true,
  viaGithub: true,
  viaTwitter: true,
  showError: false,
  errorTitle: "Error",
  errorText: "Something went wrong",
  lang: "en"
};
