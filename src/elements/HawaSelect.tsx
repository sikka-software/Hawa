import clsx from "clsx"
import React from "react"
import Select from "react-select"
import CreatableSelect from "react-select/creatable"
type OptionTypes = {
  cx: any
  children: any
  getStyles: any
  innerProps: any
  innerRef: any
  size?: "small" | "normal" | "large"
}
const Option: React.FunctionComponent<OptionTypes> = ({
  cx,
  children,
  getStyles,
  innerProps,
  innerRef,
  size = "normal",
  ...props
}) => (
  <div
    ref={innerRef}
    className="m-2 flex flex-row items-center justify-between rounded  p-1 px-3 hover:bg-buttonPrimary-500 hover:text-white"
    {...innerProps}
  >
    {children}
  </div>
)

type ControlTypes = {
  cx: any
  children: any
  getStyles: any
  innerProps: any
  innerRef: any
  size?: "small" | "normal" | "large"
}
const Control: React.FunctionComponent<ControlTypes> = ({
  cx,
  children,
  getStyles,
  innerProps,
  innerRef,
  size = "normal",
  ...props
}) => {
  let sizeStyles = {
    small: "h-7 text-xs",
    normal: "h-10  text-sm",
    large: "",
  }
  return (
    <div
      ref={innerRef}
      className={clsx(
        sizeStyles[size],
        "flex  w-full rounded border border-gray-300 bg-gray-50 text-gray-900 focus:border-blue-500 focus:ring-blue-500 dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder-gray-400 dark:focus:border-blue-500 dark:focus:ring-blue-500"
      )}
      {...innerProps}
      // {...props}
    >
      {children}
    </div>
  )
}
type MenuTypes = {
  cx: any
  children: any
  getStyles: any
  innerProps: any
  innerRef: any
}
const Menu: React.FunctionComponent<MenuTypes> = ({
  cx,
  children,
  getStyles,
  innerProps,
  innerRef,
  ...props
}) => {
  return (
    <div
      className="absolute z-10 mt-2 w-full rounded bg-white ring-1 ring-blue-200"
      ref={innerRef}
      {...innerProps}
      // {...props}
    >
      {children}
    </div>
  )
}

type SelectTypes = {
  label?: any
  isCreatable?: any
  options?: any[any]
  isClearable?: any
  isMulti?: any
  isSearchable?: any
  onChange?: any
  helperText?: any
  onInputChange?: any
  native?: any
  fullWidth?: any
  value?: any
  children?: any
  getOptionLabel?: any
  // size?
}
export const HawaSelect: React.FunctionComponent<SelectTypes> = (props) => {
  return (
    <div className="">
      {props.label && (
        <label className="mb-2 block text-sm font-medium text-gray-900 dark:text-gray-300">
          {props.label}
        </label>
      )}
      {!props.isCreatable && (
        <Select
          options={props.options}
          isClearable={props.isClearable}
          isMulti={props.isMulti}
          isSearchable={props.isSearchable}
          onChange={(newValue: any, action) =>
            // props.onChange(newValue.label, action)
            props.onChange(newValue, action)
          }
          components={{
            Control,
            Option,
            Menu,
          }}
          getOptionLabel={props.getOptionLabel}
        />
      )}
      {props.isCreatable && (
        <CreatableSelect
          styles={{
            input: (base) => ({
              ...base,
              "input:focus": {
                boxShadow: "none",
              },
            }),

            control: (base) => ({
              ...base,
              borderRadius: "0.75rem",
            }),
            menu: (base) => ({
              ...base,
              borderRadius: "0.75rem",
              padding: 0,
              display: "flex",
              justifyContent: "center",
            }),
            menuList: (base) => ({
              ...base,
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              alignItems: "center",
              width: "100%",
            }),
            option: (base) => ({
              ...base,
              borderRadius: "0.75rem",
              margin: 3,
              width: "98%",
            }),
          }}
          options={props.options}
          isClearable={props.isClearable}
          isMulti={props.isMulti}
          isSearchable={props.isSearchable}
          onCreateOption={() => console.log("im changing")}
          onChange={(newValue, action) => props.onChange(newValue, action)}
          onInputChange={(newValue, action) =>
            props.onInputChange(newValue, action)
          }
        />
      )}
      {props.helperText && (
        <p className="mt-2 text-sm text-red-600 dark:text-red-500">
          {props.helperText}
        </p>
      )}
    </div>
  )
}
