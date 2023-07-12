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
  return (
    <div className="flex flex-col">
      <h1 className="my-8 text-lg font-bold">As Column</h1>
      <div className="flex flex-col gap-2">
        <HawaAccordion
          title="Question 1"
          content="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse malesuada lacus ex, sit amet blandit leo lobortis eget."
        />
        <HawaAccordion
          title="Question 2"
          content="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse malesuada lacus ex, sit amet blandit leo lobortis eget."
        />
        <HawaAccordion
          title="Question 3"
          content="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse malesuada lacus ex, sit amet blandit leo lobortis eget."
        />
      </div>
      <h1 className="my-8 text-lg font-bold">As Rows</h1>
      <div className="flex flex-col gap-2">
        <div className="flex flex-row gap-2">
          <HawaAccordion
            title="Question 1"
            content="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse malesuada lacus ex, sit amet blandit leo lobortis eget."
          />
          <HawaAccordion
            title="Question 2"
            content="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse malesuada lacus ex, sit amet blandit leo lobortis eget."
          />
          <HawaAccordion
            title="Question 3"
            content="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse malesuada lacus ex, sit amet blandit leo lobortis eget."
          />
        </div>
        <div className="flex flex-row gap-2">
          <HawaAccordion
            title="Question 1"
            content="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse malesuada lacus ex, sit amet blandit leo lobortis eget."
          />
          <HawaAccordion
            title="Question 2"
            content="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse malesuada lacus ex, sit amet blandit leo lobortis eget."
          />
          <HawaAccordion
            title="Question 3"
            content="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse malesuada lacus ex, sit amet blandit leo lobortis eget."
          />
        </div>
      </div>
    </div>
  );
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
