import React from "react";
import AdaptiveButton from "../components/Hawa/AdaptiveButton/AdaptiveButton";
import CastIcon from "@material-ui/icons/Cast";
import { HawaProvider } from "../components/Hawa/HawaProvider";

const Template = (args) => {
  const theme = {
    borderRadius: 10,
    primaryColor: "#004fff",
    secondaryColor: "red",
    // margins: "10px",
    paddings: 10
  };
  return (
    <HawaProvider theme={theme}>
      <AdaptiveButton {...args} />
    </HawaProvider>
  );
};
export default {
  title: "Components/AdaptiveButton",
  component: AdaptiveButton,
  argsTypes: {
    buttonLabel: { control: "text" },
    borderRadius: { control: "number" },
    buttonColor: { control: "color" },
    padding: { control: "number" },
    hintTitle: { control: "text" },
    hintContent: { control: "text" }
  },
  args: {
    // type: "text",
    // buttonLabel: "Test"
    // borderRadius: 15,
    hintTitle: "test",
    hintContent: "more test",
    buttonColor: "#f9f9f9"
  }
};

export const Light = Template.bind({});
Light.args = {
  showText: true,
  buttonLabel: "test",
  borderRadius: 5,
  icon: <CastIcon />,
  textColor: "#000000",
  buttonColor: "#f9f9f9"
  // placeholder: "Example ...",
  // defaultValue: "This is default value",
  // inputLabel: "Text Field",
  // padding: 10
};

export const Dark = Template.bind({});
Dark.args = {
  showText: true,
  buttonLabel: "test",
  borderRadius: 5,
  buttonColor: "#878787",
  textColor: "#ffffff",
  icon: <CastIcon />
  // placeholder: "Exemple ...",
  // defaultValue: "This is default value",
  // inputLabel: "Text Field",
  // padding: 10
};
export const Danger = Template.bind({});
Danger.args = {
  showText: true,
  buttonLabel: "test",
  borderRadius: 5,
  buttonColor: "#c0c0c0",
  danger: true,
  icon: <CastIcon />
  // placeholder: "Exemple ...",
  // defaultValue: "This is default value",
  // inputLabel: "Text Field",
  // padding: 10
};
