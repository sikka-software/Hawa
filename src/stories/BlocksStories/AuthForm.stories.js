import React from "react";
import {
  NewPasswordForm,
  ResetPasswordForm,
  SignInForm,
  SignUpForm
} from "../../blocks/AuthForms";
import { defaultTheme, HawaProvider } from "../../themes/HawaProvider";

export default {
  title: "Blocks/AuthBlocks",
  component: [SignInForm, SignUpForm, NewPasswordForm, NewPasswordForm],
  argTypes: {
    theme: {
      options: ["primary", "secondary", "default"],
      control: { type: "select" }
    }
  }
};

const SignInTemplate = (args) => {
  return (
    <HawaProvider theme={{ ...defaultTheme }}>
      <SignInForm
        {...args}
        // theme={args.theme}
        theme={"primary"}
        handleSignIn={() => console.log("singing in via email")}
        viaGoogle={args.viaGoogle}
        googleButtonLabel={"Sign in with Google"}
        handleGoogleSignIn={() => console.log("signing in via google")}
        viaGithub={args.viaGithub}
        githubButtonLabel={"Sign in with Github"}
        handleGithubSignIn={() => console.log("signing in via github")}
        viaTwitter={args.viaTwitter}
        twitterButtonLabel={"Sign in with Twitter"}
        handleTwitterSignIn={() => console.log("signing in via Twitter")}
      />
    </HawaProvider>
  );
};

export const SignIn = SignInTemplate.bind({});
SignIn.args = {
  viaGoogle: true,
  viaGithub: true,
  viaTwitter: true,
  theme: "primary"
};

const SignUpTemplate = (args) => {
  return (
    <HawaProvider theme={{ ...defaultTheme }}>
      <SignUpForm
        {...args}
        theme={args.theme}
        handleSignUp={() => console.log("singing up via email")}
        viaGoogle={args.viaGoogle}
        googleButtonLabel={"Sign up with Google"}
        handleGoogleSignUp={() => console.log("signing up via google")}
        viaGithub={args.viaGithub}
        githubButtonLabel={"Sign up with Github"}
        handleGithubSignUp={() => console.log("signing up via github")}
        viaTwitter={args.viaTwitter}
        twitterButtonLabel={"Sign up with Twitter"}
        handleTwitterSignUp={() => console.log("signing up via Twitter")}
      />
    </HawaProvider>
  );
};
export const SignUp = SignUpTemplate.bind({});
SignUp.args = {
  viaGoogle: true,
  viaGithub: true,
  viaTwitter: true,
  theme: "primary"
};

const ResetPasswordTemplate = (args) => {
  return (
    <HawaProvider theme={{ ...defaultTheme }}>
      <ResetPasswordForm theme={args.theme} {...args} />
    </HawaProvider>
  );
};
export const ResetPassword = ResetPasswordTemplate.bind({});
ResetPassword.args = {
  theme: "primary"
};
const NewPasswordTemplate = (args) => {
  return (
    <HawaProvider theme={{ ...defaultTheme }}>
      <NewPasswordForm theme={args.theme} {...args} />
    </HawaProvider>
  );
};
export const NewPassword = NewPasswordTemplate.bind({});
NewPassword.args = {
  theme: "primary"
};
