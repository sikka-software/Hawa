import React, { FC } from "react";
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
} from "../../elements";
import { Controller, FormProvider, useForm } from "react-hook-form";
import { cn } from "../../util";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";

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
  /** Object containing text labels used throughout the form. */
  texts: {
    fullNameLabel: string;
    fullNamePlaceholder: string;
    fullNameRequiredText: string;
    emailLabel: string;
    emailPlaceholder: string;
    emailRequiredText: string;
    emailInvalidText: string;
    usernameLabel: string;
    usernamePlaceholder: string;
    usernameRequired: string;
    passwordLabel: string;
    passwordPlaceholder: string;
    passwordRequiredText: string;
    passwordTooShortText: string;
    passwordsDontMatch: string;
    confirmPasswordLabel: string;
    confirmPasswordPlaceholder: string;
    confirmPasswordRequired: string;
    subscribeToNewsletter: string;
    forgotPasswordText: string;
    termsText: string;
    iAcceptText: string;
    termsRequiredText: string;
    newUserText: string;
    registerText: string;
    loginText: string;
    existingUserText: string;
    registerViaGoogleLabel: string;
    registerViaGithubLabel: string;
    registerViaTwitterLabel: string;
    refCode: string;
    refCodePlaceholder: string;
    userReferenceLabel: string;
    userReferencePlaceholder: string;
  };
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
  handleRegister: (e: any) => void;
  /** Callback function triggered to route to the login page. */
  handleRouteToLogin: () => void;
  /** Callback function triggered to handle registration via Google. */
  handleGoogleRegister: () => void;
  /** Callback function triggered to handle registration via Github. */
  handleGithubRegister: () => void;
  /** Callback function triggered to handle registration via Twitter. */
  handleTwitterRegister: () => void;
  /** Callback function triggered to route to the Terms of Service page. */
  handleRouteToTOS: () => void;
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
  userReferenceOptions: SelectOptionProps[];
};

