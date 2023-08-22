import React from "react";
import { NotFound as NotFoundBlock } from "../../../blocks/Misc";

export default {
  title: "Blocks/Misc/Not Found",
  component: [NotFoundBlock],
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

export const NotFound = (args) => {
  return (
    <div className="max-w-md">
      <NotFoundBlock {...args} />
    </div>
  );
};
