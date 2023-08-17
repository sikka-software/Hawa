import React, { FC } from "react"
import { HawaTooltip } from "./HawaTooltip"

type UsageCardTypes = {
  tooltip?: any
  title: any
  percent: any
  currentUsage: any
}
export const UsageCard: FC<UsageCardTypes> = (props) => {
  return (
    <div className="flex w-full flex-col gap-0 border p-4">
      <div className="flex flex-row items-center gap-2">
        <span className="bg-white-200">{props.title}</span>
        {props.tooltip && (
          <HawaTooltip content={props.tooltip} position="right-top">
            <svg
              stroke="currentColor"
              aria-label="Exclamation Circle"
              fill="currentColor"
              stroke-width="0"
              viewBox="0 0 16 16"
              height="1em"
              width="1em"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zM8 4a.905.905 0 0 0-.9.995l.35 3.507a.552.552 0 0 0 1.1 0l.35-3.507A.905.905 0 0 0 8 4zm.002 6a1 1 0 1 0 0 2 1 1 0 0 0 0-2z"></path>
            </svg>
          </HawaTooltip>
        )}
      </div>
      <div className="bg-white-100 flex flex-row">
        <div>{props.currentUsage}</div>
        <div> ({props.percent}%)</div>
      </div>
      <div className="mt-2 h-2.5 w-full rounded-full bg-gray-200 dark:bg-gray-700">
        <div
          className="h-2.5 rounded-full bg-buttonPrimary-500"
          style={{
            width: `${props.percent ?? 0}%`,
          }}
        ></div>
      </div>
    </div>
  )
}
