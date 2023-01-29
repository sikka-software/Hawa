import React from "react";
import { SubsectionList as SLister } from "../../elements";
import {
  AiFillAccountBook,
  AiFillAlert,
  AiFillApi,
  AiFillAudio
} from "react-icons/ai";

export default {
  title: "Elements/Subsection List",
  component: [SLister],
  argTypes: {
    content: {
      control: "array",
      description: "The title of the acordion"
    }
  }
};

export const SubsectionList = (args) => {
  return (
    <SLister
      subsections={[
        {
          title: "",
          sections: [
            {
              label: "App & Integrations",
              value: "app-integrations",
              action: () => console.log("t"),
              icon: <AiFillAudio />
            }
          ]
        },
        {
          title: "Team Profile",
          sections: [
            {
              label: "Permissions",
              value: "permissions",
              action: () => console.log("going to permissions"),
              icon: <AiFillAccountBook />
            },
            {
              label: "Insights",
              value: "insights",
              action: () => console.log("going to Insights"),
              icon: <AiFillAlert />
            },
            {
              label: "Security",
              value: "security",
              action: () => console.log("going to Security"),
              icon: <AiFillApi />
            }
          ]
        }
      ]}
      {...args}
    />
  );
};

SubsectionList.args = {
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
