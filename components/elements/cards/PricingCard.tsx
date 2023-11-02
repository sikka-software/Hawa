import React, { FC } from "react";
import { Button } from "../Button";
import { Card } from "../Card";
import { DirectionType } from "@/components/types/commonTypes";
import { Chip } from "..";
import { cn } from "../../util";

type PricingCardTypes = {
  direction?: DirectionType;
  features: { included: boolean; soon?: boolean; text: string }[];
  price: number;
  discount?: string;
  texts: {
    title: string;
    subtitle: string;
    buttonText: string;
    cycleText: string;
    currencyText: string;
  };
  onPlanClicked?: () => void;
  currentPlan?: boolean;
  size: "small" | "medium" | "large";
};

export const PricingCard: FC<PricingCardTypes> = ({
  size = "medium",
  direction = "ltr",
  currentPlan = false,
  ...props
}) => {
  let cardSizes = {
    small:
      "hawa-mx-1 hawa-w-full hawa-max-w-sm hawa-rounded hawa-border dark:hawa-border-gray-700 hawa-bg-background ",
    medium:
      "hawa-mx-1 hawa-w-full hawa-rounded hawa-min-w-fit hawa-border dark:hawa-border-gray-700 hawa-bg-background ",
    large:
      "hawa-mx-1 hawa-w-full hawa-max-w-lg hawa-rounded hawa-border dark:hawa-border-gray-700 hawa-bg-background ",
  };
  return (
    <Card
      dir={direction}
      className={cn(
        currentPlan
          ? "hawa-border-primary dark:hawa-border-primary/70 hawa-border-2 "
          : "hawa-border",
        cardSizes[size],
        "hawa-flex hawa-flex-col hawa-gap-4 hawa-rounded hawa-p-4 "
      )}
    >
      {props.discount && (
        <Chip label={props.discount} size="large" color="hyper" />
      )}{" "}
      <h5 className="hawa-text-md 0 hawa-font-bold hawa-text-primary/70">
        {props.texts.title}
      </h5>
      <div className=" hawa-text-primary hawa-flex  hawa-items-baseline">
        <>
          <span className="hawa-text-5xl hawa-font-extrabold hawa-tracking-tight">
            {props.price}
          </span>
          <span className="hawa-mx-1 hawa-text-sm hawa-font-semibold">
            {props.texts.currencyText}
          </span>
        </>
        <span className="hawa-ml-1 hawa-text-xl hawa-font-normal hawa-text-primary/70">
          / {props.texts.cycleText}
        </span>
      </div>
      <h5 className="hawa-text-sm  hawa-font-normal hawa-text-primary/70">
        {props.texts.subtitle}
      </h5>
      {props.features && (
        <ul role="list" className="hawa-space-y-0 ">
          {props.features?.map((feature, o) => {
            return (
              <li
                key={o}
                className={cn(
                  "hawa-flex",
                  !feature.included && "hawa-line-through"
                )}
              >
                {feature.included ? (
                  <svg
                    aria-label="Check Icon"
                    aria-hidden="true"
                    className="hawa-m-2 hawa-h-5 hawa-w-5 hawa-flex-shrink-0 hawa-text-primary"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path
                      fillRule="evenodd"
                      d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                      clipRule="evenodd"
                    ></path>
                  </svg>
                ) : (
                  <div className="hawa-w-4 hawa-h-4 hawa-rounded-full hawa-bg-primary/10 hawa-m-2 hawa-mx-2.5"></div>
                )}

                <span className="hawa-flex hawa-items-center hawa-flex-row hawa-gap-2 hawa-text-center hawa-font-normal hawa-leading-tight hawa-text-primary/70 ">
                  {feature.text}{" "}
                  {feature.soon && feature.included && (
                    <Chip label="soon" color="oceanic" size="small" />
                  )}
                </span>
              </li>
            );
          })}
        </ul>
      )}
      <Button
        onClick={props.onPlanClicked}
        disabled={currentPlan}
        className="hawa-w-full"
      >
        {props.texts.buttonText}
      </Button>
    </Card>
  );
};
