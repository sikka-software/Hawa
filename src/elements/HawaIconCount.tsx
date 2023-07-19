import React from "react"

type IconCountTypes = {
  icon: any
  count?: string
}

export const HawaIconCount: React.FunctionComponent<IconCountTypes> = (
  props
) => {
  return (
    <div className="flex h-fit  flex-row items-center  gap-2 px-2">
      <div>{props.icon}</div>
      <div className="text-sm">{props.count}</div>
    </div>
  )
}
