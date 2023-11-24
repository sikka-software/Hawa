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
  const [curr, setCurr] = useState("sar");
  const [cycl, setCycl] = useState("month");
  return (
    <div dir={direction}>
      {" "}
      <PricingPlans
        {...args}
        currentCurrency={{ value: curr, label: curr }}
        currentCycle={{ value: cycl, label: cycl }}
        onCurrencyChange={(e) => setCurr(e)}
        onCycleChange={(e) => setCycl(e)}
        // onPlanClicked={(e: any) => console.log("upgradign to ", e)}
        billingCycles={[
          { label: `Month`, value: `month` },
          { label: `Year`, value: `annually` },
        ]}
        currencies={[
          { label: `USD`, value: `usd` },
          { label: `SAR`, value: `sar` },
        ]}
        plans={[
          {
            currentPlan: false,
            price: 0,
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
            ],
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
            price: 30,
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
