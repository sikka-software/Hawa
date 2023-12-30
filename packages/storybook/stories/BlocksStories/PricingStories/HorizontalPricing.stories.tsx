import { Story } from "@storybook/blocks";
import type { Meta, StoryObj } from "@storybook/react";

import { HorizontalPricing } from "@sikka/hawa/blocks/pricing";

import { setLocale } from "../../../translations/i18n";

const meta = {
  title: "Blocks/Pricing/Horizontal Pricing",
  component: HorizontalPricing,
  parameters: { layout: "centered" }
} satisfies Meta<typeof HorizontalPricing>;

export default meta;
type Story = StoryObj<typeof HorizontalPricing>;

export const Default: Story = {
  render: (args: any, globals: any) => {
    const locale = globals.globals?.locale === "ar" ? "ar" : "en";
    const direction = locale === "ar" ? "rtl" : "ltr";
    setLocale(locale);

    return (
      <div dir={direction}>
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
              // buttonText: "Select Plan",
              texts: {
                buttonText: "Upgrade",
                currencyText: "sar",
                cycleText: "Month",
                subtitle: "For Everyone",
                title: "Free Plan"
              },
              features: [
                {
                  // description: "Make as many menus as you want",
                  included: true,
                  text: "Unlimited Menus"
                },
                {
                  //  description: "",
                  included: true,
                  text: "Unlimited Items"
                },
                {
                  // description: "",
                  included: false,
                  text: "Custom Menus"
                }
              ]
            },
            {
              currentPlan: true,
              price: 10,
              currency: "SAR",
              cycleText: "month",
              // buttonText: "Current Plan",
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
      </div>
    );
  }
};
