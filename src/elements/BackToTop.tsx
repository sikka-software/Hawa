import React, { FunctionComponent, ReactNode, useState, useEffect } from "react"
import { clsx } from "clsx"

type ComponentTypes = {
  paddingX?: number // Horizontal padding relative to the attached corner
  paddingY?: number // Vertical padding relative to the attached corner
  paddingThreshold?: number // Increase to the threshold of the scroll value that has to be passed for the button to appear
  corner?: "top-left" | "top-right" | "bottom-left" | "bottom-right"
  anchor: React.RefObject<HTMLInputElement>
}

export const BackToTop: FunctionComponent<ComponentTypes> = ({ ...props }) => {
  const [visible, setVisible] = useState<boolean>(false)

  const getCoords = () => {
    let anchor = props.anchor.current
    return [anchor.scrollTop, anchor.scrollLeft]
  }

  const onScroll = () => {
    let [scrollTop, scrollLeft] = getCoords()

    let rect = props.anchor.current.getBoundingClientRect()

    setVisible(scrollTop >= rect.height + (props.paddingThreshold || 100))
  }

  const backToTop = () => {
    props.anchor.current.scrollTo(0, 0)
  }

  useEffect(() => {
    props.anchor.current.addEventListener("scroll", onScroll)

    return () => {
      props.anchor.current.removeEventListener("scroll", onScroll)
    }
  }, [])

  // // Reference to tailwind classes of corners
  // const corners = {
  //   "top-left": ["top-0 left-0", "ml", "mt"],
  //   "top-right": ["top-0 right-0", "mr", "mt"],
  //   "bottom-left": ["bottom-0 left-0", "ml", "mb"],
  //   "bottom-right": ["bottom-0 right-0", "mr", "mb"],
  // }

  // const getClasses = () => {
  //   let [corner, horizontal, vertical] = corners[props.corner || "bottom-right"]

  //   return clsx(
  //     `${horizontal}-[${props.paddingX || 100}px]`,
  //     `${vertical}-[${props.paddingY || 0}px]`,
  //     `${corner}`,
  //     `${visible ? "block" : "hidden"}`
  //   )
  // }

  // Had to use react styles because tailwind didn't update top & left
  const getStyles = () => {
    let corner = props.corner || "bottom-right"
    let [vertical, horizontal] = corner.split("-")

    let style = {}

    style[vertical] = props.paddingY || 15
    style[horizontal] = props.paddingX || 30

    return style
  }

  return (
    <div
      className={clsx(
        "fixed rounded bg-blue-300 p-2 text-black transition-all hover:bg-blue-500",
        `${visible ? "block" : "hidden"}`
        // getClasses()
      )}
      style={getStyles()}
      onClick={backToTop}
    >
      Back to top
    </div>
  )
}
