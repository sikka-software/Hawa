import React from "react";
import { Controller, useForm } from "react-hook-form";
import { HawaTextField, HawaTypography } from "../../elements";
import InputAdornment from "@mui/material/InputAdornment";
import EmailIcon from "@mui/icons-material/MailOutline";
import Container from "@mui/material/Container";
import Button from "@mui/material/Button";

export const ResetPasswordForm = (props) => {
  const methods = useForm();
  const {
    formState: { errors },
    handleSubmit,
    register,
    control
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
        <form onSubmit={handleSubmit(props.handleResetPassword)}>
          {console.log("eror ", errors.email?.message)}
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
                startAdornment={
                  <InputAdornment position="start">
                    <EmailIcon />
                  </InputAdornment>
                }
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
          <Button type="submit" fullWidth variant="last">
            {props.texts.resetPassword}
          </Button>
        </form>
      ) : (
        <HawaTypography style={{ textAlign: "center", margin: 5 }}>
          An link was sent to your email to reset the password.
        </HawaTypography>
      )}
    </Container>
  );
};
