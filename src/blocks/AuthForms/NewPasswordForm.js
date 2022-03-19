import React, { useState } from "react";
import { Box } from "../../layout";
import { ActionButton, HawaTextField, HawaAlert } from "../../ui";
import { FormProvider, useForm } from "react-hook-form";
import InputAdornment from "@mui/material/InputAdornment";
import PasswordIcon from "@mui/icons-material/HttpsOutlined";

export const NewPasswordForm = (props) => {
  const [newPassword, setNewPassword] = useState("");
  const [confirmNewPassword, setConfirmNewPassword] = useState("");
  const [error, setError] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");
  const [loading, setLoading] = useState(true);

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

  const handleNewPassword = (e) => {
    e.preventDefault();
    console.log("submitting fom", e.target);
    // setLoading(true);
    // e.preventDefault();
    // if (newPassword == "" || confirmNewPassword == "") {
    //   setLoading(false);
    //   return;
    // }
    // if (newPassword != confirmNewPassword) {
    //   setError(true);
    //   setLoading(false);
    //   // setErrorMessage(t("password-no-match"));
    //   return;
    // }
    // if (newPassword == confirmNewPassword) {
    //   //mutation to reset password here
    // }
  };
  return (
    <Box themeType={props.theme} maxWidth={400} noColor noMargin noPadding>
      <Box themeType={props.theme} noMargin>
        {props.error && (
          <HawaAlert
            themeType={props.theme}
            text="This is a new password alert"
            severity="error"
          />
        )}
        <FormProvider {...methods}>
          <form onSubmit={handleSubmit(props.handleNewPassword)}>
            <HawaTextField
              name="password"
              themeType={props.theme}
              type="password"
              inputLabel="Choose new password"
              placeholder="Enter password"
              onChange={(e) => setNewPassword(e.target.value)}
              value={newPassword}
              startAdornment={
                <InputAdornment position="start">
                  <PasswordIcon />
                </InputAdornment>
              }
              rules={{
                required: "Password is rquired"
              }}
              helperText={errors.password?.message}
            />
            <HawaTextField
              themeType={props.theme}
              name="confirmPassword"
              type="password"
              placeholder="Confirm Password"
              inputLabel="Confirm"
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
            <ActionButton
              fullWidth
              type="submit"
              themeType={props.theme}
              last
              text="Reset Password"
            />
          </form>
        </FormProvider>
      </Box>
    </Box>
  );
};
