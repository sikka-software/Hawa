import React from "react"

type ChipTypes = {
  label: any
}
export const HawaChip: React.FunctionComponent<ChipTypes> = (props) => {
  return (
    <span className="mr-2 h-fit rounded bg-blue-100 px-2.5 py-0.5 text-xs font-semibold text-blue-800 dark:bg-blue-200 dark:text-blue-800">
      {props.label}
    </span>
  )
}
