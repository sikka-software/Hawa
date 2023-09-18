import clsx from "clsx"
import React, { FC } from "react"
import Select from "react-select"
import CreatableSelect from "react-select/creatable"
import { Label } from "./Label"
import { cn } from "../util"
import { Skeleton } from "./Skeleton"

type ControlTypes = {
  cx: any
  children: any
  getStyles: any
  innerProps: any
  innerRef: any
  size?: "small" | "normal" | "large"
}
const Control: FC<ControlTypes> = ({
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
    normal: "h-[2.36rem]  text-sm",
    large: "",
  }
  return (
    <div
      ref={innerRef}
      className={clsx(
        sizeStyles[size],
        "flex  w-full rounded border bg-background text-gray-900 focus:border-blue-500 focus:ring-blue-500 dark:focus:ring-blue-500"
      )}
      {...innerProps}
      // {...props}
    >
      {children}
    </div>
  )
}
// The options container
type MenuTypes = {
  cx: any
  children: any
  getStyles: any
  innerProps: any
  innerRef: any
}
const Menu: FC<MenuTypes> = ({
  cx,
  children,
  getStyles,
  innerProps,
  innerRef,
  ...props
}) => {
  return (
    <div
      className="absolute z-10 mt-2 flex w-full  flex-col justify-start  rounded  border  bg-background  p-1.5"
      ref={innerRef}
      {...innerProps}
      // {...props}
    >
      {children}
    </div>
  )
}
// The single options
type OptionTypes = {
  cx: any
  children: any
  getStyles: any
  innerProps: any
  innerRef: any
  size?: "small" | "normal" | "large"
}
const Option: FC<OptionTypes> = ({
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
    className="flex cursor-pointer select-none flex-row items-center justify-between rounded-inner p-1 px-2 hover:bg-primary hover:text-primary-foreground"
    {...innerProps}
  >
    {children}
  </div>
)

type SelectTypes = {
  label?: string
  options?: {
    value: any
    label: any
  }[]
  isCreatable?: boolean
  isClearable?: boolean
  isMulti?: boolean
  isSearchable?: boolean
  onChange?: any
  helperText?: any
  onInputChange?: any
  native?: any
  width?: "full" | "small"
  value?: any
  children?: any
  getOptionLabel?: any
  disabled?: boolean
  defaultValue?: any
  isLoading?: any
}
export const HawaSelect: FC<SelectTypes> = (props) => {
  return (
    <div className=" flex w-full flex-col gap-2">
      {props.label && <Label>{props.label}</Label>}

      {props.isLoading ? (
        <Skeleton className="h-[38px] w-full" />
      ) : !props.isCreatable ? (
        <Select
          classNames={{
            // control: () => "bg-blue-500 w-full",
            container: () =>
              cn(
                "rounded",
                props.disabled ? "cursor-not-allowed" : "cursor-pointer"
              ),
            placeholder: () => "px-2 text-muted-foreground",
            input: () => "text-white px-2",
            valueContainer: () => "text-white dark:text-muted-foreground",
            singleValue: () => "text-black dark:text-white px-2",
            indicatorsContainer: () =>
              " px-2 cursor-pointer text-muted-foreground",
          }}
          unstyled
          isDisabled={props.disabled}
          options={props.options}
          defaultValue={props.defaultValue}
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
      ) : (
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
