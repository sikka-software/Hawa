import React, { ReactElement, FC } from "react"

type DraggableCardTypes = {
  children: ReactElement
}

export const DraggableCard: FC<DraggableCardTypes> = (props) => {
  return (
    <div className="flex flex-row rounded bg-layoutPrimary-500 p-4">
      <button
        className="inline-flex items-center rounded bg-white p-2 text-center text-sm font-medium text-gray-900 hover:bg-gray-100 focus:outline-none focus:ring-4 focus:ring-gray-50 dark:bg-gray-800 dark:text-white dark:hover:bg-gray-700 dark:focus:ring-gray-600"
        type="button"
      >
        <svg
          className="h-6 w-6"
          aria-hidden="true"
          fill="currentColor"
          viewBox="0 0 20 20"
        >
          <path d="M10 6a2 2 0 110-4 2 2 0 010 4zM10 12a2 2 0 110-4 2 2 0 010 4zM10 18a2 2 0 110-4 2 2 0 010 4z"></path>
        </svg>
      </button>

      <div className="p-4">{props.children}</div>
    </div>
  )
}
