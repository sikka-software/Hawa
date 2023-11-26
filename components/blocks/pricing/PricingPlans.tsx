import React, { FC, InputHTMLAttributes } from "react";
import { PricingCard, PricingCardProps, Radio } from "../../elements";
import { DirectionType } from "../../types/commonTypes";

type PricingPlansTypes = {
  plans: PricingCardProps[];
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
          onChangeTab={(e: any) => {
            if (props.onCycleChange) {
              props.onCycleChange(e);
            }
          }}
        />
        <Radio
          design="tabs"
          defaultValue={props.currentCurrency.value}
          options={props.currencies}
          onChangeTab={(e: any) => {
            if (props.onCurrencyChange) {
              props.onCurrencyChange(e);
            }
          }}
        />
      </div>

      <div
        className="hawa-flex hawa-flex-col hawa-gap-2 md:hawa-flex-row hawa-justify-between"
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
                    ...plan,
                  };
                  props.onPlanClicked(clickedData);
                }
              }}
              {...plan}
              price={
                plan.price[props.currentCurrency?.value][
                  props.currentCycle?.value
                ]
              }
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
