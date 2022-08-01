import Class from "@mui/icons-material/Class";
import React from "react";
import { AdaptiveButton } from "../../elements";

export default {
  title: "Elements/Buttons/AdaptiveButton",
  component: AdaptiveButton,
  argTypes: {
    buttonText: {
      control: "text",
      description: "The button text",
      table: {
        defaultValue: { summary: "Click" }
      }
    },
    showText: {
      control: "boolean",
      // default: true,
      description: "Boolean to show or hide the text",
      table: {
        defaultValue: { summary: true },
        type: {
          summary: "Use Case",
          detail:
            "Set this property to true in large screen and false on mobile"
        }
      }
    }
  },
  args: {
    buttonText: "Click"
  }
};

const Template = (args) => {
  return <AdaptiveButton {...args} />;
};

export const FullButton = Template.bind({});
FullButton.args = {
  showText: true,
  buttonText: "Button",
  icon: <Class />
};
