import React from "react";
import { HawaTimeline } from "../../elements";

export default {
  title: "Elements/Timeline",
  component: [HawaTimeline],
  argTypes: {
    orientation: {
      control: "select",
      options: ["vertical", "horizontal"],
      description: "The orientation of the timeline"
    }
  },
  parameters: {
    // backgrounds: {
    //   default: "light",
    //   values: [{ name: "light", value: "#ECEBE4" }]
    // }
  }
};

export const Timeline = (args) => {
  return (
    <HawaTimeline
      currentStep={2}
      orientation={args.orientation}
      steps={["Billing Info", "Payment Info", "Confirmation"]}
    />
  );
};
