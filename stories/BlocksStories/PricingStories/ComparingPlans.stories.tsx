import type { Meta, StoryObj } from "@storybook/react";
import { ComparingPlans } from "../../../components";
import { ArgsTable, Story, Title } from "@storybook/blocks";
import { setLocale, t } from "../../translations/i18n";
import { generateFeaturesArray } from "../../storiesUtils";
import { useState } from "react";

const meta = {
  title: "Blocks/Pricing/Comparing Plans",
  component: ComparingPlans,
  parameters: {
    // layout: "centered",
    docs: {
      page: () => (
        <>
          <h1>{"<ComparingPlans/>"}</h1>
          <ArgsTable />
        </>
      ),
    },
  },
  tags: ["autodocs"],
} satisfies Meta<typeof ComparingPlans>;

export default meta;
type Story = StoryObj<typeof ComparingPlans>;

const Template = (args: any, globals: any) => {
  const locale = globals.globals?.locale === "ar" ? "ar" : "en";
  const direction = locale === "ar" ? "rtl" : "ltr";
  setLocale(locale);
  const [curr, setCurr] = useState({ value: "sar", label: "SAR" });
  const [cycl, setCycl] = useState({ value: "monthly", label: "Monthly" });

  return (
    <div dir={direction}>
      <ComparingPlans
        direction={direction}
        showButtons
        currentCurrency={curr}
        currentCycle={cycl}
        onCurrencyChange={(e) => {
          console.log("on currency change ", e);
          setCurr(e);
        }}
        onCycleChange={(e) => setCycl(e)}
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
            price: 0,
            texts: {
              buttonText: "Upgrade",
              currencyText: "sar",
              cycleText: "Month",
              subtitle: "For Everyone",
              title: "Free Plan",
              soon: t("soon"),
            },
            features: generateFeaturesArray(3),
          },
          {
            price: 10,
            texts: {
              buttonText: "Current Plan",
              currencyText: "sar",
              cycleText: "month",
              subtitle: "For Beginners",
              title: "Intro Plan",
              soon: t("soon"),
            },
            features: generateFeaturesArray(3),
          },
          {
            price: 30,
            texts: {
              buttonText: "Upgrade",
              currencyText: "sar",
              cycleText: "Month",
              subtitle: "For businesses",
              title: "Professional Plan",
              soon: t("soon"),
            },
            features: generateFeaturesArray(3),
          },
          // {
          //   price: 30,
          //   texts: {
          //     buttonText: "Upgrade",
          //     currencyText: "sar",
          //     cycleText: "Month",
          //     subtitle: "For businesses",
          //     title: "Professional Plan",
          //     soon: t("soon"),
          //   },
          //   features: generateFeaturesArray(3),
          // },
        ]}
      />
      <div className="hawa-h-screen"></div>
    </div>
  );
};
export const Default: Story = {
  render: Template.bind({}),
};
// features: [
//   {
//     hint: "Make as many menus as you want",
//     included: false,
//     text: "Unlimited Menus",
//   },
//   { included: false, text: "Unlimited Items" },
//   { included: false, text: "Custom Menus" },
// ],
