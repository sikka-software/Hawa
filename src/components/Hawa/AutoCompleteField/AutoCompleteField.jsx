import React from "react"
import { Controller, useFormContext } from "react-hook-form"
// import Autocomplete from "@material-ui/lab/Autocomplete";

export const AutoCompleteField = (props) => {
  const { control } = useFormContext()
  const { name, rules, shouldUnregister } = props

  return (
    <React.Fragment>
      <Controller
        name={name}
        rules={rules}
        control={control}
        shouldUnregister={shouldUnregister}
        className="theme_form_input"
        render={({ field: { onChange, value } }) => {
          return (
            <input type="text" />
            // <Autocomplete
            //   onChange={(e, data) => {
            //     onChange(data);
            //   }}
            //   value={value ?? ""}
            //   {...props}
            //   className={"theme_form_input"}
            // />
          )
        }}
      />
    </React.Fragment>
  )
}
