import React, { useState } from "react";
import { HawaSnackbar } from "../../elements";
import { Story, Meta } from "@storybook/react"

export default  {
  title: "Elements/Snackbar",
  component: HawaSnackbar,
  // argTypes: {
  //   title: {
  //     control: "text",
  //     description: "The title of the notifications, leave empty to disable"
  //   },
  //   description: {
  //     control: "text",
  //     description: "The text of the notification banner"
  //   },
  //   position: {
  //     options: [
  //       "top-center",
  //       "top-right",
  //       "bottom-right",
  //       "bottom-center",
  //       "bottom-left",
  //       "top-left"
  //     ],
  //     control: { type: "select" }
  //   }
  // }
} as Meta

const Template : Story = (args) => {
  const [open, setOpen] = useState(true);
  return (
    <HawaSnackbar
      title={args.title}
      description={args.description}
      severity={args.severity}    
      // {...args}
      // open={open}
      // handleClose={() => {
      //   console.log("test");
      //   setOpen(false);
      // }}
    />
  );
};
export const Plain = Template.bind({});
Plain.args = {
  title: "Plain",
  description: "This is an alert indicating that there was a successful action",
  severity: "none",
  // isClosable: false,
  // duration: 5000,
  position: "bottom-left",
  // autoHide: false
};
Plain.storyName = "None"
export const Success = Template.bind({});
Success.args = {
  title: "Success",
  description: "This is an alert indicating that there was a successful action",
  severity: "success",
  isClosable: false,
  duration: 5000,
  position: "bottom-left",
  autoHide: false
};
export const Warning = Template.bind({});
Warning.args = {
  title: "Warning",
  description: "This is an alert indicating that there was a warning action",
  severity: "warning",
  isClosable: false,
  duration: 5000,
  position: "bottom-left",
  autoHide: false
};
export const Info = Template.bind({});
Info.args = {
  title: "Info",
  description: "This is an alert indicating that there was a info action",
  severity: "info",
  isClosable: false,
  duration: 5000,
  position: "bottom-left",
  autoHide: false
};
export const Error = Template.bind({});
Error.args = {
  title: "Offline",
  description: "This is an alert indicating that there was a error action",
  severity: "error",
  isClosable: false,
  duration: 5000,
  position: "bottom-left",
  autoHide: false
};
