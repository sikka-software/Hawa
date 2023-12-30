import React, { FC, InputHTMLAttributes } from "react";

import { PricingCard } from "@/packages/components/blocks/cards";

import { Radio } from "@/packages/components/elements/radio";

import { DirectionType, RadioOptionType } from "@/packages/components/types/commonTypes";
import { PricingCardProps } from "@/packages/components/types/pricingTypes";

type PricingPlansTypes = {
  plans: PricingCardProps[];
  currencies: RadioOptionType[];
  billingCycles: RadioOptionType[];
  currentCycle: RadioOptionType;
  currentCurrency: RadioOptionType;
  onPlanClicked?: (e: any) => void;
  onCycleChange?: (e: any) => void;
  onCurrencyChange?: (e: any) => void;
  direction?: DirectionType;
  mainContainerProps?: InputHTMLAttributes<HTMLDivElement>;
  cardsContainerProps?: InputHTMLAttributes<HTMLDivElement>;
};

export const PricingPlans: FC<PricingPlansTypes> = ({
  mainContainerProps,
  cardsContainerProps,
  ...props
}) => {
  return (
    <div {...mainContainerProps}>
      <div className="hawa-mb-2 hawa-flex hawa-w-full hawa-justify-between">
        <Radio
          design="tabs"
          defaultValue={props.currentCycle.value}
          options={props.billingCycles}
          onChange={(e: any) => {
            if (props.onCycleChange) {
              props.onCycleChange(e);
            }
          }}
        />
        <Radio
          design="tabs"
          defaultValue={props.currentCurrency.value}
          options={props.currencies}
          onChange={(e: any) => {
            if (props.onCurrencyChange) {
              props.onCurrencyChange(e);
            }
          }}
        />
      </div>

      <div
        // className="hawa-flex hawa-w-full hawa-flex-col hawa-gap-2 md:hawa-flex-row hawa-justify-between"
        className="hawa-inline-grid hawa-w-full hawa-grid-cols-[repeat(auto-fit,_minmax(300px,_1fr))] hawa-gap-4"
        {...cardsContainerProps}
      >
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
                    ...plan
                  };
                  props.onPlanClicked(clickedData);
                }
              }}
              {...plan}
              price={plan.price}
              texts={{
                ...plan.texts,
                currencyText: props.currentCurrency?.label,
                cycleText: props.currentCycle?.label
              }}
            />
          );
        })}
      </div>
    </div>
  );
};
