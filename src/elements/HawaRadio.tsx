import React, { useState, FC } from "react"
import clsx from "clsx"

type RadioTypes = {
  orientation?: "vertical" | "horizontal"
  design?: "default" | "tabs" | "cards" | "bordered"
  options?: {
    value: any
    label: any
    disabled?: any
    sublabel?: any
    icon?: any
  }[]

  onChangeTab?: any
  defaultValue?: any
}
export const HawaRadio: FC<RadioTypes> = ({
  design = "default",
  orientation = "horizontal",
  ...props
}) => {
  const [selectedOption, setSelectedOption] = useState(props.defaultValue)
  let activeTabStyle =
    "inline-block py-2 px-4  w-full text-white bg-primary rounded active dark:bg-primary dark:text-black"
  let inactiveTabStyle =
    "inline-block py-2 px-4 w-full dark:bg-background bg-gray-100 rounded hover:text-gray-900 hover:bg-gray-100 dark:hover:bg-gray-800 dark:hover:text-white"
  let orientationStyle = {
    horizontal: "flex flex-row",
    vertical: "flex flex-col",
  }
  switch (design) {
    case "tabs":
      return (
        <div>
          <ul
            className={clsx(
              props.options?.length > 2
                ? "flex-wrap xs:max-w-full xs:flex-nowrap"
                : "",
              " max-w-fit  whitespace-nowrap rounded border bg-gray-100 text-center text-sm font-medium text-gray-500 dark:bg-background  dark:text-gray-400",
              orientationStyle[orientation]
            )}
          >
            {props.options?.map((opt: any, o) => (
              <li className="w-full" key={o}>
                <button
                  aria-current="page"
                  onClick={() => {
                    setSelectedOption(opt.value)
                    props.onChangeTab(opt.value)
                  }}
                  className={clsx(
                    "flex flex-row items-center justify-center gap-2",
                    selectedOption === opt.value
                      ? activeTabStyle
                      : inactiveTabStyle
                  )}
                >
                  {opt.icon && opt.icon}
                  {opt.label}
                </button>
              </li>
            ))}
          </ul>
        </div>
      )
    case "bordered":
      return (
        <div className={clsx(orientationStyle[orientation], "gap-4")}>
          {props.options.map((opt, i) => (
            <div className="rounded border border-gray-200   ">
              <div
                className="radio-item radio-item-bordered flex items-center    transition-all"
                key={i + 1}
              >
                <input
                  disabled={opt.disabled}
                  id={opt.value.toString()}
                  type="radio"
                  value={opt.value}
                  name="bordered-radio"
                  // className="h-4 w-4 border-gray-300 "
                />
                <label
                  htmlFor={opt.value.toString()}
                  className={clsx(
                    "ml-2 w-full  p-4 pl-3  text-sm font-medium dark:text-white",
                    opt.disabled ? "opacity-50" : "cursor-pointer text-gray-900"
                  )}
                >
                  {opt.label}
                </label>
              </div>
            </div>
          ))}
        </div>
      )
    case "cards":
      return (
        <ul className={clsx(orientationStyle[orientation], "gap-4")}>
          {props.options?.map((opt: any, o) => (
            <li>
              <input
                type="radio"
                id={opt.value.toString()}
                name="cards-radio"
                value={opt.value.toString()}
                className="peer hidden"
                required
                disabled={opt.disabled}
              />
              <label
                htmlFor={opt.value.toString()}
                className={clsx(
                  "inline-flex h-full w-full  items-center justify-between rounded-lg border border-gray-200 bg-white p-5                    text-gray-500  peer-checked:border-blue-600 peer-checked:text-blue-600 dark:border-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-gray-300 dark:peer-checked:text-blue-500",
                  opt.disabled
                    ? "opacity-50"
                    : "cursor-pointer hover:bg-gray-100 hover:text-gray-600"
                )}
              >
                <div className="block  h-full w-full">
                  <div className="w-full text-lg font-semibold">
                    {opt.label}
                  </div>
                  <div className="w-full">{opt.sublabel}</div>
                </div>
                {/* <svg
                  className="ml-3 h-5 w-5 "
                  aria-hidden="true"
                  fill="none"
                  viewBox="0 0 14 10"
                >
                  <path
                    stroke="currentColor"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M1 5h12m0 0L9 1m4 4L9 9"
                  />
                </svg> */}
              </label>
            </li>
          ))}
        </ul>
      )

    default:
      return (
        <div className={orientationStyle[orientation]}>
          {props.options.map((opt, i) => (
            <div
              className="radio-item radio-item-default mb-4 flex items-center transition-all"
              key={i + 1}
            >
              <input
                disabled={opt.disabled}
                id={opt.value.toString()}
                type="radio"
                value={opt.value}
                name="default-radio"
                // className="h-4 w-4 border-gray-300 "
              />
              <label
                htmlFor={opt.value.toString()}
                className={clsx(
                  "ml-2 text-sm font-medium dark:text-white",
                  opt.disabled
                    ? "text-gray-400"
                    : "cursor-pointer text-gray-900"
                )}
              >
                {opt.label}
              </label>
            </div>
          ))}
        </div>
      )
  }
}
