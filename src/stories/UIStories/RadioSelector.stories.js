import React from "react";
import { HawaProvider } from "../../themes/HawaProvider";
import { HawaRadio } from "../../ui";

const Template = (args) => {
  const theme = {
    borderRadius: 5,
    primaryColor: "green",
    secondaryColor: "red",
    // margins: "10px",
    paddings: 10
  };
  return (
    <HawaProvider theme={theme}>
      <HawaRadio {...args} />
    </HawaProvider>
  );
};
export default {
  title: "UI/RadioSelector",
  component: HawaRadio,
  argTypes: {
    options: {
      control: "array"
    }
  },
  args: {
    options: [
      { text: "Option 1", label: "option1" },
      { text: "Option 2", label: "option2" },
      { text: "Option 3", label: "option3" }
    ]
  }
};

export const Light = Template.bind({});

Light.args = {
  options: [
    { text: "Option 1", label: "option1" },
    { text: "Option 2", label: "option2" },
    { text: "Option 3", label: "option3" }
  ],
  selectedColor: "blue",
  borderRadius: 12,
  defaultValue: "option2",
  bgSelectedColor: "red",
  textSelectedColor: "white",
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
  selectedColor: "blue",
  borderRadius: 12,
  defaultValue: "option2",
  bgSelectedColor: "blue",
  textSelectedColor: "white",
  handleChange: () => {
    console.log("handleChange goes here");
  }
};
