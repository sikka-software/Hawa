import React from "react";
import { HawaStepper } from "../../elements";

export default {
  title: "Elements/Stepper",
  component: [HawaStepper],
  argTypes: {
    orientation: {
      control: "select",
      options: ["vertical", "horizontal"],
      description: "The orientation of the stepper"
    }
  },
  parameters: {
    // backgrounds: {
    //   default: "light",
    //   values: [{ name: "light", value: "#ECEBE4" }]
    // }
  }
};

export const Default = (args) => {
  return (
    <HawaStepper
      currentStep={1}
      orientation={args.orientation}
      steps={["Billing Info", "Payment Info", "Confirmation", "Checkup"]}
    />
  );
};
