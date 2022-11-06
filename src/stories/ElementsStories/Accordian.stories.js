import React from "react";
import { HawaAccordian } from "../../elements";

export default {
  title: "Elements/Accordian",
  component: [HawaAccordian],
  argTypes: {
    content: {
      control: "array",
      description: "The title of the acordion"
    }
  }
};

export const Accordian = (args) => {
  return <HawaAccordian {...args} />;
};

Accordian.args = {
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
