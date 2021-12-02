import React from "react"
import { Controller, useFormContext } from "react-hook-form"

const MuiRadioSelector = ({
  props,
  handleClick,
  handleChange,
  value,
  defaultValue,
}) => {
  value = value || defaultValue
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
      {props.options.map((option) => {
        return (
          <div
            key={option.label}
            className="radio_option"
            onClick={() => {
              if (handleChange) {
                handleChange(option.label)
              }
              handleClick(option.label)
            }}
            style={
              value.toLowerCase() === option.label.toLowerCase()
                ? {
                    backgroundColor: props.bgSelectedColor || "blue",
                    color: props.textSelectedColor || "lightgray",
                  }
                : null
            }
          >
            {option.text}
          </div>
        )
      })}
    </div>
  )
}

export const StyledRadioSelector = (props) => {
  const { control } = useFormContext()
  const { name, defaultValue, rules, shouldUnregister } = props

  return (
    <React.Fragment>
      <Controller
        render={({ field: { onChange, value } }) => (
          <MuiRadioSelector
            props={props}
            value={value}
            handleClick={onChange}
            handleChange={props.onChange}
            defaultValue={defaultValue}
          />
        )}
        name={name}
        rules={rules}
        control={control}
        defaultValue={defaultValue}
        shouldUnregister={shouldUnregister}
      />
    </React.Fragment>
  )
}
