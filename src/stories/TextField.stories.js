import React from "react";
import { StyledTextField } from "../components/Hawa/TextField/TextField";
import "../styles.css";

const Template = (args) => {
  return <StyledTextField {...args} />;
};

export default {
  title: "TextField",
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
  placeholder: "Exemple ...",
  defaultValue: "This is default value",
  inputLabel: "Text Field",
  bgColor: "lightgray",
  padding: 10
};
Dark.args = {
  placeholder: "Exemple ...",
  defaultValue: "This is default value",
  inputLabel: "Text Field",
  bgColor: "lightgray",
  padding: 10
};
