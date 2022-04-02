import React from "react";
import { HawaSearchBar } from "../../elements";

export default {
  title: "Elements/Search",
  component: [HawaSearchBar],
  parameters: {
    backgrounds: {
      default: "light",
      values: [{ name: "light", value: "#96ACB7" }]
    }
  },
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
      control: "function",
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

export const Search = (args) => {
  return (
    <HawaSearchBar
      {...args}
      placeholder="Search"
      onChange={(e) => console.log(e.target.value)}
    />
  );
};
