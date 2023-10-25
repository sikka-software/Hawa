import React, { FC } from "react";
import { Controller, FormProvider, useForm } from "react-hook-form";
import { cn } from "../../util";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";

import {
  Input,
  InterfaceSettings,
  Alert,
  Select,
  Logos,
  Checkbox,
  Button,
  Card,
  CardContent,
  CardFooter,
  SelectOptionProps,
  Loading,
  StopPropagationWrapper,
} from "../../elements";

type RegisterFormTypes = {
  /** Callback function triggered to handle language changes.*/
  handleLanguage?: () => void;
  /** The current language being used in the application. */
  currentLanguage?: any;
  /** Callback function triggered to handle color mode changes. */
  handleColorMode?: () => void;
  /** The current color mode being used in the application. */
  currentColorMode?: any;
  /** Direction of text and layout, either 'rtl' (right-to-left) or 'ltr' (left-to-right). */
  direction?: "rtl" | "ltr";
  /** Determines whether to display logos only or with text in the social media registration section. */
  logosOnly?: boolean;
  /** Enables registration via Google when set to true. */
  viaGoogle: boolean;
  /** Enables registration via Github when set to true. */
  viaGithub: boolean;
  /** Enables registration via Twitter when set to true. */
  viaTwitter: boolean;
  /** Determines whether to show the referral code field. */
  showRefCode: boolean;
  /** Determines whether to show the user source selection. */
  showUserSource: boolean;
  /** Determines whether to show the terms acceptance checkbox. */
  showTermsOption: boolean;
  /** Determines whether to show the newsletter subscription checkbox. */
  showNewsletterOption: boolean;
  /** Callback function triggered on form submission. */
  onRegister: (e: any) => void;
  /** Callback function triggered to route to the login page. */
  onRouteToLogin: () => void;
  /** Callback function triggered to handle registration via Google. */
  onGoogleRegister: () => void;
  /** Callback function triggered to handle registration via Github. */
  onGithubRegister: () => void;
  /** Callback function triggered to handle registration via Twitter. */
  onTwitterRegister: () => void;
  /** Callback function triggered to route to the Terms of Service page. */
  onRouteToTOS: () => void;
  /** Determines whether to show an error alert. */
  showError: any;
  /** Title for the error alert. */
  errorTitle: any;
  /** Text for the error alert. */
  errorText: any;
  /** Array containing the fields to be included in the form. */
  registerFields: any[];
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
  /** Object containing text labels used throughout the form. */
  texts: {
    fullNameLabel: string;
    fullNamePlaceholder: string;
    emailLabel: string;
    emailPlaceholder: string;
    emailRequired: string;
    emailInvalid: string;
    usernameLabel: string;
    usernamePlaceholder: string;
    usernameInvalid: string;
    usernameRequired: string;
    passwordLabel: string;
    passwordPlaceholder: string;
    passwordRequired: string;
    passwordTooShort: string;
    passwordsDontMatch: string;
    confirmPasswordLabel: string;
    confirmPasswordPlaceholder: string;
    confirmPasswordRequired: string;
    subscribeToNewsletter: string;
    termsRequired: string;
    registerViaGoogleLabel: string;
    registerViaGithubLabel: string;
    registerViaTwitterLabel: string;
    refCode: string;
    refCodePlaceholder: string;
    userReferenceLabel: string;
    userReferencePlaceholder: string;
    existingUserText: string;
    termsText: string;
    iAcceptText: string;
    registerText: string;
    loginText: string;
  };
};

