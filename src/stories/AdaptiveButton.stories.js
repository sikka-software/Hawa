import React from "react";
import AdaptiveButton from "../components/Hawa/AdaptiveButton/AdaptiveButton";
import "../styles.css";

const Template = (args) => <AdaptiveButton {...args} />;

export default {
  title: "Adaptive Button",
  component: AdaptiveButton,
  argsTypes: {
    buttonLabel: {
      control: { type: "text" }
    },
    borderRadius: {
      contol: { type: "number" }
    },
    value: {
      control: { type: "text" }
    },
    inputLabel: {
      control: { type: "text" }
    },
    buttonColor: {
      contol: { type: "color" }
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
    // type: "text",
    buttonLabel: "Test",
    borderRadius: 15,
    buttonColor: "#f9f9f9"
  }
};

export const Light = Template.bind({});
Light.args = {
  text: "test",
  showText: true,
  borderRadius: 5
  // placeholder: "Example ...",
  // defaultValue: "This is default value",
  // inputLabel: "Text Field",
  // padding: 10
};

export const Dark = Template.bind({});
Dark.args = {
  showText: true,
  text: "test",
  borderRadius: 5

  // placeholder: "Exemple ...",
  // defaultValue: "This is default value",
  // inputLabel: "Text Field",
  // padding: 10
};
