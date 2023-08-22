import React from "react";
import { LeadGenerator as LD } from "../../../blocks/Misc";

export default {
  title: "Blocks/Misc/Leads Generator",
  component: [LD],
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
    handleSubmitNewsletter: {
      action: "Redirecting to home page",
      description: "Directing user to home page"
    }
  }
};

export const LeadsGenerator = (args) => {
  return (
    <div className="max-w-md">
      <LD
        handleNewsletterSub={(e) =>
          console.log(`${e} have subscribed to the newsletter`)
        }
        {...args}
      />
    </div>
  );
};

LeadsGenerator.args = {
  texts: {
    submit: "Submit",
    title: "Get a free book guide",
    subtitle: "Sign up to get free samples of our top books"
  }
};
