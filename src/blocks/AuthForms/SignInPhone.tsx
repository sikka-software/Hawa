import { useState, FC } from "react"
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

export const SignInPhone: FC<SignInPhoneTypes> = (props) => {
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
              handleChange={(e: any) => setUserPhone(e.target.value)}
              {...field}
            />
          )}
          rules={{
            required: props.phoneRequiredText,
          }}
        />
        <div className="mt-2"></div>
        <HawaButton color="primary" width="full">
          {props.SignInButtonText}
        </HawaButton>
      </form>
    </HawaContainer>
  )
}
