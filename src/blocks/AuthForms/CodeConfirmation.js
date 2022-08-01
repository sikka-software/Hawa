import React from "react";
import { HawaTextField, HawaLogoButton, HawaAlert } from "../../elements";
import { Controller, useForm } from "react-hook-form";
import InputAdornment from "@mui/material/InputAdornment";
import EmailIcon from "@mui/icons-material/MailOutline";
import PasswordIcon from "@mui/icons-material/HttpsOutlined";
import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import PropTypes from "prop-types";
import Divider from "@mui/material/Divider";

export const CodeConfirmation = (props) => {
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
          name="code"
          render={({ field }) => (
            <HawaTextField
              fullWidth
              type="number"
              value={field.value ?? ""}
              label={props.texts.codeLabel}
              helperText={errors.email?.message}
              placeholder={props.texts.codePlaceholder}
              // startAdornment={
              //   <InputAdornment position="start">
              //     <EmailIcon />
              //   </InputAdornment>
              // }
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
          {props.texts.confirmText}
        </Button>
      </form>
    </Container>
  );
};
CodeConfirmation.propTypes = {
  /**
   *  An object of all the texts in the blocks
   */
  texts: PropTypes.shape({
    emailLabel: PropTypes.string,
    emailPlaceholder: PropTypes.string,
    emailRequiredText: PropTypes.string,
    emailInvalidText: PropTypes.string,
    passwordLabel: PropTypes.string,
    passwordPlaceholder: PropTypes.string,
    passwordRequiredText: PropTypes.string,
    forgotPasswordText: PropTypes.string,
    newUserText: PropTypes.string,
    signUpText: PropTypes.string,
    confirmText: PropTypes.string,
    googleButtonLabel: PropTypes.string,
    githubButtonLabel: PropTypes.string,
    twitterButtonLabel: PropTypes.string
  }),
  viaGoogle: PropTypes.bool,
  viaGithub: PropTypes.bool,
  viaTwitter: PropTypes.bool,
  handleSignIn: PropTypes.func,
  handleRouteToSignUp: PropTypes.func,
  handleGoogleSignIn: PropTypes.func,
  handleGithubSignIn: PropTypes.func,
  handleTwitterSignIn: PropTypes.func
};
