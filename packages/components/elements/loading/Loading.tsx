import React, { FC } from "react";

import { cn } from "@util/index";

type LoadingTypes = {
  /** Specifies the size of the loading component.*/
  size?: "button" | "xs" | "sm" | "normal" | "lg" | "xl";
  /** Determines the design of the loading animation.*/
  design?:
    | "spinner"
    | "dots-bounce"
    | "dots-pulse"
    | "pulse"
    | "spinner-dots"
    | "squircle"
    | "square"
    | "progress"
    | "orbit";
  /** Specifies the color of the loading component. By default it will inherit the value of --primary global CSS variable*/
  color?: string;
  classNames?: {
    container?: string;
    track?: string;
    car?: string;
  };
  themeMode?: "dark" | "light";
};

export const Loading: FC<LoadingTypes> = ({
  design = "spinner",
  size = "normal",
  themeMode = "light",
  classNames,
  color,
  ...props
}) => {
  let sizeStyles = {
    button: "hawa-h-4 hawa-w-4",
    xs: "hawa-h-1 hawa-w-1",
    sm: "hawa-h-6 hawa-w-6",
    normal: "hawa-h-8 hawa-w-8",
    lg: "hawa-h-14 hawa-w-14",
    xl: "hawa-h-24 hawa-w-24",
  };
  let progressSizes = {
    button: "hawa-h-1",
    xs: "hawa-h-1 hawa-w-1",
    sm: "hawa-h-6 hawa-w-6",
    normal: "",
    lg: "hawa-h-6",
    xl: "hawa-h-10 hawa-w-64",
  };

  let animationStyles: any = {
    pulse: "hawa-animate-in hawa-fade-in hawa-duration-1000",
    bounce: "hawa-animate-bounce",
  };
  switch (design.split("-")[0]) {
    case "dots":
      return (
        <div
          className={cn(
            "hawa-flex hawa-flex-row hawa-gap-2",
            classNames?.container,
          )}
        >
          <div
            className={cn(
              "hawa-animate-bounce hawa-rounded-full hawa-delay-100 hawa-repeat-infinite",
              size === "button" ? "hawa-h-2 hawa-w-2" : sizeStyles[size],
              animationStyles[design.split("-")[1]],
              color ? color : "hawa-bg-primary",
            )}
          ></div>
          <div
            className={cn(
              "hawa-animate-bounce hawa-rounded-full hawa-delay-200 hawa-repeat-infinite",
              size === "button" ? "hawa-h-2 hawa-w-2" : sizeStyles[size],
              animationStyles[design.split("-")[1]],
              color ? color : "hawa-bg-primary",
            )}
          ></div>
          <div
            className={cn(
              "hawa-animate-bounce hawa-rounded-full hawa-delay-300 hawa-repeat-infinite",
              size === "button" ? "hawa-h-2 hawa-w-2" : sizeStyles[size],
              animationStyles[design.split("-")[1]],
              color ? color : "hawa-bg-primary",
            )}
          ></div>
        </div>
      );
    case "square":
      return (
        <svg
          className={cn(
            "squircle-container",
            sizeStyles[size],
            classNames?.container,
          )}
          viewBox="0 0 35 35"
          height="35"
          width="35"
        >
          <rect
            className="squircle-track"
            x="2.5"
            y="2.5"
            fill="none"
            strokeWidth="5px"
            width="32.5"
            height="32.5"
          />
          <rect
            className="square-car"
            x="2.5"
            y="2.5"
            fill="none"
            strokeWidth="5px"
            width="32.5"
            height="32.5"
            pathLength="100"
          />
        </svg>
      );
    case "squircle":
      return (
        <svg
          x="0px"
          y="0px"
          viewBox="0 0 37 37"
          height="37"
          width="37"
          preserveAspectRatio="xMidYMid meet"
          className={cn(
            "squircle-container",
            sizeStyles[size],
            classNames?.container,
          )}
        >
          <path
            className={cn("squircle-track", classNames?.track)}
            fill="none"
            strokeWidth="5"
            pathLength="100"
            d="M0.37 18.5 C0.37 5.772 5.772 0.37 18.5 0.37 S36.63 5.772 36.63 18.5 S31.228 36.63 18.5 36.63 S0.37 31.228 0.37 18.5"
          ></path>
          <path
            className={cn("squircle-car", classNames?.car)}
            fill="none"
            strokeWidth="5"
            pathLength="100"
            d="M0.37 18.5 C0.37 5.772 5.772 0.37 18.5 0.37 S36.63 5.772 36.63 18.5 S31.228 36.63 18.5 36.63 S0.37 31.228 0.37 18.5"
          ></path>
        </svg>
      );
    case "progress":
      return (
        <div
          className={cn(
            "progress-loading after:hawa-rounded hawa-rounded",
            progressSizes[size],
            classNames?.container,
          )}
        ></div>
      );
    case "orbit":
      return (
        <div className={cn("orbit-container", classNames?.container)}></div>
      );

    default:
      return (
        <svg
          viewBox="0 0 40 40"
          height="40"
          width="40"
          className={cn(
            "circle-container",
            sizeStyles[size],
            classNames?.container,
          )}
        >
          <circle
            className={cn(
              "circle-track",
              {
                "hawa-stroke-primary-foreground": themeMode === "dark",
                "hawa-stroke-primary": themeMode === "light",
              },
              classNames?.track,
            )}
            cx="20"
            cy="20"
            r="17.5"
            fill="none"
            strokeWidth="5px"
            pathLength="100"
          />
          <circle
            className={cn(
              "circle-car",
              {
                "hawa-stroke-primary-foreground": themeMode === "dark",
                "hawa-stroke-primary": themeMode === "light",
              },
              classNames?.car,
            )}
            cx="20"
            cy="20"
            r="17.5"
            fill="none"
            pathLength="100"
            strokeWidth="5px"
          />
        </svg>
      );
  }
};
