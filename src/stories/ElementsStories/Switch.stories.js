import React from "react";

import { HawaSwitch } from "../../elements";

export default {
  title: "Elements/Switch",
  component: HawaSwitch,
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
  return <HawaSwitch {...args} />;
};

export const Switch = Template.bind({});
Switch.args = {
  title: "Success",
  text: "The text of the toggle option",
  size: 'normal'
};
