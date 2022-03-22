import React from "react";
import { UserSettingsForm } from "../../../blocks/Account";

export default {
  title: "Blocks/Account/User Settings",
  component: UserSettingsForm,
  argTypes: {
    theme: {
      options: ["primary", "secondary", "default"],
      control: { type: "select" }
    }
  }
};

export const UserSettings = (args) => {
  return <UserSettingsForm {...args} />;
};
UserSettings.args = {
  theme: "primary",
  title: "red"
};
