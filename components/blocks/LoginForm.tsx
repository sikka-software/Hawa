import React, { FC } from "react";
import { Controller, useForm } from "react-hook-form";
import {
  Input,
  Alert,
  PhoneInput,
  //   InterfaceSettings,
  Loading,
  Logos,
} from "../elements";
import { Card, CardContent, CardFooter } from "../elements/Card";
import { Button } from "../elements/Button";

import { cn } from "../util";

type SignInFormTypes = {
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
    signInText?: string;
    signInViaGoogleLabel?: string;
    signInViaGithubLabel?: string;
    signInViaTwitterLabel?: string;
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
  signInType?: "email" | "username" | "phone";
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
   * Handle the sign in .
   */
  handleSignIn?: (e: any) => void;
  /**
   * Handle routing to sign up page
   */
  handleRouteToSignUp?: () => void;
  handleForgotPassword?: () => void;
  handleGoogleSignIn?: () => void;
  handleGithubSignIn?: () => void;
  handleTwitterSignIn?: () => void;
};

export const SignInForm: FC<SignInFormTypes> = (props) => {
  const {
    formState: { errors },
    handleSubmit,
    control,
  } = useForm();

  return (
    <div className="flex flex-col gap-4">
      <Card dir={props.direction}>
        <CardContent headless>
          <form
            onSubmit={handleSubmit((e) => {
              if (props.handleSignIn) {
                props.handleSignIn(e);
              } else {
                console.log(
                  "Form is submitted but handleSignIn prop is missing"
                );
              }
            })}
          >
            {props.showError && (
              <Alert
                title={props.errorTitle}
                text={props.errorText}
                severity="error"
              />
            )}
            {props.signInType === "email" ? (
              <Controller
                control={control}
                name="email"
                render={({ field }: any) => (
                  <Input
                    width="full"
                    type="text"
                    autoComplete="email"
                    label={props.texts?.emailLabel}
                    helperText={errors.email?.message}
                    placeholder={props.texts?.emailPlaceholder}
                    value={field.value ?? ""}
                    onChange={field.onChange}
                  />
                )}
                rules={{
                  required: props.texts?.emailRequiredText,
                  pattern: {
                    value:
                      /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
                    message: props.texts?.emailInvalidText,
                  },
                }}
              />
            ) : props.signInType === "username" ? (
              <Controller
                control={control}
                name="username"
                render={({ field }) => {
                  return (
                    <Input
                      width="full"
                      type="text"
                      autoComplete="username"
                      label={props.texts?.usernameLabel}
                      helperText={errors.username?.message}
                      placeholder={props.texts?.usernamePlaceholder}
                      onChange={field.onChange}
                      value={field.value ?? ""}
                    />
                  );
                }}
                rules={{
                  required: props.texts?.usernameRequired,
                }}
              />
            ) : (
              <Controller
                control={control}
                name="phone"
                render={({ field }) => <HawaPhoneInput label="Phone number" />}
                rules={{ required: props.texts?.phoneRequiredText }}
              />
            )}
            {props.signInType !== "phone" && (
              <>
                <Controller
                  control={control}
                  name="password"
                  render={({ field }) => (
                    <Input
                      width="full"
                      autoComplete="current-password"
                      type="password"
                      label={props.texts?.passwordLabel}
                      placeholder={props.texts?.passwordPlaceholder}
                      helperText={errors.password?.message}
                      onChange={field.onChange}
                      value={field.value ?? ""}
                    />
                  )}
                  rules={{
                    required: props.texts?.passwordRequiredText,
                    minLength: 5,
                  }}
                />
                {!props.withoutResetPassword && (
                  <div
                    onClick={props.handleForgotPassword}
                    className="mb-3 w-fit cursor-pointer text-xs dark:text-gray-300"
                  >
                    {props.texts?.forgotPasswordText}
                  </div>
                )}
              </>
            )}

            <Button
              className="mt-4 w-full"
              // disabled={
              //   props.isGithubLoading ||
              //   props.isGoogleLoading ||
              //   props.isTwitterLoading
              // }
              isLoading={props.isLoading}
            >
              {props.texts?.signInText}
            </Button>
            {!props.withoutSignUp && (
              <div className="p-3 text-center text-sm font-normal dark:text-gray-300">
                {props.texts?.newUserText}{" "}
                <span
                  onClick={props.handleRouteToSignUp}
                  className="clickable-link"
                >
                  {props.texts?.createAccount}
                </span>
              </div>
            )}
          </form>
        </CardContent>

        {/* 3rd Party Sign Auth Buttons */}
        {props.viaGithub || props.viaGoogle || props.viaTwitter ? (
          <CardFooter
            className={cn(
              props.logosOnly
                ? "flex flex-row justify-center gap-2"
                : "grid grid-cols-1 gap-2"
            )}
          >
            {props.viaGoogle && (
              <Button
                // isLoading={props.isGoogleLoading}
                className="flex flex-row items-center gap-2"
                variant="outline"
                onClick={props.handleGoogleSignIn}
              >
                {props.isGoogleLoading ? (
                  <Loading size="button" />
                ) : (
                  <Logos.google className="h-4 w-4" />
                )}
                {!props.logosOnly && props.texts?.signInViaGoogleLabel}
              </Button>
            )}
            {props.viaGithub && (
              <Button
                // isLoading={props.isGithubLoading}
                className="flex flex-row items-center gap-2"
                variant="outline"
                onClick={props.handleGithubSignIn}
              >
                {props.isGithubLoading ? (
                  <Loading size="button" />
                ) : (
                  <Logos.gitHub className="h-4 w-4" />
                )}
                {!props.logosOnly && props.texts?.signInViaGithubLabel}
              </Button>
            )}
            {props.viaTwitter && (
              <Button
                // isLoading={props.isTwitterLoading}
                className="flex flex-row items-center gap-2"
                variant="outline"
                onClick={props.handleTwitterSignIn}
              >
                {props.isTwitterLoading ? (
                  <Loading size="button" />
                ) : (
                  <Logos.twitter className="h-4 w-4" />
                )}{" "}
                {!props.logosOnly && props.texts?.signInViaTwitterLabel}
              </Button>
            )}
          </CardFooter>
        ) : null}
      </Card>
      {/* <InterfaceSettings
        currentColorMode={props.currentColorMode}
        currentLanguage={props.currentLanguage}
        handleColorMode={props.handleColorMode}
        handleLanguage={props.handleLanguage}
      /> */}
    </div>
  );
};
