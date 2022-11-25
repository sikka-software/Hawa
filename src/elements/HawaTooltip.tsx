import clsx from "clsx"
import React, { useState } from "react"

type THawaToolTip = {
  children: React.ReactElement
  content: string
}

export const HawaTooltip: React.FunctionComponent<THawaToolTip> = ({
  children,
  content,
}) => {
  const [isHovered, setIsHovered] = useState<boolean>(false)
  let tooltipStyles = {
    default:
      "absolute top-5 opacity-0 left-0 z-10 inline-block w-fit max-w-xs rounded-lg bg-gray-900 py-2 px-3 text-center text-sm font-medium text-white opacity-100 shadow-sm transition-all duration-300 dark:bg-gray-700",
    hovered:
      "absolute top-5 opacity-100 left-0 z-10 inline-block w-fit max-w-xs rounded-lg bg-gray-900 py-2 px-3 text-center text-sm font-medium text-white opacity-100 shadow-sm transition-all duration-300 dark:bg-gray-700",
  }
  return (
    <div className="relative">
      <div
        className="flex h-fit w-fit items-center justify-center"
        onMouseEnter={() => {
          setIsHovered(true)
        }}
        onMouseLeave={() => {
          setIsHovered(false)
        }}
      >
        {children}
      </div>
      <div
        className={clsx(
          isHovered ? tooltipStyles["hovered"] : tooltipStyles["default"]
        )}
      >
        {content}
      </div>
    </div>
  )
}
