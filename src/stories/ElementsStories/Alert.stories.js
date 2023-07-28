import React, { useState } from "react";

import { HawaAlert, HawaButton } from "../../elements";
import { FiAlertOctagon } from "react-icons/fi";

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
      options: ["none", "success", "info", "warning", "error"],
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
    }
  }
};

const Template = (args) => {
  const [alerts, setAlerts] = useState([1]);
  return (
    <div>
      {alerts.map((a) => (
        <HawaAlert {...args} />
      ))}
      <HawaButton onClick={() => setAlerts([...alerts, 1])}>
        Add Alert
      </HawaButton>
    </div>
  );
};

export const Default = Template.bind({});
Default.args = {
  title: "Default Alert",
  text: "This is an alert that can be used to share certain information without any severity.",
  severity: "none",
  persistant: true
};
export const Success = Template.bind({});
Success.args = {
  title: "Success",
  text: "This is an alert indicating that there was a successful action",
  severity: "success"
};
export const Warning = Template.bind({});
Warning.args = {
  icon: <FiAlertOctagon />,
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
  text: "This is an alert with action buttons",
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
