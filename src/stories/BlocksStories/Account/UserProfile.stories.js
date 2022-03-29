import React from "react";
import { UserProfileForm } from "../../../blocks/Account";

export default {
  title: "Blocks/Account/User Profile",
  component: [UserProfile],
  argTypes: {}
};

const ProfileTemplate = (args) => {
  return (
    <UserProfileForm
      {...args}
      handleUpdateProfile={(e) => console.log("updating profile", e)}
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
        confirmPasswordLabel: "Confirm",
        confirmPasswordPlaceholder: "Confirm password",
        confirmPasswordRequiredText: "Confirmation is required",
        passwordMatchError: "Password doesn't match"
      }}
    />
  );
};
export const UserProfile = ProfileTemplate.bind({});
UserProfile.args = {
  viaGoogle: true,
  viaGithub: true,
  viaTwitter: true,
  showError: false,
  errorTitle: "Error",
  errorText: "Something went wrong"
};
