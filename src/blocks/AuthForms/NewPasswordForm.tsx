import { useState, FC } from "react"
import { HawaTextField, HawaAlert, HawaButton } from "../../elements"
import { Controller, FormProvider, useForm } from "react-hook-form"
import { HawaContainer } from "../../layout"

type NewPasswordTypes = {
  handleNewPassword: () => void
  passwordChanged: any
  texts: {
    passwordPlaceholder: string
    updatePassword: string
    passwordRequiredText: string
    passwordLabel: string
    confirmPasswordPlaceholder: string
    confirmPasswordLabel: string
    confirmPasswordRequiredText: string
    passwordMatchError: string
    passwordChanged: string
  }
}

export const NewPasswordForm: FC<NewPasswordTypes> = (props) => {
  const [matchError, setMatchError] = useState(false)
  const methods = useForm()
  const {
    formState: { errors },
    handleSubmit,
    control,
  } = methods

  const handleSubmission = (e: any) => {
    if (e.password === e.confirmPassword) {
      props.handleNewPassword()
    } else {
      setMatchError(true)
    }
  }

  return (
    <HawaContainer>
      {" "}
      {matchError && (
        <HawaAlert text={props.texts.passwordMatchError} severity="error" />
      )}
      {props.passwordChanged ? (
        <div className="text-center">{props.texts.passwordChanged}</div>
      ) : (
        <FormProvider {...methods}>
          <form onSubmit={handleSubmit(handleSubmission)}>
            <Controller
              control={control}
              name="password"
              render={({ field }) => (
                <HawaTextField
                  width="full"
                  type="password"
                  label={props.texts.passwordLabel}
                  placeholder={props.texts.passwordPlaceholder}
                  helperText={errors.password?.message}
                  {...field}
                  value={field.value ?? ""}
                />
              )}
              rules={{
                required: props.texts.passwordRequiredText,
              }}
            />
            <Controller
              control={control}
              name="confirmPassword"
              render={({ field }) => (
                <HawaTextField
                  width="full"
                  type="password"
                  label={props.texts.confirmPasswordLabel}
                  placeholder={props.texts.confirmPasswordPlaceholder}
                  helperText={errors.confirmPassword?.message}
                  {...field}
                  value={field.value ?? ""}
                />
              )}
              rules={{
                required: props.texts.confirmPasswordRequiredText,
              }}
            />

            <HawaButton
              color="primary"
              // type="submit"
              width="full"
            >
              {props.texts.updatePassword}
            </HawaButton>
          </form>
        </FormProvider>
      )}
    </HawaContainer>
  )
}
