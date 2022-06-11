import React, {useState} from "react";
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
    },
    position: {
      options: [
        "top-center",
        "top-right",
        "bottom-right",
        "bottom-center",
        "bottom-left",
        "top-left"
      ],
      control: { type: "select" }
    }
  }
};

const Template = (args) => {
  const [open, setOpen] = useState(true);
  return (
    <HawaSnackbar
      {...args}
      open={open}
      handleClose={() => {
        console.log("test");
        setOpen(false);
      }}
    />
  );
};
export const Success = Template.bind({});
Success.args = {
  title: "Success",
  text: "This is an alert indicating that there was a successful action",
  severity: "success",
  isClosable: false,
  duration: 5000,
  position: "bottom-left"
};
export const Warning = Template.bind({});
Warning.args = {
  title: "Warning",
  text: "This is an alert indicating that there was a warning action",
  severity: "warning",
  isClosable: false,
  duration: 5000,
  position: "bottom-left"
};
export const Info = Template.bind({});
Info.args = {
  title: "Info",
  text: "This is an alert indicating that there was a info action",
  severity: "info",
  isClosable: false,
  duration: 5000,
  position: "bottom-left"
};
export const Error = Template.bind({});
Error.args = {
  title: "Offline",
  text: "This is an alert indicating that there was a error action",
  severity: "error",
  isClosable: false,
  duration: 5000,
  position: "bottom-left"
};
