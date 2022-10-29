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
          cycleText: "Monthly",
          buttonText: "Select Plan",
          features: ["one", "two", "three"],
          features_ar: ["واحد", "اثنين", "ثلاثة"]
        },
        {
          title: "Intro",
          title_ar: "شركات",
          subtitle: "For beginners",
          subtitle_ar: "للعرب",
          selectedPlan: true,
          price: 10,
          currency: "SAR",
          cycleText: "Monthly",
          buttonText: "Current Plan",
          features: ["one", "two", "three"],
          features_ar: ["واحد", "اثنين", "ثلاثة"]
        },
        {
          title: "Pro",
          title_ar: "المحترفين",
          subtitle: "For professionals",
          subtitle_ar: "للعرب",
          price: 30,
          currency: "SAR",
          cycleText: "Monthly",
          buttonText: "Select Plan",
          features: ["one", "two", "three"],
          features_ar: ["واحد", "اثنين", "ثلاثة"]
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
