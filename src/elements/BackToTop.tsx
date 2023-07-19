import React, { FunctionComponent, useState, useEffect } from "react"
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
      props.anchor.current?.removeEventListener("scroll", onScroll)
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
        "fixed w-fit rounded bg-blue-300 p-2 text-black transition-all hover:bg-blue-500 ",
        `${visible ? "inline-block" : "hidden"}`
      )}
      style={getStyles()}
      onClick={backToTop}
    >
      {/* Back to top arrow 👇*/}
      <svg
        className={clsx(
          "h-6 w-6 shrink-0 rotate-180 transition-all  disabled:bg-gray-200"
        )}
        viewBox="0 0 20 20"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          fillRule="evenodd"
          d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
          clipRule="evenodd"
        ></path>
      </svg>
    </div>
  )
}
