import React from "react"

// TODO: make the texts in one object property
// TODO: give it a background color (white)
// TODO: remove title_ar
// TODO: spicifiy features object
// TODO: remove features_ar

type PricingCardTypes = {
  lang: "ar" | "en"
  features: [any]
  features_ar: [any]
  title: string
  title_ar: string
  price: number
  currency: string
  buttonText: string
  cycleText: string
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
export const HawaPricingCard: React.FunctionComponent<PricingCardTypes> = (
  props
) => {
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
  let featuresMapping = isArabic ? props.features_ar : props.features
  let chipSpacing = isArabic ? { left: 10 } : { right: 10 }
  let cardSizes = {
    small:
      "mx-1 w-full max-w-fit rounded border bg-white p-4 shadow-md dark:border-gray-700 dark:bg-gray-800 sm:p-8",
    medium:
      "mx-1 w-full max-w-md rounded border bg-white p-4 shadow-md dark:border-gray-700 dark:bg-gray-800 sm:p-8",
    large:
      "mx-1 w-full max-w-lg rounded border bg-white p-4 shadow-md dark:border-gray-700 dark:bg-gray-800 sm:p-8",
  }
  return (
    <div dir={isArabic ? "rtl" : "ltr"} className={cardSizes[props.size]}>
      <h5 className="mb-4 text-xl font-medium text-gray-500 dark:text-gray-400">
        {isArabic ? props.title_ar : props.title}
      </h5>
      <div className="flex items-baseline text-gray-900 dark:text-white">
        {isArabic ? (
          <>
            <span className="text-5xl font-extrabold tracking-tight">
              {props.price}
            </span>
            <span className="mx-1 text-sm font-semibold">
              {" "}
              {
                currencyMapping[
                  props.currency?.toLowerCase() as keyof CurrencyTextTypes
                ]
              }
            </span>
          </>
        ) : (
          <>
            <span className="text-sm font-semibold">
              {" "}
              {
                currencyMapping[
                  props.currency?.toLowerCase() as keyof CurrencyTextTypes
                ]
              }
            </span>
            <span className="mx-1 text-5xl font-extrabold tracking-tight">
              {props.price}
            </span>
          </>
        )}
        <span className="ml-1 text-xl font-normal text-gray-500 dark:text-gray-400">
          /{" "}
          {isArabic
            ? cycleTextsArabic[props.cycleText as keyof CycleTextTypes]
            : cycleTextsEnglish[props.cycleText as keyof CycleTextTypes]}
        </span>
      </div>
      <ul role="list" className="my-7 space-y-0">
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
                {feature}
              </span>
            </li>
          )
        })}
      </ul>
      <button
        type="button"
        className="inline-flex w-full justify-center rounded bg-blue-600 px-5 py-2.5 text-center text-sm font-medium text-white hover:bg-blue-700 focus:outline-none focus:ring-4 focus:ring-blue-200 dark:focus:ring-blue-900"
      >
        {props.buttonText}
      </button>
    </div>

    // <Container
    //   variant={props.selectedPlan ? "selected-plan-card" : "plan-card"}
    //   style={{ direction: isArabic ? "rtl" : "ltr" }}
    // >
    //     {props.discount && (
    //       <Chip
    //         label={props.discount}
    //         variant="standard"
    //         style={{
    //           position: "absolute",
    //           bottom: 10,
    //           ...chipSpacing
    //         }}
    //         color="success"
    //       />
    //     )}

    //   <div
    //     style={{ padding: 20, color: props.selectedPlan ? "white" : "black" }}
    //   >
    //
    //   </div>
    //   <button
    //     onClick={props.selectPlan}
    //     variant={props.selectedPlan ? "outlined" : "contained"}
    //     style={{ margin: 20 }}
    //   >
    //     {props.buttonText}
    //   </button>
    // </Container>
  )
}
