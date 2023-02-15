import React from "react";
import { ComparingPlans } from "../../../blocks/Pricing";
import { PricingPlans } from "../../../blocks/Pricing/PricingPlans";

export default {
  title: "Blocks/Pricing",
  component: [PricingPlans],
  argTypes: {
    lang: {
      options: ["ar", "en"],
      control: { type: "select" }
    }
  },
  args: {
    lang: "ar"
  }
};

export const PlanCards = (args) => {
  return (
    <PricingPlans
      {...args}
      plans={[
        {
          price: 0,
          currency: "SAR",
          cycleText: "month",
          buttonText: "Select Plan",
          texts: {
            buttonText: "Upgrade",
            currencyText: "sar",
            cycleText: "month",
            subtitle: "For Everyone",
            title: "Free Plan"
          },
          features: [
            { included: true, text: "Unlimited Menus" },
            { included: true, text: "Unlimited Items" },
            { included: false, text: "Custom Menus" }
          ]
        },
        {
          selectedPlan: true,
          price: 10,
          currency: "SAR",
          cycleText: "month",
          buttonText: "Current Plan",
          texts: {
            buttonText: "Current Plan",
            currencyText: "sar",
            cycleText: "month",
            subtitle: "For Beginners",
            title: "Intro Plan"
          },
          features: [
            { included: true, text: "Unlimited Menus" },
            { included: true, text: "Unlimited Items" },
            { included: false, text: "Custom Menus" }
          ]
        },
        {
          price: 30,
          texts: {
            buttonText: "Upgrade",
            currencyText: "sar",
            cycleText: "month",
            subtitle: "For businesses",
            title: "Professional Plan"
          },
          features: [
            { included: true, text: "Unlimited Menus" },
            { included: true, text: "Unlimited Items" },
            { included: false, text: "Custom Menus" }
          ]
        }
      ]}
    />
  );
};

export const PlansCompare = (args) => {
  return (
    <ComparingPlans
      plans={[
        {
          title: "Beginner",
          availableIn: 3
        },
        {
          title: "Professional",
          availableIn: 3
        },
        {
          title: "Enterprise",
          availableIn: 3
        }
      ]}
    />
  );
};
