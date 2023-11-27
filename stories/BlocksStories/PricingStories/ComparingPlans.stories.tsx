import type { Meta, StoryObj } from "@storybook/react";
import { ComparingPlans } from "../../../components";
import { ArgsTable, Story, Title } from "@storybook/blocks";
import { setLocale, t } from "../../translations/i18n";
import { generateFeaturesArray } from "../../storiesUtils";

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

  return (
    <div dir={direction}>
      <ComparingPlans
        billingCycles={[
          { label: `Month`, value: `month` },
          // { label: `3 Months`, value: `3-months` },
          // { label: `6 Months`, value: `6-months` },
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
            },
            features: generateFeaturesArray(19),
            // features: [
            //   {
            //     hint: "Make as many menus as you want",
            //     included: false,
            //     text: "Unlimited Menus",
            //   },
            //   { included: false, text: "Unlimited Items" },
            //   { included: false, text: "Custom Menus" },
            // ],
          },
          {
            price: 10,
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
              { included: true, text: "Custom Menus" },
            ],
          },
        ]}
      />
    </div>
  );
};
export const Default: Story = {
  render: Template.bind({}),
};
