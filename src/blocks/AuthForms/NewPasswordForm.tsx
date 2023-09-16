import React, { useState, FC } from "react"
import { HawaTextField, HawaAlert } from "../../elements"
import { Controller, FormProvider, useForm } from "react-hook-form"
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "../../elements/Card"
import { Button } from "../../elements/Button"

type NewPasswordTypes = {
  handleNewPassword: () => void
  direction?: "rtl" | "ltr"

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
    <Card dir={props.direction}>
      {matchError && (
        <HawaAlert text={props.texts.passwordMatchError} severity="error" />
      )}
      {props.passwordChanged ? (
        <CardContent headless>
          <div className="text-center">{props.texts.passwordChanged}</div>
        </CardContent>
      ) : (
        <FormProvider {...methods}>
          <form onSubmit={handleSubmit(handleSubmission)}>
            <CardHeader>
              <CardTitle>Create Password</CardTitle>
              <CardDescription>
                Set a new password for your account
              </CardDescription>
            </CardHeader>
            <CardContent>
              <Controller
                control={control}
                name="password"
                render={({ field }) => (
                  <HawaTextField
                    width="full"
                    type="password"
                    autoComplete="new-password"
                    label={props.texts.passwordLabel}
                    placeholder={props.texts.passwordPlaceholder}
                    helpertext={errors.password?.message}
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
                    autoComplete="new-password"
                    label={props.texts.confirmPasswordLabel}
                    placeholder={props.texts.confirmPasswordPlaceholder}
                    helpertext={errors.confirmPassword?.message}
                    {...field}
                    value={field.value ?? ""}
                  />
                )}
                rules={{
                  required: props.texts.confirmPasswordRequiredText,
                }}
              />
            </CardContent>

            <CardFooter>
              <Button className="w-full" type="submit">
                {props.texts.updatePassword}
              </Button>
            </CardFooter>
          </form>
        </FormProvider>
      )}
    </Card>
  )
}
