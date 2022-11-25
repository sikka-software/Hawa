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
}

export const SignInPhone: React.FunctionComponent<SignInPhoneTypes> = (
  props
) => {
  const {
    formState: { errors },
    handleSubmit,
    control,
  } = useForm()

  const [userPhone, setUserPhone] = useState("")
  const handlingSubmit = () => {
    console.log("submitting ", userPhone)
  }
  return (
    <HawaContainer maxWidth="small">
      <form
        onSubmit={handleSubmit(() => console.log("testing submit"))}
        // onSubmit={(e) => {
        //   e.preventDefault()
        //   console.log("testing submit")
        // }}
      >
        <Controller
          control={control}
          name="phone"
          render={({ field }) => (
            <HawaPhoneInput
              country={props.country ?? ""}
              label={props.label ?? ""}
              {...field}
              handleChange={(e: any) => {
                console.log("test")
                setUserPhone(e.target.value)
              }}
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
