import React from "react";
import AdaptiveButton from "../components/Hawa/AdaptiveButton/AdaptiveButton";
import { Box } from "../components/Hawa/Box";
import { HawaProvider } from "../components/Hawa/HawaProvider";

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
      <Box>Box 1</Box>
      <Box>Box 2</Box>
      <Box>Box 3</Box>
    </HawaProvider>
  );
};
export default {
  title: "Layout/Box",
  component: AdaptiveButton
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
