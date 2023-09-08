import React, { FC } from "react"
import clsx from "clsx"

type THawaTimeline = {
  steps: any[any]
  currentStep: any
  orientation: "vertical" | "horizontal"
}

export const HawaStepper: FC<THawaTimeline> = ({
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
                    "flex h-6 w-6 min-w-[24px] items-center justify-center  rounded ring-2  ring-primary/20 ring-offset-2",
                    i + 1 <= props.currentStep
                      ? "bg-primary text-primary-foreground "
                      : "bg-primary/20"
                  )}
                >
                  {i + 1 <= props.currentStep ? (
                    <svg
                      aria-label="Check Mark"
                      stroke="currentColor"
                      fill="currentColor"
                      strokeWidth="0"
                      viewBox="0 0 512 512"
                      height="0.60em"
                      width="0.60em"
                    >
                      <path d="M173.898 439.404l-166.4-166.4c-9.997-9.997-9.997-26.206 0-36.204l36.203-36.204c9.997-9.998 26.207-9.998 36.204 0L192 312.69 432.095 72.596c9.997-9.997 26.207-9.997 36.204 0l36.203 36.204c9.997 9.997 9.997 26.206 0 36.204l-294.4 294.401c-9.998 9.997-26.207 9.997-36.204-.001z"></path>
                    </svg>
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

// const TimelineStep = (props) => {
//   let defaultStyles = {
//     vertical: "",
//     horizontal: "",
//   }
//   return (
//     <div
//       className={
//         props.orientation === "vertical"
//           ? "flex w-full flex-row items-center"
//           : props.stepNumber === props.steps
//           ? "flex items-center"
//           : "after:border-1 flex items-center after:mx-6 after:hidden after:h-1 after:w-10 after:border-b after:border-gray-200  dark:after:border-gray-700 sm:after:inline-block sm:after:content-[''] md:w-full xl:after:mx-10"
//       }
//     >
//       <div
//         className={clsx(
//           "ring-buttonPrimary-200 m-2 mr-4 flex h-6 w-6 items-center justify-center rounded ring-2 ring-offset-2",
//           props.current
//             ? "bg-buttonPrimary-500 text-white"
//             : "bg-buttonPrimary-200"
//         )}
//       >
//         {props.current ? <FaCheck fontSize={11} /> : props.stepNumber}
//       </div>
//       <div className="whitespace-nowrap">{props.stepName}</div>
//     </div>
//   )
// }
