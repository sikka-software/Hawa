import React from "react";
import { HawaPricingCard } from "../../../elements";

export default {
  title: "Elements/Cards/Pricing",
  component: [HawaPricingCard],
  argTypes: {
    title: {
      control: "text",
      description: "The title of the pricing package"
    },
    subtitle: {
      control: "text",
      description: "The subtitle of the pricing package"
    },
    price: {
      control: "number",
      description: "The price of the pricing package"
    },
    currency: {
      control: "select",
      description: "The currency of the price",
      options: ["sar", "usd"]
    },
    cycleText: {
      control: "text",
      description: "The cycle period of the payment",
      table: {
        type: {
          summary: "Examples",
          detail: "Monthly, Annually, Quarterly, Every 3 Months, Every 6 Months"
        }
      }
    },
    features: {
      control: "array",
      description: "An Array of strings for the package features"
    },

    buttonText: {
      control: "text",
      description: "The text of the button"
    }
  }
};

export const Pricing = (args) => {
  return <HawaPricingCard {...args} />;
};

Pricing.args = {
  lang: "en",
  title: "Pro",
  subtitle: "For small businesses",
  price: "300",
  size: "small",
  currency: "sar",
  cycleText: "monthly",
  buttonText: "Choose Plan",
  discount: "Save 10%",
  texts: {
    buttonText: "Upgrade",
    currencyText: "SAR",
    cycleText: "Monthly"
  },
  features: [
    { included: true, text: "Unlimited Menus" },
    { included: true, text: "Unlimited Items" },
    { included: false, text: "Custom Menus" }
  ]
};
