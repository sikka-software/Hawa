import React from "react";
import AdaptiveButton from "../components/Hawa/AdaptiveButton/AdaptiveButton";
import "../styles.css";

const Template = (args) => {
  return <AdaptiveButton {...args} />;
};

export default {
  title: "Adaptive Button",
  component: Light,
  argsTypes: {
    defaultValue: {
      control: { type: "text" }
    },
    value: {
      control: { type: "text" }
    },
    inputLabel: {
      control: { type: "text" }
    },
    bdRadius: {
      contol: { type: "number" }
    },
    placeholder: {
      control: { type: "text" }
    },
    type: {
      options: ["text", "number", "date"],
      control: { type: "radio" }
    },
    padding: {
      type: "number"
    }
  },
  args: {
    bdRadius: 15,
    defaultValue: "Test",
    type: "date"
  }
};

export const Light = Template.bind({});
export const Dark = Template.bind({});

Light.args = {
  text: "test",
  showText: true,
  placeholder: "Example ...",
  defaultValue: "This is default value",
  inputLabel: "Text Field",
  bgColor: "lightgray",
  padding: 10
};
Dark.args = {
  showText: true,
  text: "test",
  placeholder: "Exemple ...",
  defaultValue: "This is default value",
  inputLabel: "Text Field",
  bgColor: "lightgray",
  padding: 10
};
