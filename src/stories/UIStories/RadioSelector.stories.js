import React from "react";
import { HawaProvider } from "../../themes/HawaProvider";
import { HawaRadio } from "../../ui";

export default {
  title: "UI/RadioSelector",
  component: HawaRadio,
  argTypes: {
    theme: {
      options: ["primary", "secondary", "default"],
      control: { type: "select" }
    }
  },
  args: {
    theme: "primary"
  }
};

const Template = (args) => {
  return (
    <HawaProvider themeName={args.theme}>
      <HawaRadio
        defaultValue="option1"
        options={[
          { text: "Option 1", label: "option1" },
          { text: "Option 2", label: "option2" },
          { text: "Option 3", label: "option3" }
        ]}
      />
    </HawaProvider>
  );
};
export const Light = Template.bind({});

Light.args = {
  theme: "primary",

  handleChange: () => {
    console.log("handleChange goes here");
  }
};
export const Dark = Template.bind({});
Dark.args = {
  options: [
    { text: "Option 1", label: "option1" },
    { text: "Option 2", label: "option2" },
    { text: "Option 3", label: "option3" }
  ],
  defaultValue: "option2",
  handleChange: () => {
    console.log("handleChange goes here");
  }
};
