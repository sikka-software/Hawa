import React from "react";
import { UserProfileForm } from "../../../blocks/Account";

export default {
  title: "Blocks/Account/User Profile",
  component: [UserProfile],
  argTypes: {}
};

const ProfileTemplate = (args) => {
  return <UserProfileForm {...args} />;
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
