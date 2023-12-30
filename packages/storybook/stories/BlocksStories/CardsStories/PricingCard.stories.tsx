import { useState } from "react";

import type { Meta, StoryObj } from "@storybook/react";

import { PricingCard } from "@sikka/hawa/blocks";
import { Input } from "@sikka/hawa/input";
import { Radio } from "@sikka/hawa/radio";
import { Separator } from "@sikka/hawa/separator";

const meta = {
  title: "Blocks/Cards/Pricing Card",
  component: PricingCard
} satisfies Meta<typeof PricingCard>;

export default meta;
type Story = StoryObj<typeof PricingCard>;

export const Default: Story = {
  render: (args) => {
    const [curr, setCurr] = useState("sar");
    const [cycle, setCycle] = useState("monthly");
    const [priceObject, setPriceObject] = useState<any>({
      sar: {
        monthly: 300,
        annually: 300 * 12
      },
      usd: {
        monthly: 300,
        annually: 300 * 12
      }
    });
    return (
      <div>
        <PricingCard
          {...args}
          price={priceObject[curr][cycle]}
          texts={{
            ...args.texts,
            currencyText: curr,
            cycleText: cycle
          }}
        />
        <Separator className="hawa-my-4" />
        <h1>Debug</h1>
        <Radio
          key={"currency"}
          onChange={(e: any) => setCurr(e.value)}
          options={[
            { label: "SAR", value: "sar" },
            { label: "USD", value: "usd" }
          ]}
        />
        <Radio
          key={"cycle"}
          onChange={(e: any) => setCycle(e.value)}
          options={[
            { label: "Monthly", value: "monthly" },
            { label: "Annually", value: "annually" }
          ]}
        />
        <div className="hawa-flex hawa-w-1/2 hawa-flex-col hawa-gap-2">
          <div className="hawa-flex hawa-flex-row hawa-gap-2">
            <Input
              label={"SAR Monthly"}
              value={priceObject.sar.monthly}
              onChange={(e) => {
                setPriceObject({
                  ...priceObject,
                  sar: {
                    ...priceObject.sar,
                    monthly: parseInt(e.target.value)
                  }
                });
              }}
            />
            <Input
              label={"SAR Annually"}
              value={priceObject.sar.annually}
              onChange={(e) => {
                setPriceObject({
                  ...priceObject,
                  sar: {
                    ...priceObject.sar,
                    annually: parseInt(e.target.value)
                  }
                });
              }}
            />
          </div>
          <div className="hawa-flex hawa-flex-row hawa-gap-2">
            <Input
              label={"USD Monthly"}
              value={priceObject.usd.monthly}
              onChange={(e) => {
                setPriceObject({
                  ...priceObject,
                  usd: {
                    ...priceObject.usd,
                    monthly: parseInt(e.target.value)
                  }
                });
              }}
            />
            <Input
              label={"USD Annually"}
              value={priceObject.usd.annually}
              onChange={(e) => {
                setPriceObject({
                  ...priceObject,
                  usd: {
                    ...priceObject.usd,
                    annually: parseInt(e.target.value)
                  }
                });
              }}
            />
          </div>
        </div>
      </div>
    );
  },
  args: {
    direction: "ltr",
    price: 300,
    oldPrice: 900,
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
      {
        included: true,
        text: "Unlimited Menus",
        hint: "Something something here",
        soon: true
      },
      { included: true, text: "Unlimited Items" },
      { included: false, text: "Custom Menus" },
      { included: false, text: "Custom Domain", soon: true }
    ]
  }
};
