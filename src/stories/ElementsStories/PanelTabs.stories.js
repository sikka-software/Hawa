import React from "react";
import { HawaPanelTabs } from "../../elements";

export default {
  title: "Elements/Selections/Panel Tabs",
  component: [HawaPanelTabs],
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
    },
    handleChange: {
      action: "Tab Changed",
      // control: "function",
      description: "The function to change the defaultValue of the options tab"
    },
    defaultValue: {
      control: "string",
      description: "The string of the current selected option"
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
    <HawaPanelTabs
      {...args}
      // handleChange={(e) => console.log("changing to ", e)}
      defaultValue="option1"
      options={allOptions}
    />
  );
};
