import React from "react";
import { HawaCheckbox } from "../../ui";

const Template = (args) => {
  return <HawaCheckbox {...args} />;
};

export default {
  title: "UI/Checkbox",
  component: HawaCheckbox,
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
