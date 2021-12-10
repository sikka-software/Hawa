import React from "react";
import AdaptiveButton from "../components/Hawa/AdaptiveButton/AdaptiveButton";
import CastIcon from "@material-ui/icons/Cast";
import { HawaProvider } from "../components/Hawa/HawaProvider";

const Template = (args) => {
  const theme = {
    borderRadius: 20,
    primaryColor: "green",
    secondaryColor: "red",
    // margins: "10px",
    paddings: 10
  };
  return (
    <HawaProvider theme={theme}>
      <AdaptiveButton {...args} />
    </HawaProvider>
  );
};
export default {
  title: "Blocks/AuthForms",
  component: AdaptiveButton,
  argsTypes: {
    viaGoogle: { control: "boolean" },
    viaGithub: { control: "boolean" },
    viaTwitter: { control: "boolean" },
    viaFacebook: { control: "boolean" }
  },
  args: {}
};

export const SignIn = Template.bind({});
SignIn.args = {
  viaGoogle: true,
  viaGithub: true,
  viaTwitter: true,
  viaFacebook: true
};
export const SignUp = Template.bind({});
SignUp.args = {
  showText: true,
  buttonLabel: "test",
  borderRadius: 5,
  icon: <CastIcon />,
  textColor: "#000000",
  buttonColor: "#f9f9f9"
};
export const ResetPassword = Template.bind({});
ResetPassword.args = {
  showText: true,
  buttonLabel: "test",
  borderRadius: 5,
  icon: <CastIcon />,
  textColor: "#000000",
  buttonColor: "#f9f9f9"
};
export const NewPassword = Template.bind({});
NewPassword.args = {
  showText: true,
  buttonLabel: "test",
  borderRadius: 5,
  icon: <CastIcon />,
  textColor: "#000000",
  buttonColor: "#f9f9f9"
};
