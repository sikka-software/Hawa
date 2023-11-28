import React, { useState, FC } from "react";
import { Radio, Tooltip, ScrollArea, Button, Chip } from "../../elements";
import { DirectionType, RadioOptionType } from "../../types/commonTypes";
import { CheckMark, UncheckMark } from "../../icons";
import { cn } from "../../util";
import { PlanFeature } from "@/components/types/pricingTypes";
import { PricingPlanTexts } from "@/components/types/textTypes";

type ComparingPlansTypes = {
  plans: {
    direction?: DirectionType;
    features: PlanFeature[];
    price?: number;
    texts?: PricingPlanTexts;
    size?: "small" | "medium" | "large";
  }[];
  currencies: RadioOptionType[];
  billingCycles: RadioOptionType[];
  currentCycle: RadioOptionType;
  currentCurrency: RadioOptionType;
  onCycleChange?: (e: any) => void;
  onCurrencyChange?: (e: any) => void;
  onPlanClicked?: (e: any) => void;
  direction?: DirectionType;
  showButtons?: boolean;
  topPosition?: number;
};

export const ComparingPlans: FC<ComparingPlansTypes> = (props) => {
  // Extracting unique features from all plans
  const uniqueFeatures = Array.from(
    new Set(
      props.plans.flatMap((plan) =>
        plan.features.map((feature) => feature.text)
      )
    )
  );

  return (
    <div id="detailed-pricing" className="hawa-w-full ">
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
        className={cn(
          "hawa-sticky  hawa-z-10 hawa-grid hawa-grid-cols-4 hawa-gap-x-2 hawa-border hawa-p-4 hawa-text-sm hawa-font-medium hawa-rounded-t",
          "hawa-bg-primary-foreground"
        )}
        style={{
          top: props.topPosition || 0,
        }}
      >
        <div className="hawa-flex hawa-items-center"></div>
        {props.plans.map((plan: any, i) => (
          <div
            key={i}
            className="hawa-flex hawa-flex-col hawa-gap-2 hawa-justify-center hawa-items-center"
          >
            <div className="hawa-flex hawa-flex-col hawa-gap-2">
              <div className="hawa-flex hawa-flex-col">
                {/* hawa-text-gray-500 dark:hawa-text-gray-400 */}
                <span className="hawa-text-md hawa-font-bold ">
                  {plan.texts.title}
                </span>

                <span className="hawa-text-md  hawa-font-normal hawa-text-muted-foreground ">
                  {plan.texts.subtitle}
                </span>
              </div>
              {/* hawa-text-gray-900 dark:hawa-text-white */}
              <div className=" hawa-flex hawa-items-baseline  ">
                <>
                  <span className="hawa-text-5xl hawa-font-extrabold hawa-tracking-tight">
                    {plan.price}
                  </span>
                  <span className="hawa-mx-1 hawa-text-sm hawa-font-semibold">
                    {plan.texts.currencyText}
                  </span>
                </>
                <span className="hawa-ml-1 hawa-text-xl hawa-font-normal ">
                  / {plan.texts.cycleText}
                </span>
              </div>
            </div>
          </div>
        ))}
      </div>

      <ScrollArea className="hawa-h-fit hawa-rounded hawa-rounded-t-none hawa-border-t-0 hawa-border">
        {uniqueFeatures.map((featureText, featureIndex) => {
          return (
            <div
              key={featureIndex}
              className={cn(
                "hawa-grid  hawa-grid-cols-[1fr_repeat(3,_minmax(0,_1fr))] hawa-gap-x-16  hawa-border-foreground-muted hawa-px-4 hawa-py-5 hawa-text-sm hawa-text-gray-700 dark:text-white",
                featureIndex === 0 ? "" : "hawa-border-t"
              )}
            >
              <div className="hawa-flex hawa-flex-row hawa-items-center hawa-gap-2 hawa-text-foreground">
                {featureText}
                {props.plans.some((plan) =>
                  plan.features.some(
                    (feature) => feature.text === featureText && feature.hint
                  )
                ) && (
                  <Tooltip
                    side="right"
                    content={
                      props.plans
                        .find(
                          (plan) =>
                            plan.features.find(
                              (feature) => feature.text === featureText
                            )?.hint
                        )
                        ?.features.find(
                          (feature) => feature.text === featureText
                        )?.hint
                    }
                  >
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
                {props.plans.some((plan) =>
                  plan.features.some(
                    (feature) => feature.text === featureText && feature.soon
                  )
                ) && <Chip label="Soon" />}
              </div>
              {props.plans.map((plan, planIndex) => {
                const feature = plan.features.find(
                  (f) => f.text === featureText
                );
                return (
                  <div
                    key={planIndex}
                    className="hawa-text-center hawa-flex hawa-flex-col hawa-items-center"
                  >
                    {feature?.included ? (
                      <CheckMark className="hawa-text-foreground" />
                    ) : (
                      <UncheckMark className="hawa-text-foreground" />
                    )}
                  </div>
                );
              })}
            </div>
          );
        })}
      </ScrollArea>
      {/* Footer with Buttons */}
      {props.showButtons && (
        <div className="hawa-grid  hawa-grid-cols-[1fr_repeat(3,_minmax(0,_1fr))] hawa-gap-x-16  hawa-px-4 hawa-py-5">
          <div className="hawa-flex hawa-items-center"></div>

          {props.plans.map((plan, i) => (
            <div
              key={i}
              className="hawa-flex hawa-justify-center hawa-items-center"
            >
              {/* Replace with actual button element or component */}
              <Button
                className="hawa-max-w-xs hawa-w-full"
                onClick={() => {
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
              >
                {plan.texts?.buttonText || "Get Started"}
              </Button>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};
