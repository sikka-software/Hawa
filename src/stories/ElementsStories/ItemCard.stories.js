import React from "react";
import { HawaPricingCard } from "../../elements";

export default {
  title: "Elements/Cards/Items",
  component: [HawaPricingCard],
  argTypes: {
    buttonLabel: {
      control: "text",
      description: "The text next to the logo"
    }
  }
};

export const Items = (args) => {
  return <HawaPricingCard />;
};
