import React, { FC } from "react"
import { Controller, useFormContext } from "react-hook-form"

type TAutoCompleteFieldTypes = {
  name: string
  rules: any
  shouldUnregister: boolean
}
export const AutoCompleteField: FC<TAutoCompleteFieldTypes> = (props) => {
  const { control } = useFormContext()
  const { name, rules, shouldUnregister } = props

  return (
    <>
      <Controller
        name={name}
        rules={rules}
        control={control}
        shouldUnregister={shouldUnregister}
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
    </>
  )
}
