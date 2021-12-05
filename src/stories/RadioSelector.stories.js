import React, { useState } from "react";
import { StyledRadioSelector } from "../components/Hawa/RadioSelector";
import "../styles.css";

export default {
  title: "RadioSelector",
  component: StyledRadioSeletor,
  argTypes: {
    options: {
      control: "array"
    }
  }
};

const Template = (args) => {
  return <StyledRadioSelector {...args} />;
};

export const StyledRadioSeletor = Template.bind({});
StyledRadioSeletor.args = {
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
/****************************/
