import React, { FC, useState } from "react";
import { Controller, useForm } from "react-hook-form";

import { zodResolver } from "@hookform/resolvers/zod";
import { parsePhoneNumber } from "libphonenumber-js";
import * as z from "zod";

import { Alert } from "@/packages/components/elements/alert";
import { Button } from "@/packages/components/elements/button";
import { Card, CardContent, CardFooter } from "@/packages/components/elements/card";
import { Input } from "@/packages/components/elements/input";
import { PhoneInput } from "@/packages/components/elements/phoneInput";

import {
  DirectionType,
  LoginFormTextsTypes,
  ThirdPartyAuthTextsTypes
} from "@/packages/components/types/index";

import { EyeIcon, HiddenEyeIcon } from "../../icons";
import { cn } from "../../util";
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
  withoutResetPassword?: boolean;
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
  onLogin?: (e: any) => void;
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
};

export const LoginForm: FC<LoginFormTypes> = ({
  loginType,
  texts,
  passwordLength = 8,
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
    continueWithPhone: texts?.continueWithPhone
  };

  let formSchema;

  if (loginType === "email") {
    formSchema = z.object({
      email: z
        .string({ required_error: texts?.email?.required })
        .min(1, { message: texts?.email?.required })
        .email({ message: texts?.email?.invalid }),
      password: z
        .string({ required_error: texts?.password?.required })
        .min(1, { message: texts?.password?.required })
        .min(passwordLength, { message: texts?.password?.tooShort })
    });
  } else if (loginType === "username") {
    formSchema = z.object({
      username: z
        .string({ required_error: texts?.username?.required })
        .min(2, { message: texts?.username?.tooShort })
        .refine(
          (value) => {
            const isValid = /^[a-zA-Z][a-zA-Z0-9_-]{2,14}$/.test(value);
            return isValid;
          },
          { message: texts?.username?.invalid }
        ),
      password: z
        .string({ required_error: texts?.password?.required })
        .min(1, { message: texts?.password?.required })
        .min(passwordLength, { message: texts?.password?.tooShort })
    });
  } else if (loginType === "phone") {
    formSchema = z.object({
      phone: z.string({ required_error: texts?.phone?.required }).refine(
        (value) => {
          let phoneNumber = parsePhoneNumber(value);
          return phoneNumber.isValid();
        },
        { message: texts?.phone?.invalid }
      )
    });
  } else if (loginType === "link") {
    formSchema = z.object({
      email: z
        .string({ required_error: texts?.email?.required })
        .min(1, { message: texts?.email?.required })
        .email({ message: texts?.email?.invalid })
    });
  } else {
    formSchema = z.object({});
  }

  const { handleSubmit, control, formState } = useForm({
    resolver: zodResolver(formSchema)
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
                        : "hawa-text-left"
                  }}
                  dir={"ltr"}
                  width="full"
                  autoComplete="email"
                  label={texts?.email?.label}
                  helperText={formState.errors.email?.message}
                  placeholder={texts?.email?.placeholder || "contact@sikka.io"}
                  {...field}
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
              {!props.withoutResetPassword && (
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
                    label={texts?.password?.label}
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
              {!props.withoutResetPassword && (
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
                  label={texts?.phone?.label}
                  helperText={formState.errors.phone?.message}
                  preferredCountry={{ label: "+966" }}
                  handleChange={(e) =>
                    field.onChange(parsePhoneNumber(e).number)
                  }
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
      <Card dir={props.direction}>
        <CardContent headless>
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
            {props.additionalButtons}
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
            className={cn(
              props.logosOnly
                ? "hawa-flex hawa-flex-row hawa-justify-center hawa-gap-2"
                : "hawa-grid hawa-grid-cols-1 hawa-gap-2"
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
