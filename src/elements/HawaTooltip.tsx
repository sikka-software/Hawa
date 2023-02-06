import clsx from "clsx"
import React, { useEffect, useRef, useState } from "react"

type THawaToolTip = {
  children?: React.ReactElement
  content?: string
  btnHovered?: any
  buttonRef?: any
  buttonID?: any
  size?: "normal" | "small" | "large"
  position?:
    | "left-top"
    | "left-bottom"
    | "right-top"
    | "right-bottom"
    | "top-right"
    | "top-left"
    | "bottom-right"
    | "bottom-left"
}

export const HawaTooltip: React.FunctionComponent<THawaToolTip> = ({
  children,
  content,
  size = "normal",
  position,
}) => {
  const [hovered, setHovered] = useState(false)

  const childrenRef = useRef(null)
  const [childrenHeight, setChildrenHeight] = useState(null)
  const [childrenWidth, setChildrenWidth] = useState(null)

  const tooltipRef = useRef(null)
  const [tooltipWidth, setTooltipWidth] = useState(null)
  const [tooltipHeight, setTooltipHeight] = useState(null)

  useEffect(() => {
    setTooltipHeight(tooltipRef.current?.getBoundingClientRect().height)
    setTooltipWidth(tooltipRef.current?.getBoundingClientRect().width)
    setChildrenHeight(childrenRef.current?.getBoundingClientRect().height)
    setChildrenWidth(childrenRef.current?.getBoundingClientRect().width)
  })

  let defaultTooltipStyles =
    "absolute z-10 inline-block w-fit max-w-xs rounded bg-gray-900  text-center text-sm font-medium text-white shadow-sm transition-all duration-300 dark:bg-gray-700"
  let sizeStyles = {
    normal: "py-2 px-3 leading-2",
    small: "py-2 px-2 text-[10px] leading-tight",
    large: "py-2 px-2 text-lg leading-tight",
  }
  let tooltipCoordinates
  let spacing = 5
  switch (position) {
    case "top-right":
      tooltipCoordinates = `0px, -${tooltipHeight + childrenHeight + spacing}px`
      break
    case "top-left":
      tooltipCoordinates = `-${tooltipWidth - childrenWidth}px, -${
        tooltipHeight + childrenHeight + spacing
      }px`
      break
    case "bottom-right":
      tooltipCoordinates = `0px, ${spacing}px`
      break
    case "bottom-left":
      tooltipCoordinates = `-${tooltipWidth - childrenWidth}px,${spacing}px`
      break
    case "right-bottom":
      tooltipCoordinates = `${childrenWidth + spacing}px, -${childrenHeight}px`
      break
    case "right-top":
      tooltipCoordinates = `${childrenWidth + spacing}px, -${tooltipHeight}px`
      break
    case "left-bottom":
      tooltipCoordinates = `-${tooltipWidth + spacing}px, -${childrenHeight}px`
      break
    case "left-top":
      tooltipCoordinates = `-${tooltipWidth + spacing}px, -${tooltipHeight}px`
      break

    default:
      tooltipCoordinates = `-${tooltipWidth / 2}px, -${
        childrenHeight + tooltipHeight / 2
      }px`

      break
  }
  return (
    <div
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      <div ref={childrenRef}>{children}</div>
      <div
        ref={tooltipRef}
        className={clsx(defaultTooltipStyles, sizeStyles[size])}
        style={{
          position: "absolute",
          transform: `translate(${tooltipCoordinates})`,
          opacity: hovered ? "1" : "0",
        }}
      >
        {content}
      </div>
    </div>
  )
}
