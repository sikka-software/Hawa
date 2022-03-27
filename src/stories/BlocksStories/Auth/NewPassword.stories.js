import React from "react";
import { NewPasswordForm } from "../../../blocks/AuthForms";

export default {
  title: "Blocks/Auth/New Password",
  component: [NewPasswordForm],
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

const NewPasswordTemplate = (args) => {
  return (
    <NewPasswordForm
      {...args}
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
        confirmPasswordRequiredText: "Confirmation is required",
        passwordMatchError: "Password doesn't match",
        forgotPasswordText: "Forgot password?",
        passwordChange:
          "Your password has been changed, you'll be redirected to sign in page"
      }}
      error={args.showError}
    />
  );
};
export const NewPassword = NewPasswordTemplate.bind({});
NewPassword.args = {
  showError: false,
  passwordChanged: false
};
