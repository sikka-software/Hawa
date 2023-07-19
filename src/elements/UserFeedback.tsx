import { FC } from "react"

type ComponentTypes = {
  title?: string
  question: string
  options?: []
  texts?: {
    least: string
    most: string
  }
  onOptionClicked?: (option) => void
}
export const UserFeedback: FC<ComponentTypes> = ({ ...props }) => {
  return (
    <div className="relative flex w-full max-w-sm flex-col gap-2 rounded bg-white p-4 shadow-md">
      <div className="absolute left-2 top-2 p-1.5 text-sm">{props.title}</div>
      <button
        type="button"
        className="absolute right-2 top-2 inline-flex h-8 w-8 rounded p-1.5 text-gray-400 hover:bg-gray-100 hover:text-gray-900 focus:ring-2 focus:ring-gray-300 dark:bg-gray-800 dark:text-gray-500 dark:hover:bg-gray-700 dark:hover:text-white"
        data-dismiss-target="#toast-default"
        aria-label="Close"
        // onClick={() => setClosed(true)}
      >
        <svg
          aria-hidden="true"
          className="h-5 w-5"
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
      </button>
      <div className="mt-8">{props.question}</div>
      <div className="flex w-full flex-row gap-1 rounded">
        {props.options.map((op) => (
          <span
            onClick={() => props.onOptionClicked(op)}
            className="w-full cursor-pointer rounded border bg-white p-4 text-center transition-all hover:bg-gray-100"
          >
            {op}
          </span>
        ))}
      </div>
      {props.texts && (
        <div className=" flex flex-row justify-between text-xs">
          <span>{props.texts.least}</span>
          <span>{props.texts.most}</span>
        </div>
      )}
    </div>
  )
}
