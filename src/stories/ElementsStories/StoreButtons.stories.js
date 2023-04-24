import React from "react";

import { HawaStoreButtons } from "../../elements";

export default {
  title: "Elements/Buttons/Store Buttons",
  component: HawaStoreButtons,
  argTypes: {
    label: {
      control: "text",
      description: "The content text of the checkbox"
    },
    helperText: {
      control: "text",
      description: "The red text if the checkbox is required"
    },
    id: {
      control: "text",
      description: "Required to make the label clickable"
    }
  }
};

const Template = (args) => {
  return <HawaStoreButtons {...args} />;
};

export const AppleStore = Template.bind({});
AppleStore.args = {
  store: "apple",
  mode: "dark"
};
export const GoogleStore = Template.bind({});
GoogleStore.args = {
  store: "google",
  mode: "dark"
};
