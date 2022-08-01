import Class from "@mui/icons-material/Class";
import React from "react";
import { HawaChip } from "../../elements";

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

export const Chip = (args) => {
  return <HawaChip variant="contained" {...args} />;
};

// export const FullButton = Template.bind({});
// FullButton.args = {
//   showText: true,
//   buttonText: "Button",
//   icon: <Class />
// };
