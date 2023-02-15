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
  direction: "ltr",
  price: "300",
  size: "small",
  discount: "Save 10%",
  texts: {
    title: "Professional Plan",
    buttonText: "Upgrade",
    currencyText: "SAR",
    cycleText: "month",
    subtitle: "Includes up to 4 users + 200 GB"
  },
  features: [
    { included: true, text: "Unlimited Menus" },
    { included: true, text: "Unlimited Items" },
    { included: false, text: "Custom Menus" }
  ]
};
