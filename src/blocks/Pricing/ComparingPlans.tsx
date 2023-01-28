import React, { useState } from "react"
import { HawaPricingCard, HawaPanelTabs, HawaTabs } from "../../elements"

const CheckMark = () => (
  <svg
    className="h-5 w-5 text-green-500"
    aria-hidden="true"
    fill="currentColor"
    viewBox="0 0 20 20"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      fillRule="evenodd"
      d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
      clipRule="evenodd"
    ></path>
  </svg>
)

const UncheckMark = () => (
  <svg
    className="h-5 w-5 text-red-500"
    aria-hidden="true"
    fill="currentColor"
    viewBox="0 0 20 20"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      fillRule="evenodd"
      d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
      clipRule="evenodd"
    ></path>
  </svg>
)

type ComparingPlansTypes = {
  plans: any
  // plans: PropTypes.arrayOf(
  //   PropTypes.shape({
  //     title: PropTypes.string,
  //     title_ar: PropTypes.string,
  //     subtitle: PropTypes.string,
  //     subtitle_ar: PropTypes.string,
  //     price: PropTypes.number,
  //     currency: PropTypes.string,
  //     cycleText: PropTypes.string,
  //     buttonText: PropTypes.string,
  //     features: PropTypes.array,
  //     features_ar: PropTypes.array,
  //     selectedPlan: PropTypes.bool,
  //   })
  // ),
  lang: any
}
export const ComparingPlans: React.FunctionComponent<ComparingPlansTypes> = (
  props
) => {
  const [currentCurrency, setCurrentCurrency] = useState("sar")
  const [currentCycle, setCurrentCycle] = useState("monthly")
  let cycleOptions = [
    { label: `Monthly`, value: `monthly` },
    { label: `3 Months`, value: `3-months` },
    { label: `6 Months`, value: `6-months` },
    { label: `Annually`, value: `annually` },
  ]
  let currencyOptions = [
    { label: `USD`, value: `usd` },
    { label: `SAR`, value: `sar` },
  ]
  let activeTabStyle =
    "inline-block py-3 px-4 text-white bg-blue-600 rounded active"
  let inactiveTabStyle =
    "inline-block py-3 px-4 rounded hover:text-gray-900 hover:bg-gray-100 dark:hover:bg-gray-800 dark:hover:text-white"
  return (
    <div id="detailed-pricing" className="w-full overflow-x-auto">
      <div className="min-w-max overflow-hidden">
        <div className="grid grid-cols-4 gap-x-16 border-t border-b border-gray-200 bg-gray-100 p-4 text-sm font-medium text-gray-900 dark:border-gray-700 dark:bg-gray-800 dark:text-white">
          <div className="flex items-center"></div>
          {props.plans.map((plan: any) => (
            <div>{plan.title}</div>
          ))}
        </div>
        {props.plans.map(() => {
          return (
            <div className="grid grid-cols-4 gap-x-16 border-b border-gray-200 py-5 px-4 text-sm text-gray-700 dark:border-gray-700">
              <div className="text-gray-500 dark:text-gray-400">
                Basic components (
                <a href="#" className="text-blue-600 hover:underline">
                  view all
                </a>
                )
              </div>
              <CheckMark />
              <CheckMark />
              <CheckMark />
            </div>
          )
        })}
        <div className="grid grid-cols-4 gap-x-16 border-b border-gray-200 py-5 px-4 text-sm text-gray-700 dark:border-gray-700">
          <div className="text-gray-500 dark:text-gray-400">
            Application UI (
            <a href="#" className="text-blue-600 hover:underline">
              view demo
            </a>
            )
          </div>
          <UncheckMark />
          <CheckMark />
          <UncheckMark />
        </div>
        <div className="grid grid-cols-4 gap-x-16 border-b border-gray-200 py-5 px-4 text-sm text-gray-700 dark:border-gray-700">
          <div className="text-gray-500 dark:text-gray-400">
            Marketing UI pre-order
          </div>
          <UncheckMark />
          <CheckMark />
          <UncheckMark />
        </div>
        <div className="grid grid-cols-4 gap-x-16 border-b border-gray-200 py-5 px-4 text-sm text-gray-700 dark:border-gray-700">
          <div className="text-gray-500 dark:text-gray-400"></div>
          <div>
            <a
              href="#"
              className="block w-full rounded bg-blue-600 px-4 py-2.5 text-center text-sm font-medium text-white hover:bg-blue-700 focus:ring-4 focus:ring-blue-200 dark:focus:ring-blue-900"
            >
              Buy now
            </a>
          </div>
          <div>
            <a
              href="#"
              className="block w-full rounded bg-blue-600 px-4 py-2.5 text-center text-sm font-medium text-white hover:bg-blue-700 focus:ring-4 focus:ring-blue-200 dark:focus:ring-blue-900"
            >
              Buy now
            </a>
          </div>
          <div>
            <a
              href="#"
              className="block w-full rounded bg-blue-600 px-4 py-2.5 text-center text-sm font-medium text-white hover:bg-blue-700 focus:ring-4 focus:ring-blue-200 dark:focus:ring-blue-900"
            >
              Buy now
            </a>
          </div>
        </div>
      </div>
    </div>
  )
}
