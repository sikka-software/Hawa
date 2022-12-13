import React from "react";

import { HawaAlert } from "../../elements";

export default {
  title: "Elements/Alert",
  component: HawaAlert,
  argTypes: {
    title: {
      control: "text",
      description: "The title of the alert in bold"
    },
    text: {
      control: "text",
      description: "The content text of the alert"
    },
    severity: {
      control: "select",
      options: ["success", "info", "warning", "error"],
      description: "The content text of the alert"
    },
    variant: {
      control: "select",
      options: [
        "normal",
        "top-accent",
        "left-accent",
        "right-accent",
        "bottom-accent"
      ],
      description: "The content text of the alert"
    },
    hideIcon: {
      control: "boolean",
      description: "Show or hide the alert icon"
    }
  }
};

const Template = (args) => {
  return <HawaAlert {...args} />;
};

export const Success = Template.bind({});
Success.args = {
  title: "Success",
  text: "This is an alert indicating that there was a successful action",
  severity: "success"
};
export const Warning = Template.bind({});
Warning.args = {
  title: "Warning",
  text: "This is an alert indicating that there was a warning action",
  severity: "warning"
};
export const Info = Template.bind({});
Info.args = {
  title: "Info",
  text: "This is an alert indicating that there was a info action",
  severity: "info"
};
export const Error = Template.bind({});
Error.args = {
  title: "Error",
  text: "This is an alert indicating that there was a error action",
  severity: "error"
};
export const WithActions = Template.bind({});
WithActions.args = {
  title: "Error",
  text: "This is an alert indicating that there was a error action",
  severity: "error",
  actions: [
    {
      label: "Upgrade",
      onClick: () => console.log("testing"),
      variant: "outlined"
    },
    {
      label: "Disable",
      onClick: () => console.log("testing"),
      variant: "outlined"
    }
  ]
};
