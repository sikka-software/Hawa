import React from "react";
import { HawaTextField } from "../../ui";

const Template = (args) => {
  return <HawaTextField {...args} />;
};

export default {
  title: "UI/TextField",
  component: HawaTextField,
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
