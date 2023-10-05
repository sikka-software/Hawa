import React from "react";
import { Button } from "./Button";
import { cn } from "../util";

type SortButtonProps = {
  onSort: () => void;
  label: string;
  condensed?: boolean;
};

export const SortButton: React.FC<SortButtonProps> = (props) => {
  return (
    <Button
      variant="ghost"
      className={cn(
        "hawa-flex hawa-w-full hawa-flex-row hawa-justify-start hawa-gap-2 hawa-text-start hawa-items-start hawa-bg-green-500",
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
        className={props.condensed ? "hawa-h-3 hawa-w-3" : "hawa-h-4 hawa-w-4"}
      >
        <path d="m21 16-4 4-4-4" />
        <path d="M17 20V4" />
        <path d="m3 8 4-4 4 4" />
        <path d="M7 4v16" />
      </svg>
    </Button>
  );
};
