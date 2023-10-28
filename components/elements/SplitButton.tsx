import * as React from "react";
import { cva, type VariantProps } from "class-variance-authority";

import { cn } from "../util";
import { Loading } from "./Loading";
import { Button } from "./Button";

const SplitButton = (props: any) => (
  <div className=" hawa-h-fit hawa-flex hawa-flex-row hawa-justify-center ">
    <Button variant={props.variant} className="hawa-rounded-r-none">
      something
    </Button>
    <Button
      asChild
      variant={props.variant}
      size={"icon"}
      className={
        "hawa-rounded-l-none hawa-h-10 hawa-w-fit hawa-px-1 hawa-border-l-0"
      }
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="18"
        height="18"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path d="m6 9 6 6 6-6" />
      </svg>
    </Button>
  </div>
);
SplitButton.displayName = "SplitButton";

export { SplitButton };
