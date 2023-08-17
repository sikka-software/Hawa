import React, { useEffect, useState, FC } from "react"
import clsx from "clsx"

type Item = {
  label?: string
  icon?: JSX.Element
}

type ComponentTypes = {
  items: Item[]
  index?: number
  arrowSize?: number
  labelSize?: "small" | "medium" | "big"
}

const Arrow = (props: {
  icon?: any
  size?: number
  onClick?: () => void
  disabled?: boolean
  direction?: "right" | "left"
}) => {
  return (
    <svg
      onClick={props.onClick || (() => {})}
      className={clsx(
        "h-6 w-6 shrink-0  transition-all  disabled:bg-gray-200",
        props.direction === "right" ? "-rotate-90" : "rotate-90",
        props.disabled ? "text-gray-300" : "cursor-pointer hover:scale-150"
      )}
      fill={props.disabled && "grey"}
      viewBox="0 0 20 20"
    >
      <path
        fillRule="evenodd"
        d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
        clipRule="evenodd"
      ></path>
    </svg>
  )
}

export const ArrowCarousel: FC<ComponentTypes> = (props) => {
  const [index, setIndex] = useState(props.index || 0)

  useEffect(() => {
    console.log(`INDEX CHANGED TO: ${index}`)
  }, [index])

  const sizes = {
    small: ["", -8],
    medium: ["2", -11],
    big: ["3", -16],
  }

  return (
    <div className="align-center box-boorder relative flex h-min w-min flex-row items-center justify-center rounded bg-layoutPrimary-500 p-4 py-0 pb-2 pt-2 shadow-md">
      <Arrow
        direction="left"
        // size={props.arrowSize || 48}
        disabled={index == 0}
        onClick={() => {
          if (index != 0) setIndex(index - 1)
        }}
      />

      <div
        className={`relative m-5  my-0 box-border flex h-full flex-col items-center justify-center  py-6 pt-0 `}
      >
        <div>{props.items[index].icon}</div>
        <div
          className={"absolute bottom-1 mb-0 mt-2 select-none"}
          // {`absolute bottom-0 text-${
          //   sizes[props.labelSize || "small"][0]
          // }xl `}
          // style={{
          //   marginBottom: sizes[props.labelSize || "small"][1],
          // }}
        >
          {props.items[index].label}
        </div>
      </div>

      <Arrow
        direction="right"
        // size={props.arrowSize || 48}
        disabled={index == props.items.length - 1}
        onClick={() => {
          if (index != props.items.length - 1) setIndex(index + 1)
        }}
      />
    </div>
  )
}