export const RegisterForm: FC<RegisterFormTypes> = ({ texts, ...props }) => {
  const methods = useForm();
  let fieldSchemas: any = {};

  props.registerFields.forEach((field) => {
    switch (field) {
      case "fullname":
        fieldSchemas["fullName"] = z.string().optional();
        break;
      case "email":
        fieldSchemas["email"] = z
          .string({ required_error: texts?.emailRequired })
          .email({ message: texts?.emailInvalid })
          .min(1, { message: texts?.emailRequired });
        break;
      case "username":
        fieldSchemas["username"] = z
          .string({ required_error: texts?.usernameRequired })
          .min(1, { message: texts?.usernameRequired })
          .refine(
            (value) => {
              const isValid = /^[a-zA-Z][a-zA-Z0-9_-]{2,14}$/.test(value);
              return isValid;
            },
            { message: texts?.usernameInvalid }
          );
        break;
    }
  });

  const formSchema = z
    .object({
      ...fieldSchemas,
      password: z
        .string({ required_error: texts?.passwordRequired })
        .min(5, { message: texts?.passwordTooShort })
        .refine((value) => value !== "", {
          message: texts?.passwordRequired,
        }),
      confirm_password: z
        .string({ required_error: texts?.confirmPasswordRequired })
        .refine((value) => value !== "", {
          message: texts?.passwordRequired,
        }),
      refCode: z.string().optional(),
      reference: z.string().optional(),
      terms_accepted: z
        .boolean({ required_error: texts?.termsRequired })
        .refine((value) => value, { message: texts?.termsRequired }),
      newsletter_accepted: z.boolean().optional(),
    })
    .refine((data) => data.password === data.confirm_password, {
      message: texts?.passwordsDontMatch,
      path: ["confirm_password"],
    });

  const { handleSubmit, control, formState } = useForm({
    resolver: zodResolver(formSchema),
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
            <FormProvider {...methods}>
              <form
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
                  {props.registerFields.map((fld, i) => {
                    if (fld === "fullname") {
                      return (
                        <Controller
                          key={i}
                          control={control}
                          name="fullName"
                          render={({ field }) => (
                            <Input
                              width="full"
                              label={texts?.fullNameLabel}
                              placeholder={texts?.fullNamePlaceholder}
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
                              width="full"
                              autoComplete="email"
                              label={texts?.emailLabel}
                              helperText={formState.errors.email?.message}
                              placeholder={
                                texts?.emailPlaceholder || "Enter your email"
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
                              label={texts?.usernameLabel}
                              helperText={formState.errors.username?.message}
                              placeholder={texts?.usernamePlaceholder}
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
                      type="password"
                      autoComplete="new-password"
                      label={texts?.passwordLabel}
                      placeholder={texts?.passwordPlaceholder}
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
                      label={texts?.confirmPasswordLabel}
                      placeholder={texts?.confirmPasswordPlaceholder}
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
                          texts?.userReferenceLabel ||
                          "How did you learn about us?"
                        }
                        placeholder={texts?.userReferencePlaceholder}
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
                  isLoading={props.isLoading}
                  className="hawa-w-full hawa-mt-4"
                >
                  {texts?.registerText}
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
            {props.viaGoogle && (
              <Button
                className="hawa-flex hawa-flex-row hawa-items-center hawa-gap-2"
                variant="outline"
                onClick={props.onGoogleRegister}
              >
                {props.isGoogleLoading ? (
                  <Loading size="button" />
                ) : (
                  <Logos.google className="hawa-h-4 hawa-w-4" />
                )}{" "}
                {!props.logosOnly && texts?.registerViaGoogleLabel}
              </Button>
            )}
            {props.viaGithub && (
              <Button
                className="hawa-flex hawa-flex-row hawa-items-center hawa-gap-2"
                variant="outline"
                onClick={props.onGithubRegister}
              >
                {props.isGithubLoading ? (
                  <Loading size="button" />
                ) : (
                  <Logos.github className="hawa-h-4 hawa-w-4" />
                )}{" "}
                {!props.logosOnly && texts?.registerViaGithubLabel}
              </Button>
            )}
            {props.viaTwitter && (
              <Button
                className="hawa-flex hawa-flex-row hawa-items-center hawa-gap-2"
                variant="outline"
                onClick={props.onTwitterRegister}
              >
                {props.isTwitterLoading ? (
                  <Loading size="button" />
                ) : (
                  <Logos.twitter className="hawa-h-4 hawa-w-4" />
                )}{" "}
                {!props.logosOnly && texts?.registerViaTwitterLabel}
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
