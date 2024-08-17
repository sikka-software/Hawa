import React, { FC, useState } from "react";
import { Controller, FormProvider, useForm } from "react-hook-form";

import { zodResolver } from "@hookform/resolvers/zod";
import { cn } from "@util/index";
import * as z from "zod";

import { Alert } from "@elements/alert";
import { Button } from "@elements/button";
import { Card, CardContent, CardFooter } from "@elements/card";
import { Checkbox } from "@elements/checkbox";
import { Input } from "@elements/input";
import { LabelProps } from "@elements/label";
import { Select, SelectOptionProps } from "@elements/select";
import { StopPropagationWrapper } from "@elements/stopPropagationWrapper";

import { DirectionType } from "@_types/commonTypes";
import { RegisterFormTextsTypes, ThirdPartyAuthTextsTypes } from "@_types/textTypes";

import { EyeIcon, HiddenEyeIcon } from "../../icons";
import { AuthButtons } from "./AuthButtons";

type RegisterFormTypes = {
  /** Object containing text labels used throughout the form. */
  texts?: RegisterFormTextsTypes;
  /** Direction of text and layout, either 'rtl' (right-to-left) or 'ltr' (left-to-right). */
  direction?: DirectionType;
  /** Determines whether to display logos only or with text in the social media registration section. */
  logosOnly?: boolean;
  /** Enables registration via Google when set to true. */
  viaGoogle?: boolean;
  /** Enables registration via Github when set to true. */
  viaGithub?: boolean;
  /** Enables registration via Twitter when set to true. */
  viaTwitter?: boolean;
  /** Determines whether to show the referral code field. */
  showRefCode?: boolean;
  /** Determines whether to show the user source selection. */
  showUserSource?: boolean;
  /** Determines whether to show the terms acceptance checkbox. */
  showTermsOption?: boolean;
  /** Determines whether to show the newsletter subscription checkbox. */
  showNewsletterOption?: boolean;
  /** Callback function triggered on form submission. */
  onRegister: (e: any) => void;
  /** Callback function triggered to route to the login page. */
  onRouteToLogin?: () => void;
  /** Callback function triggered to handle registration via Google. */
  onGoogleRegister?: () => void;
  /** Callback function triggered to handle registration via Github. */
  onGithubRegister?: () => void;
  /** Callback function triggered to handle registration via Twitter. */
  onTwitterRegister?: () => void;
  /** Callback function triggered to route to the Terms of Service page. */
  onRouteToTOS?: () => void;
  /** Determines whether to show an error alert. */
  showError?: boolean;
  /** Callback function triggered when the error alert is dismissed. */
  onErrorDismissed?: () => void;
  /** Title for the error alert. */
  errorTitle?: any;
  /** Text for the error alert. */
  errorText?: any;
  /** Array containing the fields to be included in the form. */
  registerFields?: string[];
  /** Indicates whether the form submission is in progress. */
  isLoading?: boolean;
  /** If true, a loading spinner is displayed within the Google login button.   */
  isGoogleLoading?: boolean;
  /** If true, a loading spinner is displayed within the Twitter login button.   */
  isTwitterLoading?: boolean;
  /** If true, a loading spinner is displayed within the Github login button.   */
  isGithubLoading?: boolean;
  /** The options of "How did you learn about us?" select field.   */
  userReferenceOptions?: SelectOptionProps[];
  /** To add more custom buttons under the register button.   */
  additionalButtons?: any;
  /** To add more custom input fields   */
  additionalInputs?: any;
  /** To customize the username input field   */
  usernameOptions?: {
    label?: LabelProps;
  };
  classNames?: {
    root?: string;
    form?: string;
    card?: string;
  };

  /** The minimum length of the password input field */
  minPasswordLength?: number;
  /** If true, the form is displayed without a card container styling.*/
  cardless?: boolean;
};

