import React, { FC } from "react";
import clsx from "clsx";

export type TChipTypes = {
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
};

export const Chip: FC<TChipTypes> = ({
  label,
  size = "normal",
  icon,
  color,
  dotType,
}) => {
  let defaultStyles =
    "hawa-flex hawa-flex-row hawa-w-fit hawa-gap-1 hawa-items-center hawa-rounded  hawa-px-2.5 hawa-py-1  hawa-font-bold ";
  let sizeStyles = {
    small:
      "hawa-h-[15px] hawa-leading-4 hawa-px-0 hawa-py-0 hawa-text-[9px] hawa-gap-0.5 ",
    normal: "hawa-h-fit hawa-text-xs",
    large: "hawa-text-base",
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
  let colorStyles: any = {
    green: "hawa-bg-green-100 hawa-text-green-500",
    blue: "hawa-bg-blue-100 hawa-text-blue-500",
    red: "hawa-bg-red-100 hawa-text-red-500",
    yellow: "hawa-bg-yellow-100 hawa-text-yellow-500",
    orange: "hawa-bg-orange-100 hawa-text-orange-500",
    purple: "hawa-bg-purple-100 hawa-text-purple-500",
    cyan: "hawa-bg-cyan-100 hawa-text-cyan-500",
  };
  return (
    <span
      className={clsx(
        defaultStyles,
        sizeStyles[size],
        color ? colorStyles[color] : "hawa-border hawa-bg-none"
      )}
    >
      {dotType && (
        <span className={clsx(dotStyles[size], dotTypeStyles[dotType])}></span>
      )}
      {icon && icon}
      {label}
    </span>
  );
};
