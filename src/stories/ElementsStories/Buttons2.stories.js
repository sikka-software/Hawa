import React from "react";
import { HawaButton } from "../../elements";
import { FaClipboardCheck, FaClone } from "react-icons/fa";

export default {
  title: "Elements/Buttons",
  component: [HawaButton],
  argTypes: {
    text: {
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
    },
    isLoading: {
      control: "boolean",
      description: "Boolean to show a spiner"
    },
    loadingText: {
      control: "text",
      description: "Text when button is on loading state"
    }
  }
};

const Template = (args) => {
  return <HawaButton {...args} />;
};

export const Default = Template.bind({});
Default.args = {
  showText: true,
  text: "Default Button"
};
export const WithIcon = Template.bind({});
WithIcon.args = {
  showText: true,
  text: "Button with Icon",
  icon: <FaClone size={15} />
};
export const IconOnly = Template.bind({});
IconOnly.args = {
  showText: true,
  text: "Icon Only Button",
  icon: <FaClipboardCheck size={15} />,
  iconOnly: true
};
export const LoadingButton = Template.bind({});
LoadingButton.args = {
  showText: true,
  text: "Default Button",
  isLoading: true,
  loadingText: "In Progress..."
};
