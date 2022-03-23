import React from "react";
import { PricingPlans } from "../../../blocks/Pricing/PricingPlans";

export default {
  title: "Blocks/Pricing/In Landing",
  component: [PricingPlans],
  argTypes: {}
};

export const InLanding = (args) => {
  return (
    <PricingPlans
      {...args}
      plans={[
        {
          title: "Free",
          subtitle: "For everyone",
          price: 0,
          currency: "SAR",
          cycleText: "Monthly",
          buttonText: "Select Plan",
          features: ["one", "two", "three"]
        },
        {
          title: "Intro",
          subtitle: "For beginners",
          price: 10,
          currency: "SAR",
          cycleText: "Monthly",
          buttonText: "Select Plan",
          features: ["one", "two", "three"]
        },
        {
          title: "Pro",
          subtitle: "For professionals",
          price: 30,
          currency: "SAR",
          cycleText: "Monthly",
          buttonText: "Select Plan",
          features: ["one", "two", "three"]
        }
      ]}
    />
  );
};
