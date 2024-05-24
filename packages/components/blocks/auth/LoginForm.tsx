import React from "react";
import { FC, useState } from "react";
import { Controller, useForm } from "react-hook-form";

import { zodResolver } from "@hookform/resolvers/zod";
import { cn } from "@util/index";
import {
  isPossiblePhoneNumber,
  isValidPhoneNumber,
  parsePhoneNumber,
  validatePhoneNumberLength,
} from "libphonenumber-js";
import * as z from "zod";

import { Alert } from "@elements/alert";
import { Button } from "@elements/button";
import { Card, CardContent, CardFooter } from "@elements/card";
import { Input } from "@elements/input";
import { PhoneInput, PhoneInputProps } from "@elements/phoneInput";

import {
  DirectionType,
  LoginFormTextsTypes,
  ThirdPartyAuthTextsTypes,
} from "@_types/index";

import { EyeIcon, HiddenEyeIcon } from "../../icons";
import { AuthButtons } from "./AuthButtons";

type LoginFormTypes = {
  /** Object containing text labels used throughout the form. */
  texts?: LoginFormTextsTypes;
  /** If true, only logos are displayed in third-party auth buttons.   */
  logosOnly?: boolean;
  /** Direction of text and UI elements, either left-to-right or right-to-left.   */
  direction?: DirectionType;
  /** If true, an error alert is displayed at the top of the form.   */
  showError?: boolean;
  /** Title text of error alert.   */
  errorTitle?: string;
  /** Description text of error alert.   */
  errorText?: string;
  /** Login identifier type user will use to log in.   */
  loginType?: "email" | "username" | "phone" | "link";
  /** If true, the reset password option is hidden.   */
  withResetPassword?: boolean;
  /** If true, the register option is hidden.   */
  allowRegister?: boolean;
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
  onLogin: (e: any) => void;
  /** Function to route user to the register page.   */
  onRouteToRegister?: () => void;
  /** Function to handle forgotten password case.   */
  onForgotPassword?: () => void;
  /** Function to handle Google login.   */
  onGoogleLogin?: () => void;
  /** Function to handle Github login.   */
  onGithubLogin?: () => void;
  /** Function to handle Twitter login.   */
  onTwitterLogin?: () => void;
  /** Additional buttons to add under the login button */
  additionalButtons?: any;
  /** The allowed length of the password input field */
  passwordLength?: number;
  /** If true, the form is displayed without a card container styling.*/
  cardless?: boolean;
  /** Props to pass to the PhoneInput component */
  phoneInputProps?: PhoneInputProps;
};

