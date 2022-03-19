import React from "react";
import { FormProvider, useForm } from "react-hook-form";
import { Box } from "../../layout";
import { HawaTextField, ActionButton, HawaAlert } from "../../ui";
import InputAdornment from "@mui/material/InputAdornment";
import EmailIcon from "@mui/icons-material/MailOutline";

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
    <Box maxWidth={400} noColor noMargin noPadding>
      <Box noMargin>
        {props.error && (
          <HawaAlert text="This is a reset password alert" severity="error" />
        )}
        <FormProvider {...methods}>
          <form onSubmit={handleSubmit(props.handleResetPassword)}>
            <HawaTextField
              type="text"
              name="email"
              inputLabel="Email"
              placeholder="Enter your email"
              startAdornment={
                <InputAdornment position="start">
                  <EmailIcon />
                </InputAdornment>
              }
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
            <ActionButton fullWidth last type="submit" text="Reset Password" />
          </form>
        </FormProvider>{" "}
      </Box>
    </Box>
  );
};
