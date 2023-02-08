import clsx from "clsx"
import React, { useState } from "react"

type TabsTypes = {
  options?: any
  onChangeTab?: any
  defaultValue?: any
  contents?: any
  orientation?: "horizontal" | "vertical"
  direction?: "rtl" | "ltr"
  marginBetween?: any
  width?: "full" | "normal"
}
export const HawaTabs: React.FunctionComponent<TabsTypes> = ({
  orientation = "horizontal",
  direction = "ltr",
  width = "normal",
  marginBetween = 0,
  ...props
}) => {
  const [selectedOption, setSelectedOption] = useState(props.options[0]?.value)

  let activeTabStyle = {
    vertical: "inline-block py-2 px-4 text-white bg-buttonPrimary-500 active",
    horizontal:
      "inline-block py-2 px-4 text-white bg-buttonPrimary-500 rounded rounded-br-none rounded-bl-none active",
  }
  let inactiveTabStyle = {
    vertical:
      "inline-block py-2 px-4 rounded-none rounded-br-none rounded-tl-none hover:text-gray-900 hover:bg-gray-100 dark:hover:bg-gray-800 dark:hover:text-white",
    horizontal:
      "bg-gray-100 inline-block py-2 px-4 rounded rounded-br-none rounded-bl-none hover:text-gray-900 hover:bg-gray-100 dark:hover:bg-gray-800 dark:hover:text-white",
  }
  let widthStyles = {
    full: "w-full min-w-full",
    normal: "w-fit",
  }
  console.log("selected i : ", selectedOption)
  console.log("selected object : ", props.options[selectedOption])
  let orientationStyle = {
    vertical: {
      container: "flex flex-row",
      tabs: "flex flex-col w-fit flex-wrap rounded   border-b-buttonPrimary-500 bg-gray-100 text-center text-sm font-medium text-gray-500 dark:text-gray-400",
    },
    horizontal: {
      container: "",
      tabs: "flex w-fit flex-wrap rounded rounded-br-none rounded-bl-none  border-b-buttonPrimary-500 bg-gray-100 text-center text-sm font-medium text-gray-500 dark:text-gray-400",
    },
  }
  let containerStyle = {
    vertical: "flex flex-row",
    horizontal: "flex flex-col",
  }
  let tabsStyle = {
    vertical:
      "sticky top-2 h-fit flex flex-col w-fit flex-wrap rounded border-b-buttonPrimary-500 bg-gray-100 text-center text-sm font-medium text-gray-500 dark:text-gray-400",
    horizontal:
      "flex w-fit flex-wrap rounded rounded-br-none rounded-bl-none  border-b-buttonPrimary-500  text-center text-sm font-medium text-gray-500 dark:text-gray-400",
  }
  return (
    <div
      dir={direction}
      className={clsx(
        containerStyle[orientation],
        props.options[selectedOption] ? "border-b-2" : "border-b-0"
        // "bg-red-400"
      )}
    >
      <ul
        className={clsx(
          // "mb-2",
          marginBetween
            ? orientation === "vertical"
              ? "mb-0"
              : "mb-" + marginBetween
            : "",
          marginBetween && direction === "rtl"
            ? "ml-" + marginBetween
            : "mr-" + marginBetween,
          tabsStyle[orientation],
          "border-buttonPrimary-500",
          orientation === "vertical"
            ? direction === "rtl"
              ? "rounded-none rounded-r border-l-2"
              : "rounded-none rounded-l border-r-2"
            : "border-b-2",
          widthStyles[width]
        )}
      >
        {/* 
        if selected option
          if vertical
            if rtl
              border left
            else
              border right
          else
            border bottom
        */}
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
                    [
                      activeTabStyle[orientation],
                      direction === "rtl" ? "rounded-r" : "rounded-l",
                    ]
                  : inactiveTabStyle[orientation],
                "w-full transition-all"
                // direction === "rtl" ? "bg-yellow-400" : "bg-yellow-400"
              )}
            >
              {opt.label}
            </button>
          </li>
        ))}
      </ul>

      <div className="flex-1 transition-all">
        {props.options.map((tab) => (
          <div
            key={tab.value}
            className={clsx(selectedOption === tab.value ? "" : "hidden")}
          >
            {tab.content}
          </div>
        ))}
      </div>
    </div>
  )
}
