import React, { useState } from "react";
import { Box } from "../../layout";
import {
  ActionButton,
  HawaTextField,
  HawaAlert,
  HawaTypography
} from "../../ui";
import { FormProvider, useForm } from "react-hook-form";
import InputAdornment from "@mui/material/InputAdornment";
import PasswordIcon from "@mui/icons-material/HttpsOutlined";
import Container from "@mui/material/Container";
import Button from "@mui/material/Button";
import Alert from "@mui/material/Alert";

export const NewPasswordForm = (props) => {
  const [newPassword, setNewPassword] = useState("");
  const methods = useForm();
  const {
    formState: { errors },
    handleSubmit
  } = methods;

  return (
    <Container maxWidth="xs" variant="auth">
      {props.error && (
        <HawaAlert text="This is a new password alert" severity="error" />
      )}
      {props.passwordChanged ? (
        <HawaTypography style={{ textAlign: "center", margin: 5 }}>
          Your password has been changed, you'll be redirected to sign in page
        </HawaTypography>
      ) : (
        <FormProvider {...methods}>
          <form onSubmit={handleSubmit(props.handleNewPassword)}>
            <HawaTextField
              fullWidth
              name="password"
              type="password"
              label={props.texts.passwordLabel}
              placeholder={props.texts.passwordPlaceholder}
              onChange={(e) => setNewPassword(e.target.value)}
              value={newPassword}
              startAdornment={
                <InputAdornment position="start">
                  <PasswordIcon />
                </InputAdornment>
              }
              rules={{
                required: props.texts.passwordRequiredText
              }}
              helperText={errors.password?.message}
            />
            <HawaTextField
              fullWidth
              name="confirmPassword"
              type="password"
              placeholder={props.texts.confirmPasswordPlaceholder}
              label={props.texts.confirmPasswordLabel}
              startAdornment={
                <InputAdornment position="start">
                  <PasswordIcon />
                </InputAdornment>
              }
              rules={{
                required: "Password is rquired"
              }}
              helperText={errors.confirmPassword?.message}
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
