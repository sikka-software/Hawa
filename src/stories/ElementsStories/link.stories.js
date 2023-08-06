import React from "react";

export default {
  title: "Elements/Links",
  argTypes: {
    title: {
      control: "text",
      description: "The title of the alert in bold"
    },
    text: {
      control: "text",
      description: "The content text of the alert"
    }
  }
};

const Template = (args) => {
  return (
    <div>
      <div>
        You can use the class <span className="inline-code">link</span> to style
        any text into an external link element. For example:
      </div>
      <div className="mt-5">
        <a className="link" href="http://hawa.style">
          Visit Site
        </a>
      </div>
    </div>
  );
};

export const Links = Template.bind({});
Links.args = {
  position: "top",
  title: "Update",
  text: "there's a new update coming soon to this application. Make sure to sign up for the waitlist",
  actionText: "Signup"
};
