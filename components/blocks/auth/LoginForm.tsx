import React, { FC } from "react";
import { Controller, useForm } from "react-hook-form";
import { cn } from "../../util";
import { zodResolver } from "@hookform/resolvers/zod";
import { parsePhoneNumber } from "libphonenumber-js";
import * as z from "zod";

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

type LoginFormTypes = {
  texts?: {
    emailLabel?: string;
    emailPlaceholder?: string;
    emailRequired?: string;
    emailInvalid?: string;
    usernameLabel?: string;
    usernamePlaceholder?: string;
    usernameRequired?: string;
    usernameInvalid?: string;
    phoneRequired?: string;
    phoneInvalid?: string;
    phoneLabel?: string;
    passwordLabel?: string;
    passwordPlaceholder?: string;
    passwordRequired?: string;
    passwordTooShort?: string;
    forgotPassword?: string;
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
  passwordLength?: number;
};

export const LoginForm: FC<LoginFormTypes> = ({
  loginType,
  texts,
  passwordLength = 8,
  ...props
}) => {
  let formSchema;

  if (loginType === "email") {
    formSchema = z.object({
      email: z
        .string({ required_error: texts?.emailRequired })
        .min(1, { message: texts?.emailRequired })
        .email({ message: texts?.emailInvalid }),
      password: z
        .string({ required_error: texts?.passwordRequired })
        .min(1, { message: texts?.passwordRequired })
        .min(passwordLength, { message: texts?.passwordTooShort }),
    });
  } else if (loginType === "username") {
    formSchema = z.object({
      username: z
        .string({ required_error: texts?.usernameRequired })
        .min(2, { message: "Username must be at least 2 characters" })
        .refine(
          (value) => {
            const isValid = /^[a-zA-Z][a-zA-Z0-9_-]{2,14}$/.test(value);
            return isValid;
          },
          { message: texts?.usernameInvalid }
        ),
      password: z
        .string({ required_error: texts?.passwordRequired })
        .min(1, { message: texts?.passwordRequired })
        .min(passwordLength, { message: texts?.passwordTooShort }),
    });
  } else if (loginType === "phone") {
    formSchema = z.object({
      phone: z.string({ required_error: texts?.phoneRequired }).refine(
        (value) => {
          let phoneNumber = parsePhoneNumber(value);
          return phoneNumber.isValid();
        },
        { message: texts?.phoneInvalid }
      ),
    });
  } else if (loginType === "link") {
    formSchema = z.object({
      email: z
        .string({ required_error: texts?.emailRequired })
        .min(1, { message: texts?.emailRequired })
        .email({ message: texts?.emailInvalid }),
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
                  width="full"
                  autoComplete="email"
                  label={texts?.emailLabel || "Email"}
                  helperText={formState.errors.email?.message}
                  placeholder={texts?.emailPlaceholder || "contact@sikka.io"}
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
                    type="password"
                    label={texts?.passwordLabel || "Password"}
                    placeholder={
                      texts?.passwordPlaceholder || "Enter your password"
                    }
                    helperText={formState.errors.password?.message}
                    {...field}
                  />
                )}
              />
              {!props.withoutResetPassword && (
                <div
                  onClick={props.onForgotPassword}
                  className="hawa-mb-3 hawa-mt-2 hawa-w-fit hawa-cursor-pointer hawa-text-xs dark:hawa-text-gray-300"
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
                    label={texts?.usernameLabel || "Username"}
                    helperText={formState.errors.username?.message}
                    placeholder={texts?.usernamePlaceholder || "sikka_sa"}
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
                    type="password"
                    label={texts?.passwordLabel || "Password"}
                    placeholder={
                      texts?.passwordPlaceholder || "Enter your password"
                    }
                    helperText={formState.errors.password?.message}
                    {...field}
                  />
                )}
              />
              {!props.withoutResetPassword && (
                <div
                  onClick={props.onForgotPassword}
                  className="hawa-mb-3 hawa-mt-2 hawa-w-fit hawa-cursor-pointer hawa-text-xs dark:hawa-text-gray-300"
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
                  label={texts?.phoneLabel}
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
                  label={texts?.emailLabel || "Email"}
                  helperText={formState.errors.email?.message}
                  placeholder={texts?.emailPlaceholder || "contact@sikka.io"}
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
              title={props.errorTitle}
              text={props.errorText}
              severity="error"
            />
          )}
          <form
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
            >
              {texts?.loginText || "Login"}
            </Button>
            {props.additionalButtons}
            {props.allowRegister && (
              <div className="hawa-p-3 hawa-text-center hawa-text-sm hawa-font-normal hawa-select-none dark:hawa-text-gray-300">
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
                onClick={props.onGoogleLogin}
              >
                {props.isGoogleLoading ? (
                  <Loading size="button" />
                ) : (
                  <Logos.google className="hawa-h-4 hawa-w-4" />
                )}
                {!props.logosOnly && texts?.loginViaGoogleLabel}
              </Button>
            )}
            {props.viaGithub && (
              <Button
                className="hawa-flex hawa-flex-row hawa-items-center hawa-gap-2"
                variant="outline"
                onClick={props.onGithubLogin}
              >
                {props.isGithubLoading ? (
                  <Loading size="button" />
                ) : (
                  <Logos.github className="hawa-h-4 hawa-w-4" />
                )}
                {!props.logosOnly && texts?.loginViaGithubLabel}
              </Button>
            )}
            {props.viaTwitter && (
              <Button
                className="hawa-flex hawa-flex-row hawa-items-center hawa-gap-2"
                variant="outline"
                onClick={props.onTwitterLogin}
              >
                {props.isTwitterLoading ? (
                  <Loading size="button" />
                ) : (
                  <Logos.twitter className="hawa-h-4 hawa-w-4" />
                )}{" "}
                {!props.logosOnly && texts?.loginViaTwitterLabel}
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
