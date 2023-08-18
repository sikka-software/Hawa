import React from "react";
import {
  ComparingPlans,
  HorizontalPricing,
  PricingPlans
} from "../../../blocks/Pricing";

export default {
  title: "Blocks/Pricing",
  component: [PricingPlans, ComparingPlans, HorizontalPricing],
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
      onPlanClicked={(e) => console.log("upgradign to ", e)}
      billingCycles={[
        { label: `Month`, value: `month` },
        // { label: `3 Months`, value: `3-months` },
        // { label: `6 Months`, value: `6-months` },
        { label: `Year`, value: `annually` }
      ]}
      currencies={[
        { label: `USD`, value: `usd` },
        { label: `SAR`, value: `sar` }
      ]}
      plans={[
        {
          currentPlan: false,
          price: 0,
          currency: "SAR",
          cycleText: "month",
          buttonText: "Select Plan",
          texts: {
            buttonText: "Upgrade",
            currencyText: "sar",
            cycleText: "Month",
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
          currentPlan: true,
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
          currentPlan: false,

          price: 30,
          texts: {
            buttonText: "Upgrade",
            currencyText: "sar",
            cycleText: "Month",
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
      billingCycles={[
        { label: `Month`, value: `month` },
        // { label: `3 Months`, value: `3-months` },
        // { label: `6 Months`, value: `6-months` },
        { label: `Year`, value: `annually` }
      ]}
      currencies={[
        { label: `USD`, value: `usd` },
        { label: `SAR`, value: `sar` }
      ]}
      plans={[
        {
          currentPlan: false,
          price: 0,
          currency: "SAR",
          cycleText: "month",
          buttonText: "Select Plan",
          texts: {
            buttonText: "Upgrade",
            currencyText: "sar",
            cycleText: "Month",
            subtitle: "For Everyone",
            title: "Free Plan"
          },
          features: [
            {
              description: "Make as many menus as you want",
              included: true,
              text: "Unlimited Menus"
            },
            { description: "", included: true, text: "Unlimited Items" },
            { description: "", included: false, text: "Custom Menus" }
          ]
        },
        {
          currentPlan: true,
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
          currentPlan: false,

          price: 30,
          texts: {
            buttonText: "Upgrade",
            currencyText: "sar",
            cycleText: "Month",
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

export const HorizontalP = (args) => {
  return (
    <HorizontalPricing
      billingCycles={[
        { label: `Monthly`, value: `monthly` },
        // { label: `3 Months`, value: `3-months` },
        // { label: `6 Months`, value: `6-months` },
        { label: `Annually`, value: `annually` }
      ]}
      currencies={[
        { label: `USD`, value: `usd` },
        { label: `SAR`, value: `sar` }
      ]}
      plans={[
        {
          currentPlan: false,
          price: 0,
          currency: "SAR",
          cycleText: "month",
          buttonText: "Select Plan",
          texts: {
            buttonText: "Upgrade",
            currencyText: "sar",
            cycleText: "Month",
            subtitle: "For Everyone",
            title: "Free Plan"
          },
          features: [
            {
              description: "Make as many menus as you want",
              included: true,
              text: "Unlimited Menus"
            },
            { description: "", included: true, text: "Unlimited Items" },
            { description: "", included: false, text: "Custom Menus" }
          ]
        },
        {
          currentPlan: true,
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
          currentPlan: false,

          price: 30,
          texts: {
            buttonText: "Upgrade",
            currencyText: "sar",
            cycleText: "Month",
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

HorizontalP.storyName = "Horizontal Pricing";
