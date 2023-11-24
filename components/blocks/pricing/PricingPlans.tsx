import React, { FC } from "react";
import { PricingCard, PricingCardProps, Radio } from "../../elements";
import { DirectionType } from "../../types/commonTypes";

type PricingPlansTypes = {
  plans: PricingCardProps[];
  // plans: {
  //   id: any;
  //   direction?: DirectionType;
  //   features: { included: boolean; text: string }[];
  //   price: number;
  //   size?: "small" | "medium" | "large";
  //   texts: {
  //     title: string;
  //     subtitle: string;
  //     buttonText: string;
  //     cycleText: string;
  //     currencyText: string;
  //   };
  // }[];
  currencies: {
    label: string;
    value: string;
  }[];
  billingCycles: {
    label: string;
    value: string;
  }[];
  currentCycle: {
    label: string;
    value: string;
  };
  currentCurrency: {
    label: string;
    value: string;
  };
  onPlanClicked?: (e: any) => void;
  onCycleChange?: (e: any) => void;
  onCurrencyChange?: (e: any) => void;
  direction?: DirectionType;
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

      <div className="hawa-flex hawa-flex-col md:hawa-flex-row hawa-justify-between">
        {props.plans.map((plan: any, index) => {
          return (
            <PricingCard
              key={index}
              onPlanClicked={() => {
                if (props.onPlanClicked) {
                  let clickedData = {
                    // plan: plan.id,
                    currency: props.currentCurrency?.value,
                    cycle: props.currentCycle?.value,
                    ...plan,
                  };
                  props.onPlanClicked(clickedData);
                }
              }}
              {...plan}
              texts={{
                ...plan.texts,
                currencyText: props.currentCurrency?.label,
                cycleText: props.currentCycle?.label,
              }}
            />
          );
        })}
      </div>
    </div>
  );
};
