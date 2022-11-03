import React from "react";
import { AppLanding } from "../../../blocks/AuthForms/AppLanding";

export default {
  title: "Blocks/Auth/Landing",
  component: [AppLanding],
  parameters: {
    docs: {
      description: {
        component: "`<AppLanding/>` Authentication block for user sign in"
      }
    }
  },
  argTypes: {
    lang: {
      default: true,
      control: "select",
      options: ["ar", "en"],
      description: "The language of the form",
      table: { defaultValue: { summary: "en" } }
    }
  }
};

const AppLandingTemplate = (args) => {
  return <AppLanding {...args} />;
};

export const Landing = AppLandingTemplate.bind({});
Landing.args = {
  lang: "en",
  texts: {
    signIn: "Sign In",
    signUp: "Sign Up",
    langauge: "عربي"
  },
  handleSignIn: () => console.log("routing to sign in page"),
  handleSignUp: () => console.log("routing to sign up page"),
  handleLangauge: () => console.log("changing language")
};
