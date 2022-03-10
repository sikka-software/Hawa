import React from "react";

import { defaultTheme, HawaProvider } from "../themes/HawaProvider";
import { ActionButton } from "../ui";

const Template = (args) => {
  const theme = {
    borderRadius: 10,
    primaryColor: "green",
    secondaryColor: "red",
    // margins: "10px",
    paperColors: "#c6c6c6",
    paddings: 10,
    margins: 10
  };
  return (
    <HawaProvider theme={{ ...defaultTheme, ...args.theme }}>
      <ActionButton secondary={args.secondary} text='here' />
    </HawaProvider>
  );
};
//types:
//error (red)
//warning (red)
//notice (blue)

export default {
  title: "UI/ActionButton",
  component: ActionButton
};

export const Primary = Template.bind({});
Primary.args = {
  showText: true,
  buttonLabel: "test",
  borderRadius: 5,
  textColor: "#000000",
  buttonColor: "#f9f9f9"
};

export const Secondary = Template.bind({});
Secondary.args = {
  secondary: true,
  showText: true,
  buttonLabel: "test",
  borderRadius: 5,
  textColor: "#000000",
  buttonColor: "#f9f9f9",
};
