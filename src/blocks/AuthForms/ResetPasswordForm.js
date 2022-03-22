import React from "react";
import { FormProvider, useForm } from "react-hook-form";
import { Box } from "../../layout";
import {
  HawaTextField,
  ActionButton,
  HawaAlert,
  HawaTypography
} from "../../ui";
import InputAdornment from "@mui/material/InputAdornment";
import EmailIcon from "@mui/icons-material/MailOutline";
import Container from "@mui/material/Container";
import Button from "@mui/material/Button";

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
    <Container maxWidth="xs" variant="auth">
      {props.error && (
        <Alert severity="error">
          {props.errorTitle && <AlertTitle>{props.errorTitle}</AlertTitle>}
          {props.errorText}
        </Alert>
      )}
      {!props.sent ? (
        <FormProvider {...methods}>
          <form onSubmit={handleSubmit(props.handleResetPassword)}>
            <HawaTextField
              fullWidth
              type="text"
              name="email"
              label={props.texts.emailLabel}
              placeholder={props.texts.emailPlaceholder}
              startAdornment={
                <InputAdornment position="start">
                  <EmailIcon />
                </InputAdornment>
              }
              rules={{
                required: props.texts.emailRequiredText,
                pattern: {
                  value:
                    /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
                  message: props.texts.emailInvalidText
                }
              }}
              helperText={errors.email?.message}
            />
            <Button type="submit" fullWidth variant="last">
              {props.texts.resetPassword}
            </Button>
          </form>
        </FormProvider>
      ) : (
        <HawaTypography style={{ textAlign: "center", margin: 5 }}>
          An link was sent to your email to reset the password.
        </HawaTypography>
      )}
    </Container>
  );
};
