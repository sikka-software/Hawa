import clsx from "clsx"
import React, { useEffect, useRef, useState } from "react"

type THawaToolTip = {
  children?: React.ReactElement
  content?: string
  btnHovered?: any
  buttonRef?: any
  buttonID?: any
  size?: "normal" | "small" | "large"
  position?: "left" | "right" | "top" | "bottom"
}

export const HawaTooltip: React.FunctionComponent<THawaToolTip> = ({
  children,
  content,
  buttonID,
  size = "normal",
  position = "bottom",
}) => {
  const [hovered, setHovered] = useState(false)
  const [refHeight, setRefHeight] = useState(null)
  const [refWidth, setRefWidth] = useState(null)
  const [tooltipWidth, setTooltipWidth] = useState(null)
  const [tooltipHeight, setTooltipHeight] = useState(null)
  const tooltipRef = useRef(null)
  useEffect(() => {
    let attachedElement = document.getElementById(buttonID)
    setTooltipHeight(tooltipRef.current?.getBoundingClientRect().height)
    setTooltipWidth(tooltipRef.current?.getBoundingClientRect().width)
    if (attachedElement) {
      attachedElement?.addEventListener("mouseenter", () =>
        setHovered(!hovered)
      )
      attachedElement?.addEventListener("mouseleave", () =>
        setHovered(!hovered)
      )
      // console.log("dcnode", attachedElement?.getBoundingClientRect())
      let pos = attachedElement?.getBoundingClientRect()
      setRefHeight(pos.height)
      setRefWidth(pos.width)
      return () => {
        attachedElement?.removeEventListener("mouseover", () =>
          setHovered(false)
        )
        attachedElement?.removeEventListener("mouseout", () =>
          setHovered(false)
        )
      }
    }
  })

  let tooltipStyles = {
    default:
      "absolute opacity-0 z-10 inline-block w-fit max-w-xs rounded-lg bg-gray-900  text-center text-sm font-medium text-white opacity-100 shadow-sm transition-all duration-300 dark:bg-gray-700",
    hovered: `absolute  opacity-100  z-10 inline-block w-fit max-w-xs rounded-lg bg-gray-900 text-center text-sm font-medium text-white opacity-100 shadow-sm transition-all duration-300 dark:bg-gray-700`,
  }

  let sizeStyles = {
    normal: "py-2 px-3",
    small: "py-1 px-1 text-[10px]",
  }
  let positionStyles = {
    top: "-top-10 right-0",
    left: `-top-2 right-8 `,
    bottom: `top-0 translate-y-[` + 30 + `px] right-0`,
    // bottom: `top-0 translate-y-[${38}px] right-0`,
    right: "-top-2 left-8",
  }
  // console.log("pos", refHeight)
  // const styles = {
  //   transform: `translate(${x}px, ${y}px)`,
  // }
  // console.log("ref is ", tooltipRef.current?.getBoundingClientRect().width)
  return (
    <div
      ref={tooltipRef}
      className={clsx(
        hovered ? tooltipStyles["hovered"] : tooltipStyles["default"],
        // positionStyles[position],
        // positionS,
        sizeStyles[size]
        // position === "top" ? `  origin-top -translate-y-[${38 * 2}px] ` : ""

        // "translate-x-[100px]"
      )}
      style={
        position === "right"
          ? {
              transform: `translate(5px,-${0}px)`,
            }
          : position === "left"
          ? {
              transform: `translate(-${refWidth + tooltipWidth + 6}px,-${0}px)`,
            }
          : position === "top"
          ? {
              transform: `translate(-${tooltipWidth}px,-${
                tooltipHeight + 6
              }px)`,
            }
          : position === "bottom"
          ? {
              transform: `translate(-${tooltipWidth}px,${refHeight + 6}px)`,
            }
          : { backgroundColor: "red" }
      }
    >
      {content}
    </div>
  )
}
