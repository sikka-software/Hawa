import React from "react";
import { HawaSnackbar } from "../../elements";
import { Story, Meta } from "@storybook/react";
import { FaEdit } from "react-icons/fa";
import { BsGoogle, BsTwitter } from "react-icons/bs";

export default {
  title: "Elements/Snackbar",
  component: HawaSnackbar
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
};

const Template = (args) => {
  return (
    <HawaSnackbar
      title={args.title}
      description={args.description}
      severity={args.severity}
      position={args.position}
      {...args}
    />
  );
};
export const Plain = Template.bind({});
Plain.args = {
  title: "Plain",
  description: "This is an alert indicating that there was a successful action",
  severity: "none",
  position: "bottom-left"
};
export const Success = Template.bind({});
Success.args = {
  title: "Success",
  description: "This is an alert indicating that there was a successful action",
  severity: "success",
  duration: 5000,
  position: "bottom-left"
};
export const Warning = Template.bind({});
Warning.args = {
  title: "Warning",
  description: "This is an alert indicating that there was a warning action",
  severity: "warning",
  duration: 0,
  position: "bottom-left"
};
export const Info = Template.bind({});
Info.args = {
  title: "Info",
  description: "This is an alert indicating that there was a info action",
  severity: "info",
  duration: 0,
  position: "bottom-left"
};
export const Error = Template.bind({});
Error.args = {
  title: "Offline",
  description: "This is an alert indicating that there was a error action",
  severity: "error",
  duration: 0,
  position: "bottom-left"
};

export const WithActions = Template.bind({});
WithActions.args = {
  title: "Info",
  description: "This is an alert indicating that there was a info action",
  severity: "info",
  duration: 0,
  position: "bottom-left",
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

export const SignUp = Template.bind({});
SignUp.args = {
  title: "Welcome to our Application",
  description: "This is an alert indicating that there was a info action",
  severity: "info",
  duration: 0,
  position: "bottom-left",
  actions: [
    {
      label: "Sign up with Email",
      onClick: () => console.log("testing"),
      variant: "contained"
    },
    {
      // label: "Disable",
      // icon: <FaEdit />,
      icon: <BsGoogle />,
      onClick: () => console.log("testing"),
      variant: "outlined"
    },
    {
      // label: "Disable",
      // icon: <FaEdit />,
      icon: <BsTwitter />,
      onClick: () => console.log("testing"),
      variant: "outlined"
    }
  ]
};
