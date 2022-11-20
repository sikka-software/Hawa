import React from "react"

type AccordionItemTypes = {
  title: any
  count: any
  content: any
}

const AccordionItem: React.FunctionComponent<AccordionItemTypes> = (props) => {
  const [collapse, setCollapse] = React.useState(false)
  let noRounding =
    "flex items-center justify-between w-full p-5 font-medium text-left border border-gray-200 focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-800 dark:border-gray-700 hover:bg-gray-100 dark:hover:bg-gray-800 bg-gray-100 dark:bg-gray-800 text-gray-900 dark:text-white"
  let roundedTop =
    "rounded-t-xl border-b-0 flex items-center justify-between w-full p-5 font-medium text-left border border-gray-200 focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-800 dark:border-gray-700 hover:bg-gray-100 dark:hover:bg-gray-800 bg-gray-100 dark:bg-gray-800 text-gray-900 dark:text-white"
  let roundedBottom =
    "rounded-b-xl border-t-0 flex items-center justify-between w-full p-5 font-medium text-left border border-gray-200 focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-800 dark:border-gray-700 hover:bg-gray-100 dark:hover:bg-gray-800 bg-gray-100 dark:bg-gray-800 text-gray-900 dark:text-white"
  let accPaper =
    "p-5 font-light border border-b-xl border-gray-200 dark:border-gray-700 dark:bg-gray-900"
  let accPaperRounded =
    "p-5 font-light border border-b-xl rounded-b-xl border-gray-200 dark:border-gray-700 dark:bg-gray-900"
  return (
    <div>
      <h2 id={"accordion-collapse-heading-" + props.count}>
        <button
          type="button"
          className={props.count === 0 ? roundedTop : noRounding}
          onClick={() => setCollapse(!collapse)}
          data-accordion-target={"#accordion-collapse-body-" + props.count}
          aria-expanded="true"
          aria-controls={"accordion-collapse-body-" + props.count}
        >
          <span>{props.title}</span>
          <svg
            data-accordion-icon=""
            className={`h-6 w-6 ${collapse ? "" : "rotate-180"}  shrink-0`}
            fill="currentColor"
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fill-rule="evenodd"
              d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
              clip-rule="evenodd"
            ></path>
          </svg>
        </button>
      </h2>
      <div
        id={"accordion-collapse-body-" + props.count}
        className={`${collapse ? "hidden" : "block"}`}
        aria-labelledby={"accordion-collapse-heading-" + props.count}
      >
        <div className={props.count === -1 ? accPaperRounded : accPaper}>
          <p className="mb-2 text-gray-500 dark:text-gray-400">
            {props.content}
          </p>
        </div>
      </div>
    </div>
  )
}
type AccordionTypes = {
  content: any
}
export const HawaAccordian: React.FunctionComponent<AccordionTypes> = (
  props
) => {
  return (
    <div id="accordion-collapse" data-accordion="collapse">
      {props.content.map((acc: any, i: any) => {
        return (
          <AccordionItem
            title={acc.title}
            content={acc.content}
            count={props.content.length - 1 === i ? -1 : i}
          />
        )
      })}
    </div>
  )
}
