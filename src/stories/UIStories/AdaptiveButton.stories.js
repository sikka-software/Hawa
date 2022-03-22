import React from "react";
import CastIcon from "@mui/icons-material/Cast";
import { AdaptiveButton } from "../../ui";

export default {
  title: "Elements/Buttons/AdaptiveButton",
  component: AdaptiveButton,
  argsTypes: {
    buttonLabel: { control: "text" },
    borderRadius: { control: "number" },
    buttonColor: { control: "color" },
    padding: { control: "number" },
    hintTitle: { control: "text" },
    hintContent: { control: "text" },
    theme: {
      options: ["primary", "secondary", "default"],
      control: { type: "select" }
    }
  },
  args: {
    hintTitle: "test",
    hintContent: "more test",
    buttonColor: "#f9f9f9",
    theme: "primary"
  }
};

const Template = (args) => {
  return <AdaptiveButton {...args} />;
};

export const FullButton = Template.bind({});
FullButton.args = {
  // showText: true,
  // buttonLabel: "test",
  // borderRadius: 5,
  // icon: <CastIcon />,
  // textColor: "#000000",
  // buttonColor: "#f9f9f9",
  theme: "primary"
  // placeholder: "Example ...",
  // defaultValue: "This is default value",
  // inputLabel: "Text Field",
  // padding: 10
};

export const IconOnly = Template.bind({});
IconOnly.args = {
  // showText: true,
  // buttonLabel: "test",
  // borderRadius: 5,
  // buttonColor: "#878787",
  // textColor: "#ffffff",
  // icon: <CastIcon />,
  theme: "primary"

  // placeholder: "Exemple ...",
  // defaultValue: "This is default value",
  // inputLabel: "Text Field",
  // padding: 10
};
export const Danger = Template.bind({});
Danger.args = {
  // showText: true,
  // buttonLabel: "test",
  // borderRadius: 5,
  // buttonColor: "#c0c0c0",
  // danger: true,
  // icon: <CastIcon />,
  theme: "primary"

  // placeholder: "Exemple ...",
  // defaultValue: "This is default value",
  // inputLabel: "Text Field",
  // padding: 10
};
