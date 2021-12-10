import React from "react";
import { NewPasswordForm } from "../components/Hawa/AuthForms/NewPasswordForm";
import { ResetPasswordForm } from "../components/Hawa/AuthForms/ResetPasswordForm";
import { SignInForm } from "../components/Hawa/AuthForms/SignInForm";
import { SignUpForm } from "../components/Hawa/AuthForms/SignUpForm";
import { HawaProvider } from "../components/Hawa/HawaProvider";

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

const theme = {
  borderRadius: 20,
  primaryColor: "green",
  secondaryColor: "red",
  inputColor: "lightGrey",
  paddings: 10
};

const SignInTemplate = (args) => {
  return (
    <HawaProvider theme={theme}>
      <SignInForm {...args} />
    </HawaProvider>
  );
};

export const SignIn = SignInTemplate.bind({});
SignIn.args = {
  viaGoogle: true,
  viaGithub: true,
  viaTwitter: true,
  viaFacebook: true
};

const SignUpTemplate = (args) => {
  return (
    <HawaProvider theme={theme}>
      <SignUpForm {...args} />
    </HawaProvider>
  );
};
export const SignUp = SignUpTemplate.bind({});
SignUp.args = {
  viaGoogle: true,
  viaGithub: true,
  viaTwitter: true,
  viaFacebook: true
};

const ResetPasswordTemplate = (args) => {
  return (
    <HawaProvider theme={theme}>
      <ResetPasswordForm {...args} />
    </HawaProvider>
  );
};
export const ResetPassword = ResetPasswordTemplate.bind({});
ResetPassword.args = {};
const NewPasswordTemplate = (args) => {
  return (
    <HawaProvider theme={theme}>
      <NewPasswordForm {...args} />
    </HawaProvider>
  );
};
export const NewPassword = NewPasswordTemplate.bind({});
NewPassword.args = {};
