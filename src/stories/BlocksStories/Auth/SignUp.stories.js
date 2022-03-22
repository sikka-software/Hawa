import React from "react";
import { SignUpForm } from "../../../blocks/AuthForms";

export default {
  title: "Blocks/Auth/Sign Up",
  component: [SignUpForm],
  argTypes: {
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

const SignUpTemplate = (args) => {
  return (
    <SignUpForm
      {...args}
      texts={{
        fullNameLabel: "Full Name",
        fullNamePlaceholder: "Fulan AlFulani",
        emailLabel: "Email",
        emailPlaceholder: "Enter your email",
        emailRequiredText: "Email is required",
        emailInvalidText: "Invalid email address",
        passwordLabel: "Password",
        passwordPlaceholder: "Minimum 8 characters",
        passwordRequiredText: "Password is required",
        passwordTooShortText: "Password too short",
        forgotPasswordText: "Forgot password?",
        newUserText: "New user?",
        signUpText: "Sign up",
        signInText: "Sign in",
        googleButtonLabel: "Sign in with Google",
        githubButtonLabel: "Sign in with Github",
        twitterButtonLabel: "Sign in with Twitter"
      }}
      error={args.showError}
      viaGoogle={args.viaGoogle}
      viaGithub={args.viaGithub}
      viaTwitter={args.viaTwitter}
      handleSignUp={() => console.log("singing up via email")}
      handleGoogleSignUp={() => console.log("signing up via google")}
      handleGithubSignUp={() => console.log("signing up via github")}
      handleTwitterSignUp={() => console.log("signing up via Twitter")}
      handleRouteToSignIn={() => console.log("switching to sign in")}
    />
  );
};
export const SignUp = SignUpTemplate.bind({});
SignUp.args = {
  viaGoogle: true,
  viaGithub: true,
  viaTwitter: true,
  showError: false,
  errorTitle: "Error",
  errorText: "Something went wrong"
};
