import React from "react";
import { StyledCheckbox } from "../components/Hawa/Checkbox/Checkbox";
import "../styles.css";

const Template = (args) => {
  return <StyledCheckbox {...args} />;
};

export default {
  title: "Checkbox",
  component: Light,
  argsTypes: {
    defaultValue: {
      options: [true, false],
      control: { type: "radio" }
    }
  },
  args: {
    defaultValue: true
  }
};

export const Light = Template.bind({});
export const Dark = Template.bind({});

Light.args = {
  color: "gray",
  defaultValue: false
};
Dark.args = {
  color: "gray",
  defaultValue: false
};
