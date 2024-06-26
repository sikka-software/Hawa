import React from "react";

import { cn } from "@util/index";

export const CheckMark = ({ size = "default", className }: any) => {
  let sizeStyles: any = {
    default: "hawa-h-5 hawa-w-5",
    sm: "hawa-h-3 hawa-w-3",
  };
  return (
    <svg
      className={cn(sizeStyles[size], className)}
      aria-hidden="true"
      fill="currentColor"
      viewBox="0 0 20 20"
    >
      <path
        fillRule="evenodd"
        d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
        clipRule="evenodd"
      ></path>
    </svg>
  );
};

export const UncheckMark = ({ size = "default", className }: any) => {
  let sizeStyles: any = {
    default: "hawa-h-5 hawa-w-5",
    sm: "hawa-h-3 hawa-w-3",
  };

  return (
    <svg
      className={cn(sizeStyles[size], className)}
      aria-hidden="true"
      fill="currentColor"
      viewBox="0 0 20 20"
    >
      <path
        fillRule="evenodd"
        d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
        clipRule="evenodd"
      ></path>
    </svg>
  );
};
export const MenuIcon = () => (
  <svg
    aria-label="Menu Button"
    stroke="currentColor"
    fill="currentColor"
    strokeWidth={0}
    viewBox="0 0 20 20"
    aria-hidden="true"
    height="1.6em"
    width="1.6em"
  >
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
    ></path>
  </svg>
);
