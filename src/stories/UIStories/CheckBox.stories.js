import React from "react";
import { StyledCheckbox } from "../../ui";

const Template = (args) => {
  return <StyledCheckbox {...args} />;
};

export default {
  title: "UI/Checkbox",
  component: Light,
  argsTypes: {
    defaultValue: {
      options: [true, false],
      control: { type: "radio" }
    }
  },
  args: {
    defaultValue: true,
    disabled: true
  }
};

export const Light = Template.bind({});
export const Dark = Template.bind({});

Light.args = {
  color: "red",
  defaultValue: false,
  label: "test"
};
Dark.args = {
  color: "gray",
  defaultValue: false
};
