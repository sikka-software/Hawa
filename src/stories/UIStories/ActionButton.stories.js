import React from "react";

import { defaultTheme, HawaProvider } from "../../themes/HawaProvider";
import { ActionButton } from "../../ui";

const Template = (args) => {
  return (
    <HawaProvider theme={{ ...defaultTheme }}>
      <ActionButton themeType={args.theme} text={args.buttonLabel} />
    </HawaProvider>
  );
};
//types:
//error (red)
//warning (red)
//notice (blue)

export default {
  title: "UI/ActionButton",
  component: ActionButton,
  argTypes: {
    theme: {
      description: "overwritten description",
      table: {
        type: {
          summary: "something short"
        },
        defaultValue: { summary: "Hello" }
      },
      options: ["primary", "secondary", "default"],
      control: { type: "select" }
    }
  }
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
