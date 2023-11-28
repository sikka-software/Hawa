import type { Meta, StoryObj } from "@storybook/react";
import { PricingPlans } from "../../../components";
import { ArgsTable, Story, Title } from "@storybook/blocks";
import { setLocale, t } from "../../translations/i18n";
import { useState } from "react";

const meta = {
  title: "Blocks/Pricing/Pricing Plans",
  component: PricingPlans,
  parameters: {
    // layout: "centered",
    docs: {
      page: () => (
        <>
          <h1>{"<PricingPlans/>"}</h1>
          <ArgsTable />
        </>
      ),
    },
  },
  tags: ["autodocs"],
} satisfies Meta<typeof PricingPlans>;

export default meta;
type Story = StoryObj<typeof PricingPlans>;

const Template = (args: any, globals: any) => {
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
          { label: `Year`, value: `annually` },
        ]}
        currencies={[
          { label: `USD`, value: `usd` },
          { label: `SAR`, value: `sar` },
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
              title: "Free Plan",
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
              { included: false, text: "Custom Menus" },
            ],
          },
          {
            currentPlan: true,
            oldPrice: cycl.value === "annually" ? 10 : null,
            price: 300,
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
              title: "Intro Plan",
            },
            features: [
              { included: true, text: "Unlimited Menus" },
              { included: true, text: "Unlimited Items" },
              { included: false, text: "Custom Menus" },
            ],
          },
          {
            currentPlan: false,
            price: 900,
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
            texts: {
              buttonText: "Upgrade",
              currencyText: "sar",
              cycleText: "Month",
              subtitle: "For businesses",
              title: "Professional Plan",
            },
            features: [
              { included: true, text: "Unlimited Menus" },
              { included: true, text: "Unlimited Items" },
              { included: false, text: "Custom Menus" },
            ],
          },
        ]}
      />
    </div>
  );
};
export const Default: Story = {
  render: Template.bind({}),
  argTypes: {
    onPlanClicked: {
      action: "onPlanClicked",
    },
  },
};
