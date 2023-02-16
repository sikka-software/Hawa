import clsx from "clsx"
import React, { useEffect, useRef, useState } from "react"

// TODO: fix it in RTL

type THawaToolTip = {
  children?: React.ReactElement
  content?: string
  btnHovered?: any
  buttonRef?: any
  direction?: "rtl" | "ltr"
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
  position = "top-right",
  direction = "ltr",
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
    "absolute z-10   rounded bg-gray-900  text-center text-sm font-medium text-white shadow-sm transition-all duration-300 dark:bg-gray-700"
  let sizeStyles = {
    normal: "py-2 px-3 leading-2",
    small: "py-2 px-2 text-[10px] leading-tight",
    large: "py-2 px-2 text-lg leading-tight",
  }
  let tooltipCoordinates
  let spacing = 5
  switch (position) {
    case "top-right":
      tooltipCoordinates =
        direction === "rtl"
          ? `${tooltipWidth - childrenWidth}px, -${
              tooltipHeight + childrenHeight + spacing
            }px`
          : `0px, -${tooltipHeight + childrenHeight + spacing}px`
      break
    case "top-left":
      tooltipCoordinates =
        direction === "rtl"
          ? `${0}px, -${tooltipHeight + childrenHeight + spacing}px`
          : `-${tooltipWidth - childrenWidth}px, -${
              tooltipHeight + childrenHeight + spacing
            }px`
      break
    case "bottom-right":
      tooltipCoordinates =
        direction === "rtl"
          ? `${tooltipWidth - childrenWidth}px, ${spacing}px`
          : `-${0}px, ${spacing}px`
      break
    case "bottom-left":
      tooltipCoordinates =
        direction === "rtl"
          ? `0px, ${spacing}px`
          : `-${tooltipWidth - childrenWidth}px,${spacing}px`
      break
    case "right-bottom":
      tooltipCoordinates =
        direction === "rtl"
          ? `${tooltipWidth + spacing}px, -${childrenHeight}px`
          : `${childrenWidth + spacing}px, -${childrenHeight}px`
      break
    case "right-top":
      tooltipCoordinates =
        direction === "rtl"
          ? `${tooltipWidth + spacing}px, -${tooltipHeight}px`
          : `${childrenWidth + spacing}px, -${tooltipHeight}px`
      break
    case "left-bottom":
      tooltipCoordinates =
        direction === "rtl"
          ? `-${childrenWidth + spacing}px, -${childrenHeight}px`
          : `-${tooltipWidth + spacing}px, -${childrenHeight}px`
      break
    case "left-top":
      tooltipCoordinates =
        direction === "rtl"
          ? `-${childrenWidth + spacing}px, -${tooltipHeight}px`
          : `-${tooltipWidth + spacing}px, -${tooltipHeight}px`
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
        style={{
          position: "absolute",
          width: "max-content",
          transform: `translate(${tooltipCoordinates})`,
          opacity: hovered ? "1" : "0",
          maxWidth: "200px",
        }}
        className={clsx(defaultTooltipStyles, sizeStyles[size])}
      >
        {content}
      </div>
    </div>
  )
}
