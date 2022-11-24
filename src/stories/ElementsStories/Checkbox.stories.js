import React from "react";

import { HawaCheckbox } from "../../elements";

export default {
  title: "Elements/Checkbox",
  component: HawaCheckbox,
  argTypes: {
    label: {
      control: "text",
      description: "The content text of the checkbox"
    },
    helperText: {
      control: "text",
      description: "The red text if the checkbox is required"
    }
  }
};

const Template = (args) => {
  return <HawaCheckbox  {...args} />;
};

export const Checkbox = Template.bind({});
Checkbox.args = {
  label: "This is an checkbox element with a label and helperText",
  helperText: "This is the helperText"
};
