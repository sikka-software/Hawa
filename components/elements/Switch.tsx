import * as React from "react";
import * as SwitchPrimitives from "@radix-ui/react-switch";
import { cn } from "../util";

let rootSize = {
  default: "hawa-h-[25px] hawa-w-[42px]",
  sm: "hawa-h-[20px] hawa-w-[37px]",
  lg: "hawa-h-[30px] hawa-w-[47px]",
};
let thumbSize = {
  default: "hawa-h-[21px] hawa-w-[21px]",
  sm: "hawa-h-[16px] hawa-w-[16px]",
  lg: "hawa-h-[26px] hawa-w-[26px]",
};

interface SwitchProps
  extends React.ComponentPropsWithoutRef<typeof SwitchPrimitives.Root> {
  size?: "default" | "sm" | "lg"; // Define the possible sizes here
  label?: string;
  roundedness?: "none" | "full" | "inherit";
}

export const Switch = React.forwardRef<
  React.ElementRef<typeof SwitchPrimitives.Root>,
  SwitchProps
>(
  (
    { className, size = "default", roundedness = "inherit", label, ...props },
    ref
  ) => {
    const [parentDirection, setParentDirection] = React.useState<string | null>(
      null
    );
    //   const parentRef = React.useRef(null);
    const parentRef = React.useRef<HTMLDivElement>(null);

    React.useEffect(() => {
      const parentNode = parentRef.current?.parentNode as HTMLElement | null;
      if (parentNode) {
        const dir = window.getComputedStyle(parentNode).direction;
        setParentDirection(dir);
      }
      // if (parentRef.current && parentRef.current?.parentNode) {
      //   const dir = window.getComputedStyle(
      //     parentRef.current?.parentNode
      //   ).direction;
      //   setParentDirection(dir);
      // }
    });

    const rootRoundednessStyles = {
      none: "hawa-rounded-none",
      full: "hawa-rounded-full",
      inherit: "hawa-rounded",
    };
    const thumbRoundednessStyles = {
      none: "hawa-rounded-none",
      full: "hawa-rounded-full",
      inherit: "hawa-rounded-inner",
    };
    return (
      <div
        className="hawa-flex hawa-flex-row hawa-items-center"
        ref={parentRef}
      >
        <SwitchPrimitives.Root
          className={cn(
            "hawa-relative  hawa-cursor-pointer hawa-rounded hawa-bg-primary/20 hawa-outline-none data-[state=checked]:hawa-bg-primary",
            rootRoundednessStyles[roundedness],
            className,
            rootSize[size]
          )}
          {...props}
          ref={ref}
        >
          <SwitchPrimitives.Thumb
            className={cn(
              thumbSize[size],
              "hawa-block hawa-rounded hawa-bg-white hawa-transition-transform  hawa-duration-100 hawa-will-change-transform data-[state=checked]:hawa-bg-primary-foreground  dark:hawa-bg-background",
              thumbRoundednessStyles[roundedness],
              parentDirection === "rtl"
                ? "hawa--translate-x-0.5 data-[state=checked]:hawa--translate-x-[19px]"
                : "hawa-translate-x-0.5 data-[state=checked]:hawa-translate-x-[19px]"
            )}
          />
        </SwitchPrimitives.Root>
        {label && (
          <span className="hawa-mx-2 hawa-text-sm hawa-font-medium hawa-text-gray-900 dark:hawa-text-gray-300">
            {label}
          </span>
        )}
      </div>
    );
  }
);
Switch.displayName = SwitchPrimitives.Root.displayName;
