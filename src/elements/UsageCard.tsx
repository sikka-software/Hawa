import React, { FC } from "react"
import { HawaTooltip } from "./HawaTooltip"
import { BsExclamationCircleFill } from "react-icons/bs"

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
            <BsExclamationCircleFill />
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
