import clsx from "clsx"
import React from "react"

// TODO: if feature.included is false, show gray and x

type PricingCardTypes = {
  lang: "ar" | "en"
  features: [{ included: boolean; text: string }]
  title: string
  price: number
  texts: {
    subtitle: string
    buttonText: string
    cycleText: string
    currencyText: string
  }
  size: "small" | "medium" | "large"
}
type CycleTextTypes = {
  monthly: string
  "3-months": string
  "6-months": string
  annually: string
}
type CurrencyTextTypes = {
  usd: string
  sar: string
}
export const HawaPricingCard: React.FunctionComponent<PricingCardTypes> = ({
  size = "medium",
  ...props
}) => {
  let isArabic = props.lang === "ar"
  let cycleTextsArabic: CycleTextTypes = {
    monthly: "شهرياً",
    "3-months": "كل 3 أشهر",
    "6-months": "كل 6 أشهر",
    annually: "سنوياً",
  }
  let cycleTextsEnglish: CycleTextTypes = {
    monthly: "Monthly",
    "3-months": "3 Months",
    "6-months": "6 Months",
    annually: "Annually",
  }
  let currencyMapping: CurrencyTextTypes = {
    usd: isArabic ? "دولار" : "$",
    sar: isArabic ? "ريال" : "SAR",
  }
  let cardSizes = {
    small:
      "mx-1 w-full  max-w-sm rounded border shadow-md dark:border-gray-700 dark:bg-gray-800 sm:p-8",
    medium:
      "mx-1 w-full rounded min-w-fit border bg-white  dark:border-gray-700 dark:bg-gray-800 sm:p-8",
    large:
      "mx-1 w-full max-w-lg rounded border  p-4 shadow-md dark:border-gray-700 dark:bg-gray-800 sm:p-8",
  }
  return (
    <div
      dir={isArabic ? "rtl" : "ltr"}
      className={clsx(
        cardSizes[size],
        "flex flex-col gap-4 border-2 bg-white p-4"
      )}
    >
      <h5 className="text-md 0 font-bold text-gray-500 dark:text-gray-400">
        {props.title}
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
        {/* <span className="ml-1 text-xl font-normal text-gray-500 dark:text-gray-400">
          / {props.texts.cycleText}
        </span> */}
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
      <button
        type="button"
        className="inline-flex w-full justify-center rounded bg-blue-600 px-5 py-2.5 text-center text-sm font-medium text-white hover:bg-blue-700 focus:outline-none focus:ring-4 focus:ring-blue-200 dark:focus:ring-blue-900"
      >
        {props.texts.buttonText}
      </button>
    </div>
  )
}
