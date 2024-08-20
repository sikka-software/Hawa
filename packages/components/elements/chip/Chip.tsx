import React from "react";

import { cn } from "@util/index";

import { RadiusType } from "@_types/commonTypes";

export type ChipColors =
  | "green"
  | "blue"
  | "red"
  | "yellow"
  | "orange"
  | "purple"
  | "cyan"
  | "hyper"
  | "oceanic";

export type ChipTypes = React.HTMLAttributes<HTMLSpanElement> & {
  /** The text inside the chip */
  label: string;
  /** The small icon before the chip label  */
  icon?: JSX.Element;
  /** The color of the chip, must be a tailwind color */
  color?: ChipColors;
  /** The size of the chip */
  size?: "small" | "normal" | "large";
  /** Enable/Disable the dot before the label of the chip */
  dot?: boolean;
  /** Red/Green dot next to the label of the chip indicating online/offline or available/unavailable */
  dotStatus?: "available" | "unavailable" | "none";
  radius?: RadiusType;
};

export const Chip = React.forwardRef<HTMLSpanElement, ChipTypes>(
  (
    { label, size = "normal", icon, color, radius = "inherit", dot, dotStatus = "none", ...rest },
    ref,
  ) => {
    let defaultStyles =
      "hawa-flex hawa-flex-row hawa-w-fit hawa-gap-1 hawa-items-center  hawa-px-2.5 hawa-py-1  hawa-font-bold ";
    let radiusStyles = {
      inherit: " hawa-rounded",
      full: "hawa-rounded-full",
      none: "hawa-rounded-none",
    };
    let sizeStyles = {
      small: "hawa-h-[15px] hawa-leading-4 hawa-px-0 hawa-py-0 hawa-text-[9px] hawa-gap-0.5 ",
      normal: "hawa-h-fit hawa-text-xs",
      large: "hawa-text-base",
    };
    let dotStyles = {
      small: "hawa-flex hawa-h-1 hawa-w-1 hawa-rounded-full",
      normal: "hawa-flex hawa-h-2 hawa-w-2 hawa-rounded-full",
      large: "hawa-flex hawa-h-3 hawa-w-3 hawa-rounded-full",
    };
    let dotStatusStyles = {
      none: "hawa-bg-gray-500 dark:hawa-bg-gray-800",
      available: "hawa-bg-green-500",
      unavailable: "hawa-bg-red-500",
    };
    let colorStyles: any = {
      green:
        "hawa-bg-green-200 hawa-text-green-700 dark:hawa-bg-green-700 dark:hawa-text-green-200",
      blue: "hawa-bg-blue-200 hawa-text-blue-700 dark:hawa-bg-blue-700 dark:hawa-text-blue-100",
      red: "hawa-bg-red-200 hawa-text-red-700 dark:hawa-bg-red-700 dark:hawa-text-red-100",
      yellow:
        "hawa-bg-yellow-200 hawa-text-yellow-700 dark:hawa-bg-yellow-600 dark:hawa-text-black",
      orange:
        "hawa-bg-orange-200 hawa-text-orange-700 dark:hawa-bg-orange-700 dark:hawa-text-orange-100",
      purple:
        "hawa-bg-purple-200 hawa-text-purple-700 dark:hawa-bg-purple-700 dark:hawa-text-purple-100",
      cyan: "hawa-bg-cyan-200 hawa-text-cyan-700 dark:hawa-bg-cyan-700 dark:hawa-text-cyan-100",
      hyper:
        "hawa-text-white dark:hawa-text-black hawa-bg-gradient-to-tl hawa-from-pink-500 hawa-via-red-500 hawa-to-yellow-500 ",
      oceanic:
        "hawa-text-white dark:hawa-text-black hawa-bg-gradient-to-bl hawa-from-green-300 hawa-via-blue-500 hawa-to-purple-600",
    };
    if (label) {
      return (
        <span
          {...rest}
          ref={ref}
          className={cn(
            defaultStyles,
            sizeStyles[size],
            radiusStyles[radius],
            color ? colorStyles[color] : "hawa-border hawa-bg-none",
            rest.className,
          )}
        >
          {dot && <span className={cn(dotStyles[size], dotStatusStyles[dotStatus])}></span>}
          {icon && icon}
          {label}
        </span>
      );
    } else {
      return (
        <span
          {...rest}
          ref={ref}
          className={cn(
            "hawa-h-2 hawa-w-2 hawa-rounded-full",
            color ? colorStyles[color] : "hawa-border hawa-bg-none",
          )}
        ></span>
      );
    }
  },
);
