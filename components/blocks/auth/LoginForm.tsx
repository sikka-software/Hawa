import React, { FC } from "react";
import { Controller, useForm } from "react-hook-form";
import {
  InterfaceSettings,
  Card,
  CardContent,
  CardFooter,
  Alert,
  PhoneInput,
  Loading,
  Input,
  Logos,
  Button,
} from "../../elements";
import { cn } from "../../util";

type LoginFormTypes = {
  texts?: {
    emailLabel?: string;
    emailPlaceholder?: string;
    emailRequiredText?: string;
    emailInvalidText?: string;
    usernameLabel?: string;
    usernamePlaceholder?: string;
    usernameRequired?: string;
    phoneRequiredText?: string;
    passwordLabel?: string;
    passwordPlaceholder?: string;
    passwordRequiredText?: string;
    forgotPasswordText?: string;
    newUserText?: string;
    createAccount?: string;
    loginText?: string;
    loginViaGoogleLabel?: string;
    loginViaGithubLabel?: string;
    loginViaTwitterLabel?: string;
  };
  handleLanguage?: () => void;
  currentLanguage?: any;
  handleColorMode?: () => void;
  currentColorMode?: any;
  logosOnly?: boolean;
  direction?: "rtl" | "ltr";
  showError?: any;
  errorTitle?: string;
  errorText?: string;
  loginType?: "email" | "username" | "phone";
  withoutResetPassword?: boolean;
  withoutSignUp?: boolean;
  /**
   *show spinner if true
   */
  isLoading?: any;

  isGoogleLoading?: boolean;
  isTwitterLoading?: boolean;
  isGithubLoading?: boolean;

  viaGoogle?: boolean;
  viaGithub?: boolean;
  viaTwitter?: boolean;
  /**
   * Handle the login function.
   */
  handleLogin?: (e: any) => void;
  /**
   * Handle routing to register page
   */
  handleRouteToSignUp?: () => void;
  handleForgotPassword?: () => void;
  handleGoogleLogin?: () => void;
  handleGithubLogin?: () => void;
  handleTwitterLogin?: () => void;
};

