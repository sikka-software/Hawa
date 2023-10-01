import React, { FC } from "react";
import clsx from "clsx";

type LoadingTypes = {
  /** Specifies the size of the loading component.*/
  size?: "button" | "xs" | "sm" | "normal" | "lg" | "xl";
  /** Determines the design of the loading animation.*/
  design?: "spinner" | "dots-bounce" | "dots-pulse" | "pulse" | "spinner-dots";
  /** Specifies the color of the loading component. By default it will inherit the value of <span className="inline-code">--primary</span> global CSS variable*/
  color?: string;
};

export const Loading: FC<LoadingTypes> = ({
  design = "spinner",
  size = "sm",
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

  let animationStyles: any = {
    pulse: "hawa-animate-in hawa-fade-in hawa-duration-1000",
    bounce: "hawa-animate-bounce",
  };
  switch (design.split("-")[0]) {
    case "dots":
      return (
        <div className="hawa-flex hawa-flex-row hawa-gap-2">
          <div
            className={clsx(
              "hawa-animate-bounce hawa-rounded-full hawa-delay-100 hawa-repeat-infinite",
              size === "button" ? "hawa-h-2 hawa-w-2" : sizeStyles[size],
              animationStyles[design.split("-")[1]],
              color ? color : "hawa-bg-primary"
            )}
          ></div>
          <div
            className={clsx(
              "hawa-animate-bounce hawa-rounded-full hawa-delay-200 hawa-repeat-infinite",
              size === "button" ? "hawa-h-2 hawa-w-2" : sizeStyles[size],
              animationStyles[design.split("-")[1]],
              color ? color : "hawa-bg-primary"
            )}
          ></div>
          <div
            className={clsx(
              "hawa-animate-bounce hawa-rounded-full hawa-delay-300 hawa-repeat-infinite",
              size === "button" ? "hawa-h-2 hawa-w-2" : sizeStyles[size],
              animationStyles[design.split("-")[1]],
              color ? color : "hawa-bg-primary"
            )}
          ></div>
        </div>
      );

    default:
      return (
        <div className="hawa-flex hawa-flex-row hawa-gap-x-3">
          <div aria-label="Loading..." role="status">
            <svg
              className={clsx(sizeStyles[size], "hawa-animate-spin")}
              viewBox="3 3 18 18"
            >
              <path
                className="hawa-fill-primary/20"
                d="M12 5C8.13401 5 5 8.13401 5 12C5 15.866 8.13401 19 12 19C15.866 19 19 15.866 19 12C19 8.13401 15.866 5 12 5ZM3 12C3 7.02944 7.02944 3 12 3C16.9706 3 21 7.02944 21 12C21 16.9706 16.9706 21 12 21C7.02944 21 3 16.9706 3 12Z"
              ></path>
              <path
                className={color ? color : "hawa-fill-primary"}
                d="M16.9497 7.05015C14.2161 4.31648 9.78392 4.31648 7.05025 7.05015C6.65973 7.44067 6.02656 7.44067 5.63604 7.05015C5.24551 6.65962 5.24551 6.02646 5.63604 5.63593C9.15076 2.12121 14.8492 2.12121 18.364 5.63593C18.7545 6.02646 18.7545 6.65962 18.364 7.05015C17.9734 7.44067 17.3403 7.44067 16.9497 7.05015Z"
              ></path>
            </svg>
          </div>
        </div>
      );
  }
};
