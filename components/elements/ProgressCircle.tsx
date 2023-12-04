import React from "react";

import { cn } from "../util";

type GaugeType = {
  value: number; // Value between 0 and 100
  maxValue: number; // Value between 0 and 100
  design?: "full-circle" | "half-circle";
};

type Size = "xs" | "sm" | "md" | "lg" | "xl";

interface ProgressCircleProps extends React.HTMLAttributes<HTMLDivElement> {
  value?: number;
  size?: Size;
  color?: any;
  showAnimation?: boolean;
  tooltip?: string;
  radius?: number;
  strokeWidth?: number;
  children?: React.ReactNode;
}

const size2config: Record<Size, { strokeWidth: number; radius: number }> = {
  xs: {
    radius: 15,
    strokeWidth: 3
  },
  sm: {
    radius: 19,
    strokeWidth: 4
  },
  md: {
    radius: 32,
    strokeWidth: 6
  },
  lg: {
    radius: 52,
    strokeWidth: 8
  },
  xl: {
    radius: 80,
    strokeWidth: 10
  }
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
export const ProgressCircle = React.forwardRef<
  HTMLDivElement,
  ProgressCircleProps
>((props, ref) => {
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
        className={cn(
          "hawa-flex hawa-flex-col hawa-items-center hawa-justify-center",
          className
        )}
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
            className={cn(
              "hawa-transition-colors hawa-ease-linear",
              " hawa-stroke-primary/20"
            )}
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
                showAnimation
                  ? "hawa-transition-all hawa-duration-300 hawa-ease-in-out"
                  : ""
              )}
            />
          ) : null}
        </svg>
        <div className={cn("hawa-absolute hawa-flex")}>{children}</div>
      </div>
    </>
  );
});

ProgressCircle.displayName = "ProgressCircle";

// export const Gauge: React.FC<GaugeType> = ({
//   value = 0,
//   maxValue = 100,
//   children,
//   design = "full-circle",
// }) => {
//   // const radius = 16;
//   // const fullCircumference = 2 * Math.PI * radius; // Full circle circumference
//   // const halfCircumference = Math.PI * radius; // Half circle circumference, updated
//   // const percentage = value / maxValue;
//   // const fullOffset = fullCircumference - percentage * fullCircumference;
//   // const halfOffset = halfCircumference - percentage * halfCircumference; // Updated offset for half-circle
//   // const strokeDasharray = percentage * halfCircumference;
//   // const strokeDashoffset = halfCircumference * (1 - percentage);

//   // const FullCircle = () => (
//   //   <svg className={"hawa-h-36 hawa-w-36"} viewBox="0 0 36 36">
//   //     <circle
//   //       cx="18"
//   //       cy="18"
//   //       r={radius}
//   //       strokeWidth="2"
//   //       stroke="lightgray"
//   //       fill="none"
//   //     />
//   //     <circle
//   //       cx="18"
//   //       cy="18"
//   //       r={radius}
//   //       strokeWidth="2"
//   //       stroke="#009"
//   //       fill="none"
//   //       strokeLinecap="round"
//   //       strokeDasharray={fullCircumference}
//   //       strokeDashoffset={fullOffset}
//   //       style={{
//   //         transition: "stroke-dashoffset 0.35s",
//   //         transform: "rotate(180deg)",
//   //         transformOrigin: "50% 50%",
//   //       }}
//   //     />
//   //     <text
//   //       x="50%"
//   //       y="50%"
//   //       alignmentBaseline="middle"
//   //       textAnchor="middle"
//   //       fontSize="10"
//   //       fill="#000"
//   //     >
//   //       {value}
//   //     </text>
//   //   </svg>
//   // );
//   // const HalfCircle = () => (
//   //   <svg className={"hawa-h-36 hawa-w-36"} viewBox="0 0 36 36">
//   //     <path
//   //       d="M 4,18 A 14,14 0 0,1 32,18"
//   //       strokeWidth="4"
//   //       stroke="lightgray"
//   //       fill="none"
//   //     />
//   //     <path
//   //       d="M 4,18 A 14,14 0 0,1 32,18"
//   //       strokeWidth="4"
//   //       stroke="#00f"
//   //       fill="none"
//   //       // strokeDasharray={`${strokeDasharray}`}
//   //       // strokeDashoffset={`${strokeDashoffset}`}
//   //       strokeDasharray={50}
//   //       strokeDashoffset={50}
//   //       style={{
//   //         transition: "stroke-dashoffset 0.35s",
//   //         transformOrigin: "50% 50%",
//   //       }}
//   //     />
//   //     <text
//   //       x="50%"
//   //       y="45%"
//   //       alignmentBaseline="middle"
//   //       textAnchor="middle"
//   //       fontSize="8"
//   //       fill="#000"
//   //     >
//   //       {value}
//   //     </text>
//   //   </svg>
//   // );
//   return (
//     <div className="hawa-flex hawa-flex-row hawa-gap-x-3">
//       <div aria-label="Gauge" role="status">
//         {/* {design === "full-circle" ? <FullCircle /> : <HalfCircle />} */}
//         <AlmostFullCircle value={value} size="lg">
//           {children}
//         </AlmostFullCircle>
//       </div>
//     </div>
//   );
// };