export const RegisterForm: FC<RegisterFormTypes> = ({
  texts,
  registerFields = ["email"],
  minPasswordLength = 8,
  showTermsOption = false,
  showNewsletterOption = false,
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

  const methods = useForm();
  let fieldSchemas: any = {};

  registerFields.forEach((field) => {
    switch (field) {
      case "fullname":
        fieldSchemas["fullName"] = z.string().optional();
        break;
      case "email":
        fieldSchemas["email"] = z
          .string({
            required_error: texts?.email?.required || "Email is required",
          })
          .email({ message: texts?.email?.invalid || "Invalid email" })
          .min(1, { message: texts?.email?.required || "Email is required" });
        break;
      case "username":
        fieldSchemas["username"] = z
          .string({
            required_error: texts?.username?.required || "Username is required",
          })
          .min(1, {
            message: texts?.username?.required || "Username is required",
          })
          .max(14, {
            message: texts?.username?.tooLong || "Username is too long",
          })
          .refine(
            (value) => {
              const isValid = /^[a-zA-Z][a-zA-Z0-9_-]{2,14}$/.test(value);
              return isValid;
            },
            { message: texts?.username?.invalid || "Invalid username" },
          );
        break;
    }
  });

  const formSchema = z
    .object({
      ...fieldSchemas,
      password: z
        .string({
          required_error: texts?.password?.required || "Password is required",
        })
        .min(minPasswordLength, {
          message: texts?.password?.tooShort || "Password is too short",
        })
        .refine((value) => value !== "", {
          message: texts?.password?.required || "Password is required",
        }),
      confirm_password: z
        .string({
          required_error: texts?.confirm?.required || "Confirm password required",
        })
        .min(minPasswordLength, {
          message: texts?.password?.tooShort || "Password is too short",
        })
        .refine((value) => value !== "", {
          message: texts?.password?.required || "Confirm password is required",
        }),
      refCode: z.string().optional(),
      reference: z.string().optional(),
      terms_accepted: z
        .boolean({ required_error: texts?.termsRequired || "Terms required" })
        .refine((value) => value, {
          message: texts?.termsRequired || "Terms required",
        }),
      newsletter_accepted: z.boolean().optional(),
    })
    .refine((data) => data.password === data.confirm_password, {
      message: texts?.confirm?.dontMatch || "Passwords don't match",
      path: ["confirm_password"],
    });

  const { handleSubmit, control, formState } = useForm({
    resolver: zodResolver(formSchema),
  });

  return (
    <div className={cn("hawa-flex hawa-flex-col hawa-gap-4", props.classNames?.root)}>
      <Card
        dir={props.direction}
        className={cn(
          props.classNames?.card,
          props.cardless &&
            "hawa-border-none hawa-bg-transparent !hawa-shadow-none !hawa-drop-shadow-none",
        )}
      >
        <CardContent headless noPadding={props.cardless}>
          <div>
            {props.showError && (
              <Alert
                direction={props.direction}
                title={props.errorTitle}
                text={props.errorText}
                severity="error"
                onAlertClosed={() => {
                  if (props.onErrorDismissed) {
                    props.onErrorDismissed();
                  }
                }}
              />
            )}

            {/* TODO: is formprovider needed? you got 2 useForm  */}
            <FormProvider {...methods}>
              <form
                noValidate
                onSubmit={handleSubmit((e) => {
                  if (props.onRegister) {
                    return props.onRegister(e);
                  } else {
                    console.log("Form is submitted but onRegister prop is missing");
                  }
                })}
                className="hawa-flex hawa-flex-col hawa-gap-4"
              >
                <div className="hawa-flex hawa-flex-col hawa-gap-4">
                  {registerFields.map((fld, i) => {
                    if (fld === "fullname") {
                      return (
                        <Controller
                          key={i}
                          control={control}
                          name="fullName"
                          render={({ field }) => (
                            <Input
                              width="full"
                              label={texts?.fullName?.label || "Full Name"}
                              placeholder={texts?.fullName?.placeholder}
                              helperText={formState.errors.fullName?.message}
                              {...field}
                            />
                          )}
                        />
                      );
                    }
                    if (fld === "email") {
                      return (
                        <Controller
                          key={i}
                          control={control}
                          name="email"
                          render={({ field }) => (
                            <Input
                              dir={"ltr"}
                              inputProps={{
                                className:
                                  props.direction === "rtl" ? "hawa-text-right" : "hawa-text-left",
                              }}
                              width="full"
                              autoComplete="email"
                              label={texts?.email?.label || "Email"}
                              helperText={formState.errors.email?.message}
                              placeholder={texts?.email?.placeholder || "Enter your email"}
                              {...field}
                              onChange={(e) => {
                                field.onChange(e.target.value.toLowerCase().trim());
                              }}
                            />
                          )}
                        />
                      );
                    }
                    if (fld === "username") {
                      return (
                        <Controller
                          key={i}
                          control={control}
                          name="username"
                          render={({ field }) => (
                            <Input
                              width="full"
                              autoComplete="username"
                              label={texts?.username?.label || "Username"}
                              labelProps={{
                                ...props.usernameOptions?.label,
                              }}
                              helperText={formState.errors.username?.message}
                              placeholder={texts?.username?.placeholder}
                              {...field}
                            />
                          )}
                        />
                      );
                    }
                  })}
                </div>
                <Controller
                  control={control}
                  name="password"
                  render={({ field }) => (
                    <Input
                      width="full"
                      type={passwordVisible ? "text" : "password"}
                      autoComplete="new-password"
                      label={texts?.password?.label || "Password"}
                      placeholder={texts?.password?.placeholder}
                      helperText={formState.errors.password?.message}
                      endIcon={
                        <div
                          className="hawa-cursor-pointer"
                          onClick={() => setPasswordVisible(!passwordVisible)}
                        >
                          {passwordVisible ? (
                            <EyeIcon className="hawa-text-gray-500" />
                          ) : (
                            <HiddenEyeIcon className="hawa-text-gray-500" />
                          )}{" "}
                        </div>
                      }
                      {...field}
                    />
                  )}
                />
                <Controller
                  control={control}
                  name="confirm_password"
                  render={({ field }) => (
                    <Input
                      width="full"
                      type={passwordVisible ? "text" : "password"}
                      autoComplete="new-password"
                      label={texts?.confirm?.label || "Confirm Password"}
                      placeholder={texts?.confirm?.placeholder || "Confirm your Password"}
                      helperText={formState.errors.confirm_password?.message}
                      endIcon={
                        <div
                          className="hawa-cursor-pointer"
                          onClick={() => setPasswordVisible(!passwordVisible)}
                        >
                          {passwordVisible ? (
                            <EyeIcon className="hawa-text-gray-500" />
                          ) : (
                            <HiddenEyeIcon className="hawa-text-gray-500" />
                          )}{" "}
                        </div>
                      }
                      {...field}
                    />
                  )}
                />
                {props.additionalInputs}
                {props.showRefCode && (
                  <Controller
                    control={control}
                    name="refCode"
                    render={({ field }) => (
                      <Input
                        width="full"
                        label={texts?.refCode}
                        placeholder={texts?.refCodePlaceholder || "Enter the referral code"}
                        helperText={formState.errors.refCode?.message}
                        {...field}
                      />
                    )}
                  />
                )}
                {props.showUserSource && (
                  <Controller
                    control={control}
                    name="reference"
                    render={({ field }) => (
                      <Select
                        label={texts?.userReference?.label || "How did you learn about us?"}
                        placeholder={texts?.userReference?.placeholder}
                        isCreatable={false}
                        isMulti={false ?? false}
                        isSearchable={false}
                        isClearable={false ?? false}
                        options={props.userReferenceOptions || []}
                        onChange={(e: any) => field.onChange(e)}
                      />
                    )}
                  />
                )}
                {showTermsOption || showNewsletterOption ? (
                  <div className="hawa-flex hawa-flex-col hawa-gap-3 hawa-mb-2">
                    {showTermsOption && (
                      <Controller
                        control={control}
                        name="terms_accepted"
                        render={({ field }) => (
                          <Checkbox
                            id="terms_accepted"
                            helperText={formState.errors.terms_accepted?.message?.toString()}
                            onCheckedChange={(e) => field.onChange(e)}
                            label={
                              <div className="hawa-flex hawa-flex-row hawa-gap-0.5 hawa-whitespace-nowrap hawa-flex-wrap">
                                {texts?.iAcceptText || "I accept the"}{" "}
                                <StopPropagationWrapper>
                                  <span
                                    onClick={(e) => {
                                      e.preventDefault();
                                      if (props.onRouteToTOS) {
                                        props.onRouteToTOS();
                                      }
                                    }}
                                    className="clickable-link"
                                  >
                                    {texts?.termsText || "Terms of Service"}
                                  </span>
                                </StopPropagationWrapper>
                              </div>
                            }
                          />
                        )}
                      />
                    )}
                    {showNewsletterOption && (
                      <Controller
                        control={control}
                        name="newsletter_accepted"
                        render={({ field }) => (
                          <Checkbox
                            id="newsletter_accepted"
                            label={texts?.subscribeToNewsletter || "Subscribe to our newsletter"}
                            onCheckedChange={field.onChange}
                          />
                        )}
                      />
                    )}
                  </div>
                ) : null}
                <Button
                  className="hawa-w-full"
                  type="submit"
                  isLoading={props.isLoading}
                  disabled={props.isLoading}
                >
                  {texts?.registerText || "Register"}
                </Button>
                {props.additionalButtons}
              </form>
            </FormProvider>
            {props.onRouteToLogin && (
              <div className="hawa-flex hawa-flex-row hawa-items-center hawa-justify-center hawa-gap-1 hawa-p-3 hawa-text-center hawa-text-sm hawa-font-normal dark:hawa-text-white">
                <span>{texts?.existingUserText || "Already have an account?"}</span>
                <span onClick={props.onRouteToLogin} className="clickable-link">
                  {texts?.loginText || "Login"}
                </span>
              </div>
            )}
          </div>
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
              handleGoogle={props.onGoogleRegister}
              handleGithub={props.onGithubRegister}
              handleTwitter={props.onTwitterRegister}
            />
          </CardFooter>
        ) : null}
      </Card>
    </div>
  );
};
