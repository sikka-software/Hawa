import React, { useState, FC, useRef, useEffect, forwardRef } from "react";

import { cn } from "@util/index";

import { DirectionType, OrientationType } from "../../types/commonTypes";
import { Label, LabelProps } from "../label/Label";

export type RadioOptionsTypes = {
  value: any;
  label: any;
  disabled?: any;
  sublabel?: any;
  icon?: any;
};

type RadioTypes = {
  /** Required to enable selection and differentiate between different Radio instances. */
  name: string;
  disabled?: boolean;
  orientation?: OrientationType;
  design?: "default" | "tabs" | "cards" | "bordered";
  width?: "default" | "full" | "none";
  size?: "default" | "lg" | "sm" | "xs";
  options: RadioOptionsTypes[];
  onChange?: any;
  defaultValue?: any;
  value?: any;
  direction?: DirectionType;
  helperText?: string;
  labelProps?: LabelProps;
  label?: string;
  tabsContainerClassName?: string;
  forceHideHelperText?: boolean;
};

export const Radio = forwardRef<HTMLInputElement, RadioTypes>(
  (
    {
      design = "default",
      width = "default",
      size = "default",
      orientation = "horizontal",
      name,
      labelProps,
      tabsContainerClassName,
      forceHideHelperText = false,
      onChange,
      ...props
    },
    ref,
  ) => {
    const [selectedOption, setSelectedOption] = useState(
      props.defaultValue || props.value,
    );
    let activeTabStyle =
      "hawa-inline-block hawa-w-full hawa-text-primary-foreground hawa-bg-primary  hawa-active dark:hawa-bg-primary";
    let inactiveTabStyle = `hawa-inline-block hawa-w-full hawa-transition-all  hawa-bg-primary-foreground dark:hover:hawa-text-white
    ${props.disabled ? "" : "hover:hawa-bg-muted"}`;
    let orientationStyle = {
      horizontal: "hawa-flex hawa-flex-row",
      vertical: "hawa-flex hawa-flex-col",
    };

    let tabSizeStyle = {
      default: "hawa-py-2 hawa-px-4 hawa-text-sm",
      lg: "hawa-py-2 hawa-px-4",
      sm: "hawa-p-1.5 hawa-text-xs",
      xs: "hawa-p-1 hawa-text-[10px]",
    };
    let widthStyle = {
      none: "",
      default: "hawa-max-w-fit",
      full: "hawa-w-full",
    };
    const [parentDirection, setParentDirection] = React.useState<string | null>(
      null,
    );
    const parentRef = useRef<HTMLUListElement>(null);

    useEffect(() => {
      const parentNode = parentRef.current?.parentNode as HTMLElement | null;
      if (parentNode) {
        const dir = window.getComputedStyle(parentNode).direction;
        setParentDirection(dir);
      }
    });

    const handleChange = (opt: RadioOptionsTypes) => {
      setSelectedOption(opt.value);
      if (onChange) {
        // use the more generic onChange prop
        onChange(opt.value); // You can pass the entire option or just the value
      } else {
        console.log("onChange was not provided");
      }
    };
    switch (design) {
      case "tabs":
        return (
          <div className="hawa-gap-2 hawa-flex hawa-flex-col">
            {props.label && <Label {...labelProps}>{props.label}</Label>}

            <ul
              ref={parentRef}
              className={cn(
                props.options && props.options?.length > 2
                  ? "hawa-flex-wrap xs:hawa-max-w-full xs:hawa-flex-nowrap"
                  : "",
                "hawa-select-none hawa-whitespace-nowrap hawa-rounded hawa-border hawa-text-center hawa-font-medium hawa-h-[40px]",
                orientationStyle[orientation],
                widthStyle[width],
                tabsContainerClassName,
              )}
            >
              {props.options?.map((opt: any, o) => (
                <li
                  aria-current="page"
                  onClick={() => {
                    if (props.disabled) return;
                    handleChange(opt);
                  }}
                  className={cn(
                    "hawa-w-full hawa-last hawa-flex hawa-flex-row hawa-items-center hawa-justify-center hawa-gap-2 ",
                    !props.disabled && "hawa-cursor-pointer",
                    orientation === "horizontal" &&
                      parentDirection === "ltr" &&
                      "hawa-rounded-none first:hawa-rounded-l last:hawa-rounded-r",
                    orientation === "horizontal" &&
                      parentDirection === "rtl" &&
                      "hawa-rounded-none first:hawa-rounded-r last:hawa-rounded-l",
                    orientation === "vertical" &&
                      "hawa-rounded-none first:hawa-rounded-t last:hawa-rounded-b",
                    tabSizeStyle[size],
                    selectedOption === opt.value
                      ? activeTabStyle
                      : inactiveTabStyle,
                  )}
                  key={o}
                >
                  {opt.icon && opt.icon}
                  {opt.label}
                </li>
              ))}
            </ul>
            {!forceHideHelperText && (
              <p
                className={cn(
                  "hawa-my-0 hawa-text-start hawa-text-xs hawa-text-helper-color hawa-transition-all",
                  props.helperText
                    ? "hawa-h-4 hawa-opacity-100"
                    : "hawa-h-0 hawa-opacity-0",
                )}
              >
                {props.helperText}
              </p>
            )}
          </div>
        );
      case "bordered":
        return (
          <div className={cn(orientationStyle[orientation], "hawa-gap-4")}>
            {props.options &&
              props.options.map((opt, i) => (
                <div key={i} className="hawa-w-full hawa-rounded hawa-border">
                  <div
                    className={cn(
                      "radio-item radio-item-bordered hawa-flex hawa-items-center hawa-transition-all",
                      props.direction === "rtl"
                        ? "margin-left right-19px"
                        : "margin-right left-23px",
                    )}
                    key={i + 1}
                  >
                    <input
                      disabled={opt.disabled}
                      id={opt.value.toString()}
                      type="radio"
                      value={opt.value}
                      name={name}
                      onChange={() => handleChange(opt)}
                    />
                    <label
                      htmlFor={opt.value.toString()}
                      className={cn(
                        "hawa-ml-2 hawa-w-full hawa-select-none hawa-p-4 hawa-pl-3 hawa-text-sm hawa-font-medium hawa-text-black dark:hawa-text-white",
                        opt.disabled
                          ? "hawa-opacity-50"
                          : "hawa-cursor-pointer hawa-text-gray-900",
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
              <li key={o} onClick={() => handleChange(opt)}>
                <input
                  type="radio"
                  id={opt.value.toString()}
                  name={name}
                  value={opt.value.toString()}
                  className="hawa-peer hawa-hidden"
                  required
                  disabled={opt.disabled}
                />
                <label
                  htmlFor={opt.value.toString()}
                  className={cn(
                    "hawa-inline-flex hawa-h-full hawa-w-full hawa-transition-all  hawa-items-center hawa-justify-between hawa-rounded-lg hawa-border hawa-border-foreground/10 hawa-bg-background hawa-p-5 hawa-text-gray-500  peer-checked:hawa-border-primary peer-checked:hawa-text-primary dark:hawa-border-foreground/10 dark:hawa-bg-foreground/5 dark:hawa-text-gray-400  dark:peer-checked:hawa-text-primary",
                    opt.disabled
                      ? "hawa-opacity-50"
                      : "hawa-cursor-pointer hover:hawa-bg-foreground/10 hover:hawa-text-gray-600 dark:hover:hawa-bg-foreground/20 dark:hover:hawa-text-gray-300",
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
                        : "margin-right left-3px",
                    )}
                    key={i + 1}
                  >
                    <input
                      // TODO: spread the usual radio props
                      disabled={opt.disabled}
                      id={opt.value.toString()}
                      type="radio"
                      value={opt.value}
                      name={name}
                      onChange={() => handleChange(opt)}
                    />
                    <label
                      htmlFor={opt.value.toString()}
                      className={cn(
                        "hawa-text-sm hawa-font-medium  dark:hawa-text-white",
                        opt.disabled
                          ? "hawa-text-gray-400"
                          : "hawa-cursor-pointer hawa-text-gray-900",
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
                  : "hawa-h-0 hawa-opacity-0",
              )}
            >
              {props.helperText}
            </p>
          </div>
        );
    }
  },
);
