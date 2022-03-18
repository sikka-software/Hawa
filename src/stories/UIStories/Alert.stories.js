import React from "react";

import { defaultTheme, HawaProvider } from "../../themes/HawaProvider";
import { HawaAlert } from "../../ui";

const Template = (args) => {
  return (
    <HawaProvider theme={{ ...defaultTheme }}>
      <HawaAlert
        themeType={args.theme}
        title="What?"
        text="This is a success alert"
        severity="success"
      />
      <HawaAlert
        themeType={args.theme}
        text="This is an info alert"
        severity="info"
      />
      <HawaAlert
        themeType={args.theme}
        text="This is a warning alert"
        severity="warning"
      />
      <HawaAlert
        themeType={args.theme}
        text="This is an error alert"
        severity="error"
      />
    </HawaProvider>
  );
};
//types:
//error (red)
//warning (red)
//notice (blue)

export default {
  title: "UI/Alert",
  component: HawaAlert,
  argTypes: {
    theme: {
      options: ["primary", "secondary", "default"],
      control: { type: "select" }
    }
  },
  args: {
    theme: "primary"
  }
};

export const Default = Template.bind({});
Default.args = {
  theme: "primary"
};
