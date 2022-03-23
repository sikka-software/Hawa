import React from "react";
import { PricingPlans } from "../../../blocks/Pricing/PricingPlans";

export default {
  title: "Blocks/Pricing/In Landing",
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

export const InLanding = (args) => {
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
          title_ar: "تجريبي",
          subtitle: "For beginners",
          subtitle_ar: "للعرب",
          selectedPlan: false,
          price: 10,
          currency: "SAR",
          cycleText: "Monthly",
          buttonText: "Current Plan",
          features: ["one", "two", "three"],
          features_ar: ["واحد", "اثنين", "ثلاثة"]
        },
        {
          title: "Pro",
          title_ar: "تجريبي",
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
