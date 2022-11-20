import React, { useState } from "react"

type TabsTypes = {
  options: any
  onChangeTab: any
  defaultValue: any
}
export const HawaTabs: React.FunctionComponent<TabsTypes> = (props) => {
  const [selectedOption, setSelectedOption] = useState(props.defaultValue)
  let activeTabStyle =
    "inline-block py-2 px-4 text-white bg-blue-600 rounded-lg active"
  let inactiveTabStyle =
    "inline-block py-2 px-4 rounded-lg hover:text-gray-900 hover:bg-gray-100 dark:hover:bg-gray-800 dark:hover:text-white"

  return (
    <div>
      <ul className="flex w-fit flex-wrap rounded-lg bg-gray-100 text-center text-sm font-medium text-gray-500 dark:text-gray-400">
        {props.options.map((opt) => (
          <li>
            <button
              aria-current="page"
              onClick={() => {
                setSelectedOption(opt.value)
                props.onChangeTab(opt.value)
              }}
              className={
                selectedOption === opt.value ? activeTabStyle : inactiveTabStyle
              }
            >
              {opt.label}
            </button>
          </li>
        ))}
      </ul>
    </div>
  )
}
