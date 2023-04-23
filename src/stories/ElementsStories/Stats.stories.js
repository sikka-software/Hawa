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
      options: ["plain", "contained", "outlined"]
    }
  }
};

const Template = (args) => {
  return (
    <div className="grid grid-cols-2 gap-2 bg-red-300">
      {/* <div className="flex flex-wrap items-start justify-start gap-2 bg-red-300"> */}
      <HawaStats {...args} />
      <HawaStats {...args} />
      <HawaStats {...args} />
      <HawaStats {...args} />
      <HawaStats {...args} number={"SAR " + '4,392,888'} />
      <HawaStats {...args} />
      <HawaStats {...args} />
      <HawaStats {...args} />
      <HawaStats {...args} />
      <HawaStats {...args} />
    </div>
  );
};

export const Stats = Template.bind({});
Stats.args = {
  label: "Profit",
  width: "min",
  number: "SAR 333.22",
  variant: "contained",
  helperText: "warning"
};
