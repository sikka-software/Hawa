import React from "react";
import { HawaSnackbar } from "../../elements";

export default {
  title: "Elements/Snackbar",
  component: [HawaSnackbar],
  argTypes: {
    title: {
      control: "text",
      description: "The title of the notifications, leave empty to disable"
    },
    text: {
      control: "text",
      description: "The text of the notification banner"
    }
  }
};

const Template = (args) => (
  <HawaSnackbar {...args} open={true} handleClose={() => console.log("test")} />
);
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
  title: "Offline",
  text: "This is an alert indicating that there was a error action",
  severity: "error"
};