export const LoginForm: FC<LoginFormTypes> = ({
  loginType = "email",
  passwordLength = 8,
  texts,
  ...props
}) => {
  const [passwordVisible, setPasswordVisible] = useState(false);

  const thirdPartyAuthTexts: ThirdPartyAuthTextsTypes = {
    continueWithGoogle: texts?.continueWithGoogle,
    continueWithTwitter: texts?.continueWithTwitter,
    continueWithApple: texts?.continueWithApple,
    continueWithMicrosoft: texts?.continueWithMicrosoft,
    continueWithGithub: texts?.continueWithGithub,
    continueWithEmail: texts?.continueWithEmail,
    continueWithPhone: texts?.continueWithPhone,
  };

  let formSchema;

  if (loginType === "email") {
    formSchema = z.object({
      email: z
        .string({ required_error: texts?.email?.required || "Email Required" })
        .min(1, { message: texts?.email?.required || "Email Required" })
        .email({ message: texts?.email?.invalid || "Email Invalid" }),
      password: z
        .string({
          required_error: texts?.password?.required || "Password Required",
        })
        .min(1, { message: texts?.password?.required || "Password Required" })
        .min(passwordLength, {
          message: texts?.password?.tooShort || "Password too short",
        }),
    });
  } else if (loginType === "username") {
    formSchema = z.object({
      username: z
        .string({
          required_error: texts?.username?.required || "Username Required",
        })
        .min(2, { message: texts?.username?.tooShort || "Username too short" })
        .refine(
          (value) => {
            const isValid = /^[a-zA-Z][a-zA-Z0-9_-]{2,14}$/.test(value);
            return isValid;
          },
          { message: texts?.username?.invalid || "Username Invalid" },
        ),
      password: z
        .string({
          required_error: texts?.password?.required || "Password Required",
        })
        .min(1, { message: texts?.password?.required || "Password Required" })
        .min(passwordLength, {
          message: texts?.password?.tooShort || "Password too short",
        }),
    });
  } else if (loginType === "phone") {
    formSchema = z.object({
      phone: z
        .string({
          required_error: texts?.phone?.required || "Phone Number Required",
        })
        .refine(
          (value) => {
            let isPhoneValid =
              isPossiblePhoneNumber(value) &&
              isValidPhoneNumber(value) &&
              validatePhoneNumberLength(value) === undefined;

            return isPhoneValid;
          },
          { message: texts?.phone?.invalid || "Phone Number Invalid" },
        ),
    });
  } else if (loginType === "link") {
    formSchema = z.object({
      email: z
        .string({ required_error: texts?.email?.required || "Email Required" })
        .min(1, { message: texts?.email?.required || "Email Required" })
        .email({ message: texts?.email?.invalid || "Email Invalid" }),
    });
  } else {
    formSchema = z.object({});
  }

  const { handleSubmit, control, formState } = useForm({
    resolver: zodResolver(formSchema),
  });

  const renderFields = () => {
    switch (loginType) {
      case "email":
        return (
          <>
            <Controller
              control={control}
              name="email"
              render={({ field }) => (
                <Input
                  inputProps={{
                    className:
                      props.direction === "rtl"
                        ? "hawa-text-right"
                        : "hawa-text-left",
                  }}
                  dir={"ltr"}
                  width="full"
                  autoComplete="email"
                  label={texts?.email?.label || "Email"}
                  helperText={formState.errors.email?.message}
                  placeholder={texts?.email?.placeholder || "contact@sikka.io"}
                  {...field}
                  onChange={(e) => {
                    field.onChange(e.target.value.toLowerCase().trim());
                  }}
                />
              )}
            />
            <div>
              <Controller
                control={control}
                name="password"
                render={({ field }) => (
                  <Input
                    width="full"
                    autoComplete="current-password"
                    type={passwordVisible ? "text" : "password"}
                    label={texts?.password?.label || "Password"}
                    endIcon={
                      <div
                        className="hawa-cursor-pointer"
                        onClick={() => setPasswordVisible(!passwordVisible)}
                      >
                        {passwordVisible ? (
                          <EyeIcon className="hawa-text-gray-500" />
                        ) : (
                          <HiddenEyeIcon className="hawa-text-gray-500" />
                        )}
                      </div>
                    }
                    placeholder={
                      texts?.password?.placeholder || "Enter your password"
                    }
                    helperText={formState.errors.password?.message}
                    {...field}
                  />
                )}
              />
              {props.withResetPassword && (
                <div
                  onClick={props.onForgotPassword}
                  className="hawa-mb-3  hawa-mt-2 hawa-w-fit hawa-cursor-pointer hawa-select-none hawa-text-xs dark:hawa-text-gray-300"
                >
                  {texts?.forgotPassword || "Forgot Password?"}
                </div>
              )}
            </div>
          </>
        );
      case "username":
        return (
          <>
            <Controller
              control={control}
              name="username"
              render={({ field }) => {
                return (
                  <Input
                    width="full"
                    autoComplete="username"
                    label={texts?.username?.label || "Username"}
                    helperText={formState.errors.username?.message}
                    placeholder={texts?.username?.placeholder || "sikka_sa"}
                    {...field}
                  />
                );
              }}
            />
            <div>
              <Controller
                control={control}
                name="password"
                render={({ field }) => (
                  <Input
                    width="full"
                    autoComplete="current-password"
                    type={passwordVisible ? "text" : "password"}
                    label={texts?.password?.label || "Password"}
                    endIcon={
                      <div
                        className="hawa-cursor-pointer"
                        onClick={() => setPasswordVisible(!passwordVisible)}
                      >
                        {passwordVisible ? (
                          <EyeIcon className="hawa-text-gray-500" />
                        ) : (
                          <HiddenEyeIcon className="hawa-text-gray-500" />
                        )}
                      </div>
                    }
                    placeholder={
                      texts?.password?.placeholder || "Enter your password"
                    }
                    helperText={formState.errors.password?.message}
                    {...field}
                  />
                )}
              />
              {props.withResetPassword && (
                <div
                  onClick={props.onForgotPassword}
                  className="hawa-mb-3 hawa-mt-2 hawa-w-fit hawa-cursor-pointer hawa-select-none hawa-text-xs dark:hawa-text-gray-300"
                >
                  {texts?.forgotPassword || "Forgot Password?"}
                </div>
              )}
            </div>
          </>
        );
      case "phone":
        return (
          <>
            <Controller
              control={control}
              name="phone"
              render={({ field }) => (
                <PhoneInput
                  label={texts?.phone?.label || "Phone Number"}
                  helperText={formState.errors.phone?.message}
                  preferredCountry={{ label: "+966" }}
                  {...props.phoneInputProps}
                  handleChange={(e) => {
                    if (
                      isValidPhoneNumber(e) &&
                      isPossiblePhoneNumber(e) &&
                      validatePhoneNumberLength(e) === undefined
                    ) {
                      let parsed = parsePhoneNumber(e);
                      field.onChange(parsed.number);
                    } else {
                      field.onChange(e);
                    }
                  }}
                />
              )}
            />
          </>
        );
      case "link":
        return (
          <>
            <Controller
              control={control}
              name="email"
              render={({ field }) => (
                <Input
                  width="full"
                  autoComplete="email"
                  label={texts?.email?.label || "Email"}
                  helperText={formState.errors.email?.message}
                  placeholder={texts?.email?.placeholder || "contact@sikka.io"}
                  {...field}
                  onChange={(e) => {
                    field.onChange(e.target.value.toLowerCase().trim());
                  }}
                />
              )}
            />
          </>
        );

      default:
        break;
    }
  };
  return (
    <div className="hawa-flex hawa-flex-col hawa-gap-4">
      <Card
        dir={props.direction}
        className={cn(
          props.cardless &&
            "!hawa-border-none !hawa-bg-transparent !hawa-shadow-none !hawa-drop-shadow-none",
        )}
      >
        <CardContent headless noPadding={props.cardless}>
          {props.showError && (
            <Alert
              direction={props.direction}
              title={props.errorTitle}
              text={props.errorText}
              severity="error"
            />
          )}
          <form
            noValidate
            className="hawa-flex hawa-flex-col hawa-gap-4"
            onSubmit={handleSubmit((e) => {
              if (props.onLogin) {
                return props.onLogin(e);
              } else {
                console.log("Form is submitted but onLogin prop is missing");
              }
            })}
          >
            {renderFields()}
            <Button
              className="hawa-mt-0 hawa-w-full"
              type="submit"
              isLoading={props.isLoading}
              disabled={props.isLoading}
            >
              {texts?.loginText || "Login"}
            </Button>
            {props.additionalButtons && props.additionalButtons}
            {props.allowRegister && (
              <div className="hawa-select-none hawa-p-3 hawa-text-center hawa-text-sm hawa-font-normal dark:hawa-text-gray-300">
                {texts?.newUserText || "New user?"}{" "}
                <span
                  onClick={props.onRouteToRegister}
                  className="clickable-link"
                >
                  {texts?.createAccount || "Create Account"}
                </span>
              </div>
            )}
          </form>
        </CardContent>

        {props.viaGithub || props.viaGoogle || props.viaTwitter ? (
          <CardFooter
            noPadding={props.cardless}
            className={cn(
              props.logosOnly
                ? "hawa-flex hawa-flex-row hawa-justify-center hawa-gap-2"
                : "hawa-grid hawa-grid-cols-1 hawa-gap-2",
            )}
          >
            <AuthButtons
              texts={thirdPartyAuthTexts}
              viaGoogle={props.viaGoogle}
              viaGithub={props.viaGithub}
              viaTwitter={props.viaTwitter}
              isGoogleLoading={props.isGoogleLoading}
              isGithubLoading={props.isGithubLoading}
              isTwitterLoading={props.isTwitterLoading}
              handleGoogle={props.onGoogleLogin}
              handleGithub={props.onGithubLogin}
              handleTwitter={props.onTwitterLogin}
            />
          </CardFooter>
        ) : null}
      </Card>
      {/* {props.handleColorMode && props.handleLanguage && (
       */}
    </div>
  );
};
