import React from "react";
import { HawaProvider } from "../../themes/HawaProvider";
import { ActionButton } from "../../ui";

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
  return (
    <HawaProvider themeName={args.theme}>
      <ActionButton text={args.buttonLabel} />
    </HawaProvider>
  );
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
