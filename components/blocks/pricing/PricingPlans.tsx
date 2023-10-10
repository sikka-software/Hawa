import React, { FC } from "react";
import { PricingCard, Radio } from "../../elements";

type PricingPlansTypes = {
  plans: [
    {
      direction: "rtl" | "ltr";
      features: [{ included: boolean; text: string }];
      price: number;
      texts: {
        title: string;
        subtitle: string;
        buttonText: string;
        cycleText: string;
        currencyText: string;
      };
      size: "small" | "medium" | "large";
    }
  ];
  currencies: [
    {
      label: string;
      value: string;
    }
  ];
  billingCycles: [
    {
      label: string;
      value: string;
    }
  ];
  onPlanClicked?: (e: any) => void;
  currentCycle: {
    label: string;
    value: string;
  };
  currentCurrency: {
    label: string;
    value: string;
  };
  onCycleChange?: (e: any) => void;
  onCurrencyChange?: (e: any) => void;
  direction?: "rtl" | "ltr";
};
export const PricingPlans: FC<PricingPlansTypes> = (props) => {
  return (
    <div>
      <div className="hawa-mb-2 hawa-flex hawa-w-full hawa-justify-between">
        <Radio
          design="tabs"
          defaultValue={props.currentCycle}
          options={props.billingCycles}
          onChangeTab={(e: any) => {
            if (props.onCycleChange) {
              props.onCycleChange(e);
            }
          }}
        />
        <Radio
          design="tabs"
          defaultValue={props.currentCurrency}
          options={props.currencies}
          onChangeTab={(e: any) => {
            if (props.onCurrencyChange) {
              props.onCurrencyChange(e);
            }
          }}
        />
      </div>

      <div className="hawa-flex hawa-flex-row hawa-justify-between">
        {props.plans.map((plan: any, index) => {
          return (
            <PricingCard
              key={index}
              onPlanClicked={() => {
                if (props.onPlanClicked) {
                  props.onPlanClicked(plan);
                }
              }}
              {...plan}
              texts={{
                ...plan.texts,
                currencyText: props.currentCurrency,
                cycleText: props.currentCycle,
              }}
            />
          );
        })}
      </div>
    </div>
  );
};