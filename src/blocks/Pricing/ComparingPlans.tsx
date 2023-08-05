import React, { useState, FC } from "react"
import { HawaTabs, HawaTooltip } from "../../elements"

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
  plans: [
    {
      direction: "rtl" | "ltr"
      features: [{ included: boolean; text: string; description?: string }]
      price: number
      texts: {
        title: string
        subtitle: string
        buttonText: string
        cycleText: string
        currencyText: string
      }
      size: "small" | "medium" | "large"
    }
  ]
  currencies: [
    {
      label: string
      value: string
    }
  ]
  billingCycles: [
    {
      label: string
      value: string
    }
  ]
  onCycleChange?: (e) => void
  onCurrencyChange?: (e) => void
  direction?: "rtl" | "ltr"
}
export const ComparingPlans: FC<ComparingPlansTypes> = (props) => {
  const [currentCurrency, setCurrentCurrency] = useState("SAR")
  const [currentCycle, setCurrentCycle] = useState("month")

  return (
    <div id="detailed-pricing" className="w-full overflow-x-auto">
      <div className="mb-2 flex w-full justify-between">
        <HawaTabs
          pill
          defaultValue={currentCycle}
          options={props.billingCycles}
          onChangeTab={(e: any) => {
            // setCurrentCycle(e.label)
            props.onCycleChange(e)
          }}
        />
        <HawaTabs
          pill
          defaultValue={currentCurrency}
          options={props.currencies}
          onChangeTab={(e: any) => {
            // setCurrentCurrency(e.label)
            props.onCurrencyChange(e)
          }}
        />
      </div>
      <div className=" overflow-hidden rounded">
        <div className="grid grid-cols-4 gap-x-2 border-b border-t border-gray-200 bg-gray-100 p-4 text-sm font-medium text-gray-900 dark:border-gray-700 dark:bg-gray-800 dark:text-white">
          <div className="flex items-center"></div>
          {props.plans.map((plan: any) => (
            <div>
              <h5 className="text-md 0 font-bold text-gray-500 dark:text-gray-400">
                {plan.texts.title}
              </h5>

              <div className=" flex items-baseline  text-gray-900 dark:text-white">
                <>
                  <span className="text-5xl font-extrabold tracking-tight">
                    {plan.price}
                  </span>
                  <span className="mx-1 text-sm font-semibold">
                    {plan.texts.currencyText}
                  </span>
                </>
                <span className="ml-1 text-xl font-normal text-gray-500 dark:text-gray-400">
                  / {plan.texts.cycleText}
                </span>
              </div>
              <h5 className="text-md  font-normal text-gray-500 dark:text-gray-400">
                {plan.texts.subtitle}
              </h5>
            </div>
          ))}
        </div>
        {props.plans?.map((plan) => {
          return plan.features.map((feature) => {
            return (
              <div className="grid grid-cols-4 gap-x-16 border-b border-gray-200 px-4 py-5 text-sm text-gray-700 dark:border-gray-700">
                <div className="  flex flex-row items-center gap-2  text-gray-500 dark:text-gray-400">
                  {feature.text}
                  {feature.description && (
                    <HawaTooltip
                      position="top-right"
                      content={feature.description}
                    >
                      <svg
                        stroke="currentColor"
                        fill="currentColor"
                        stroke-width="0"
                        viewBox="0 0 16 16"
                        height="1em"
                        width="1em"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zM8 4a.905.905 0 0 0-.9.995l.35 3.507a.552.552 0 0 0 1.1 0l.35-3.507A.905.905 0 0 0 8 4zm.002 6a1 1 0 1 0 0 2 1 1 0 0 0 0-2z"></path>
                      </svg>
                    </HawaTooltip>
                  )}
                </div>
                <UncheckMark />
                <CheckMark />
                <UncheckMark />
              </div>
            )
          })
        })}
      </div>
    </div>
  )
}
