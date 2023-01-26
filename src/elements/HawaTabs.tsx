import clsx from "clsx"
import React, { useState } from "react"

type TabsTypes = {
  options?: any
  onChangeTab?: any
  defaultValue?: any
  contents?: any
  orientation?: "horizontal" | "vertical"
}
export const HawaTabs: React.FunctionComponent<TabsTypes> = ({
  orientation = "horizontal",
  ...props
}) => {
  const [selectedOption, setSelectedOption] = useState(props.options[0]?.value)
  // const [selectedOption, setSelectedOption] = useState(props.defaultValue - 1)
  let activeTabStyle = {
    vertical:
      "inline-block py-2 px-4 text-white bg-buttonPrimary-default rounded-lg rounded-tl-none rounded-bl-none active",
    horizontal:
      "inline-block py-2 px-4 text-white bg-buttonPrimary-default rounded-lg rounded-br-none rounded-bl-none active",
  }
  let inactiveTabStyle = {
    vertical:
      "inline-block py-2 px-4 rounded-none rounded-br-none rounded-tl-none hover:text-gray-900 hover:bg-gray-100 dark:hover:bg-gray-800 dark:hover:text-white",
    horizontal:
      "inline-block py-2 px-4 rounded-lg rounded-br-none rounded-bl-none hover:text-gray-900 hover:bg-gray-100 dark:hover:bg-gray-800 dark:hover:text-white",
  }
  console.log("selected i : ", selectedOption)
  console.log("selected object : ", props.options[selectedOption])
  let orientationStyle = {
    vertical: {
      container: "flex flex-row",
      tabs: "flex flex-col w-fit flex-wrap rounded-lg   border-b-primary-500 bg-gray-100 text-center text-sm font-medium text-gray-500 dark:text-gray-400",
    },
    horizontal: {
      container: "",
      tabs: "flex w-fit flex-wrap rounded-lg rounded-br-none rounded-bl-none  border-b-primary-500 bg-gray-100 text-center text-sm font-medium text-gray-500 dark:text-gray-400",
    },
  }
  let containerStyle = {
    vertical: "flex flex-row",
    horizontal: "flex flex-col",
  }
  let tabsStyle = {
    vertical:
      "flex flex-col w-fit flex-wrap rounded-lg border-b-primary-500 bg-gray-100 text-center text-sm font-medium text-gray-500 dark:text-gray-400",
    horizontal:
      "flex w-fit flex-wrap rounded-lg rounded-br-none rounded-bl-none  border-b-primary-500 bg-gray-100 text-center text-sm font-medium text-gray-500 dark:text-gray-400",
  }
  return (
    <div
      className={clsx(
        containerStyle[orientation],
        props.options[selectedOption] ? "border-b-2" : "border-b-0"
      )}
    >
      <ul
        className={clsx(
          tabsStyle[orientation],
          props.options[selectedOption] ? "border-b-2" : "border-b-0"
        )}
      >
        {props.options?.map((opt: any, o) => (
          <li key={o}>
            <button
              aria-current="page"
              onClick={() => {
                setSelectedOption(opt.value)
                // props.onChangeTab(opt.value)
              }}
              className={clsx(
                opt.value === selectedOption
                  ? // props.options[selectedOption].value === opt.value
                    activeTabStyle[orientation]
                  : inactiveTabStyle[orientation],
                "transition-all"
              )}
            >
              {opt.label}
            </button>
          </li>
        ))}
      </ul>

      <div className="flex-1 bg-white transition-all">
        {props.options.map((tab) => (
          <div
            key={tab.value}
            className={`${selectedOption === tab.value ? "" : "hidden"}`}
          >
            {tab.content}
          </div>
        ))}
      </div>
    </div>
  )
}
