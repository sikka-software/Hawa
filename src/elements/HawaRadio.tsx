import clsx from "clsx"
import React, { useState } from "react"

type RadioTypes = {
  options?: [
    {
      value: any
      label: any
    }
  ]
  onChangeTab?: any
  defaultValue?: any
}
export const HawaRadio: React.FunctionComponent<RadioTypes> = (props) => {
  const [selectedOption, setSelectedOption] = useState(props.defaultValue)
  let activeTabStyle =
    "inline-block py-2 px-4  w-full text-white bg-buttonPrimary-500 rounded active"
  let inactiveTabStyle =
    "inline-block py-2 px-4 w-full bg-gray-100 rounded hover:text-gray-900 hover:bg-gray-100 dark:hover:bg-gray-800 dark:hover:text-white"

  return (
    <div>
      <ul
        className={clsx(
          props.options?.length > 2
            ? "flex-wrap xs:max-w-full xs:flex-nowrap"
            : "",
          "flex max-w-fit flex-row whitespace-nowrap rounded bg-gray-100 text-center text-sm font-medium text-gray-500 dark:text-gray-400"
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
