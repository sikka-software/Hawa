import React from "react";
import { EmptyState as EState } from "../../../blocks/Misc";

export default {
  title: "Blocks/Misc/Empty State",
  component: [EState],
  parameters: {
    docs: {
      description: {
        component: "`<SignInForm/>` Authentication block for user sign in"
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
    },
    handleRouteToHome: {
      action: "Redirecting to home page",
      description: "Directing user to home page"
    }
  }
};

export const EmptyState = (args) => {
  return <EState {...args} />;
};
