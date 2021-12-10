import React from "react";
import { StyledTextField } from "../components/Hawa/TextField/TextField";
import "../styles.css";

const Template = (args) => {
  return <StyledTextField {...args} />;
};

export default {
  title: "Components/TextField",
  component: StyledTextField,
  argsTypes: {
    type: {
      name: "type",
      type: { name: "string", required: true },
      options: ["text", "number", "date"],
      control: { type: "radio" },
      defaultValue: "text",
      description: "Styled Text Field",
      table: {
        type: { summary: "string" },
        defaultValue: { summary: "Hello" }
      }
    }
  }
  // args: {
  //   bdRadius: 15,
  //   defaultValue: "Test",
  //   type: "date"
  // }
};

export const Light = Template.bind({});
export const Dark = Template.bind({});

Light.args = {
  placeholder: "Exemple ...",
  defaultValue: "This isko default value",
  inputLabel: "Text Field",
  bgColor: "lightgray",
  padding: 10
  // type: "number"
};
Dark.args = {
  placeholder: "Exemple ...",
  defaultValue: "This is default value",
  inputLabel: "Text Field",
  bgColor: "lightgray",
  padding: 10
};
