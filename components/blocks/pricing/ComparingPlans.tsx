import React, { useState, FC } from "react";
import { Radio } from "../../elements";
import { Tooltip } from "../../elements/Tooltip";
import { DirectionType } from "@/components/types/commonTypes";

const CheckMark = () => (
  <svg
    className="hawa-h-5 hawa-w-5 hawa-text-green-500"
    aria-hidden="true"
    fill="currentColor"
    viewBox="0 0 20 20"
  >
    <path
      fillRule="evenodd"
      d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
      clipRule="evenodd"
    ></path>
  </svg>
);

const UncheckMark = () => (
  <svg
    className="hawa-h-5 hawa-w-5 hawa-text-red-500"
    aria-hidden="true"
    fill="currentColor"
    viewBox="0 0 20 20"
  >
    <path
      fillRule="evenodd"
      d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
      clipRule="evenodd"
    ></path>
  </svg>
);

type ComparingPlansTypes = {
  plans: {
    direction?: DirectionType;
    features: { included: boolean; text: string; description?: string }[];
    price?: number;
    texts?: {
      title?: string;
      subtitle?: string;
      buttonText?: string;
      cycleText?: string;
      currencyText?: string;
    };
    size?: "small" | "medium" | "large";
  }[];
  currencies: { label: string; value: string }[];
  billingCycles: { label: string; value: string }[];
  onCycleChange?: (e: any) => void;
  onCurrencyChange?: (e: any) => void;
  direction?: DirectionType;
};
export const ComparingPlans: FC<ComparingPlansTypes> = (props) => {
  const [currentCurrency, setCurrentCurrency] = useState("sar");
  const [currentCycle, setCurrentCycle] = useState("month");

  return (
    <div id="detailed-pricing" className="hawa-w-full hawa-overflow-x-auto">
      <div className="hawa-mb-2 hawa-flex hawa-w-full hawa-justify-between">
        <Radio
          design="tabs"
          defaultValue={currentCycle}
          options={props.billingCycles}
          onChangeTab={(e: any) => {
            if (props.onCycleChange) {
              props.onCycleChange(e);
            } else {
              console.log("onCycleChange was not provided");
            }
          }}
        />
        <Radio
          design="tabs"
          defaultValue={currentCurrency}
          options={props.currencies}
          onChangeTab={(e: any) => {
            if (props.onCurrencyChange) {
              props.onCurrencyChange(e);
            } else {
              console.log("onCurrencyChange was not provided");
            }
          }}
        />
      </div>
      <div className=" hawa-overflow-hidden hawa-rounded">
        <div className="hawa-grid hawa-grid-cols-4 hawa-gap-x-2 hawa-border-b hawa-border-t hawa-border-gray-200 hawa-bg-gray-100 hawa-p-4 hawa-text-sm hawa-font-medium hawa-text-gray-900 dark:hawa-border-gray-700 dark:hawa-bg-gray-800 dark:hawa-text-white">
          <div className="hawa-flex hawa-items-center"></div>
          {props.plans.map((plan: any, i) => (
            <div key={i}>
              <h5 className="hawa-text-md hawa-font-bold hawa-text-gray-500 dark:hawa-text-gray-400">
                {plan.texts.title}
              </h5>

              <div className=" hawa-flex hawa-items-baseline  hawa-text-gray-900 dark:hawa-text-white">
                <>
                  <span className="hawa-text-5xl hawa-font-extrabold hawa-tracking-tight">
                    {plan.price}
                  </span>
                  <span className="hawa-mx-1 hawa-text-sm hawa-font-semibold">
                    {plan.texts.currencyText}
                  </span>
                </>
                <span className="hawa-ml-1 hawa-text-xl hawa-font-normal hawa-text-gray-500 dark:hawa-text-gray-400">
                  / {plan.texts.cycleText}
                </span>
              </div>
              <h5 className="hawa-text-md  hawa-font-normal hawa-text-gray-500 dark:hawa-text-gray-400">
                {plan.texts.subtitle}
              </h5>
            </div>
          ))}
        </div>
        {props.plans?.map((plan) => {
          return plan.features.map((feature, j) => {
            return (
              <div
                key={j}
                className="hawa-grid hawa-grid-cols-4 hawa-gap-x-16 hawa-border-b hawa-border-gray-200 hawa-px-4 hawa-py-5 hawa-text-sm hawa-text-gray-700 dark:hawa-border-gray-700"
              >
                <div className="  hawa-flex hawa-flex-row hawa-items-center hawa-gap-2  hawa-text-gray-500 dark:hawa-text-gray-400">
                  {feature.text}
                  {feature.description && (
                    <Tooltip side="right" content={feature.description}>
                      <svg
                        stroke="currentColor"
                        fill="currentColor"
                        strokeWidth="0"
                        viewBox="0 0 16 16"
                        height="1em"
                        width="1em"
                      >
                        <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zM8 4a.905.905 0 0 0-.9.995l.35 3.507a.552.552 0 0 0 1.1 0l.35-3.507A.905.905 0 0 0 8 4zm.002 6a1 1 0 1 0 0 2 1 1 0 0 0 0-2z"></path>
                      </svg>
                    </Tooltip>
                  )}
                </div>
                <UncheckMark />
                <CheckMark />
                <UncheckMark />
              </div>
            );
          });
        })}
      </div>
    </div>
  );
};
