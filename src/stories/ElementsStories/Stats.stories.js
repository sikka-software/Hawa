import React from "react";

import { HawaStats } from "../../elements";

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
    <div className="flex flex-row gap-2 ">
      {/* <HawaStats {...args} handleClick={() => console.log("test")} /> */}
      <HawaStats
        {...args}
        number="15,231.89 SAR"
        label="Total Revenue"
        helperText="+20.1% from last month"
      />
      <HawaStats
        {...args}
        number="+2350"
        label="Subscriptions"
        helperText="+180.1% from last month"
      />
    </div>
  );
};

export const Stats = Template.bind({});
Stats.args = {
  width: "full",
  variant: "default"
};
