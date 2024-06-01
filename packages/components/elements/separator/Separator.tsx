import * as React from "react";

import { cn } from "@util/index";

import { OrientationType } from "@_types/commonTypes";

type SeparatorProps = {
  className?: string;
  orientation?: OrientationType;
};

const Separator: React.FC<SeparatorProps> = ({
  className,
  orientation = "horizontal",
  ...props
}) => (
  <div
    className={cn(
      "hawa-shrink-0 hawa-bg-border",
      orientation === "horizontal"
        ? "hawa-h-[1px] hawa-w-full"
        : "hawa-h-full hawa-w-[1px]",
      className,
    )}
    {...props}
  />
);

export { Separator };
