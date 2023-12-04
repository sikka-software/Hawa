import React from "react";

import { cn } from "../util";
import { Button } from "./Button";

type SortButtonProps = {
  onSort: () => void;
  label: string;
  condensed?: boolean;
};

export const SortButton: React.FC<SortButtonProps> = (props) => {
  return (
    <Button
      variant="ghost"
      centered={false}
      className={cn(
        "hawa-flex hawa-w-full hawa-flex-row hawa-items-start hawa-justify-start hawa-gap-2 hawa-text-start",
        props.condensed && "hawa-h-6"
      )}
      onClick={props.onSort}
    >
      {props.label}
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        className={props.condensed ? "hawa-h-3 hawa-w-3" : "hawa-icon"}
      >
        <path d="m21 16-4 4-4-4" />
        <path d="M17 20V4" />
        <path d="m3 8 4-4 4 4" />
        <path d="M7 4v16" />
      </svg>
    </Button>
  );
};
