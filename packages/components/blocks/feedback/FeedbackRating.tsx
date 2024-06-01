import React, { FC, useEffect, useRef, useState } from "react";

import { cn } from "@util/index";

import { Button } from "@elements/button";

type ComponentTypes = {
  title?: string;
  question: string;
  banner?: boolean;
  options?: any[];
  position?: "bottom-right" | "bottom-left";
  onOptionClicked?: (option: any) => void;
  texts?: {
    least: string;
    most: string;
  };
};

export const FeedbackRating: FC<ComponentTypes> = ({
  position = "bottom-right",
  ...props
}) => {
  const [closed, setClosed] = useState(false);
  const [answered, setAnswered] = useState(false);
  const [clickedOption, setClickedOption] = useState(null);
  const [closingTimer, setClosingTimer] = useState(5);
  const popUpRef = useRef<HTMLDivElement>(null);

  const boxPosition = {
    "bottom-right": "hawa-right-4",
    "bottom-left": "hawa-left-4",
  };
  useEffect(() => {
    //To change opacity and hide the component
    const timeoutHide = setTimeout(() => {
      if (closingTimer >= 0) {
        setClosingTimer(closingTimer - 1);
      }
    }, 1000);

    return () => {
      clearTimeout(timeoutHide);
    };
  }, [closingTimer]);

  const slowClose = () => {
    setClosed(true);
    setTimeout(() => {
      if (popUpRef.current) {
        popUpRef.current.removeChild(popUpRef.current.children[0]);
      }
    }, 200);
  };
  return (
    <div
      ref={popUpRef}
      className={cn(
        props.banner
          ? "hawa-fixed hawa-bottom-0 hawa-left-0 hawa-w-full hawa-px-0 md:hawa-px-4"
          : "hawa-fixed hawa-bottom-4",
        boxPosition[position],
      )}
    >
      <div
        className={cn(
          "hawa-relative hawa-flex hawa-w-full hawa-flex-col hawa-gap-2 hawa-rounded hawa-border hawa-bg-background hawa-p-4 hawa-shadow-md hawa-transition-all",
          closed ? "hawa-opacity-0" : "hawa-opacity-100",
          props.banner &&
            "hawa-rounded-none hawa-px-4 md:hawa-rounded-t md:hawa-px-64",
        )}
      >
        <div className="hawa-absolute hawa-left-2 hawa-top-2 hawa-p-1.5 hawa-text-sm">
          {props.title}
        </div>
        <button
          type="button"
          className="hawa-absolute hawa-right-2 hawa-top-2 hawa-inline-flex hawa-h-8 hawa-w-8 hawa-rounded hawa-p-1.5 hawa-text-gray-400 hover:hawa-bg-gray-100 hover:hawa-text-gray-900 focus:hawa-ring-2 focus:hawa-ring-gray-300 dark:hawa-bg-gray-800 dark:hawa-text-gray-500 dark:hover:hawa-bg-gray-700 dark:hover:hawa-text-white"
          data-dismiss-target="#toast-default"
          aria-label="Close"
          onClick={() => slowClose()}
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
        <div className="hawa-mt-8">{props.question}</div>
        <div className="hawa-flex hawa-w-full hawa-flex-row hawa-gap-1 hawa-rounded">
          {props.options &&
            props.options.map((op, i) => (
              <span
                key={i}
                onClick={() => {
                  if (props.onOptionClicked) {
                    props.onOptionClicked(op);
                  }
                  setClickedOption(op);
                  setAnswered(true);
                  const timeoutDestroy = setTimeout(() => {
                    setClosed(true);
                  }, 4800);
                  setTimeout(() => {
                    popUpRef.current?.removeChild(
                      popUpRef.current?.children[0],
                    );
                    clearTimeout(timeoutDestroy);
                  }, 5300);
                }}
                className={cn(
                  "hawa-w-full hawa-cursor-pointer hawa-rounded hawa-border hawa-p-4 hawa-text-center hawa-transition-all",
                  clickedOption === op
                    ? "hawa-bg-gray-500 hawa-text-white"
                    : "hawa-border hawa-bg-background hover:hawa-bg-gray-300 dark:hover:hawa-bg-gray-700",
                )}
              >
                {op}
              </span>
            ))}
        </div>
        {props.texts && (
          <div className="hawa-flex hawa-flex-row hawa-justify-between hawa-text-xs">
            <span>{props.texts.least}</span>
            <span>{props.texts.most}</span>
          </div>
        )}
        {answered && (
          <div className="hawa-absolute hawa-left-0 hawa-top-0 hawa-flex hawa-h-full hawa-w-full hawa-flex-col hawa-items-center hawa-justify-center hawa-gap-2 hawa-rounded hawa-bg-black hawa-bg-opacity-80 hawa-p-4 hawa-text-center hawa-transition-all">
            <span className="hawa-font-bold hawa-text-white">
              Thank you for your answer. This box will disappear in
              {" " + closingTimer} seconds
            </span>
            <div className="hawa-flex hawa-flex-row hawa-gap-2">
              <Button variant={"secondary"} onClick={() => slowClose()}>
                Close
              </Button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};
