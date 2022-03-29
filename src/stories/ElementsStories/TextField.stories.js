import { Container } from "@mui/material";
import React from "react";
import { HawaTextArea, HawaTextField } from "../../elements";

export default {
  title: "Elements/TextFields",
  component: [HawaTextField, HawaTextArea],
  parameters: {
    backgrounds: {
      default: "light",
      values: [{ name: "light", value: "#ECEBE4" }]
    }
  },

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

export const InputField = (args) => {
  return <HawaTextField {...args} />;
};

InputField.args = {
  label: "Label test",
  helperText: "something invalid",
  placeholder: "input placeholder",
  type: "text",
  fullWidth: false
};

export const TextArea = (args) => {
  return <HawaTextField multiline {...args} />;
};
TextArea.args = {
  label: "Label test",
  helperText: "something invalid",
  placeholder: "input placeholder",
  type: "text",
  fullWidth: false
};
