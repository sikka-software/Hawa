import React from "react"
import { HawaButton, HawaTextField } from "../../elements"
import { Controller, FormProvider, useForm } from "react-hook-form"
import { HawaContainer } from "../../layout"

type UserProfileFormTypes = {
  inputs: any
  texts: any
  handleUpdateProfile: any
}

export const UserProfileForm: React.FunctionComponent<UserProfileFormTypes> = (
  props
) => {
  const methods = useForm()
  const { inputs } = props
  const {
    formState: { errors },
    handleSubmit,
    control,
  } = methods

  return (
    <HawaContainer>
      {" "}
      <FormProvider {...methods}>
        <form onSubmit={handleSubmit(props.handleUpdateProfile)}>
          <Controller
            control={control}
            name="fullName"
            render={({ field }) => (
              <HawaTextField
                width="full"
                type="text"
                label={props.texts.fullNameLabel}
                placeholder={props.texts.fullNamePlaceholder}
                helperText={errors.fullName?.message}
                {...field}
                value={field.value ?? ""}
              />
            )}
          />
          <Controller
            control={control}
            name="phoneNumber"
            render={({ field }) => (
              <HawaTextField
                fullWidth
                type="tel"
                label="Phone Number"
                placeholder="+966"
                {...field}
              />
            )}
          />
          <Controller
            control={control}
            name="email"
            render={({ field }) => (
              <HawaTextField
                fullWidth
                type="text"
                label={props.texts.emailLabel}
                helperText={errors.email?.message}
                placeholder={props.texts.emailPlaceholder}
                {...field}
                value={field.value ?? ""}
              />
            )}
            rules={{
              required: props.texts.emailRequiredText,
              pattern: {
                value:
                  /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
                message: props.texts.emailInvalidText,
              },
            }}
          />
          <Controller
            control={control}
            name="password"
            render={({ field }) => (
              <HawaTextField
                fullWidth
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
                fullWidth
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
          {inputs.length > 0 &&
            inputs.map((singleInput: any) => {
              if (singleInput.type === "textArea") {
                return (
                  <Controller
                    control={control}
                    name={singleInput.name}
                    render={({ field }) => (
                      <HawaTextField
                        fullWidth
                        type="text"
                        defaultValue={singleInput.defaultValue ?? null}
                        label={singleInput.label ?? null}
                        placeholder={singleInput.placeHolder ?? null}
                        rules={singleInput.rules ?? null}
                      />
                    )}
                  />
                )
              }
              return (
                <Controller
                  control={control}
                  name={singleInput.name}
                  render={({ field }) => (
                    <HawaTextField
                      fullWidth
                      type={singleInput.type}
                      defaultValue={singleInput.defaultValue ?? null}
                      label={singleInput.label ?? null}
                      placeholder={singleInput.placeHolder ?? null}
                      rules={singleInput.rules ?? null}
                    />
                  )}
                />
              )
            })}

          <HawaButton color="primary" width="full" type="submit">
            {props.texts.updateProfile}
          </HawaButton>
        </form>
      </FormProvider>
    </HawaContainer>
  )
}
