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
  }
};

const ResetPasswordTemplate = (args) => {
  return (
    <ResetPasswordForm
      {...args}
      texts={{
        emailLabel: "Email",
        emailPlaceholder: "Enter your email",
        emailRequiredText: "Email is required",
        emailInvalidText: "Invalid email address",
        emailSentText: "The reset password link was sent to your email",
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
