import React from "react";
import { UserProfileForm } from "../../../blocks/Account";

export default {
  title: "Blocks/Account/User Profile",
  component: [UserProfile]
};

const ProfileTemplate = (args) => {
  return (
    <UserProfileForm
      handleUpdateProfile={(e) => console.log("updating profile", e)}
      {...args}
      texts={{
        fullNameLabel: "Full Name",
        fullNamePlaceholder: "Fulan AlFulani",
        fullNameRequiredText: "Full Name is required",
        emailLabel: "Email",
        emailPlaceholder: "Enter your email",
        emailRequiredText: "Email is required",
        emailInvalidText: "Invalid email address",
        passwordLabel: "Choose new password",
        passwordPlaceholder: "Minimum 8 characters",
        passwordRequiredText: "Password is required",
        passwordTooShortText: "Password too short",
        updateProfile: "Update Profile",
        confirmPasswordLabel: "Confirm new password",
        confirmPasswordPlaceholder: "Confirm password",
        confirmPasswordRequiredText: "Confirmation is required",
        passwordMatchError: "Password doesn't match"
      }}
      inputs={[
        {
          name: "name",
          label: "Full Name",
          placeHolder: "Your full name",
          defaultValue: "here goes default Value",
          value: "this is value",
          type: "text",
          rules: {
            required: true,
            minLength: 8
          }
        },
        {
          name: "phone",
          label: "Phone Number",
          type: "number",
          placeHolder: "Your full name",
          type: "text",
          rules: {
            required: true,
            minLength: 8
          }
        },
        {
          name: "message",
          label: "Your Message",
          defaultValue: "This is your default Value",
          type: "textarea"
        }
      ]}
    />
  );
};
export const UserProfile = ProfileTemplate.bind({});
UserProfile.args = {
  errorTitle: "Error",
  errorText: "Something went wrong"
};
