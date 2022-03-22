import React from "react";
import { ResetPasswordForm } from "../../../blocks/AuthForms";

export default {
  title: "Blocks/Auth/Reset Password",
  component: [ResetPasswordForm],
  argTypes: {
   
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
  showError: false,
  sent: false
};
