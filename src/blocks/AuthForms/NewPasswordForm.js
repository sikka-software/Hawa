import React, { useState } from "react";
import { HawaTextField, HawaAlert, HawaTypography } from "../../elements";
import { Controller, FormProvider, useForm } from "react-hook-form";
import InputAdornment from "@mui/material/InputAdornment";
import PasswordIcon from "@mui/icons-material/HttpsOutlined";
import Container from "@mui/material/Container";
import Button from "@mui/material/Button";
import PropTypes from "prop-types";

export const NewPasswordForm = (props) => {
  const [matchError, setMatchError] = useState(false);
  const methods = useForm();
  const {
    formState: { errors },
    handleSubmit,
    control
  } = methods;

  const handleSubmission = (e) => {
    console.log("handling subb", e);
    if (e.password === e.confirmPassword) {
      props.handleNewPassword();
    } else {
      setMatchError(true);
    }
  };

  return (
    <Container maxWidth="xs" variant="auth">
      {matchError && (
        <HawaAlert text={props.texts.passwordMatchError} severity="error" />
      )}
      {props.passwordChanged ? (
        <HawaTypography style={{ textAlign: "center", margin: 5 }}>
          {props.texts.passwordChanged}
        </HawaTypography>
      ) : (
        <FormProvider {...methods}>
          <form onSubmit={handleSubmit(handleSubmission)}>
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
                  startAdornment={
                    <InputAdornment position="start">
                      <PasswordIcon />
                    </InputAdornment>
                  }
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
                  startAdornment={
                    <InputAdornment position="start">
                      <PasswordIcon />
                    </InputAdornment>
                  }
                  {...field}
                />
              )}
              rules={{
                required: props.texts.confirmPasswordRequiredText
              }}
            />

            <Button type="submit" fullWidth variant="last">
              {props.texts.updatePassword}
            </Button>
          </form>
        </FormProvider>
      )}
    </Container>
  );
};
NewPasswordForm.propTypes = {
  /**
   *  An object of all the texts in the blocks
   */
  texts: PropTypes.shape({
    emailLabel: PropTypes.string,
    emailPlaceholder: PropTypes.string,
    emailRequiredText: PropTypes.string,
    passwordPlaceholder: PropTypes.string,
    updatePassword: PropTypes.string,
    passwordRequiredText: PropTypes.string,
    passwordLabel: PropTypes.string,
    confirmPasswordPlaceholder: PropTypes.string,
    confirmPasswordLabel: PropTypes.string,
    confirmPasswordRequiredText: PropTypes.string,
    passwordMatchError: PropTypes.string,
    forgotPasswordText: PropTypes.string,
    passwordChanged: PropTypes.string
  }),
  /**
   * A boolean to replace the form with a success message
   */
  passwordChanged: PropTypes.bool,
  handleNewPassword: PropTypes.func
};
