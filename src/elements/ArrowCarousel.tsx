import React from "react"

import { FaArrowLeft, FaArrowRight } from "react-icons/fa"

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
  icon: any
  size: number
  onClick?: () => void
  disabled?: boolean
}) => {
  return (
    <props.icon
      className={
        props.disabled || false ? "text-gray-300" : "hover:text-gray-500"
      }
      size={props.size}
      onClick={props.onClick || (() => {})}
    />
  )
}

export const ArrowCarousel: React.FunctionComponent<ComponentTypes> = (
  props
) => {
  const [index, setIndex] = React.useState(props.index || 0)

  React.useEffect(() => {
    console.log(`INDEX CHANGED TO: ${index}`)
  }, [index])

  const sizes = {
    small: ["", -8],
    medium: ["2", -11],
    big: ["3", -16],
  }

  return (
    <div className="align-center box-boorder relative flex h-min w-min flex-row items-center justify-center rounded bg-white p-4 py-6 shadow-md">
      <Arrow
        icon={FaArrowLeft}
        size={props.arrowSize || 48}
        disabled={index == 0}
        onClick={() => {
          if (index != 0) setIndex(index - 1)
        }}
      />

      <div
        className={`relative box-border flex h-min flex-col items-center justify-center p-5`}
      >
        <div>{props.items[index].icon}</div>
        <div
          className={`absolute bottom-0 text-${
            sizes[props.labelSize || "small"][0]
          }xl `}
          style={{
            marginBottom: sizes[props.labelSize || "small"][1],
          }}
        >
          {props.items[index].label}
        </div>
      </div>

      <Arrow
        icon={FaArrowRight}
        size={props.arrowSize || 48}
        disabled={index == props.items.length - 1}
        onClick={() => {
          if (index != props.items.length - 1) setIndex(index + 1)
        }}
      />
    </div>
  )
}
