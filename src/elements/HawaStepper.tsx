import React from "react"
import clsx from "clsx"
import { FaCheck } from "react-icons/fa"

type THawaTimeline = {
  steps: any[any]
  currentStep: any
  orientation: "vertical" | "horizontal"
}

export const HawaStepper: React.FunctionComponent<THawaTimeline> = ({
  orientation = "horizontal",
  ...props
}) => {
  let orientationStyles = {
    vertical: "flex flex-col items-start w-fit",
    horizontal: "flex flex-row",
  }
  let lineStyles = {
    vertical: "w-1 h-32 rounded bg-red-200 ml-6 my-2",
    horizontal: "h-0.5 flex w-full rounded bg-red-200",
  }
  return (
    <div
      className={clsx(
        orientationStyles[orientation],
        " flex-wrap justify-start gap-4"
      )}
    >
      {props.steps.map((step: any, i: number) => {
        return (
          <div
            key={i}
            className="my-2 flex w-auto flex-row flex-wrap justify-start  "
          >
            <div
              className={
                orientation === "vertical"
                  ? "flex w-full flex-row items-center"
                  : i + 1 === props.steps.length
                  ? "flex w-full flex-row items-center justify-start gap-2"
                  : "flex  flex-row items-center justify-start gap-2 after:mx-2 after:hidden  after:h-1 after:w-10 after:border-b  after:border-gray-200   dark:after:border-gray-700 sm:after:inline-block sm:after:content-[''] md:w-full xl:after:mx-10"
              }
            >
              <div className="flex flex-row gap-2  ">
                {/* Icon */}
                <div
                  className={clsx(
                    "ring-buttonPrimary-200 flex h-6 w-6 min-w-[24px] items-center  justify-center rounded  ring-2 ring-offset-2",
                    i + 1 <= props.currentStep
                      ? "bg-buttonPrimary-500 text-white"
                      : "bg-buttonPrimary-200"
                  )}
                >
                  {i + 1 <= props.currentStep ? (
                    <FaCheck fontSize={11} />
                  ) : (
                    i + 1
                  )}
                </div>
                {/* Text */}
                <div className="whitespace-nowrap">{step}</div>
              </div>
            </div>
          </div>
        )
      })}
    </div>
  )
}

const TimelineStep = (props) => {
  let defaultStyles = {
    vertical: "",
    horizontal: "",
  }
  return (
    <div
      className={
        props.orientation === "vertical"
          ? "flex w-full flex-row items-center"
          : props.stepNumber === props.steps
          ? "flex items-center"
          : "after:border-1 flex items-center after:mx-6 after:hidden after:h-1 after:w-10 after:border-b after:border-gray-200  dark:after:border-gray-700 sm:after:inline-block sm:after:content-[''] md:w-full xl:after:mx-10"
      }
    >
      <div
        className={clsx(
          "ring-buttonPrimary-200 m-2 mr-4 flex h-6 w-6 items-center justify-center rounded ring-2 ring-offset-2",
          props.current
            ? "bg-buttonPrimary-500 text-white"
            : "bg-buttonPrimary-200"
        )}
      >
        {props.current ? <FaCheck fontSize={11} /> : props.stepNumber}
      </div>
      <div className="whitespace-nowrap">{props.stepName}</div>
    </div>
  )
}
