import React, { useState } from "react";
import { StyledInputLabel } from "../components/Hawa/InputLabel/StyledInputLabel";
import { StyledTextArea } from "../components/Hawa/TextArea/TextArea";
import { StyledTextField } from "../components/Hawa/TextField/TextField";
import "../styles.css";

export default {
  title: "TextField",
  component: StyledTextField,
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

const Template = (args) => {
  return <StyledTextField {...args} />;
};

export const StyledCheckBox = Template.bind({});
StyledCheckBox.args = {
  placeholder: "Exemple ...",
  defaultValue: "This is default value",
  inputLabel: "Text Field",
  bgColor: "lightgray",
  padding: 10
};
