import React from "react"
import clsx from "clsx"

type THawaTimeline = {
  steps: any[any]
  currentStep: any
  orientation: "vertical" | "horizontal"
}

export const HawaTimeline: React.FunctionComponent<THawaTimeline> = ({
  orientation = "horizontal",
  ...props
}) => {
  let orientationStyles = {
    vertical: "flex flex-col items-start w-fit",
    horizontal: "flex flex-row items-baseline",
  }
  let lineStyles = {
    vertical: {
      default: "w-1 h-32 rounded bg-buttonPrimary-500 ml-6 my-2",
      selected: "w-1  h-32 rounded bg-buttonPrimary-500 ml-6 my-2",
    },
    horizontal: {
      default: "h-0.5 w-full rounded bg-buttonPrimary-500",
      selected: "h-0.5 w-full rounded bg-buttonPrimary-500",
    },
  }
  return (
    <div className={clsx(orientationStyles[orientation])}>
      {props.steps.map((step: any, i: number) => {
        if (i == 0) {
          return (
            <TimelineStep
              orientation={orientation}
              current={i + 1 <= props.currentStep}
              stepName={step}
              stepNumber={i + 1}
            />
          )
        } else {
          return (
            <>
              <div
                className={clsx(
                  i == props.currentStep
                    ? lineStyles[orientation].default
                    : lineStyles[orientation].selected
                )}
              ></div>
              <TimelineStep
                orientation={orientation}
                current={i + 1 <= props.currentStep}
                stepName={step}
                stepNumber={i + 1}
              />
            </>
          )
        }
      })}
    </div>
  )
}

const TimelineStep = (props) => (
  <div
    className={
      props.orientation === "vertical"
        ? "flex w-full flex-row items-center"
        : "flex w-fit flex-col items-center justify-center p-2"
    }
  >
    <div
      className={clsx(
        "ring-buttonPrimary-200 m-2 mr-4 flex h-10 w-10 items-center justify-center rounded ring-2 ring-offset-2",
        props.current
          ? "bg-buttonPrimary-500 text-white"
          : "bg-buttonPrimary-200"
      )}
    >
      {props.stepNumber}
    </div>
    <div className="whitespace-nowrap">{props.stepName}</div>
  </div>
)
