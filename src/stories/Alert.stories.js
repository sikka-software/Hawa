import React from "react";

import { HawaProvider } from "../components/Hawa/HawaProvider";
import { StyledAlert } from "../components/Hawa/StyledAlert/StyledAlert";

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
    <HawaProvider theme={theme}>
      <StyledAlert text="teshht" />
    </HawaProvider>
  );
};
//types:
//error (red)
//warning (red)
//notice (blue)

export default {
  title: "Components/Alert",
  component: StyledAlert
};

export const Light = Template.bind({});
Light.args = {
  showText: true,
  buttonLabel: "test",
  borderRadius: 5,
  textColor: "#000000",
  buttonColor: "#f9f9f9"
};

export const Dark = Template.bind({});
Dark.args = {
  showText: true,
  buttonLabel: "test",
  borderRadius: 5,
  buttonColor: "#878787",
  textColor: "#ffffff"
};
