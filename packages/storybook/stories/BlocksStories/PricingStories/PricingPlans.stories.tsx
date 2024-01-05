import { useState } from "react";

import { Story } from "@storybook/blocks";
import type { Meta, StoryObj } from "@storybook/react";

import { PricingPlans } from "@sikka/hawa/blocks/pricing";

import { setLocale } from "../../../translations/i18n";

const meta = {
  title: "Blocks/Pricing/Pricing Plans",
  component: PricingPlans
} satisfies Meta<typeof PricingPlans>;

export default meta;
type Story = StoryObj<typeof PricingPlans>;

export const Default: Story = {
  render: (args: any, globals: any) => {
    const locale = globals.globals?.locale === "ar" ? "ar" : "en";
    const direction = locale === "ar" ? "rtl" : "ltr";
    setLocale(locale);
    const [curr, setCurr] = useState({ value: "sar", label: "SAR" });
    const [cycl, setCycl] = useState({ value: "monthly", label: "Monthly" });
    return (
      <div dir={direction}>
        <PricingPlans
          {...args}
          currentCurrency={curr}
          currentCycle={cycl}
          onCurrencyChange={(e) => {
            console.log("on currency change ", e);
            setCurr(e);
          }}
          onCycleChange={(e) => setCycl(e)}
          // onPlanClicked={(e: any) => console.log("upgradign to ", e)}
          billingCycles={[
            { label: `Month`, value: `monthly` },
            { label: `Year`, value: `annually` }
          ]}
          currencies={[
            { label: `USD`, value: `usd` },
            { label: `SAR`, value: `sar` }
          ]}
          plans={[
            {
              currentPlan: false,
              // recommended: true,
              price: 9.99,
              // price: {
              //   sar: {
              //     monthly: 9.99,
              //     annually: 9.99 * 12,
              //   },
              //   usd: {
              //     monthly: 34.49,
              //     annually: 34.49 * 12,
              //   },
              // },
              currency: "SAR",
              cycleText: "month",
              buttonText: "Select Plan",
              discount: "test",
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
                { included: false, text: "Custom Menus" },
                { included: true, text: "Unlimited Menus" },
                { included: true, text: "Unlimited Items" },
                { included: false, text: "Custom Menus" },
                { included: true, text: "Unlimited Menus" },
                { included: true, text: "Unlimited Items" },
                { included: false, text: "Custom Menus" }
              ]
            },
            {
              currentPlan: true,
              oldPrice: cycl.value === "annually" ? 10 : null,
              price: 3000,
              // price: {
              //   sar: {
              //     monthly: 300,
              //     annually: 300 * 12,
              //   },
              //   usd: {
              //     monthly: 300,
              //     annually: 300 * 12,
              //   },
              // },
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
              price: 900,
              texts: {
                buttonText: "Upgrade",
                currencyText: "sar",
                cycleText: "Month",
                subtitle: "For small businesses",
                title: "Professional Plan"
              },
              features: [
                { included: true, text: "Unlimited Menus" },
                { included: true, text: "Unlimited Items" },
                { included: false, text: "Custom Menus" }
              ]
            },
            {
              currentPlan: false,
              price: 900,
              noPrice: true,
              texts: {
                buttonText: "Upgrade",
                currencyText: "sar",
                cycleText: "Month",
                subtitle: "For large businesses",
                title: "Enterprise Plan"
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
  },
  argTypes: {
    onPlanClicked: {
      action: "onPlanClicked"
    }
  }
};