export const LoginForm: FC<LoginFormTypes> = (props) => {
  const {
    formState: { errors },
    handleSubmit,
    control,
  } = useForm();

  return (
    <div className="hawa-flex hawa-flex-col hawa-gap-4">
      <Card dir={props.direction}>
        <CardContent headless>
          {props.showError && (
            <Alert
              title={props.errorTitle}
              text={props.errorText}
              severity="error"
            />
          )}
          <form
            className="hawa-flex hawa-flex-col hawa-gap-4"
            onSubmit={handleSubmit((e) => {
              if (props.handleLogin) {
                console.log("attempting to login");
                props.handleLogin(e);
              } else {
                console.log(
                  "Form is submitted but handleLogin prop is missing"
                );
              }
            })}
          >
            {props.loginType === "email" ? (
              <Controller
                control={control}
                name="email"
                render={({ field }) => (
                  <Input
                    width="full"
                    type="text"
                    autoComplete="email"
                    label={props.texts?.emailLabel || "Email"}
                    helperText={errors.email?.message}
                    placeholder={
                      props.texts?.emailPlaceholder || "contact@sikka.io"
                    }
                    value={field.value ?? ""}
                    onChange={field.onChange}
                  />
                )}
                rules={{
                  required:
                    props.texts?.emailRequiredText || "Email is required",
                  pattern: {
                    value:
                      /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
                    message:
                      props.texts?.emailInvalidText || "Invalid email format",
                  },
                }}
              />
            ) : props.loginType === "username" ? (
              <Controller
                control={control}
                name="username"
                render={({ field }) => {
                  return (
                    <Input
                      width="full"
                      type="text"
                      autoComplete="username"
                      label={props.texts?.usernameLabel || "Username"}
                      helperText={errors.username?.message}
                      placeholder={
                        props.texts?.usernamePlaceholder || "sikka_sa"
                      }
                      onChange={field.onChange}
                      value={field.value ?? ""}
                    />
                  );
                }}
                rules={{
                  required:
                    props.texts?.usernameRequired || "Username is required",
                }}
              />
            ) : (
              <Controller
                control={control}
                name="phone"
                render={({ field }) => (
                  <PhoneInput
                    label="Phone number"
                    // width="full"
                    // type="text"
                    // autoComplete="username"
                    // label={props.texts?.usernameLabel || "Username"}
                    helperText={errors.username?.message}
                    // placeholder={props.texts?.usernamePlaceholder || "sikka_sa"}
                    // onChange={field.onChange}
                    // value={field.value ?? ""}
                  />
                )}
                rules={{
                  required:
                    props.texts?.phoneRequiredText ||
                    "Phone number is required",
                }}
              />
            )}
            {props.loginType !== "phone" && (
              <div>
                <Controller
                  control={control}
                  name="password"
                  render={({ field }) => (
                    <Input
                      width="full"
                      autoComplete="current-password"
                      type="password"
                      label={props.texts?.passwordLabel || "Password"}
                      placeholder={
                        props.texts?.passwordPlaceholder ||
                        "Enter your password"
                      }
                      helperText={errors.password?.message}
                      onChange={field.onChange}
                      value={field.value ?? ""}
                    />
                  )}
                  rules={{
                    required:
                      props.texts?.passwordRequiredText ||
                      "Password is required",
                    minLength: 5,
                  }}
                />
                {!props.withoutResetPassword && (
                  <div
                    onClick={props.handleForgotPassword}
                    className="hawa-mb-3 hawa-mt-2 hawa-w-fit hawa-cursor-pointer hawa-text-xs dark:hawa-text-gray-300"
                  >
                    {props.texts?.forgotPasswordText || "Forgot Password?"}
                  </div>
                )}
              </div>
            )}

            <Button
              className="hawa-mt-0 hawa-w-full"
              // disabled={
              //   props.isGithubLoading ||
              //   props.isGoogleLoading ||
              //   props.isTwitterLoading
              // }
              type="submit"
              isLoading={props.isLoading}
            >
              {props.texts?.loginText || "Login"}
            </Button>
            {!props.withoutSignUp && (
              <div className="hawa-p-3 hawa-text-center hawa-text-sm hawa-font-normal dark:hawa-text-gray-300">
                {props.texts?.newUserText || "New user?"}{" "}
                <span
                  onClick={props.handleRouteToSignUp}
                  className="clickable-link"
                >
                  {props.texts?.createAccount || "Create Account"}
                </span>
              </div>
            )}
          </form>
        </CardContent>

        {/* 3rd Party Auth Buttons */}
        {props.viaGithub || props.viaGoogle || props.viaTwitter ? (
          <CardFooter
            className={cn(
              props.logosOnly
                ? "hawa-flex hawa-flex-row hawa-justify-center hawa-gap-2"
                : "hawa-grid hawa-grid-cols-1 hawa-gap-2"
            )}
          >
            {props.viaGoogle && (
              <Button
                // isLoading={props.isGoogleLoading}
                className="hawa-flex hawa-flex-row hawa-items-center hawa-gap-2"
                variant="outline"
                onClick={props.handleGoogleLogin}
              >
                {props.isGoogleLoading ? (
                  <Loading size="button" />
                ) : (
                  <Logos.google className="hawa-h-4 hawa-w-4" />
                )}
                {!props.logosOnly && props.texts?.loginViaGoogleLabel}
              </Button>
            )}
            {props.viaGithub && (
              <Button
                // isLoading={props.isGithubLoading}
                className="hawa-flex hawa-flex-row hawa-items-center hawa-gap-2"
                variant="outline"
                onClick={props.handleGithubLogin}
              >
                {props.isGithubLoading ? (
                  <Loading size="button" />
                ) : (
                  <Logos.gitHub className="hawa-h-4 hawa-w-4" />
                )}
                {!props.logosOnly && props.texts?.loginViaGithubLabel}
              </Button>
            )}
            {props.viaTwitter && (
              <Button
                // isLoading={props.isTwitterLoading}
                className="hawa-flex hawa-flex-row hawa-items-center hawa-gap-2"
                variant="outline"
                onClick={props.handleTwitterLogin}
              >
                {props.isTwitterLoading ? (
                  <Loading size="button" />
                ) : (
                  <Logos.twitter className="hawa-h-4 hawa-w-4" />
                )}{" "}
                {!props.logosOnly && props.texts?.loginViaTwitterLabel}
              </Button>
            )}
          </CardFooter>
        ) : null}
      </Card>
      {props.handleColorMode && props.handleLanguage && (
        <InterfaceSettings
          currentColorMode={props.currentColorMode}
          currentLanguage={props.currentLanguage}
          handleColorMode={props.handleColorMode}
          handleLanguage={props.handleLanguage}
        />
      )}
    </div>
  );
};
