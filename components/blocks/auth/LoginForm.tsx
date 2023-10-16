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
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";

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
  /** Function to handle language change.   */
  handleLanguage?: () => void;
  /** Current selected language.   */
  currentLanguage?: string;
  /** Function to handle theme color mode change.   */
  handleColorMode?: () => void;
  /** Current selected theme color mode.   */
  currentColorMode?: "light" | "dark";
  /** If true, only logos are displayed in third-party auth buttons.   */
  logosOnly?: boolean;
  /** Direction of text and UI elements, either left-to-right or right-to-left.   */
  direction?: "rtl" | "ltr";
  /** If true, an error alert is displayed at the top of the form.   */
  showError?: boolean;
  /** Title text of error alert.   */
  errorTitle?: string;
  /** Description text of error alert.   */
  errorText?: string;
  /** Login identifier type user will use to log in.   */
  loginType?: "email" | "username" | "phone";
  /** If true, the reset password option is hidden.   */
  withoutResetPassword?: boolean;
  /** If true, the register option is hidden.   */
  withoutRegister?: boolean;
  /** If true, a loading spinner is displayed within the main form submit button.   */
  isLoading?: boolean;
  /** If true, a loading spinner is displayed within the Google login button.   */
  isGoogleLoading?: boolean;
  /** If true, a loading spinner is displayed within the Twitter login button.   */
  isTwitterLoading?: boolean;
  /** If true, a loading spinner is displayed within the Github login button.   */
  isGithubLoading?: boolean;
  /** If true, Google login option is displayed.   */
  viaGoogle?: boolean;
  /** If true, Github login option is displayed.   */
  viaGithub?: boolean;
  /** If true, Twitter login option is displayed.   */
  viaTwitter?: boolean;
  /** Function to handle form submission.   */
  handleLogin?: (e: any) => void;
  /** Function to route user to the register page.   */
  handleRouteToRegister?: () => void;
  /** Function to handle forgotten password case.   */
  handleForgotPassword?: () => void;
  /** Function to handle Google login.   */
  handleGoogleLogin?: () => void;
  /** Function to handle Github login.   */
  handleGithubLogin?: () => void;
  /** Function to handle Twitter login.   */
  handleTwitterLogin?: () => void;
};

export const LoginForm: FC<LoginFormTypes> = (props) => {
  let formSchema;

  if (props.loginType === "email") {
    formSchema = z.object({
      email: z
        .string({
          required_error: props.texts?.emailRequiredText,
        })
        .nonempty({ message: props.texts?.emailRequiredText })
        .email({ message: props.texts?.emailInvalidText }),
      password: z
        .string({
          required_error: props.texts?.passwordRequiredText,
        })
        .min(5, { message: "Password must be at least 5 characters long" })
        .nonempty({ message: props.texts?.passwordRequiredText }),
    });
  } else if (props.loginType === "username") {
    formSchema = z.object({
      username: z
        .string()
        .min(2, { message: "Username must be at least 2 characters" })
        .nonempty({ message: props.texts?.usernameRequired }),
      password: z
        .string({
          required_error: props.texts?.passwordRequiredText,
        })
        .min(5, { message: "Password must be at least 5 characters long" })
        .nonempty({ message: props.texts?.passwordRequiredText }),
    });
  } else if (props.loginType === "phone") {
    formSchema = z.object({
      phone: z
        .string({ required_error: props.texts?.phoneRequiredText })
        .refine((value) => value.split("-")[1] !== "", {
          message: props.texts?.phoneRequiredText,
        }),
    });
  } else {
    formSchema = z.object({});
  }

  const { handleSubmit, control, formState } = useForm({
    resolver: zodResolver(formSchema),
  });

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
                return props.handleLogin(e);
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
                    helperText={formState.errors.email?.message}
                    placeholder={
                      props.texts?.emailPlaceholder || "contact@sikka.io"
                    }
                    value={field.value ?? ""}
                    onChange={field.onChange}
                  />
                )}
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
                      helperText={formState.errors.username?.message}
                      placeholder={
                        props.texts?.usernamePlaceholder || "sikka_sa"
                      }
                      onChange={field.onChange}
                      value={field.value ?? ""}
                    />
                  );
                }}
              />
            ) : (
              <Controller
                control={control}
                name="phone"
                render={({ field }) => (
                  <PhoneInput
                    label="Phone number"
                    helperText={formState.errors.phone?.message}
                    preferredCountry={{ label: "+966" }}
                    handleChange={field.onChange}
                  />
                )}
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
                      helperText={formState.errors.password?.message}
                      onChange={field.onChange}
                      value={field.value ?? ""}
                    />
                  )}
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
            {!props.withoutRegister && (
              <div className="hawa-p-3 hawa-text-center hawa-text-sm hawa-font-normal hawa-select-none dark:hawa-text-gray-300">
                {props.texts?.newUserText || "New user?"}{" "}
                <span
                  onClick={props.handleRouteToRegister}
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
                className="hawa-flex hawa-flex-row hawa-items-center hawa-gap-2"
                variant="outline"
                onClick={props.handleGithubLogin}
              >
                {props.isGithubLoading ? (
                  <Loading size="button" />
                ) : (
                  <Logos.github className="hawa-h-4 hawa-w-4" />
                )}
                {!props.logosOnly && props.texts?.loginViaGithubLabel}
              </Button>
            )}
            {props.viaTwitter && (
              <Button
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
