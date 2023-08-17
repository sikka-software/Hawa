import React, { useState, FC } from "react"
import clsx from "clsx"

type AccordionTypes = {
  /** The title of the clickable accordion bar   */
  title: string
  /** The content inside the accordion to be visible once the bar is clicked   */
  content: any
  /** The index of each accordion, must be unique for each usage of this component   */
  index: any
}
export const HawaAccordion: FC<AccordionTypes> = (props) => {
  const [collapse, setCollapse] = useState(false)

  return (
    <div className="h-fit w-full">
      <button
        id={"accordion-collapse-heading-" + props.index}
        type="button"
        className={clsx(
          collapse ? "rounded" : "rounded-t",
          "flex w-full items-center justify-between  border border-gray-200 bg-gray-100 p-5 text-left font-medium text-gray-900 hover:bg-gray-100  dark:border-gray-700 dark:bg-gray-800 dark:text-white dark:hover:bg-gray-800 dark:focus:ring-gray-800"
        )}
        onClick={() => setCollapse(!collapse)}
        data-accordion-target={"#accordion-collapse-body-" + props.index}
        aria-expanded="true"
        aria-controls={"accordion-collapse-body-" + props.index}
      >
        <span>{props.title}</span>
        <svg
          data-accordion-icon=""
          className={`h-6 w-6 ${
            collapse ? "" : "rotate-180"
          }  shrink-0 transition-all`}
          fill="currentColor"
          viewBox="0 0 20 20"
        >
          <path
            fillRule="evenodd"
            d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
            clipRule="evenodd"
          ></path>
        </svg>
      </button>
      <div
        id={"accordion-collapse-body-" + props.index}
        aria-labelledby={"accordion-collapse-heading-" + props.index}
        className={clsx(
          collapse ? "invisible hidden h-0 p-0" : "visible h-full",
          "w-full rounded-b border border-t-0 border-gray-200 p-5 font-light dark:border-gray-700 dark:bg-gray-900"
        )}
      >
        <p className="mb-2 text-gray-500 dark:text-gray-400">{props.content}</p>
      </div>
    </div>
  )
}
