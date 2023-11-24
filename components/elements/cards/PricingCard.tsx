import React, { FC } from "react";
import { DirectionType } from "@/components/types/commonTypes";
import { cn } from "../../util";
import { Button } from "../Button";
import { Card } from "../Card";
import { Chip } from "../Chip";
import { Skeleton } from "../Skeleton";
import { Tooltip } from "../Tooltip";

export type PricingCardProps = {
  direction?: DirectionType;
  features: {
    included: boolean;
    soon?: boolean;
    text: string;
    hint?: string;
    hintSide?: any;
  }[];
  price: number;
  id?: string;
  discount?: string;
  onPlanClicked?: () => void;
  currentPlan?: boolean;
  size?: "small" | "medium" | "large";
  isLoading?: boolean;
  texts: {
    title: string;
    subtitle?: string;
    buttonText: string;
    cycleText: string;
    currencyText: string;
  };
};

export const PricingCard: FC<PricingCardProps> = ({
  size = "medium",
  direction = "ltr",
  currentPlan = false,
  ...props
}) => {
  let cardSizes = {
    small:
      "hawa-w-full hawa-max-w-sm hawa-rounded hawa-border dark:hawa-border-gray-700 hawa-bg-background ",
    medium:
      "hawa-w-full hawa-rounded hawa-min-w-fit hawa-border dark:hawa-border-gray-700 hawa-bg-background ",
    large:
      "hawa-w-full hawa-max-w-lg hawa-rounded hawa-border dark:hawa-border-gray-700 hawa-bg-background ",
  };
  return (
    <Card
      dir={direction}
      className={cn(
        currentPlan
          ? "hawa-border-primary dark:hawa-border-primary/70 hawa-border-2 "
          : "hawa-border",
        cardSizes[size],
        "hawa-flex hawa-flex-col hawa-gap-4 hawa-rounded hawa-p-4 hawa-justify-between"
      )}
    >
      <div className="hawa-flex hawa-flex-col hawa-gap-4">
        <div className="hawa-text-md hawa-relative hawa-flex hawa-flex-row hawa-justify-between hawa-font-bold hawa-text-primary/70">
          <span>{props.texts.title}</span>
          {props.discount && (
            <span className="hawa-absolute hawa-end-0">
              <Chip label={props.discount} size="large" color="hyper" />
            </span>
          )}
        </div>
        <div className=" hawa-text-primary hawa-flex  hawa-items-baseline">
          {props.isLoading ? (
            <Skeleton className="hawa-w-full hawa-max-w-[200px] hawa-h-[48px] hawa-p-0 " />
          ) : (
            <>
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
            </>
          )}
        </div>
        <h5 className="hawa-text-sm  hawa-font-normal hawa-text-primary/70">
          {props.texts.subtitle}
        </h5>
        {props.features && (
          <ul role="list" className="hawa-space-y-0 hawa-overflow-x-auto">
            {props.features?.map((feature, o) => {
              return (
                <li
                  key={o}
                  className={cn(
                    "hawa-flex hawa-flex-row hawa-justify-between hawa-gap-2",
                    !feature.included && "hawa-line-through"
                  )}
                >
                  <div className="hawa-flex hawa-flex-row hawa-items-center">
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

                    <span className="hawa-flex hawa-items-center hawa-flex-row hawa-gap-2 hawa-text-start hawa-whitespace-nowrap hawa-font-normal hawa-leading-tight hawa-text-primary/70 ">
                      {feature.text}{" "}
                      {feature.soon && feature.included && (
                        <Chip label="soon" color="oceanic" size="small" />
                      )}
                    </span>
                  </div>
                  {feature.hint && (
                    <Tooltip content={feature.hint} side={feature.hintSide}>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="hawa-w-[14px] hawa-h-[14px] hawa-cursor-help"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      >
                        <circle cx="12" cy="12" r="10" />
                        <path d="M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3" />
                        <path d="M12 17h.01" />
                      </svg>
                    </Tooltip>
                  )}
                </li>
              );
            })}
          </ul>
        )}
      </div>
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
