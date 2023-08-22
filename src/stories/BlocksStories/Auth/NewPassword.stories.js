import React from "react";
import { NewPasswordForm } from "../../../blocks/AuthForms";

export default {
  title: "Blocks/Auth/New Password",
  component: [NewPasswordForm],
  parameters: {
    docs: {
      description: {
        component: "`<NewPasswordForm/>` Block for users to set new password"
      }
    }
  }
};

const NewPasswordTemplate = (args) => {
  return (
    <div className="max-w-md">
      <NewPasswordForm {...args} />
    </div>
  );
};
export const NewPassword = NewPasswordTemplate.bind({});
NewPassword.args = {
  handleNewPassword: () => console.log("changing password"),
  passwordChanged: false,
  texts: {
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
    passwordChanged:
      "Your password has been changed, you'll be redirected to sign in page"
  }
};
