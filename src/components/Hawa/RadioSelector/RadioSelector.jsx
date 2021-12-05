import React from "react"
import { useState } from "react"

const MuiRadioSelector = ({ props, defaultValue }) => {
  const [options, setOptions] = useState(props.options)
  const [value, setValue] = useState(defaultValue)
  return (
    <div
      style={{
        backgroundColor: "white",
        display: "flex",
        flexDirection: "row",
        borderRadius: props.bdRadius || 10,
        marginBottom: 10,
      }}
    >
      {options.map((o) => {
        return (
          <div
            key={o.label}
            className="radio_option"
            onClick={() => {
              setValue(o.label)
              if (props.handleChange) {
                props.handleChange()
              }
            }}
            style={
              value.toLowerCase() === o.label.toLowerCase()
                ? {
                    backgroundColor: props.bgSelectedColor || "blue",
                    color: props.textSelectedColor || "lightgray",
                  }
                : null
            }
          >
            {o.text}
          </div>
        )
      })}
    </div>
  )
}

export const StyledRadioSelector = (props) => {
  return (
    <React.Fragment>
      <MuiRadioSelector
        props={props}
        value={props.value}
        handleClick={props.onChange}
        handleChange={props.onChange}
        defaultValue={props.defaultValue}
      />
    </React.Fragment>
  )
}
