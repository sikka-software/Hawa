import React from "react";
import { SubsectionList as SLister } from "../../elements";

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
              icon: (
                <svg
                  stroke="currentColor"
                  fill="currentColor"
                  stroke-width="0"
                  viewBox="0 0 24 24"
                  height="1em"
                  width="1em"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path fill="none" d="M0 0h24v24H0z"></path>
                  <circle cx="12" cy="3.5" r=".75" fill="none"></circle>
                  <circle cx="12" cy="3.5" r=".75" fill="none"></circle>
                  <path fill="none" d="M5 15v4h14V5H5z"></path>
                  <path d="M11 14.17L8.83 12 11 9.83 9.59 8.41 6 12l3.59 3.59zM14.41 15.59L18 12l-3.59-3.59L13 9.83 15.17 12 13 14.17z"></path>
                  <path d="M19 3h-4.18C14.4 1.84 13.3 1 12 1s-2.4.84-2.82 2H5c-.14 0-.27.01-.4.04a2.008 2.008 0 00-1.44 1.19c-.1.23-.16.49-.16.77v14c0 .27.06.54.16.78s.25.45.43.64c.27.27.62.47 1.01.55.13.02.26.03.4.03h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm-7-.25c.41 0 .75.34.75.75s-.34.75-.75.75-.75-.34-.75-.75.34-.75.75-.75zM19 15v4H5V5h14v10z"></path>
                </svg>
              )
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
              icon: (
                <svg
                  stroke="currentColor"
                  fill="currentColor"
                  stroke-width="0"
                  viewBox="0 0 24 24"
                  height="1em"
                  width="1em"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M20 12c0-1.103-.897-2-2-2h-1V7c0-2.757-2.243-5-5-5S7 4.243 7 7v3H6c-1.103 0-2 .897-2 2v8c0 1.103.897 2 2 2h12c1.103 0 2-.897 2-2v-8zM9 7c0-1.654 1.346-3 3-3s3 1.346 3 3v3H9V7z"></path>
                </svg>
              )
            },
            {
              label: "Insights",
              value: "insights",
              action: () => console.log("going to Insights"),
              icon: (
                <svg
                  stroke="currentColor"
                  fill="currentColor"
                  stroke-width="0"
                  viewBox="0 0 24 24"
                  height="1em"
                  width="1em"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path fill="none" d="M0 0h24v24H0z"></path>
                  <path d="M21 8c-1.45 0-2.26 1.44-1.93 2.51l-3.55 3.56c-.3-.09-.74-.09-1.04 0l-2.55-2.55C12.27 10.45 11.46 9 10 9c-1.45 0-2.27 1.44-1.93 2.52l-4.56 4.55C2.44 15.74 1 16.55 1 18c0 1.1.9 2 2 2 1.45 0 2.26-1.44 1.93-2.51l4.55-4.56c.3.09.74.09 1.04 0l2.55 2.55C12.73 16.55 13.54 18 15 18c1.45 0 2.27-1.44 1.93-2.52l3.56-3.55c1.07.33 2.51-.48 2.51-1.93 0-1.1-.9-2-2-2z"></path>
                  <path d="M15 9l.94-2.07L18 6l-2.06-.93L15 3l-.92 2.07L12 6l2.08.93zM3.5 11L4 9l2-.5L4 8l-.5-2L3 8l-2 .5L3 9z"></path>
                </svg>
              )
            },
            {
              label: "Security",
              value: "security",
              action: () => console.log("going to Security"),
              icon: (
                <svg
                  stroke="currentColor"
                  fill="currentColor"
                  stroke-width="0"
                  viewBox="0 0 24 24"
                  height="1em"
                  width="1em"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path fill="none" d="M0 0h24v24H0z"></path>
                  <path d="M12 1L3 5v6c0 5.55 3.84 10.74 9 12 5.16-1.26 9-6.45 9-12V5l-9-4zm0 10.99h7c-.53 4.12-3.28 7.79-7 8.94V12H5V6.3l7-3.11v8.8z"></path>
                </svg>
              )
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
