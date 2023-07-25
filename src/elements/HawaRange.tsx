import React, { FC, useState } from "react"

type RangeTypes = {
  value?: any
  handleChange?: any
  startElement?: any
  endElement?: any
  label?: string
  min?: any
  max?: any
}

export const HawaRange: FC<RangeTypes> = ({
  value,
  handleChange,
  startElement,
  endElement,
  label,
  ...props
}) => {
  const [rangeValue, setRangeValue] = useState(value)

  return (
    <div {...props}>
      {label && (
        <label
          htmlFor="default-range"
          className="mb-2 block text-sm font-medium text-gray-900 dark:text-gray-300"
        >
          {label}
        </label>
      )}
      <div className="flex w-fit flex-row items-center justify-center">
        <div className="mr-2">{startElement}</div>{" "}
        <input
          id="default-range"
          type="range"
          value={rangeValue}
          onChange={(e) => {
            setRangeValue(e.target.value)
            handleChange(e)
          }}
          className="h-2 w-fit cursor-pointer appearance-none rounded bg-gray-200 dark:bg-gray-700"
        />
        <div className="ml-2">{endElement}</div>{" "}
      </div>
    </div>
  )
}
