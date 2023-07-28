import React, { FC } from "react"

type TimelineTypes = {
  title: any
  steps: StepTypes[]
}
type StepTypes = {
  date: string
  title: string
  description?: string
  actions?: any
}
export const Timeline: FC<TimelineTypes> = (props) => {
  return (
    <div>
      <ol className="relative border-l border-gray-200 dark:border-gray-700">
        {props.steps.map((step) => (
          <li className="mb-10 ml-4">
            <div className="absolute -left-1.5 mt-1.5 h-3 w-3 rounded-full border border-white bg-gray-200 dark:border-gray-900 dark:bg-gray-700"></div>
            <time className="mb-1 text-sm font-normal leading-none text-gray-400 dark:text-gray-500">
              {step.date}
            </time>
            <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
              {step.title}
            </h3>
            <p className="mb-4 text-base font-normal text-gray-500 dark:text-gray-400">
              {step.description}
            </p>
            {step.actions}
          </li>
        ))}
      </ol>
    </div>
  )
}
