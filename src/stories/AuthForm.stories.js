import React from "react";
import { SignInForm } from "../components/Hawa/AuthForms/SignInForm";
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
      <SignInForm {...args} />
    </HawaProvider>
  );
};
export default {
  title: "Blocks/AuthForms",
  component: SignInForm,
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
SignUp.args = {};
export const ResetPassword = Template.bind({});
ResetPassword.args = {};
export const NewPassword = Template.bind({});
NewPassword.args = {};
