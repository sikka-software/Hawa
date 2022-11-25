import clsx from "clsx"
import React, { useState } from "react"

type TabsTypes = {
  options?: any
  onChangeTab?: any
  defaultValue?: any
}
export const HawaTabs: React.FunctionComponent<TabsTypes> = (props) => {
  const [selectedOption, setSelectedOption] = useState(props.defaultValue)
  let activeTabStyle =
    "inline-block py-2 px-4 text-white bg-primary-500 rounded-lg rounded-br-none rounded-bl-none active"
  let inactiveTabStyle =
    "inline-block py-2 px-4 rounded-lg rounded-br-none rounded-bl-none hover:text-gray-900 hover:bg-gray-100 dark:hover:bg-gray-800 dark:hover:text-white"

  return (
    <div>
      <ul
        className={clsx(
          "flex w-fit flex-wrap rounded-lg rounded-br-none rounded-bl-none  border-b-primary-500 bg-gray-100 text-center text-sm font-medium text-gray-500 dark:text-gray-400",
          selectedOption ? "border-b-2" : "border-b-0"
        )}
      >
        {props.options?.map((opt: any) => (
          <li>
            <button
              aria-current="page"
              onClick={() => {
                setSelectedOption(opt.value)
                props.onChangeTab(opt.value)
              }}
              className={clsx(
                selectedOption === opt.value
                  ? activeTabStyle
                  : inactiveTabStyle,
                "transition-all"
              )}
            >
              {opt.label}
            </button>
          </li>
        ))}
      </ul>
    </div>
  )
}
