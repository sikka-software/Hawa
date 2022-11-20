import React from "react"

type RangeTypes = {
  value?: any
  handleChange?: any
  startElement?: any
  endElement?: any
  label?: any
}

export const HawaRange: React.FunctionComponent<RangeTypes> = ({
  value,
  handleChange,
  startElement,
  endElement,
  label,
  ...props
}) => {
  const [rangeValue, setRangeValue] = React.useState(value)

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
          className="h-2 w-fit cursor-pointer appearance-none rounded-lg bg-gray-200 dark:bg-gray-700"
        />
        <div className="ml-2">{endElement}</div>{" "}
      </div>
    </div>
  )
}
