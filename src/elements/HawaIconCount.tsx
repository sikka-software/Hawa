import { FC } from "react"

type IconCountTypes = {
  /** The icon of the counter */
  icon: JSX.Element
  /** The text next to the icon */
  count?: string
}

export const HawaIconCount: FC<IconCountTypes> = (props) => {
  return (
    <div className="flex h-fit  flex-row items-center  gap-2 px-2">
      <div>{props.icon}</div>
      <div className="text-sm">{props.count}</div>
    </div>
  )
}
