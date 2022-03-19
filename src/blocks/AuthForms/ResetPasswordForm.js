import React from "react";
import { FormProvider, useForm } from "react-hook-form";
import { Box } from "../../layout";
import { HawaTextField, ActionButton, HawaAlert } from "../../ui";

export const ResetPasswordForm = (props) => {
  const methods = useForm();
  const {
    formState: { errors },
    handleSubmit,
    getValues,
    register,
    watch,
    reset,
    setValue
  } = methods;
  return (
    <Box themeType={props.theme} maxWidth={400} noColor noMargin noPadding>
      <Box themeType={props.theme} noMargin>
        {props.error && (
          <HawaAlert
            themeType={props.theme}
            text="This is a reset password alert"
            severity="error"
          />
        )}
        <FormProvider {...methods}>
          <form onSubmit={handleSubmit(props.handleResetPassword)}>
            <HawaTextField
              type="text"
              name="email"
              inputLabel="Email"
              themeType={props.theme}
              rules={{
                required: "Email is required",
                pattern: {
                  value:
                    /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
                  message: "Invalid email address"
                }
              }}
              helperText={errors.email?.message}
            />
            <ActionButton
              fullWidth
              themeType={props.theme}
              last
              type="submit"
              text="Reset Password"
            />
          </form>
        </FormProvider>{" "}
      </Box>
    </Box>
  );
};
