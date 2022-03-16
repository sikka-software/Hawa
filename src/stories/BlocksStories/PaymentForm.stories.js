import React from "react";
import {
  UserProfile
} from "../../blocks/Account";
import { defaultTheme, HawaProvider } from "../../themes/HawaProvider";

export default {
  title: "Blocks/PaymentForm",
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

const UserProfileTemplate = (args) => {
  return (
    <HawaProvider theme={{ ...defaultTheme, ...theme }}>
      <UserProfile {...args} />
    </HawaProvider>
  );
};

export const Success = UserProfileTemplate.bind({});
Success.args = {
  viaGoogle: true,
  viaGithub: true,
  viaTwitter: true,
  viaFacebook: true
};
export const Failed = UserProfileTemplate.bind({});
Failed.args = {
  viaGoogle: true,
  viaGithub: true,
  viaTwitter: true,
  viaFacebook: true
};

