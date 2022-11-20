import React from "react"
import { HawaTextField, HawaAlert, HawaButton } from "../../elements"
import { Controller, useForm } from "react-hook-form"
import { HawaContainer } from "../../layout"

type CodeConfirmationTypes = {
  showError: any
  errorTitle: any
  errorText: any
  texts: any
  handleSignIn: any
}
export const CodeConfirmation: React.FunctionComponent<
  CodeConfirmationTypes
> = (props) => {
  const methods = useForm()
  const {
    formState: { errors },
    handleSubmit,
    control,
  } = methods

  return (
    <HawaContainer>
      {" "}
      {props.showError && (
        <HawaAlert
          title={props.errorTitle}
          text={props.errorText}
          severity="error"
        />
      )}
      <form onSubmit={handleSubmit(props.handleSignIn)}>
        <Controller
          control={control}
          name="code"
          render={({ field }) => (
            <HawaTextField
              fullWidth
              type="number"
              label={props.texts.codeLabel}
              helperText={errors.email?.message}
              placeholder={props.texts.codePlaceholder}
              {...field}
              value={field.value ?? ""}
            />
          )}
          rules={{
            required: props.texts.codeRequiredText,
          }}
        />

        <HawaButton color="primary" type="submit" width="full">
          {props.texts.confirmText}
        </HawaButton>
      </form>
    </HawaContainer>
  )
}