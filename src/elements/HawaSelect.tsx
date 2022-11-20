import Select from "react-select"
import CreatableSelect from "react-select/creatable"
type OptionTypes = {
  cx: any
  children: any
  getStyles: any
  innerProps: any
  innerRef: any
}
const Option: React.FunctionComponent<OptionTypes> = ({
  cx,
  children,
  getStyles,
  innerProps,
  innerRef,
  ...props
}) => (
  <div
    ref={innerRef}
    className="m-2 flex flex-row items-center justify-between rounded-lg p-1 px-3 hover:bg-blue-200"
    {...innerProps}
  >
    {children}
  </div>
)

const Control = ({
  cx,
  children,
  getStyles,
  innerProps,
  innerRef,
  ...props
}) => {
  return (
    <div
      ref={innerRef}
      className="flex h-10 w-full rounded-lg border border-gray-300 bg-gray-50 text-sm text-gray-900 focus:border-blue-500 focus:ring-blue-500 dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder-gray-400 dark:focus:border-blue-500 dark:focus:ring-blue-500"
      {...innerProps}
      // {...props}
    >
      {children}
    </div>
  )
}
const Menu = ({ cx, children, getStyles, innerProps, innerRef, ...props }) => {
  return (
    <div
      className="absolute mt-2 w-full rounded-lg bg-white"
      ref={innerRef}
      {...innerProps}
      // {...props}
    >
      {children}
    </div>
  )
}

export const HawaSelect = (props) => {
  return (
    <div className="mb-3">
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
          onChange={(newValue, action) =>
            props.onChange(newValue.label, action)
          }
          components={{
            Control,
            Option,
            Menu,
          }}
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
          onChange={(newValue, action) => {
            console.log("this is onChange", newValue)
            props.onChange(newValue, action)
          }}
          onInputChange={(newValue, action) => {
            console.log("onInputChange====", newValue)
            props.onInputChange(newValue, action)
          }}
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