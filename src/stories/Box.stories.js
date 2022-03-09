import React from "react";
import { Box } from "../layout";
import { HawaProvider } from "../components";

const theme = {
  borderRadius: 10,
  primaryColor: "green",
  secondaryColor: "red",
  margins: "10px",
  // paperColors: "#c6c6c6",
  paperColors: "blue",
  textColors: 'orange',
  paddings: 10,
  margins: 10
};
const Template = (args) => {
  return (
    <HawaProvider theme={theme}>
      <Box>Box 1</Box>
      <Box><div style={{ backgroundColor: 'white', padding: 10 }}>testing box in box</div></Box>
      <Box>Box 3</Box>
    </HawaProvider>
  );
};
export default {
  title: "Layout/Box",
  component: <Box />
};

export const Light = Template.bind({});
Light.args = {
  showText: true,
  buttonLabel: "test",
  borderRadius: 5,
  padding: theme.paddings,
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
