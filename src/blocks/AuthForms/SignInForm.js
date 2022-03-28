import React from "react";
import { HawaTextField, HawaLogoButton, HawaAlert } from "../../elements";
import { Controller, useForm } from "react-hook-form";
import InputAdornment from "@mui/material/InputAdornment";
import EmailIcon from "@mui/icons-material/MailOutline";
import PasswordIcon from "@mui/icons-material/HttpsOutlined";
import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import Alert from "@mui/material/Alert";
import AlertTitle from "@mui/material/AlertTitle";
import Divider from "@mui/material/Divider";

export const SignInForm = (props) => {
  const methods = useForm();
  const {
    formState: { errors },
    handleSubmit,
    control
  } = methods;

  return (
    <Container
      maxWidth="xs"
      variant="auth"
      style={{ direction: props.lang === "ar" ? "rtl" : "ltr" }}
    >
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

        <Controller
          control={control}
          name="password"
          render={({ field }) => (
            <HawaTextField
              fullWidth
              type="password"
              defaultValue={field.value ?? ""}
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
          rules={{ required: props.texts.passwordRequiredText }}
        />
        <Typography
          style={{
            cursor: "pointer",
            marginTop: 5,
            width: "max-content",
            fontSize: 15,
            padding: 5
          }}
          onClick={props.handleForgotPassword}
        >
          {props.texts.forgotPasswordText}
        </Typography>
        <Button type="submit" fullWidth variant="last">
          {props.texts.signInText}
        </Button>
      </form>
      <Typography
        variant="subtitle2"
        style={{ marginTop: 5, textAlign: "center", padding: 5 }}
      >
        {props.texts.newUserText}{" "}
        <span
          onClick={props.handleRouteToSignUp}
          style={{
            cursor: "pointer",
            color: "blue",
            textAlign: "center"
          }}
        >
          {props.texts.signUpText}
        </span>
      </Typography>
      <Divider />
      <div style={{ display: "flex", flexDirection: "column" }}>
        {props.viaGoogle && (
          <HawaLogoButton
            logo="google"
            buttonText={props.texts.googleButtonLabel}
            onClick={props.handleGoogleSignIn}
          />
        )}
        {props.viaGithub && (
          <HawaLogoButton
            logo="github"
            buttonText={props.texts.githubButtonLabel}
            onClick={props.handleGithubSignIn}
          />
        )}
        {props.viaTwitter && (
          <HawaLogoButton
            logo="twitter"
            buttonText={props.texts.twitterButtonLabel}
            onClick={props.handleTwitterSignIn}
          />
        )}
      </div>
    </Container>
  );
};
