import { useState } from "react";

import { Story } from "@storybook/blocks";
import type { Meta, StoryObj } from "@storybook/react";

import { RegisterForm } from "@sikka/hawa/blocks/auth";
import { Button } from "@sikka/hawa/elements/button";
import { Input } from "@sikka/hawa/elements/input";

import { setLocale, t } from "../../../translations/i18n";

const meta = {
  title: "Blocks/User Auth/Register Form",
  component: RegisterForm,
} satisfies Meta<typeof RegisterForm>;

export default meta;
type Story = StoryObj<typeof RegisterForm>;

export const Default: Story = {
  render: (args: any, globals: any) => {
    const locale = globals.globals?.locale === "ar" ? "ar" : "en";
    const direction = locale === "ar" ? "rtl" : "ltr";
    setLocale(locale);

    return (
      <div className="hawa-flex hawa-w-full hawa-max-w-md hawa-flex-col">
        <RegisterForm
          logosOnly
          direction={direction}
          userReferenceOptions={[
            { label: t("friends-family"), value: "friends-family" },
            { label: t("ad"), value: "ad" },
            { label: t("other"), value: "other" },
          ]}
          usernameOptions={{
            label: {
              hintSide: "right",
              hint: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla nec dui eget nunc aliquam tincidunt nec nec libero. Nulla facilisi. Nulla nec dui eget nunc aliquam tincidunt nec nec libero.",
              required: true,
            },
          }}
          additionalInputs={
            <Input
              label={"Extra Field"}
              placeholder={"Added via additionalInput prop"}
            />
          }
          additionalButtons={
            <Button variant={"outline"}>{t("Extra Optional Button")}</Button>
          }
          texts={{
            continueWithGoogle: t("registerViaGoogleLabel"),
            continueWithGithub: t("registerViaGithubLabel"),
            continueWithTwitter: t("registerViaTwitterLabel"),
            fullName: {
              label: t("fullNameLabel"),
              placeholder: t("fullNamePlaceholder"),
            },
            email: {
              label: t("emailLabel"),
              placeholder: t("emailPlaceholder"),
              required: t("emailRequiredText"),
              invalid: t("emailInvalidText"),
            },
            username: {
              label: t("usernameLabel"),
              placeholder: t("usernamePlaceholder"),
              required: t("usernameRequired"),
              invalid: t("usernameInvalid"),
            },
            password: {
              label: t("passwordLabel"),
              placeholder: t("passwordPlaceholder"),
              required: t("passwordRequiredText"),
              tooShort: t("passwordTooShortText"),
            },
            confirm: {
              label: t("confirmPasswordLabel"),
              placeholder: t("confirmPasswordPlaceholder"),
              required: t("confirmPasswordRequired"),
              dontMatch: t("passwordsDontMatch"),
            },
            userReference: {
              label: t("userReferenceLabel"),
              placeholder: t("userReferencePlaceholder"),
            },
            subscribeToNewsletter: t("subscribeToNewsletter"),
            iAcceptText: t("iAcceptText"),
            termsText: t("termsText"),
            termsRequired: t("termsRequiredText"),
            loginText: t("loginText"),
            existingUserText: t("existingUserText"),
            registerText: t("registerText"),
            refCode: t("refCode"),
            refCodePlaceholder: t("refCodePlaceholder"),
          }}
          {...args}
        />
      </div>
    );
  },
  args: {
    logosOnly: false,
    viaGoogle: true,
    viaGithub: true,
    viaTwitter: true,
    showRefCode: true,
    showUserSource: true,
    showTermsOption: true,
    showNewsletterOption: true,
    showError: false,
    errorTitle: "Error",
    errorText: "Something went wrong",
    registerFields: ["fullname", "username", "email"],
  },
  argTypes: {
    onRegister: { action: "onRegister" },
    onGoogleRegister: { action: "onGoogleRegister" },
    onGithubRegister: { action: "onGithubRegister" },
    onTwitterRegister: { action: "onTwitterRegister" },
    onRouteToTOS: { action: "onRouteToTOS" },
    onRouteToLogin: { action: "onRouteToLogin" },
  },
};
export const Minimal: Story = {
  render: (args: any, globals: any) => {
    const locale = globals.globals?.locale === "ar" ? "ar" : "en";
    const direction = locale === "ar" ? "rtl" : "ltr";
    setLocale(locale);
    const [showError, setShowError] = useState(false);

    return (
      <div className="hawa-flex hawa-w-full hawa-max-w-md hawa-flex-col">
        <RegisterForm
          logosOnly
          direction={direction}
          userReferenceOptions={[
            { label: t("friends-family"), value: "friends-family" },
            { label: t("ad"), value: "ad" },
            { label: t("other"), value: "other" },
          ]}
          usernameOptions={{
            label: {
              hintSide: "right",
              hint: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla nec dui eget nunc aliquam tincidunt nec nec libero. Nulla facilisi. Nulla nec dui eget nunc aliquam tincidunt nec nec libero.",
              required: true,
            },
          }}
          texts={{
            continueWithGoogle: t("registerViaGoogleLabel"),
            continueWithGithub: t("registerViaGithubLabel"),
            continueWithTwitter: t("registerViaTwitterLabel"),
            fullName: {
              label: t("fullNameLabel"),
              placeholder: t("fullNamePlaceholder"),
            },
            email: {
              label: t("emailLabel"),
              placeholder: t("emailPlaceholder"),
              required: t("emailRequiredText"),
              invalid: t("emailInvalidText"),
            },
            username: {
              label: t("usernameLabel"),
              placeholder: t("usernamePlaceholder"),
              required: t("usernameRequired"),
              invalid: t("usernameInvalid"),
            },
            password: {
              label: t("passwordLabel"),
              placeholder: t("passwordPlaceholder"),
              required: t("passwordRequiredText"),
              tooShort: t("passwordTooShortText"),
            },
            confirm: {
              label: t("confirmPasswordLabel"),
              placeholder: t("confirmPasswordPlaceholder"),
              required: t("confirmPasswordRequired"),
              dontMatch: t("passwordsDontMatch"),
            },
            userReference: {
              label: t("userReferenceLabel"),
              placeholder: t("userReferencePlaceholder"),
            },
            subscribeToNewsletter: t("subscribeToNewsletter"),
            iAcceptText: t("iAcceptText"),
            termsText: t("termsText"),
            termsRequired: t("termsRequiredText"),
            loginText: t("loginText"),
            existingUserText: t("existingUserText"),
            registerText: t("registerText"),
            refCode: t("refCode"),
            refCodePlaceholder: t("refCodePlaceholder"),
          }}
          {...args}
          onRegister={() => setShowError(true)}
          onErrorDismissed={() => setShowError(false)}
          showError={showError}
          errorTitle="Error"
          errorText="Something went wrong"
        />
      </div>
    );
  },
  args: {
    logosOnly: false,
    viaGoogle: false,
    viaGithub: false,
    viaTwitter: false,
    showRefCode: false,
    showUserSource: false,
    showTermsOption: true,
    showNewsletterOption: false,

    registerFields: ["email"],
  },
  argTypes: {
    // onRegister: { action: "onRegister" },
    onGoogleRegister: { action: "onGoogleRegister" },
    onGithubRegister: { action: "onGithubRegister" },
    onTwitterRegister: { action: "onTwitterRegister" },
    onRouteToTOS: { action: "onRouteToTOS" },
    onRouteToLogin: { action: "onRouteToLogin" },
  },
};
