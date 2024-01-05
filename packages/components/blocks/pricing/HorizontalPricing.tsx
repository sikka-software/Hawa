import React, { FC, useState } from "react";

import { Radio } from "@elements/radio";

import { DirectionType, RadioOptionType } from "@/types/commonTypes";
import { PlanFeature } from "@/types/pricingTypes";
import { PricingPlanTexts } from "@/types/textTypes";

import { cn } from "../../util";

type HorizontalPricingTypes = {
  plans: {
    currentPlan?: boolean;
    direction?: DirectionType;
    currency?: string;
    cycleText?: string;
    features?: PlanFeature[];
    price?: number;
    texts?: PricingPlanTexts;
    size?: "small" | "medium" | "large";
  }[];
  currencies: { label: string; value: string }[];
  billingCycles: { label: string; value: string }[];
  currentCycle?: RadioOptionType;
  currentCurrency?: RadioOptionType;
  onPlanClicked?: (e: any) => void;
  onCycleChange?: (e: any) => void;
  onCurrencyChange?: (e: any) => void;
  direction?: DirectionType;
};
export const HorizontalPricing: FC<HorizontalPricingTypes> = (props) => {
  const [selectedCard, setSelectedCard] = useState<string>("");
  let data = [
    { title: "basic", price: "$49", cycle: "/mo" },
    { title: "business", price: "$99", cycle: "/mo" },
    { title: "enterprise", price: "$149", cycle: "/mo" }
  ];
  return (
    <div className="hawa-z-10 hawa-w-full hawa-max-w-screen-sm">
      <div className="hawa-max-w-2xl ">
        <div className="hawa-flex hawa-flex-row hawa-justify-between">
          <Radio
            design="tabs"
            options={props.currencies}
            defaultValue={props.currentCurrency}
          />
          <Radio
            design="tabs"
            options={props.billingCycles}
            defaultValue={props.currentCycle}
          />
        </div>
        {data.map((d, i) => (
          <label
            key={i}
            htmlFor={d.title}
            className=""
            onClick={() => setSelectedCard(d.title)}
          >
            <input
              type="radio"
              name="radio"
              id={d.title}
              className="hawa-peer hawa-appearance-none"
            />
            <div
              className={cn(
                selectedCard === d.title
                  ? "peer-checked:hawa-border-primary peer-checked:hawa-ring-4 peer-checked:hawa-ring-primary/20 "
                  : "",
                "hawa-peer hawa-flex hawa-cursor-pointer hawa-items-center hawa-justify-between  hawa-rounded-xl hawa-border hawa-bg-background hawa-px-5   hawa-py-4 hawa-shadow dark:hawa-text-white  peer-checked:[&_.active]:hawa-block peer-checked:[&_.default]:hawa-hidden"
              )}
            >
              <div className="hawa-peer hawa-flex hawa-items-center hawa-gap-4">
                <CheckIcons />
                <CardText
                  title="Enterprise"
                  subtitle="For startups and new businesses"
                />
              </div>

              <CardPrice amount={d.price} cycle={d.cycle} />
            </div>
          </label>
        ))}
      </div>
    </div>
  );
};

const CheckIcons = () => (
  <>
    <svg
      fill="none"
      viewBox="0 0 24 24"
      strokeWidth="1.5"
      stroke="currentColor"
      className="hawa-default hawa-h-8 hawa-w-8 hawa-text-neutral-500"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
      />
    </svg>
    <svg
      viewBox="0 0 24 24"
      fill="currentColor"
      className="hawa-active hawa-hidden hawa-h-8 hawa-w-8 hawa-text-blue-500"
    >
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M2.25 12c0-5.385 4.365-9.75 9.75-9.75s9.75 4.365 9.75 9.75-4.365 9.75-9.75 9.75S2.25 17.385 2.25 12zm13.36-1.814a.75.75 0 10-1.22-.872l-3.236 4.53L9.53 12.22a.75.75 0 00-1.06 1.06l2.25 2.25a.75.75 0 001.14-.094l3.75-5.25z"
      />
    </svg>
  </>
);
const CardText = (props: any) => (
  <div className="hawa-peer hawa-flex hawa-flex-col hawa-items-start ">
    <h2 className="hawa-font-medium hawa-text-primary/90 sm:hawa-text-xl">
      {props.title}
    </h2>
    <p className="hawa-text-sm hawa-text-primary/60">{props.subtitle} </p>
  </div>
);
const CardPrice = (props: any) => (
  <h2 className="hawa-peer hawa-text-xl hawa-font-semibold hawa-text-primary sm:hawa-text-2xl">
    {props.amount}
    <span className="hawa-text-base hawa-font-medium hawa-text-neutral-400">
      {props.cycle}
    </span>
  </h2>
);
