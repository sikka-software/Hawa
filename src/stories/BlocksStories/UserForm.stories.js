import React from "react";
import { UserProfile } from "../../blocks/Account";
import { defaultTheme, HawaProvider } from "../../themes/HawaProvider";

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

const theme = {
  ...defaultTheme,
  paddings: 20
};

export const UserAccount = (args) => {
  return (
    <HawaProvider theme={{ ...defaultTheme, ...theme }}>
      <UserProfile {...args} />
    </HawaProvider>
  );
};

UserAccount.args = {
  theme: "primary"
};
export const UserSettings = (args) => {
  return (
    <HawaProvider theme={{ ...defaultTheme, ...theme }}>
      <UserProfile {...args} />
    </HawaProvider>
  );
};
UserSettings.args = {
  theme: "primary"
};
