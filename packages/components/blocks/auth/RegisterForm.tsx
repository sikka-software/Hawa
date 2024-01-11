import React, { FC, useState } from "react";
import { Controller, FormProvider, useForm } from "react-hook-form";

import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";

import { Alert } from "@elements/alert";
import { Button } from "@elements/button";
import { Card, CardContent, CardFooter } from "@elements/card";
import { Checkbox } from "@elements/checkbox";
import { Input } from "@elements/input";
import { Select, SelectOptionProps } from "@elements/select";
import { StopPropagationWrapper } from "@elements/stopPropagationWrapper";

import { DirectionType } from "@_types/commonTypes";
import {
  RegisterFormTextsTypes,
  ThirdPartyAuthTextsTypes
} from "@_types/textTypes";

import { EyeIcon, HiddenEyeIcon } from "../../icons";
import { cn } from "@util/index";
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
};

export const RegisterForm: FC<RegisterFormTypes> = ({
  texts,
  registerFields = ["email"],
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

  const methods = useForm();
  let fieldSchemas: any = {};

  registerFields.forEach((field) => {
    switch (field) {
      case "fullname":
        fieldSchemas["fullName"] = z.string().optional();
        break;
      case "email":
        fieldSchemas["email"] = z
          .string({ required_error: texts?.email?.required })
          .email({ message: texts?.email?.invalid })
          .min(1, { message: texts?.email?.required });
        break;
      case "username":
        fieldSchemas["username"] = z
          .string({ required_error: texts?.username?.required })
          .min(1, { message: texts?.username?.required })
          .refine(
            (value) => {
              const isValid = /^[a-zA-Z][a-zA-Z0-9_-]{2,14}$/.test(value);
              return isValid;
            },
            { message: texts?.username?.invalid }
          );
        break;
    }
  });

  const formSchema = z
    .object({
      ...fieldSchemas,
      password: z
        .string({ required_error: texts?.password?.required })
        .min(5, { message: texts?.password?.tooShort })
        .refine((value) => value !== "", {
          message: texts?.password?.required
        }),
      confirm_password: z
        .string({ required_error: texts?.confirm?.required })
        .refine((value) => value !== "", {
          message: texts?.password?.required
        }),
      refCode: z.string().optional(),
      reference: z.string().optional(),
      terms_accepted: z
        .boolean({ required_error: texts?.termsRequired })
        .refine((value) => value, { message: texts?.termsRequired }),
      newsletter_accepted: z.boolean().optional()
    })
    .refine((data) => data.password === data.confirm_password, {
      message: texts?.confirm?.dontMatch,
      path: ["confirm_password"]
    });

  const { handleSubmit, control, formState } = useForm({
    resolver: zodResolver(formSchema)
  });

  return (
    <div className="hawa-flex hawa-flex-col hawa-gap-4">
      <Card dir={props.direction}>
        <CardContent headless>
          <div>
            {props.showError && (
              <Alert
                title={props.errorTitle}
                text={props.errorText}
                severity="error"
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
                    console.log(
                      "Form is submitted but onRegister prop is missing"
                    );
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
                              label={texts?.fullName?.label}
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
                                  props.direction === "rtl"
                                    ? "hawa-text-right"
                                    : "hawa-text-left"
                              }}
                              width="full"
                              autoComplete="email"
                              label={texts?.email?.label}
                              helperText={formState.errors.email?.message}
                              placeholder={
                                texts?.email?.placeholder || "Enter your email"
                              }
                              {...field}
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
                              label={texts?.username?.label}
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
                      autoComplete="new-password"
                      label={texts?.password?.label}
                      placeholder={texts?.password?.placeholder}
                      helperText={formState.errors.password?.message}
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
                      type="password"
                      autoComplete="new-password"
                      label={texts?.confirm?.label}
                      placeholder={texts?.confirm?.placeholder}
                      helperText={formState.errors.confirm_password?.message}
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
                        placeholder={
                          texts?.refCodePlaceholder || "Enter the referral code"
                        }
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
                        label={
                          texts?.userReference?.label ||
                          "How did you learn about us?"
                        }
                        placeholder={texts?.userReference?.placeholder}
                        isCreatable={false}
                        isMulti={false ?? false}
                        isSearchable={false}
                        isClearable={false ?? false}
                        options={props.userReferenceOptions}
                        onChange={(e: any) => {
                          field.onChange(e.value);
                        }}
                      />
                    )}
                  />
                )}
                <div className="hawa-flex hawa-flex-col hawa-gap-3">
                  {props.showTermsOption && (
                    <Controller
                      control={control}
                      name="terms_accepted"
                      render={({ field }) => (
                        <Checkbox
                          id="terms_accepted"
                          helperText={formState.errors.terms_accepted?.message?.toString()}
                          onCheckedChange={(e) => field.onChange(e)}
                          label={
                            <div className="hawa-flex hawa-flex-row hawa-gap-0.5">
                              <span>{texts?.iAcceptText}</span>{" "}
                              <StopPropagationWrapper>
                                <a
                                  onClick={props.onRouteToTOS}
                                  className="clickable-link"
                                >
                                  {texts?.termsText}
                                </a>
                              </StopPropagationWrapper>
                            </div>
                          }
                        />
                      )}
                    />
                  )}
                  {props.showNewsletterOption && (
                    <Controller
                      control={control}
                      name="newsletter_accepted"
                      render={({ field }) => (
                        <Checkbox
                          id="newsletter_accepted"
                          label={texts?.subscribeToNewsletter}
                          onCheckedChange={field.onChange}
                        />
                      )}
                    />
                  )}
                </div>
                <Button
                  className="hawa-mt-4 hawa-w-full"
                  type="submit"
                  isLoading={props.isLoading}
                  disabled={props.isLoading}
                >
                  {texts?.registerText || "Register"}
                </Button>
                {props.additionalButtons}
              </form>
            </FormProvider>
            <div className="hawa-flex hawa-flex-row hawa-items-center hawa-justify-center hawa-gap-1 hawa-p-3 hawa-text-center  hawa-text-sm hawa-font-normal dark:hawa-text-white">
              <span>{texts?.existingUserText}</span>
              <span onClick={props.onRouteToLogin} className="clickable-link">
                {texts?.loginText || "Login"}
              </span>
            </div>
          </div>
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
              handleGoogle={props.onGoogleRegister}
              handleGithub={props.onGithubRegister}
              handleTwitter={props.onTwitterRegister}
            />
          </CardFooter>
        ) : null}
      </Card>
      {/* {props.handleColorMode && props.handleLanguage && (
        
      )} */}
    </div>
  );
};
