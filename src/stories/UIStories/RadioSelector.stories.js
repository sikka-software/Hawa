import React from "react";
import { HawaRadio } from "../../ui";

export default {
  title: "Elements/Selections/Panel Tabs",
  component: [HawaRadio],
  argTypes: {
    options: {
      control: "array",
      description: "An array of objects containing the option label and value",
      table: {
        type: {
          summary: "Object Example",
          detail: "{label: 'Option 1', value: 'option1'}"
        }
      }
    }
  },
  args: {
    options: 3
  }
};

export const PanelTabs = (args) => {
  let allOptions = Array.from({ length: args.options }, (v, i) => {
    return { label: `Option ${i}`, value: `option${i}` };
  });
  return (
    <HawaRadio
      {...args}
      handleChange={(e) => console.log("changing to ", e)}
      defaultValue="option1"
      options={allOptions}
    />
  );
};
