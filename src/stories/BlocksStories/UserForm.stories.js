import React from "react";
import { UserProfile } from "../../blocks/Account";
import { defaultTheme, HawaProvider } from "../../themes/HawaProvider";

export default {
  title: "Blocks/UserBlocks",
  component: UserProfile,
  argsTypes: {
    viaGoogle: { control: "boolean" },
    viaGithub: { control: "boolean" },
    viaTwitter: { control: "boolean" },
    viaFacebook: { control: "boolean" }
  },
  args: {}
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
  viaGoogle: true,
  viaGithub: true,
  viaTwitter: true,
  viaFacebook: true
};
export const UserSettings = (args) => {
  return (
    <HawaProvider theme={{ ...defaultTheme, ...theme }}>
      <UserProfile {...args} />
    </HawaProvider>
  );
};
UserSettings.args = {
  viaGoogle: true,
  viaGithub: true,
  viaTwitter: true,
  viaFacebook: true
};
