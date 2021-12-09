import React from "react";
import { StyledRadioSelector } from "../components/Hawa/RadioSelector";
import { HawaProvider } from "../components/Hawa/HawaProvider";
import "../styles.css";

const Template = (args) => {
  const theme = {
    borderRadius: "10px",
    primaryColor: "red",
    secondaryColor: "white",
    margins: "10px",
    paddings: "5px"
  };
  return (
    <HawaProvider  theme={theme}>
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
  }
};

export const Light = Template.bind({});
export const Dark = Template.bind({});

Light.args = {
  options: [
    { text: "Option 1", label: "option1" },
    { text: "Option 2", label: "option2" },
    { text: "Option 3", label: "option3" }
  ],
  selectedColor: "blue",
  bdRadius: 12,
  defaultValue: "option2",
  bgSelectedColor: "red",
  textSelectedColor: "black",
  handleChange: () => {
    console.log("handleChange goes here");
  }
};
Dark.args = {
  options: [
    { text: "Option 1", label: "option1" },
    { text: "Option 2", label: "option2" },
    { text: "Option 3", label: "option3" }
  ],
  selectedColor: "blue",
  bdRadius: 12,
  defaultValue: "option2",
  bgSelectedColor: "blue",
  textSelectedColor: "white",
  handleChange: () => {
    console.log("handleChange goes here");
  }
};