export const RegisterForm: FC<RegisterFormTypes> = (props) => {
  const methods = useForm();
  const {
    usernamePlaceholder,
    usernameRequired,
    emailInvalidText,
    emailPlaceholder,
    emailRequiredText,
    passwordPlaceholder,
    passwordRequiredText,
    passwordTooShortText,
    passwordsDontMatch,
    confirmPasswordRequired,
    confirmPasswordPlaceholder,
    termsRequiredText,
    fullNameRequiredText,
  } = props.texts;

  let fieldSchemas: any = {};

  props.registerFields.forEach((field) => {
    switch (field) {
      case "fullname":
        fieldSchemas["fullName"] = z.string().optional();
        break;
      case "email":
        fieldSchemas["email"] = z
          .string({ required_error: emailRequiredText })
          .email({ message: emailInvalidText })
          .nonempty({ message: usernameRequired });
        break;
      case "username":
        fieldSchemas["username"] = z
          .string({ required_error: usernameRequired })
          .refine((value) => value !== "", { message: usernameRequired });
        break;
      // ... other cases for different fields
    }
  });

  const formSchema = z
    .object({
      ...fieldSchemas,
      password: z
        .string({ required_error: passwordRequiredText })
        .min(5, { message: passwordTooShortText })
        .refine((value) => value !== "", { message: passwordRequiredText }),
      confirm_password: z
        .string({ required_error: confirmPasswordRequired })
        .refine((value) => value !== "", { message: passwordRequiredText }),
      refCode: z.string().optional(),
      reference: z.string().optional(),
      terms_accepted: z
        .boolean({ required_error: termsRequiredText })
        .refine((value) => value, { message: termsRequiredText }),

      newsletter_accepted: z.boolean().optional(),
    })
    .refine((data) => data.password === data.confirm_password, {
      message: passwordsDontMatch,
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
                  if (props.handleRegister) {
                    return props.handleRegister(e);
                  } else {
                    console.log(
                      "Form is submitted but handleRegister prop is missing"
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
                              type="text"
                              label={props.texts.fullNameLabel}
                              placeholder={props.texts.fullNamePlaceholder}
                              helperText={formState.errors.fullName?.message}
                              onChange={field.onChange}
                              value={field.value ?? ""}
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
                              type="text"
                              autoComplete="email"
                              label={props.texts.emailLabel}
                              helperText={formState.errors.email?.message}
                              placeholder={
                                props.texts.emailPlaceholder ||
                                "Enter your email"
                              }
                              onChange={field.onChange}
                              value={field.value ?? ""}
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
                              type="text"
                              autoComplete="username"
                              label={props.texts.usernameLabel}
                              helperText={formState.errors.username?.message}
                              placeholder={props.texts.usernamePlaceholder}
                              onChange={field.onChange}
                              value={field.value ?? ""}
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
                      // defaultValue={field.value ?? ""}
                      label={props.texts.passwordLabel}
                      placeholder={props.texts.passwordPlaceholder}
                      helperText={formState.errors.password?.message}
                      onChange={field.onChange}
                      value={field.value ?? ""}
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
                      // defaultValue={field.value ?? ""}
                      label={props.texts.confirmPasswordLabel}
                      placeholder={props.texts.confirmPasswordPlaceholder}
                      helperText={formState.errors.confirm_password?.message}
                      onChange={field.onChange}
                      value={field.value ?? ""}
                    />
                  )}
                />
                {props.showRefCode && (
                  <Controller
                    control={control}
                    name="refCode"
                    render={({ field }) => (
                      <Input
                        width="full"
                        type="text"
                        // defaultValue={field.value ?? ""}
                        label={props.texts.refCode}
                        placeholder={
                          props.texts.refCodePlaceholder ||
                          "Enter the referral code"
                        }
                        helperText={formState.errors.refCode?.message}
                        value={field.value ?? ""}
                        onChange={field.onChange}
                      />
                    )}
                  />
                )}
                {props.showUserSource && (
                  <div>
                    <Controller
                      control={control}
                      name="reference"
                      render={({ field }) => (
                        <Select
                          label={
                            props.texts?.userReferenceLabel ||
                            "How did you learn about us?"
                          }
                          placeholder={props.texts?.userReferencePlaceholder}
                          isCreatable={false}
                          isMulti={false ?? false}
                          isSearchable={false}
                          isClearable={false ?? false}
                          options={props.userReferenceOptions}
                          // options={[
                          //   { value: "friend", label: "From a friend" },
                          //   { value: "ad", label: "Advertisement" },
                          //   { value: "other", label: "Other" },
                          // ]}
                          onChange={(e: any) => {
                            field.onChange(e.value);
                          }}
                        />
                      )}
                    />
                  </div>
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
                            <span>
                              {props.texts.iAcceptText}{" "}
                              <a
                                onClick={props.handleRouteToTOS}
                                className="clickable-link"
                              >
                                {props.texts.termsText}
                              </a>
                            </span>
                          }
                        />
                      )}
                    />
                  )}
                  {/* TODO: make this an array so the consumer can cusomize the checkboxes they want */}
                  {props.showNewsletterOption && (
                    <Controller
                      control={control}
                      name="newsletter_accepted"
                      render={({ field }) => (
                        <Checkbox
                          id="newsletter_accepted"
                          label={props.texts.subscribeToNewsletter}
                          onCheckedChange={field.onChange}
                        />
                      )}
                    />
                  )}
                </div>
                <Button
                  className="hawa-w-full hawa-mt-4"
                  isLoading={props.isLoading}
                >
                  {props.texts.registerText}
                </Button>
              </form>
            </FormProvider>
            <div className="hawa-flex hawa-flex-row hawa-items-center hawa-justify-center hawa-gap-1 hawa-p-3 hawa-text-center  hawa-text-sm hawa-font-normal dark:hawa-text-white">
              <span>{props.texts.existingUserText}</span>
              <span
                onClick={props.handleRouteToLogin}
                className="clickable-link"
              >
                {props.texts.loginText || "Login"}
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
                onClick={props.handleGoogleRegister}
              >
                {props.isGoogleLoading ? (
                  <Loading size="button" />
                ) : (
                  <Logos.google className="hawa-h-4 hawa-w-4" />
                )}{" "}
                {!props.logosOnly && props.texts.registerViaGoogleLabel}
              </Button>
            )}
            {props.viaGithub && (
              <Button
                className="hawa-flex hawa-flex-row hawa-items-center hawa-gap-2"
                variant="outline"
                onClick={props.handleGithubRegister}
              >
                {props.isGithubLoading ? (
                  <Loading size="button" />
                ) : (
                  <Logos.github className="hawa-h-4 hawa-w-4" />
                )}{" "}
                {!props.logosOnly && props.texts.registerViaGithubLabel}
              </Button>
            )}
            {props.viaTwitter && (
              <Button
                className="hawa-flex hawa-flex-row hawa-items-center hawa-gap-2"
                variant="outline"
                onClick={props.handleTwitterRegister}
              >
                {props.isTwitterLoading ? (
                  <Loading size="button" />
                ) : (
                  <Logos.twitter className="hawa-h-4 hawa-w-4" />
                )}{" "}
                {!props.logosOnly && props.texts.registerViaTwitterLabel}
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
