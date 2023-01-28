import React from "react";
import { Testimonial as Testi } from "../../../blocks/Misc";

export default {
  title: "Blocks/Misc/Testimonial",
  component: [Testi],
  parameters: {
    docs: {
      description: {
        component: "`<SignInForm/>` Authentication block for user sign in"
      }
    }
  },

  argTypes: {
    variant: {
      default: "contained",
      control: "select",
      options: ["contained", "outlined", "neobrutalism"],
      description: "The theme style of the block"
    },
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

export const Testimonial = (args) => {
  return <Testi {...args} />;
};

Testimonial.args = {
  variant: "contained"
};
