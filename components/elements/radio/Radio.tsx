import React, { useState, FC, useRef, useEffect } from "react";

import { DirectionType, OrientationType } from "../../types/commonTypes";
import { cn } from "../../util";
import { Label, LabelProps } from "../label/Label";

export type RadioOptionsTypes = {
  value: any;
  label: any;
  disabled?: any;
  sublabel?: any;
  icon?: any;
};

type RadioTypes = {
  orientation?: OrientationType;
  design?: "default" | "tabs" | "cards" | "bordered";
  width?: "default" | "full" | "none";
  size?: "default" | "lg" | "sm" | "xs";
  options: RadioOptionsTypes[];
  onChangeTab?: any;
  defaultValue?: any;
  direction?: DirectionType;
  helperText?: string;
  labelProps?: LabelProps;
  label?: string;
  tabsContainerClassName?: string;
};
export const Radio: FC<RadioTypes> = ({
  design = "default",
  width = "default",
  size = "default",
  orientation = "horizontal",
  labelProps,
  tabsContainerClassName,
  ...props
}) => {
  const [selectedOption, setSelectedOption] = useState(props.defaultValue);
  let activeTabStyle =
    "hawa-inline-block hawa-w-full hawa-text-primary-foreground hawa-bg-primary  hawa-active dark:hawa-bg-primary";
  let inactiveTabStyle =
    "hawa-inline-block hawa-w-full hawa-transition-all hover:hawa-bg-muted hawa-bg-primary-foreground dark:hover:hawa-text-white";
  // hawa-bg-primary/5
  let orientationStyle = {
    horizontal: "hawa-flex hawa-flex-row",
    vertical: "hawa-flex hawa-flex-col"
  };

  let tabSizeStyle = {
    default: "hawa-py-2 hawa-px-4 hawa-text-sm",
    lg: "hawa-py-2 hawa-px-4",
    sm: "hawa-p-1.5 hawa-text-xs",
    xs: "hawa-p-1 hawa-text-[10px]"
  };
  let widthStyle = {
    none: "",
    default: "hawa-max-w-fit",
    full: "hawa-w-full"
  };
  const [parentDirection, setParentDirection] = React.useState<string | null>(
    null
  );
  const parentRef = useRef<HTMLUListElement>(null);

  useEffect(() => {
    const parentNode = parentRef.current?.parentNode as HTMLElement | null;
    if (parentNode) {
      const dir = window.getComputedStyle(parentNode).direction;
      setParentDirection(dir);
    }
  });

  switch (design) {
    case "tabs":
      return (
        <ul
          ref={parentRef}
          className={cn(
            props.options && props.options?.length > 2
              ? "hawa-flex-wrap xs:hawa-max-w-full xs:hawa-flex-nowrap"
              : "",
            "hawa-select-none hawa-whitespace-nowrap hawa-rounded hawa-border hawa-text-center hawa-font-medium",
            orientationStyle[orientation],
            widthStyle[width],
            tabsContainerClassName
          )}
        >
          {props.options?.map((opt: any, o) => (
            <li
              aria-current="page"
              onClick={() => {
                setSelectedOption(opt.value);
                if (props.onChangeTab) {
                  props.onChangeTab(opt);
                } else {
                  console.log("onChangeTab was not provided");
                }
              }}
              className={cn(
                "hawa-w-full hawa-cursor-pointer ",
                orientation === "horizontal" &&
                  parentDirection === "ltr" &&
                  "hawa-rounded-none first:hawa-rounded-l last:hawa-rounded-r",
                orientation === "horizontal" &&
                  parentDirection === "rtl" &&
                  "hawa-rounded-none first:hawa-rounded-r last:hawa-rounded-l",
                orientation === "vertical" &&
                  "hawa-rounded-none first:hawa-rounded-t last:hawa-rounded-b",
                tabSizeStyle[size],
                "hawa-last hawa-flex hawa-flex-row hawa-items-center hawa-justify-center hawa-gap-2 ",
                selectedOption === opt.value ? activeTabStyle : inactiveTabStyle
              )}
              key={o}
            >
              {opt.icon && opt.icon}
              {opt.label}
            </li>
          ))}
        </ul>
      );
    case "bordered":
      return (
        <div className={cn(orientationStyle[orientation], "hawa-gap-4")}>
          {props.options &&
            props.options.map((opt, i) => (
              <div
                key={i}
                className="hawa-rounded hawa-border hawa-border-gray-200 "
              >
                <div
                  className={cn(
                    "radio-item radio-item-bordered hawa-flex hawa-items-center hawa-transition-all",
                    props.direction === "rtl"
                      ? "margin-left right-19px"
                      : "margin-right left-23px"
                  )}
                  key={i + 1}
                >
                  <input
                    disabled={opt.disabled}
                    id={opt.value.toString()}
                    type="radio"
                    value={opt.value}
                    name="bordered-radio"
                  />
                  <label
                    htmlFor={opt.value.toString()}
                    className={cn(
                      "hawa-ml-2 hawa-w-full  hawa-p-4 hawa-pl-3  hawa-text-sm hawa-font-medium dark:hawa-text-white",
                      opt.disabled
                        ? "hawa-opacity-50"
                        : "hawa-cursor-pointer hawa-text-gray-900"
                    )}
                  >
                    {opt.label}
                  </label>
                </div>
              </div>
            ))}
        </div>
      );
    case "cards":
      return (
        <ul className={cn(orientationStyle[orientation], "hawa-gap-4")}>
          {props.options?.map((opt: any, o) => (
            <li key={o}>
              <input
                type="radio"
                id={opt.value.toString()}
                name="cards-radio"
                value={opt.value.toString()}
                className="hawa-peer hawa-hidden"
                required
                disabled={opt.disabled}
              />
              <label
                htmlFor={opt.value.toString()}
                className={cn(
                  "hawa-inline-flex hawa-h-full hawa-w-full  hawa-items-center hawa-justify-between hawa-rounded-lg hawa-border hawa-border-gray-200 hawa-bg-white hawa-p-5 hawa-text-gray-500  peer-checked:hawa-border-primary peer-checked:hawa-text-primary dark:hawa-border-gray-700 dark:hawa-bg-gray-800 dark:hawa-text-gray-400  dark:peer-checked:hawa-text-primary",
                  opt.disabled
                    ? "hawa-opacity-50"
                    : "hawa-cursor-pointer hover:hawa-bg-gray-100 hover:hawa-text-gray-600 dark:hover:hawa-bg-gray-700 dark:hover:hawa-text-gray-300"
                )}
              >
                <div className="hawa-block  hawa-h-full hawa-w-full">
                  <div className="hawa-w-full hawa-text-lg hawa-font-semibold">
                    {opt.label}
                  </div>
                  <div className="hawa-w-full">{opt.sublabel}</div>
                </div>
              </label>
            </li>
          ))}
        </ul>
      );

    default:
      return (
        <div className="hawa-flex hawa-flex-col hawa-gap-2">
          {props.label && <Label {...labelProps}>{props.label}</Label>}
          <div className={cn(orientationStyle[orientation], "hawa-gap-2")}>
            {props.options &&
              props.options.map((opt, i) => (
                <div
                  className={cn(
                    "radio-item radio-item-default hawa-flex hawa-items-center hawa-transition-all",
                    props.direction === "rtl"
                      ? "margin-left right-3px"
                      : "margin-right left-3px"
                  )}
                  key={i + 1}
                >
                  <input
                    // TODO: spread the usual radio props
                    disabled={opt.disabled}
                    id={opt.value.toString()}
                    type="radio"
                    value={opt.value}
                    // TODO: make this passable prop
                    name="default-radio"
                    onChange={() => {
                      setSelectedOption(opt.value);
                      if (props.onChangeTab) {
                        props.onChangeTab(opt);
                      } else {
                        console.log("onChangeTab was not provided");
                      }
                    }}
                  />
                  <label
                    htmlFor={opt.value.toString()}
                    className={cn(
                      "hawa-text-sm hawa-font-medium  dark:hawa-text-white",
                      opt.disabled
                        ? "hawa-text-gray-400"
                        : "hawa-cursor-pointer hawa-text-gray-900"
                    )}
                  >
                    {opt.label}
                  </label>
                </div>
              ))}
          </div>
          <p
            className={cn(
              "hawa-my-0 hawa-text-start hawa-text-xs hawa-text-helper-color hawa-transition-all",
              props.helperText
                ? "hawa-h-4 hawa-opacity-100"
                : "hawa-h-0 hawa-opacity-0"
            )}
          >
            {props.helperText}
          </p>
        </div>
      );
  }
};
