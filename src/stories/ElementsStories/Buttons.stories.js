import React from "react";
import { ResposiveButton, HawaButton } from "../../elements";

export default {
  title: "Elements/Buttons",
  component: [ResposiveButton, HawaButton],
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
  return <HawaButton {...args}>{args.buttonText}</HawaButton>;
};

export const IconOnly = Template.bind({});
IconOnly.args = {
  showText: true,
  buttonText: "Button"
  // icon: <Class />
};

const Template2 = (args) => {
  return <ResposiveButton {...args}>{args.buttonText}</ResposiveButton>;
};
export const Adaptive = Template.bind({});
// Adaptive.args = {
//   showText: true,
//   buttonText: "Button"
//   // icon: <Class />
// };
