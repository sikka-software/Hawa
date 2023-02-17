import clsx from "clsx"
import React from "react"
import { HawaButton } from "./HawaButton"

// TODO: if feature.excluded is false, show gray and x
// TODO: add badge to feature if soon
// TODO: add a discount element

type PricingCardTypes = {
  direction?: "rtl" | "ltr"
  features: [{ included: boolean; text: string }]
  price: number
  texts: {
    title: string
    subtitle: string
    buttonText: string
    cycleText: string
    currencyText: string
  }
  onPlanClicked?: () => void
  currentPlan?: boolean
  size: "small" | "medium" | "large"
}

export const HawaPricingCard: React.FunctionComponent<PricingCardTypes> = ({
  size = "medium",
  direction = "ltr",
  currentPlan = false,
  ...props
}) => {
  let isArabic = direction === "rtl"
  let cardSizes = {
    small:
      "mx-1 w-full  max-w-sm rounded border dark:border-gray-700 dark:bg-gray-800 ",
    medium:
      "mx-1 w-full rounded min-w-fit border dark:border-gray-700 dark:bg-gray-800 ",
    large:
      "mx-1 w-full max-w-lg rounded border dark:border-gray-700 dark:bg-gray-800 ",
  }
  return (
    <div
      dir={isArabic ? "rtl" : "ltr"}
      className={clsx(
        currentPlan
          ? "border-buttonPrimary-500 bg-layoutPrimary-500"
          : "bg-white",
        cardSizes[size],
        "flex flex-col gap-4 rounded border-2 p-4"
      )}
    >
      <h5 className="text-md 0 font-bold text-gray-500 dark:text-gray-400">
        {props.texts.title}
      </h5>
      <div className=" flex items-baseline  text-gray-900 dark:text-white">
        <>
          <span className="text-5xl font-extrabold tracking-tight">
            {props.price}
          </span>
          <span className="mx-1 text-sm font-semibold">
            {props.texts.currencyText}
          </span>
        </>
        <span className="ml-1 text-xl font-normal text-gray-500 dark:text-gray-400">
          / {props.texts.cycleText}
        </span>
      </div>
      <h5 className="text-md  font-normal text-gray-500 dark:text-gray-400">
        {props.texts.subtitle}
      </h5>

      {props.features && (
        <ul role="list" className="space-y-0 ">
          {props.features?.map((feature, o) => {
            return (
              <li key={o} className="flex ">
                <svg
                  aria-hidden="true"
                  className="m-2 h-5 w-5 flex-shrink-0 text-blue-600 dark:text-blue-500"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <title>Check icon</title>
                  <path
                    fillRule="evenodd"
                    d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                    clipRule="evenodd"
                  ></path>
                </svg>
                <span className="flex items-center  text-center font-normal leading-tight text-gray-500  dark:text-gray-400">
                  {feature.text}
                </span>
              </li>
            )
          })}
        </ul>
      )}
      <HawaButton
        onClick={props.onPlanClicked}
        margins="none"
        disabled={currentPlan}
        width="full"
      >
        {props.texts.buttonText}
      </HawaButton>
    </div>
  )
}
