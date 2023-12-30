import React, { FC, useRef, useState } from "react";

import { Card, CardContent } from "@elements/card";

import { DirectionType } from "@/types/commonTypes";

import { cn } from "../../util";

type DestroyableCard = {
  position?: "bottom-right" | "bottom-left";
  direction?: DirectionType;
  fixed?: boolean;
  children?: any;
};
export const DestroyableCard: FC<DestroyableCard> = ({
  position = "bottom-right",
  fixed,
  direction,
  ...props
}) => {
  const [closed, setClosed] = useState(false);
  const popUpRef = useRef<HTMLDivElement>(null);

  const boxPosition = {
    "bottom-right": "hawa-right-4 hawa-bottom-4",
    "bottom-left": "hawa-left-4 hawa-bottom-4"
  };

  return (
    <div
      className={cn(
        "hawa-transition-all",
        closed ? "hawa-opacity-0" : "hawa-opacity-100"
      )}
      ref={popUpRef}
    >
      <Card
        className={cn(
          fixed ? "hawa-fixed" : "hawa-relative",
          fixed && position && boxPosition[position]
        )}
        dir={direction}
      >
        <button
          type="button"
          className={cn(
            direction === "rtl" ? "hawa-left-2" : "hawa-right-2",
            "hawa-absolute hawa-top-2 hawa-inline-flex hawa-h-8 hawa-w-8 hawa-rounded hawa-p-1.5 hawa-text-gray-400 hawa-transition-all hover:hawa-bg-gray-100 hover:hawa-text-gray-900 focus:hawa-ring-2 focus:hawa-ring-gray-300 dark:hawa-bg-gray-800 dark:hawa-text-gray-500 dark:hover:hawa-bg-gray-700 dark:hover:hawa-text-white"
          )}
          data-dismiss-target="#destroyable-card"
          aria-label="Close"
          onClick={() => {
            setClosed(true);
            setTimeout(() => {
              if (popUpRef?.current) {
                popUpRef?.current.removeChild(popUpRef?.current.children[0]);
              }
            }, 200);
          }}
        >
          <svg
            aria-hidden="true"
            className="hawa-h-5 hawa-w-5"
            fill="currentColor"
            viewBox="0 0 20 20"
          >
            <path
              fillRule="evenodd"
              d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
              clipRule="evenodd"
            ></path>
          </svg>
        </button>
        <CardContent headless>{props.children}</CardContent>
      </Card>
    </div>
  );
};
