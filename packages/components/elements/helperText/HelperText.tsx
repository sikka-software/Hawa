import React from "react";

import { cn } from "@util/index";

export const HelperText = ({
  helperText,
  size = "xs",
}: {
  helperText?: any;
  size?: "xs" | "sm" | "md" | "lg" | "xl";
}) => {
  let sizes = {
    xs: "hawa-text-xs hawa-h-4",
    sm: "hawa-text-sm",
    md: "hawa-text-md",
    lg: "hawa-text-lg",
    xl: "hawa-text-xl",
  };

  return (
    <p
      className={cn(
        "hawa-my-0 hawa-text-start hawa-text-helper-color hawa-transition-all",
        helperText ? "hawa-opacity-100" : "hawa-h-0 hawa-opacity-0",
        sizes[size],
      )}
    >
      {helperText}
    </p>
  );
};
