import React, { useState } from "react"
import { Controller, useForm } from "react-hook-form"
import { HawaButton, HawaPhoneInput } from "../../elements"
import { HawaContainer } from "../../layout"

type SignInPhoneTypes = {
  value: any
  onSubmit: any
  country: any
  label: any
  handlePhoneChange: any
  phoneRequiredText: any
  SignInButtonText: any
  handleSignIn: any
}

export const SignInPhone: React.FunctionComponent<SignInPhoneTypes> = (
  props
) => {
  const methods = useForm()
  const {
    formState: { errors },
    handleSubmit,
    control,
  } = methods

  const [userPhone, setUserPhone] = useState("")
  return (
    <HawaContainer>
      <form
        onSubmit={(e) => {
          e.preventDefault()
          props.handleSignIn(userPhone)
        }}
      >
        <Controller
          control={control}
          name="phone"
          render={({ field }) => (
            <HawaPhoneInput
              country={props.country ?? ""}
              label={props.label ?? ""}
              handleChange={(e: any) => {
                console.log("test")
                setUserPhone(e.target.value)
              }}
              {...field}
              // handleChange={(e: any) => {
              //   // props.handlePhoneChange(e.target.value)
              //   setUserPhone(e.target.value)
              // }}
              // value={props.value ?? props.value}
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
