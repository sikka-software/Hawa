import React from "react";
import { AppLanding } from "../../../blocks/AuthForms/AppLanding";

export default {
  title: "Blocks/Auth/Landing",
  component: [AppLanding],
  parameters: {
    docs: {
      description: {
        component:
          "`<AppLanding/>` The first block the users sees when visiting the app"
      }
    }
  },
  argTypes: {
    size: {
      default: "normal",
      control: "select",
      options: ["normal", "small", "full"],
      description: "The max width of the block",
      table: { defaultValue: { summary: "normal" } },
      type: {
        summary: "string"
      }
    },
    texts: {
      description: "The texts used in the block",
      control: "object",
      type: {
        summary: "object"
      }
    },
    handleSignIn: {
      description: "Action to redirect user to sign in page",
      type: {
        summary: "function"
      }
    },
    handleSignUp: {
      description: "Action to redirect user to sign up page",
      type: {
        summary: "function"
      }
    },
    handleLanguage: {
      description: "Action to change the language",
      type: {
        summary: "function"
      }
    }
  }
};

const AppLandingTemplate = (args) => {
  return <AppLanding {...args} />;
};

export const Landing = AppLandingTemplate.bind({});
Landing.args = {
  texts: {
    signIn: "Sign In",
    signUp: "Sign Up",
    lang: "عربي"
  },
  handleSignIn: () => console.log("routing to sign in page"),
  handleSignUp: () => console.log("routing to sign up page"),
  handleLanguage: () => console.log("changing language")
};
