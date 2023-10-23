import type { Meta, StoryObj } from "@storybook/react";
import { RegisterForm, Button, Input } from "../../../components";
import { Story } from "@storybook/blocks";
import { setLocale, t } from "../../translations/i18n";

import RegisterDocs from "./Register";

const meta = {
  title: "Blocks/User Auth/Register Form",
  component: RegisterForm,
  parameters: {
    docs: {
      page: () => <RegisterDocs />,
      toc: {
        title: "Register Form",
        headingSelector: "h2,h3",
        ignoreSelector: "div",
      },
    },
  },
  tags: ["autodocs"],
} satisfies Meta<typeof RegisterForm>;

export default meta;
type Story = StoryObj<typeof RegisterForm>;

const Template = (args: any, globals: any) => {
  const locale = globals.globals?.locale === "ar" ? "ar" : "en";
  const direction = locale === "ar" ? "rtl" : "ltr";
  setLocale(locale);

  return (
    <div className="hawa-flex hawa-flex-col hawa-w-full hawa-max-w-md">
      <RegisterForm
        logosOnly
        direction={direction}
        userReferenceOptions={[
          { label: t("friends-family"), value: "friends-family" },
          { label: t("ad"), value: "ad" },
          { label: t("other"), value: "other" },
        ]}
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
          fullNameLabel: t("fullNameLabel"),
          fullNamePlaceholder: t("fullNamePlaceholder"),
          fullNameRequiredText: t("fullNameRequiredText"),
          emailLabel: t("emailLabel"),
          emailPlaceholder: t("emailPlaceholder"),
          emailRequiredText: t("emailRequiredText"),
          emailInvalidText: t("emailInvalidText"),
          usernameLabel: t("usernameLabel"),
          usernamePlaceholder: t("usernamePlaceholder"),
          usernameRequired: t("usernameRequired"),
          usernameInvalid: t("usernameInvalid"),
          passwordLabel: t("passwordLabel"),
          passwordPlaceholder: t("passwordPlaceholder"),
          passwordRequiredText: t("passwordRequiredText"),
          passwordTooShortText: t("passwordTooShortText"),
          passwordsDontMatch: t("passwordsDontMatch"),
          subscribeToNewsletter: t("subscribeToNewsletter"),
          confirmPasswordLabel: t("confirmPasswordLabel"),
          confirmPasswordPlaceholder: t("confirmPasswordPlaceholder"),
          confirmPasswordRequired: t("confirmPasswordRequired"),
          iAcceptText: t("iAcceptText"),
          termsText: t("termsText"),
          termsRequiredText: t("termsRequiredText"),
          forgotPasswordText: t("forgotPasswordText"),
          newUserText: t("newUserText"),
          loginText: t("loginText"),
          existingUserText: t("existingUserText"),
          registerText: t("registerText"),
          registerViaGoogleLabel: t("registerViaGoogleLabel"),
          registerViaGithubLabel: t("registerViaGithubLabel"),
          registerViaTwitterLabel: t("registerViaTwitterLabel"),
          userReferenceLabel: t("userReferenceLabel"),
          userReferencePlaceholder: t("userReferencePlaceholder"),
          refCode: t("refCode"),
          refCodePlaceholder: t("refCodePlaceholder"),
        }}
        {...args}
      />
    </div>
  );
};
export const Default: Story = {
  render: Template.bind({}),
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
    handleLanguage: { action: "handleLanguage" },
    handleColorMode: { action: "handleColorMode" },
  },
};
