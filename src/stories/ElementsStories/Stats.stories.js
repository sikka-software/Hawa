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
    <div className="flex flex-wrap items-start justify-start gap-2">
      <HawaStats {...args} />
      <HawaStats {...args} />
      <HawaStats {...args} />
      <HawaStats {...args} />
      <HawaStats {...args} />
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
  number: "SAR 333.22",
  helperText: "warning"
};
