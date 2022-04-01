import React from "react";
import { HawaTextField } from "../../elements";
import { Controller, FormProvider, useForm } from "react-hook-form";
import Container from "@mui/material/Container";
import Button from "@mui/material/Button";

export const UserProfileForm = (props) => {
  const methods = useForm();
  const {
    formState: { errors },
    handleSubmit,
    control
  } = methods;

  return (
    <Container maxWidth="sm">
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
          <Button type="submit" fullWidth variant="last">
            {props.texts.updateProfile}
          </Button>
        </form>
      </FormProvider>
    </Container>
  );
};

// texts: PropTypes.shape({
//   emailLabel: PropTypes.string,

// }),