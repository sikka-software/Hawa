import React, { FC, useEffect, useRef, useState } from "react";
import {
  Button,
  Radio,
  Textarea,
  Card,
  CardContent,
  RadioOptionsTypes,
} from "../../elements";

import clsx from "clsx";

type ComponentTypes = {
  title?: string;
  question: string;
  description?: string;
  tag?: any;
  options?: RadioOptionsTypes[];
  texts?: {
    least: string;
    most: string;
  };
  position?: "bottom-right" | "bottom-left";
  onOptionClicked?: (option: any) => void;
};
export const UserReferralSource: FC<ComponentTypes> = ({
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
    <Card
      ref={popUpRef}
      className={clsx(
        "hawa-fixed hawa-bottom-4 hawa-p-0 ",
        boxPosition[position]
      )}
    >
      <button
        type="button"
        className="hawa-absolute hawa-right-2 hawa-top-2 hawa-inline-flex hawa-h-8 hawa-w-8 hawa-rounded hawa-p-1.5 hawa-text-gray-400 hawa-transition-all hover:hawa-bg-gray-100 hover:hawa-text-gray-900 focus:hawa-ring-2 focus:hawa-ring-gray-300 dark:hawa-bg-gray-800 dark:hawa-text-gray-500 dark:hover:hawa-bg-gray-700 dark:hover:hawa-text-white"
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
      <CardContent headless>
        <div
          className={clsx(
            "hawa-flex hawa-flex-col hawa-gap-4",
            closed ? "hawa-opacity-0" : "hawa-opacity-100"
          )}
        >
          <div className="hawa-mt-4 hawa-font-bold">{props.question}</div>
          <div className="hawa-flex hawa-w-full hawa-flex-row hawa-gap-1 hawa-rounded ">
            <Radio orientation="vertical" options={props.options}></Radio>
          </div>
          <div>
            <Textarea />
          </div>
        </div>
        <Button className="hawa-mt-4 hawa-w-full">Submit</Button>
      </CardContent>
    </Card>
  );
};
