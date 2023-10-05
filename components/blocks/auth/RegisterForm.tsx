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
} from "../../elements";
import { Controller, FormProvider, useForm } from "react-hook-form";
import { cn } from "../../util";

type RegisterFormTypes = {
  handleLanguage?: () => void;
  currentLanguage?: any;
  handleColorMode?: () => void;
  currentColorMode?: any;
  direction?: "rtl" | "ltr";
  logosOnly?: boolean;
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
    confirmPasswordLabel: string;
    confirmPasswordPlaceholder: string;
    refCodePlaceholder: string;
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
    userReferenceLabel: string;
  };
  viaGoogle: boolean;
  viaGithub: boolean;
  viaTwitter: boolean;
  showRefCode: boolean;
  showUserSource: boolean;
  showTermsOption: boolean;
  showNewsletterOption: boolean;
  handleRegister: (e: any) => void;
  handleRouteToLogin: () => void;
  handleGoogleRegister: () => void;
  handleGithubRegister: () => void;
  handleTwitterRegister: () => void;
  handleRouteToTOS: () => void;
  showError: any;
  errorTitle: any;
  errorText: any;
  registerFields: any[];
  isLoading?: boolean;
};

export const RegisterForm: FC<RegisterFormTypes> = (props) => {
  const methods = useForm();
  const {
    formState: { errors },
    handleSubmit,
    control,
  } = methods;

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
                onSubmit={handleSubmit((e) => props.handleRegister(e))}
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
                              helperText={errors.fullName?.message}
                              onChange={field.onChange}
                              value={field.value ?? ""}
                            />
                          )}
                          rules={{
                            required: props.texts.fullNameRequiredText,
                          }}
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
                              helperText={errors.email?.message}
                              placeholder={
                                props.texts.emailPlaceholder ||
                                "Enter your email"
                              }
                              onChange={field.onChange}
                              value={field.value ?? ""}
                            />
                          )}
                          rules={{
                            required: props.texts.emailRequiredText,
                            pattern: {
                              value:
                                /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
                              message: props.texts.emailInvalidText,
                            },
                          }}
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
                              helperText={errors.username?.message}
                              placeholder={props.texts.usernamePlaceholder}
                              onChange={field.onChange}
                              value={field.value ?? ""}
                            />
                          )}
                          rules={{
                            required: props.texts.usernameRequired,
                          }}
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
                      helperText={errors.password?.message}
                      onChange={field.onChange}
                      value={field.value ?? ""}
                    />
                  )}
                  rules={{ required: props.texts.passwordRequiredText }}
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
                      helperText={errors.confirm_password?.message}
                      onChange={field.onChange}
                      value={field.value ?? ""}
                    />
                  )}
                  rules={{ required: props.texts.passwordRequiredText }}
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
                        helperText={errors.refCode?.message}
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
                            props.texts.userReferenceLabel ||
                            "How did you learn about us?"
                          }
                          isCreatable={false}
                          isMulti={false ?? false}
                          isSearchable={false}
                          isClearable={false ?? false}
                          options={[
                            { value: "friend", label: "From a friend" },
                            { value: "ad", label: "Advertisement" },
                            { value: "other", label: "Other" },
                          ]}
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
                          helperText={errors.terms_accepted?.message?.toString()}
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
                      rules={{ required: props.texts.termsRequiredText }}
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
                <Logos.google className="hawa-h-4 hawa-w-4" />
                {!props.logosOnly && props.texts.registerViaGoogleLabel}
              </Button>
            )}
            {props.viaGithub && (
              <Button
                className="hawa-flex hawa-flex-row hawa-items-center hawa-gap-2"
                variant="outline"
                onClick={props.handleGithubRegister}
              >
                <Logos.gitHub className="hawa-h-4 hawa-w-4" />
                {!props.logosOnly && props.texts.registerViaGithubLabel}
              </Button>
            )}
            {props.viaTwitter && (
              <Button
                className="hawa-flex hawa-flex-row hawa-items-center hawa-gap-2"
                variant="outline"
                onClick={props.handleTwitterRegister}
              >
                <Logos.twitter className="hawa-h-4 hawa-w-4" />
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
