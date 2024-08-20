import React from "react";

import { cn } from "@util/index";

type Size = "xs" | "sm" | "md" | "lg" | "xl";

interface ProgressCircleProps extends React.HTMLAttributes<HTMLDivElement> {
  value: number;
  size?: Size;
  color?: any;
  showAnimation?: boolean;
  tooltip?: string;
  radius?: number;
  strokeWidth?: number;
  children?: React.ReactNode;
}

const size2config: Record<Size, { strokeWidth: number; radius: number }> = {
  xs: { radius: 15, strokeWidth: 3 },
  sm: { radius: 19, strokeWidth: 4 },
  md: { radius: 32, strokeWidth: 6 },
  lg: { radius: 52, strokeWidth: 8 },
  xl: { radius: 80, strokeWidth: 10 },
};

function getLimitedValue(input: number | undefined) {
  if (input === undefined) {
    return 0;
  } else if (input > 100) {
    return 100;
  } else {
    return input;
  }
}
export const ProgressCircle = React.forwardRef<HTMLDivElement, ProgressCircleProps>(
  (props, ref) => {
    const {
      value: inputValue,
      size = "md",
      className,
      showAnimation = true,
      color,
      tooltip,
      radius: inputRadius,
      strokeWidth: inputStrokeWidth,
      children,
      ...other
    } = props;

    const value = getLimitedValue(inputValue);
    const radius = inputRadius ?? size2config[size].radius;
    const strokeWidth = inputStrokeWidth ?? size2config[size].strokeWidth;
    const normalizedRadius = radius - strokeWidth / 2;
    const circumference = normalizedRadius * 2 * Math.PI;
    const strokeDashoffset = (value / 100) * circumference;
    const offset = circumference - strokeDashoffset;

    return (
      <>
        <div
          ref={ref}
          className={cn("hawa-flex hawa-flex-col hawa-items-center hawa-justify-center", className)}
        >
          <svg
            width={radius * 2}
            height={radius * 2}
            viewBox={`0 0 ${radius * 2} ${radius * 2}`}
            className="hawa-rotate-180 hawa-transform"
          >
            <circle
              r={normalizedRadius}
              cx={radius}
              cy={radius}
              strokeWidth={strokeWidth}
              fill="transparent"
              stroke=""
              strokeLinecap="round"
              className={cn("hawa-transition-colors hawa-ease-linear", "hawa-stroke-primary/20")}
            />
            {value > 0 ? (
              <circle
                r={normalizedRadius}
                cx={radius}
                cy={radius}
                strokeWidth={strokeWidth}
                strokeDasharray={circumference + " " + circumference}
                strokeDashoffset={offset}
                fill="transparent"
                stroke=""
                strokeLinecap="round"
                className={cn(
                  "hawa-transition-colors hawa-ease-linear",
                  "hawa-stroke-primary",
                  showAnimation ? "hawa-transition-all hawa-duration-300 hawa-ease-in-out" : "",
                )}
              />
            ) : null}
          </svg>
          <div className={cn("hawa-absolute hawa-flex")}>{children}</div>
        </div>
      </>
    );
  },
);

ProgressCircle.displayName = "ProgressCircle";
