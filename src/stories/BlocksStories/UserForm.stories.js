import React from "react";
import { UserProfile } from "../../blocks/Account";

export default {
  title: "Blocks/UserBlocks",
  component: UserProfile,
  argTypes: {
    theme: {
      options: ["primary", "secondary", "default"],
      control: { type: "select" }
    }
  }
};

export const UserAccount = (args) => {
  return <UserProfile {...args} />;
};

UserAccount.args = {
  theme: "primary"
};
export const UserSettings = (args) => {
  return <UserProfile {...args} />;
};
UserSettings.args = {
  theme: "primary"
};
