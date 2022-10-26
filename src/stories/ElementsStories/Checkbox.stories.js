import React from "react";

import { HawaCheckbox } from "../../elements";

export default {
  title: "Elements/Checkbox",
  component: HawaCheckbox,
  argTypes: {
    title: {
      control: "text",
      description: "The title of the alert in bold"
    },
    text: {
      control: "text",
      description: "The content text of the alert"
    }
  }
};

const Template = (args) => {
  return <HawaCheckbox {...args} />;
};

export const Checkbox = Template.bind({});
Checkbox.args = {
  title: "Success",
  text: "This is an alert indicating that there was a successful action",
  severity: "success"
};
