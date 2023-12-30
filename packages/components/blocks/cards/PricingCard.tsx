import React, { FC } from "react";

import { Button } from "@elements/button";
import { Card } from "@elements/card";
import { Chip } from "@elements/chip";
import { Separator } from "@elements/separator";
import { Skeleton } from "@elements/skeleton";
import { Tooltip } from "@elements/tooltip";

import { PricingCardProps } from "@/types/pricingTypes";

import { cn } from "../../util";

export const PricingCard: FC<PricingCardProps> = ({
  size = "medium",
  direction = "ltr",
  endButton = true,
  recommended,
  currentPlan = false,
  ...props
}) => {
  let cardSizes = {
    small:
      "hawa-w-full hawa-max-w-sm hawa-rounded hawa-border dark:hawa-border-gray-700 hawa-bg-background ",
    medium:
      "hawa-w-full hawa-rounded hawa-min-w-fit hawa-border dark:hawa-border-gray-700 hawa-bg-background ",
    large:
      "hawa-w-full hawa-max-w-lg hawa-rounded hawa-border dark:hawa-border-gray-700 hawa-bg-background "
  };
  return (
    <Card
      dir={direction}
      className={cn(
        currentPlan
          ? "hawa-border-2 hawa-border-primary dark:hawa-border-primary/70 "
          : "hawa-border",
        cardSizes[size],
        "hawa-relative hawa-flex  hawa-flex-col hawa-justify-between hawa-gap-4 hawa-p-4",
        recommended ? "hawa-rounded hawa-rounded-t-none" : "hawa-rounded"
      )}
    >
      {recommended && (
        <div
          className="hawa-absolute -hawa-left-[1px] hawa-top-0 -hawa-translate-y-full hawa-rounded-t hawa-border hawa-bg-primary hawa-p-2  hawa-text-center hawa-text-primary-foreground"
          style={{ width: "calc(100% + 2px)" }}
        >
          {props.texts?.recommended || "RECOMMENDED"}
        </div>
      )}

      <div className="hawa-flex hawa-h-full hawa-flex-col hawa-gap-4">
        <div className="hawa-text-md hawa-relative hawa-flex hawa-flex-col hawa-justify-between hawa-font-bold hawa-text-primary/70">
          <span>{props.texts?.title}</span>
          <h5 className="hawa-text-sm  hawa-font-normal hawa-text-primary/70">
            {props.texts?.subtitle}
          </h5>
          {props.discount && (
            <span className="hawa-absolute hawa-end-0">
              <Chip label={props.discount} size="large" color="hyper" />
            </span>
          )}
        </div>
        <div className=" hawa-flex hawa-items-baseline  hawa-text-primary">
          {props.isLoading ? (
            <Skeleton className="hawa-h-[48px] hawa-w-full hawa-max-w-[200px] hawa-p-0 " />
          ) : (
            <>
              {props.noPrice ? (
                <div className="hawa-text-5xl hawa-font-extrabold hawa-tracking-tight">
                  {props.texts?.priceless || "Contact Us"}
                </div>
              ) : (
                <>
                  <>
                    <div className="hawa-flex hawa-flex-row hawa-items-end   hawa-gap-2">
                      {props.oldPrice && props.oldPrice > 0 && (
                        <span className="hawa-line-through hawa-opacity-70">
                          {props.oldPrice + " " + props.texts?.currencyText}
                        </span>
                      )}
                      <span className="hawa-text-5xl hawa-font-extrabold hawa-tracking-tight">
                        {props.price}
                      </span>
                    </div>

                    <span className="hawa-mx-1 hawa-text-sm hawa-font-semibold">
                      {props.texts?.currencyText}
                    </span>
                  </>
                  <span className="hawa-ml-1 hawa-whitespace-nowrap hawa-text-xl hawa-font-normal hawa-text-primary/70">
                    / {props.texts?.cycleText}
                  </span>
                </>
              )}
            </>
          )}
        </div>
        {endButton && <Separator />}
        <div
          className={cn(
            "hawa-flex hawa-h-full hawa-justify-between hawa-gap-4",
            endButton ? "hawa-flex-col" : "hawa-flex-col-reverse"
          )}
        >
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
                        <div className="hawa-m-2 hawa-mx-2.5 hawa-h-4 hawa-w-4 hawa-rounded-full hawa-bg-primary/10"></div>
                      )}

                      <span className="hawa-flex hawa-flex-row hawa-items-center hawa-gap-2 hawa-whitespace-nowrap hawa-text-start hawa-font-normal hawa-leading-tight hawa-text-primary/70 ">
                        {feature.text}{" "}
                        {feature.soon && feature.included && (
                          <Chip
                            label={props.texts?.soon || ""}
                            color="oceanic"
                            size="small"
                          />
                        )}
                      </span>
                    </div>
                    {feature.hint && (
                      <Tooltip content={feature.hint} side={feature.hintSide}>
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          className="hawa-h-[14px] hawa-w-[14px] hawa-cursor-help"
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
          <Button
            onClick={props.onPlanClicked}
            disabled={currentPlan}
            className="hawa-w-full"
          >
            {props.texts?.buttonText}
          </Button>
        </div>
      </div>
    </Card>
  );
};
