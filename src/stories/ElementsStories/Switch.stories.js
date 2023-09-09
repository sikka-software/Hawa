import React from "react";
import { Switch } from "../../elements";

export default {
  title: "Elements/Switch",
  component: Switch,
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
  return (
    <div>
      <h1>v0.1</h1>
      <div className="flex flex-col gap-4">
        <Switch size="sm" label="Small switch with label" />
        <Switch label="Large switch with label" />
      </div>
      <h1>RTL</h1>
      <div dir="rtl" className="flex flex-col items-end gap-4">
        <Switch size="sm" label="Small switch with label" />
        <Switch label="Large switch with label" />
      </div>
    </div>
  );
};

export const SwitchStory = Template.bind({});
SwitchStory.args = {
  title: "Success",
  text: "The text of the toggle option",
  size: "normal"
};
SwitchStory.storyName = "Switch";
