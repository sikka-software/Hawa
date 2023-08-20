import React, { useState, FC, ChangeEvent } from "react"

type ColorPickerTypes = {
  /** The hex code for the color */
  color?: any
  /** Fires everytime the color changes */
  handleChange?: (e: ChangeEvent<HTMLInputElement>) => void
}

export const HawaColorPicker: FC<ColorPickerTypes> = (props) => {
  const [selectedColor, setSelectedColor] = useState(props.color)
  return (
    <div className={`flex w-fit flex-row rounded border p-0`}>
      <div
        style={{ backgroundColor: selectedColor }}
        className="rounded-bl-lg rounded-tl-lg"
      >
        <input
          type="color"
          value={selectedColor}
          onChange={(e) => {
            setSelectedColor(e.target.value)
            props.handleChange(e)
          }}
          className="opacity-0"
        />
      </div>

      <input
        type="text"
        onChange={(e) => {
          setSelectedColor(e.target.value)
          props.handleChange(e)
        }}
        value={selectedColor}
        className="w-24 bg-background  rounded-br-lg rounded-tr-lg pl-2 pr-2"
      />
    </div>
  )
}
