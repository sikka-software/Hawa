import React from "react";
import { HawaChip } from "../../elements";
import { FaCheck } from "react-icons/fa";
export default {
  title: "Elements/Chip",
  component: HawaChip,
  argTypes: {
    label: {
      control: "text",
      description: "The button text",
      table: {
        defaultValue: { summary: "Click" }
      }
    },
    color: {
      control: "select",
      description: "The button text",
      options: ["info", "success", "warning", "error"]
    }
  },
  args: {
    label: "Text",
    color: "info"
  }
};

export const Default = (args) => {
  return <HawaChip variant="contained" {...args} />;
};

export const WithIcon = (args) => {
  return <HawaChip variant="contained" {...args} />;
};

WithIcon.args = {
  icon: <FaCheck />
};
