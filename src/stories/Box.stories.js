import React from "react";
import { Box } from "../layout";
import { HawaProvider, defaultTheme } from "../components";
const theme = {
  // paperColors: "#c6c6c6",
  // paperColors: "blue",
  // textColors: 'orange',
  ...defaultTheme

  // borderRadius: 10,
  // primaryColor: "blue",
  // secondaryColor: "grey",
  // backgroundColor: 'red',
  // layoutColor: 'orange',
  // margins: 10,
  // paddings: 5
};

const Template = (args) => {
  return (
    <HawaProvider size="large" theme={{ ...theme, ...args.theme }}>
      <Box>Box 1</Box>
      <Box><div style={{ backgroundColor: 'white', padding: 10 }}>testing box in box</div></Box>
      <Box>Box 3</Box>
    </HawaProvider >
  );
};
export default {
  title: "Layout/Box",
  component: <Box />,
  parameters: {
    backgrounds: {
      default: 'light',
      values: [
        { name: 'light', value: theme.lightBackground },
        { name: 'dark', value: theme.darkBackground },
      ],
    },
  },
};

export const Normal = Template.bind({});
Normal.args = {
  showText: true,
  buttonLabel: "test",
  borderRadius: 5,
  padding: theme.paddings,
  textColor: "#000000",
  buttonColor: "#f9f9f9"
};
export const Compact = Template.bind({});
Compact.args = {
  showText: true,
  buttonLabel: "test",
  theme: {
    borderRadius: 15,
    paddings: theme.paddings / 2,
    textColor: "#000000",
    buttonColor: "#f9f9f9",

  }
};
