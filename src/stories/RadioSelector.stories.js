import React from "react";
import { StyledRadioSelector } from "../components/Hawa/RadioSelector";
import { HawaProvider } from "../components/Hawa/HawaProvider";
import "../styles.css";

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
      <StyledRadioSelector {...args} />
    </HawaProvider>
  );
};
export default {
  title: "Components/RadioSelector",
  component: Light,
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
  textSelectedColor: "black",
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
