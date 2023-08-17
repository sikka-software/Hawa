import React, { FC, RefObject, useState, useEffect, useRef } from "react"
import { clsx } from "clsx"

type ComponentTypes = {
  paddingX?: number // Horizontal padding relative to the attached corner
  paddingY?: number // Vertical padding relative to the attached corner
  paddingThreshold?: number // Increase to the threshold of the scroll value that has to be passed for the button to appear
  corner?: "top-left" | "top-right" | "bottom-left" | "bottom-right"
  anchor: RefObject<HTMLInputElement>
}

export const BackToTop: FC<ComponentTypes> = ({ ...props }) => {
  const [visible, setVisible] = useState<boolean>(false)
  const [rect, _setRect] = useState<DOMRect>(null)
  const _rect = useRef(rect)
  const setRect = (data) => {
    _rect.current = data
    _setRect(data)
  }

  const self = useRef(null)

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

  // FIXME: Observers and listeners run twice
  useEffect(() => {
    if (!props.anchor.current) return

    props.anchor.current.addEventListener("scroll", onScroll)

    // Listens to rect changes. Alternatives like ResizeObserver & IntersectionObserver fail to detect positional changes consistently
    let interval = setInterval(() => {
      if (!props.anchor.current) return

      let newRect = props.anchor.current.getBoundingClientRect()
      if (_rect.current == null) return setRect(newRect)

      if (
        !(
          _rect.current.top == newRect.top &&
          _rect.current.left == newRect.left &&
          _rect.current.width == newRect.width &&
          _rect.current.height == newRect.height
        )
      ) {
        setRect(newRect)
      }
    }, 1)

    return () => {
      props.anchor.current?.removeEventListener("scroll", onScroll)
      clearInterval(interval)
    }
  }, [])

  const getStyles = () => {
    if (!props.anchor.current) return {}

    let corner = props.corner || "bottom-right"
    let [vertical, horizontal] = corner.split("-")

    let anchorRect = props.anchor.current.getBoundingClientRect()
    let selfRect = self.current.getBoundingClientRect()

    let width = horizontal == "right" ? anchorRect.width - selfRect.width : 0
    let height = vertical == "bottom" ? anchorRect.height - selfRect.height : 0

    let style = {
      top:
        anchorRect.y +
        height +
        (vertical == "bottom" ? -1 : 1) * (props.paddingX || 10),
      left:
        anchorRect.x +
        width +
        (horizontal == "right" ? -1 : 1) * (props.paddingX || 25),
    }

    return style
  }

  return (
    <div
      className={clsx(
        "fixed w-fit rounded bg-blue-300 p-2 text-black transition-all hover:bg-blue-500",
        `${
          visible
            ? "pointer-events-all opacity-100"
            : "pointer-events-none opacity-0"
        }`
      )}
      style={{
        ...getStyles(),
        transitionProperty: "opacity, background-color",
      }}
      onClick={backToTop}
      ref={self}
    >
      {/* Back to top arrow 👇*/}
      <svg
        className={clsx(
          "h-6 w-6 shrink-0 rotate-180 transition-all  disabled:bg-gray-200"
        )}
        viewBox="0 0 20 20"
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
