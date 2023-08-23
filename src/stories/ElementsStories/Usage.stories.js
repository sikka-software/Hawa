import React from "react";

import { UsageCard } from "../../elements";

export default {
  title: "Elements/Usage",
  component: UsageCard,
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
      <UsageCard
        currentUsage="22.11 MB"
        percent={40}
        title={"Storage"}
        tooltip="22.32 MB / 1 GB "
      />
    </div>
  );
};

export const Usage = Template.bind({});
Usage.args = {
  label: "Profit",
  number: "SAR 333.22",
  variant: "contained",
  helperText: "warning"
};
