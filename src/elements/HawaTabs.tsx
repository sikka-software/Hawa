import React, { useState, FC } from "react"
import clsx from "clsx"

// TODO: fix wrapping issue when small screen

type TabsTypes = {
  options?: any
  onChangeTab?: (option) => void
  defaultValue?: any
  orientation?: "horizontal" | "vertical"
  direction?: "rtl" | "ltr"
  marginBetween?: any
  width?: "full" | "normal"
  pill?: boolean
}
export const HawaTabs: FC<TabsTypes> = ({
  orientation = "horizontal",
  direction = "ltr",
  width = "normal",
  marginBetween = 0,
  pill = false,
  ...props
}) => {
  const [selectedOption, setSelectedOption] = useState(props.options[0]?.value)

  let activeTabStyle = {
    vertical: "inline-block py-2 px-4 text-white bg-buttonPrimary-500 active",
    horizontal: "inline-block py-2 px-4 text-white bg-buttonPrimary-500 active",
  }
  // rounded rounded-br-none rounded-bl-none
  let inactiveTabStyle = {
    vertical:
      "inline-block py-2 px-4 hover:text-gray-900 hover:bg-gray-200 dark:hover:bg-gray-800 dark:hover:text-white",
    horizontal:
      "bg-gray-100 inline-block py-2 px-4  hover:text-gray-900 hover:bg-gray-200 dark:hover:bg-gray-800 dark:hover:text-white",
  }
  // rounded rounded-br-none rounded-bl-none
  let widthStyles = {
    full: "w-full min-w-full",
    normal: "w-fit",
  }
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
      "flex w-fit  flex-wrap border-b-buttonPrimary-500 text-center text-sm font-medium text-gray-500 dark:text-gray-400",
  }
  return (
    <div
      dir={direction}
      className={clsx(
        containerStyle[orientation],
        props.options[selectedOption] ? "border-b-2" : "border-b-0"
      )}
    >
      <ul
        className={clsx(
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

          // orientation === "vertical"
          //   ? direction === "rtl"
          //     ? "rounded-none rounded-r border-l-2"
          //     : "rounded-none rounded-l border-r-2"
          //   : "border-b-2",
          widthStyles[width],
          pill
            ? "gap-0.5 rounded border-none bg-gray-100 p-0.5"
            : orientation === "vertical"
            ? direction === "rtl"
              ? "rounded-none rounded-r border-l-2"
              : "rounded-none rounded-l border-r-2"
            : "border-b-2"
        )}
      >
        {props.options?.map((opt: any, o) => (
          <li key={o}>
            <button
              aria-current="page"
              onClick={() => {
                setSelectedOption(opt.value)
                props?.onChangeTab(opt)
              }}
              className={clsx(
                opt.value === selectedOption
                  ? // props.options[selectedOption].value === opt.value
                    [
                      activeTabStyle[orientation],
                      direction === "rtl" ? "rounded-r" : "rounded-l",
                    ]
                  : inactiveTabStyle[orientation],
                "w-full  transition-all",
                pill
                  ? "rounded"
                  : orientation === "vertical"
                  ? "rounded rounded-bl-none rounded-tl-none"
                  : "rounded rounded-bl-none rounded-br-none"
                // direction === "rtl" ? "bg-yellow-400" : "bg-yellow-400"
              )}
            >
              {opt.label}
            </button>
          </li>
        ))}
      </ul>

      <div className="flex-1 transition-all">
        {props.options.map((tab, i) => (
          <div
            key={i}
            className={clsx(selectedOption === tab.value ? "" : "hidden")}
          >
            {tab.content}
          </div>
        ))}
      </div>
    </div>
  )
}
