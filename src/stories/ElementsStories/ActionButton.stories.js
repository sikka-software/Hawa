import React from "react";
import { ActionButton } from "../../elements";

export default {
  title: "Elements/Buttons/ActionButton",
  component: ActionButton,
  argTypes: {
    theme: {
      options: ["primary", "secondary", "default"],
      control: { type: "select" }
    }
  }
};
const Template = (args) => {
  return <ActionButton text={args.buttonLabel} />;
};

Template.args = {
  showText: true,
  buttonLabel: "test",
  theme: "primary"
};
export const Primary = Template.bind({});
Primary.args = {
  showText: true,
  buttonLabel: "test",
  theme: "primary"
};

export const Secondary = Template.bind({});
Secondary.args = {
  showText: true,
  buttonLabel: "test",
  theme: "secondary"
};
export const Default = Template.bind({});
Default.args = {
  showText: true,
  buttonLabel: "test",
  theme: "default"
};
