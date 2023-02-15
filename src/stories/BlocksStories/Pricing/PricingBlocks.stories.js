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
          title: "Free",
          title_ar: "تجريبي",
          subtitle: "For everyone",
          subtitle_ar: "للعرب",
          price: 0,
          currency: "SAR",
          cycleText: "month",
          buttonText: "Select Plan",
          features: [
            { included: true, text: "Unlimited Menus" },
            { included: true, text: "Unlimited Items" },
            { included: false, text: "Custom Menus" }
          ]
        },
        {
          title: "Intro",
          title_ar: "شركات",
          subtitle: "For beginners",
          subtitle_ar: "للعرب",
          selectedPlan: true,
          price: 10,
          currency: "SAR",
          cycleText: "month",
          buttonText: "Current Plan",
          features: [
            { included: true, text: "Unlimited Menus" },
            { included: true, text: "Unlimited Items" },
            { included: false, text: "Custom Menus" }
          ]
        },
        {
          title: "Pro",
          title_ar: "المحترفين",
          subtitle: "For professionals",
          subtitle_ar: "للعرب",
          price: 30,
          currency: "SAR",
          cycleText: "month",
          buttonText: "Select Plan",
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
