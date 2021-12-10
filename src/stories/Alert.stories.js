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
      <StyledAlert text="This is a warning" type="warning" />
      <StyledAlert text="This is a regular notification" type="notification" />
      <StyledAlert text="This is a danger alert" type="danger" />
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

export const Default = Template.bind({});
Default.args = {
  showText: true,
  buttonLabel: "test",
  borderRadius: 5,
  textColor: "#000000",
  buttonColor: "#f9f9f9"
};
