import React, { useState } from "react"
import { Controller, useForm } from "react-hook-form"
import { HawaButton, HawaPhoneInput } from "../../elements"
import { HawaContainer } from "../../layout"

type SignInPhoneTypes = {
  value: any
  onSubmit: any
  country: any
  label: any
  onChange: any
  phoneRequiredText: any
  SignInButtonText: any
}

export const SignInPhone: React.FunctionComponent<SignInPhoneTypes> = (
  props
) => {
  const [phone, setPhone] = useState("")
  const methods = useForm()
  const {
    formState: { errors },
    handleSubmit,
    control,
  } = methods
  return (
    <HawaContainer>
      <form onSubmit={handleSubmit(props.onSubmit)}>
        <Controller
          control={control}
          name="phone"
          render={({ field }) => (
            <HawaPhoneInput
              country={props.country ?? ""}
              label={props.label ?? ""}
              onChange={(e) => {
                props.onChange(e)
                setPhone(e)
              }}
              {...field}
              value={props.value ?? props.value}
            />
          )}
          rules={{
            required: props.phoneRequiredText,
          }}
        />
        <div className="mt-2"></div>
        <HawaButton color="primary" width="full" type="submit">
          {props.SignInButtonText}
        </HawaButton>
      </form>
    </HawaContainer>
  )
}
