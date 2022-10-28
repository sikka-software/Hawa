import React from "react";
import { HawaButton, HawaTextField } from "../../elements";
import { Controller, FormProvider, useForm } from "react-hook-form";

export const UserProfileForm = (props) => {
  const methods = useForm();
  const { inputs } = props;
  const {
    formState: { errors },
    handleSubmit,
    control
  } = methods;

  return (
    <div className="flex flex-col divide-y divide-gray-300 bg-blue-300 rounded-xl p-4">
      <FormProvider {...methods}>
        <form onSubmit={handleSubmit(props.handleUpdateProfile)}>
          <Controller
            control={control}
            name="fullName"
            render={({ field }) => (
              <HawaTextField
                fullWidth
                type="text"
                value={field.value ?? ""}
                label={props.texts.fullNameLabel}
                placeholder={props.texts.fullNamePlaceholder}
                helperText={errors.fullName?.message}
                {...field}
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
                value={field.value ?? ""}
                label={props.texts.emailLabel}
                helperText={errors.email?.message}
                placeholder={props.texts.emailPlaceholder}
                {...field}
              />
            )}
            rules={{
              required: props.texts.emailRequiredText,
              pattern: {
                value:
                  /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
                message: props.texts.emailInvalidText
              }
            }}
          />
          <Controller
            control={control}
            name="password"
            render={({ field }) => (
              <HawaTextField
                fullWidth
                type="password"
                value={field.value ?? ""}
                label={props.texts.passwordLabel}
                placeholder={props.texts.passwordPlaceholder}
                helperText={errors.password?.message}
                {...field}
              />
            )}
            rules={{
              required: props.texts.passwordRequiredText
            }}
          />
          <Controller
            control={control}
            name="confirmPassword"
            render={({ field }) => (
              <HawaTextField
                fullWidth
                type="password"
                value={field.value ?? ""}
                label={props.texts.confirmPasswordLabel}
                placeholder={props.texts.confirmPasswordPlaceholder}
                helperText={errors.confirmPassword?.message}
                {...field}
              />
            )}
            rules={{
              required: props.texts.confirmPasswordRequiredText
            }}
          />
          {inputs.length > 0 &&
            inputs.map((singleInput) => {
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
                );
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
              );
            })}

          <HawaButton fullWidth type="submit">
            {props.texts.updateProfile}
          </HawaButton>
        </form>
      </FormProvider>
    </div>
  );
};

// texts: PropTypes.shape({
//   emailLabel: PropTypes.string,

// }),
