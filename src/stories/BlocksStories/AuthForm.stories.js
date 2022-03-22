import { ThemeProvider } from "@mui/material";
import React from "react";
import {
  NewPasswordForm,
  ResetPasswordForm,
  SignInForm,
  SignUpForm
} from "../../blocks/AuthForms";

export default {
  title: "Blocks/AuthBlocks",
  component: [SignInForm, SignUpForm, NewPasswordForm, NewPasswordForm],
  argTypes: {
    theme: {
      options: ["primary", "secondary", "default"],
      control: { type: "select" }
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
  theme: "primary"
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
  theme: "primary"
};

const ResetPasswordTemplate = (args) => {
  return (
    <ResetPasswordForm
      error={args.showError}
      texts={{
        emailLabel: "Email",
        emailPlaceholder: "Enter your email",
        emailRequiredText: "Email is required",
        emailInvalidText: "Invalid email address",
        passwordLabel: "Password",
        resetPassword: "Reset Password",
        passwordRequiredText: "Password is required",
        forgotPasswordText: "Forgot password?",
        newUserText: "New user?",
        signUpText: "Sign up",
        signInText: "Sign in",
        googleButtonLabel: "Sign in with Google",
        githubButtonLabel: "Sign in with Github",
        twitterButtonLabel: "Sign in with Twitter"
      }}
      {...args}
      handleResetPassword={() => console.log("resetting password")}
    />
  );
};
export const ResetPassword = ResetPasswordTemplate.bind({});
ResetPassword.args = {
  theme: "primary",
  showError: false,
  sent: false
};
const NewPasswordTemplate = (args) => {
  return (
    <NewPasswordForm
      texts={{
        emailLabel: "Email",
        emailPlaceholder: "Enter your email",
        emailRequiredText: "Email is required",
        passwordPlaceholder: "Enter password",
        updatePassword: "Update Password",
        passwordRequiredText: "Password is required",
        passwordLabel: "Choose new password",
        confirmPasswordPlaceholder: "Confirm password",
        confirmPasswordLabel: "Confirm",
        forgotPasswordText: "Forgot password?",
        newUserText: "New user?",
        signUpText: "Sign up",
        signInText: "Sign in",
        googleButtonLabel: "Sign in with Google",
        githubButtonLabel: "Sign in with Github",
        twitterButtonLabel: "Sign in with Twitter"
      }}
      error={args.showError}
      theme={args.theme}
      {...args}
    />
  );
};
export const NewPassword = NewPasswordTemplate.bind({});
NewPassword.args = {
  theme: "primary",
  showError: false,
  passwordChanged: false
};
