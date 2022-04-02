import React from "react";
import { HawaPricingCard } from "../../elements";

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
    // lang: {
    //   control: "text",
    //   description: "The language of the card to change the direction",
    //   table: {
    //     type: {
    //       summary: "Options",
    //       detail: "ar, en"
    //     }
    //   }
    // },
    buttonText: {
      control: "text",
      description: "The text of the button"
    }
  }
};

export const LTR = (args) => {
  return (
    <HawaPricingCard
      lang="en"
      title="Pro"
      subtitle="For small businesses"
      price="300"
      currency="sar"
      cycleText="monthly"
      buttonText="Choose Plan"
      discount="Save 10%"
      features={["Unlimited Menus", "Unlimited Items", "Custom Handle"]}
    />
  );
};

export const RTL = (args) => {
  return (
    <HawaPricingCard
      lang="ar"
      cycleText="monthly"
      features_ar={["قوائم لا محدودة", "عناصر لا محدودة", "أسم مخصص"]}
      {...args}
    />
  );
};
RTL.args = {
  currency: "sar",
  price: 300,
  discount: "خصم 10%",
  title_ar: "الإحترافي",
  subtitle_ar: "للمنشئات الصغيرة",
  buttonText: "إختر الباقة",
  cycleText: "3-months"
};
