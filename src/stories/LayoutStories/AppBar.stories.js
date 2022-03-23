import React from "react";
import { HawaAppBar } from "../../elements";

const Template = (args) => {
  return <HawaAppBar />;
};
export default {
  title: "Layout/AppBar",
  component: [HawaAppBar],
  parameters: {
    backgrounds: {
      default: "light"
      // values: [
      //   { name: "light", value: theme.lightBackground },
      //   { name: "dark", value: theme.darkBackground }
      // ]
    }
  }
};

export const Normal = Template.bind({});
Normal.args = {
  size: "large",
  showText: true,
  buttonLabel: "test",
  // padding: theme.paddings,
  textColor: "#000000",
  buttonColor: "#f9f9f9"
};
