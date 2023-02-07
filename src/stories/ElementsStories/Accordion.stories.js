import React from "react";
import { HawaAccordion } from "../../elements";

export default {
  title: "Elements/Accordion",
  component: [HawaAccordion],
  argTypes: {
    content: {
      control: "array",
      description: "The title of the acordion"
    }
  }
};

export const Accordion = (args) => {
  return <HawaAccordion {...args} />;
};

Accordion.args = {
  content: [
    {
      title: "Question 1",
      content:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse malesuada lacus ex, sit amet blandit leo lobortis eget."
    },
    {
      title: "Question 2",
      content:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse malesuada lacus ex, sit amet blandit leo lobortis eget."
    },
    {
      title: "Question 3",
      content:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse malesuada lacus ex, sit amet blandit leo lobortis eget."
    }
  ]
};
