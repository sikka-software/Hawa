import React from "react";
import { ResetPasswordForm } from "../../../blocks/AuthForms";

export default {
  title: "Blocks/Auth/Reset Password",
  component: [ResetPasswordForm],
  parameters: {
    docs: {
      description: {
        component:
          "`<ResetPasswordForm/>` Block for users to request a password reset by entering their email."
      }
    }
  },
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
      {...args}
      error={args.showError}
      emailSentText={"The reset password link was sent to your email"}
      texts={{
        emailLabel: "Email",
        emailPlaceholder: "Enter your email",
        emailRequiredText: "Email is required",
        emailInvalidText: "Invalid email address",
        resetPassword: "Reset Password"
      }}
      handleResetPassword={(e) => console.log("resetting password,", e)}
    />
  );
};
export const ResetPassword = ResetPasswordTemplate.bind({});
ResetPassword.args = {
  sent: false
};
