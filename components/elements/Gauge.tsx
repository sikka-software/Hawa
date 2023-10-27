import React from "react";
import { cn } from "../util";

type GaugeType = {
  value: number; // Value between 0 and 100
  maxValue: number; // Value between 0 and 100
  design?: "full-circle" | "half-circle";
};

export const Gauge: React.FC<GaugeType> = ({
  value = 0,
  maxValue = 100,
  design = "half-circle",
}) => {
  const radius = 16;
  const fullCircumference = 2 * Math.PI * radius; // Full circle circumference
  const halfCircumference = Math.PI * radius ; // Half circle circumference, updated
  const percentage = value / maxValue;
  const fullOffset = fullCircumference - percentage * fullCircumference;
  const halfOffset = halfCircumference - percentage * halfCircumference; // Updated offset for half-circle
  const strokeDasharray = percentage * halfCircumference;
  const strokeDashoffset = halfCircumference * (1 - percentage);

  const FullCircle = () => (
    <svg className={"hawa-h-36 hawa-w-36"} viewBox="0 0 36 36">
      <circle
        cx="18"
        cy="18"
        r={radius}
        strokeWidth="4"
        stroke="lightgray"
        fill="none"
      />
      <circle
        cx="18"
        cy="18"
        r={radius}
        strokeWidth="4"
        stroke="#00f"
        fill="none"
        strokeDasharray={fullCircumference}
        strokeDashoffset={fullOffset}
        style={{
          transition: "stroke-dashoffset 0.35s",
          transform: "rotate(180deg)",
          transformOrigin: "50% 50%",
        }}
      />
      <text
        x="50%"
        y="50%"
        alignmentBaseline="middle"
        textAnchor="middle"
        fontSize="10"
        fill="#000"
      >
        {value}
      </text>
    </svg>
  );

  const HalfCircle = () => (
    <svg className={"hawa-h-36 hawa-w-36"} viewBox="0 0 36 36">
    <path
        d="M 4,18 A 14,14 0 0,1 32,18"
        strokeWidth="4"
        stroke="lightgray"
        fill="none"
    />
    <path
        d="M 4,18 A 14,14 0 0,1 32,18"
        strokeWidth="4"
        stroke="#00f"
        fill="none"
        strokeDasharray={`${strokeDasharray}`}
        strokeDashoffset={`${strokeDashoffset}`}
        style={{
            transition: "stroke-dashoffset 0.35s",
            transformOrigin: "50% 50%",
        }}
    />
    <text
        x="50%"
        y="45%"
        alignmentBaseline="middle"
        textAnchor="middle"
        fontSize="8"
        fill="#000"
    >
        {value}
    </text>
</svg>
  );
  return (
    <div className="hawa-flex hawa-flex-row hawa-gap-x-3">
      <div aria-label="Gauge" role="status">
        {design === "full-circle" ? <FullCircle /> : <HalfCircle />}
      </div>
    </div>
  );
};
