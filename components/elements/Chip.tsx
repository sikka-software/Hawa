import React, { FC } from "react";
import clsx from "clsx";

type TChipTypes = {
  /** The text inside the chip */
  label: string;
  /** The small icon before the chip label  */
  icon?: JSX.Element;
  /** The color of the chip, must be a tailwind color */
  color?: string;
  /** The size of the chip */
  size?: "small" | "normal" | "large";
  /** Enable/Disable the dot before the label of the chip */
  dot?: boolean;
  /** Red/Green dot next to the label of the chip indicating online/offline or available/unavailable */
  dotType?: "available" | "unavailable";
  variant?: "default" | "outline";
};

export const Chip: FC<TChipTypes> = ({
  label,
  size = "normal",
  icon,
  color,
  dot,
  dotType = "available",
}) => {
  let defaultStyles =
    "hawa-flex hawa-flex-row hawa-w-fit hawa-gap-1 hawa-items-center hawa-rounded  hawa-px-2.5 hawa-py-0.5  hawa-font-bold hawa-text-blue-800 hawa-bg-blue-200 dark:hawa-text-blue-800";
  let sizeStyles = {
    small:
      "hawa-h-full hawa-leading-4 hawa-px-1 hawa-py-0 hawa-text-[9px] hawa-gap-0.5 ",
    normal: "hawa-h-fit hawa-text-xs",
    large: "",
  };

  let dotStyles = {
    small: "hawa-flex hawa-h-1 hawa-w-1 hawa-rounded-full",
    normal: "hawa-flex hawa-h-2 hawa-w-2 hawa-rounded-full",
    large: "hawa-flex hawa-h-3 hawa-w-3 hawa-rounded-full",
  };
  let dotTypeStyles = {
    available: "hawa-bg-green-500",
    unavailable: "hawa-bg-red-500",
  };
  return (
    <span
      className={clsx(
        defaultStyles,
        sizeStyles[size],
        color
          ? `hawa-bg-${color}-100 hawa-text-${color}-500`
          : "hawa-bg-layoutPrimary-500"
      )}
    >
      {dot && (
        <span className={clsx(dotStyles[size], dotTypeStyles[dotType])}></span>
      )}
      {icon && icon}
      {label}
    </span>
  );
};
