import React from "react";
import { HawaAccordian } from "../../elements";

export default {
  title: "Elements/Accordian",
  component: [HawaAccordian],
  parameters: {
    backgrounds: {
      default: "light",
      values: [{ name: "light", value: "#96ACB7" }]
    }
  },
  argTypes: {
    title: {
      control: "text",
      description: "The title of the acordion"
    },
    content: {
      control: "text",
      description: "The content text of the accordion when expanded"
    }
  }
};

export const Accordian = (args) => {
  let contentArray = [
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
  ];
  return (
    <>
      {contentArray.map((c) => (
        <HawaAccordian {...args} title={c.title} content={c.content} />
      ))}
    </>
  );
};
