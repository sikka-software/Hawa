import React from "react";

import { HawaStats } from "../../elements";
import { AiFillGoogleCircle } from "react-icons/ai";

export default {
  title: "Elements/Stats",
  component: HawaStats,
  argTypes: {
    label: {
      control: "text",
      description: "The title of the alert in bold"
    },
    number: {
      control: "text",
      description: "The content text of the alert"
    },
    helperText: {
      control: "text",
      description: "The content text of the alert"
    },
    variant: {
      control: "select",
      options: [
        "default",
        "plain",
        "contained",
        "outlined",
        "dropshadow",
        "neobrutalism"
      ]
    }
  }
};

const Template = (args) => {
  return (
    <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
      {/* <HawaStats {...args} handleClick={() => console.log("test")} /> */}
      <HawaStats
        {...args}
        number="15,231.89 SAR"
        label="Total Revenue"
        icon={
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            className="h-4 w-4 text-muted-foreground"
          >
            <rect width="20" height="14" x="2" y="5" rx="2" />
            <path d="M2 10h20" />
          </svg>
        }
        helperText="+20.1% from last month"
        handleClick={() => console.log("somthing")}
        isLoading={true}
      />
      <HawaStats
        {...args}
        number="+2350"
        label="Subscriptions"
        helperText="+180.1% from last month"
        handleClick={() => console.log("somthing")}
        icon={
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            className="h-4 w-4 text-muted-foreground"
          >
            <path d="M12 2v20M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6" />
          </svg>
        }
      />
      <HawaStats
        {...args}
        number="+2350"
        label="Subscriptions"
        // helperText="+180.1% from last month"
        icon={
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            className="h-4 w-4 text-muted-foreground"
          >
            <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" />
            <circle cx="9" cy="7" r="4" />
            <path d="M22 21v-2a4 4 0 0 0-3-3.87M16 3.13a4 4 0 0 1 0 7.75" />
          </svg>
        }
      />
    </div>
  );
};

export const Stats = Template.bind({});
Stats.args = {
  width: "full",
  variant: "default"
};
