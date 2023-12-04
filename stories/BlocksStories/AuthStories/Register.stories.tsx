import { Story } from "@storybook/blocks";
import type { Meta, StoryObj } from "@storybook/react";

import { RegisterForm } from "@blocks/auth";

import { Button, Input } from "@elements/index";

import { setLocale, t } from "../../translations/i18n";
import RegisterDocs from "./Register";

const meta = {
  title: "Blocks/User Auth/Register Form",
  component: RegisterForm,
  parameters: {
    controls: {
      exclude: ["direction"]
    },
    docs: {
      page: () => <RegisterDocs />,
      toc: {
        title: "Register Form",
        headingSelector: "h2,h3",
        ignoreSelector: "div"
      }
    }
  },
  tags: ["autodocs"]
} satisfies Meta<typeof RegisterForm>;

export default meta;
type Story = StoryObj<typeof RegisterForm>;

const Template = (args: any, globals: any) => {
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
          { label: t("other"), value: "other" }
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
          continueWithGoogle: t("registerViaGoogleLabel"),
          continueWithGithub: t("registerViaGithubLabel"),
          continueWithTwitter: t("registerViaTwitterLabel"),
          fullName: {
            label: t("fullNameLabel"),
            placeholder: t("fullNamePlaceholder")
          },
          email: {
            label: t("emailLabel"),
            placeholder: t("emailPlaceholder"),
            required: t("emailRequiredText"),
            invalid: t("emailInvalidText")
          },
          username: {
            label: t("usernameLabel"),
            placeholder: t("usernamePlaceholder"),
            required: t("usernameRequired"),
            invalid: t("usernameInvalid")
          },
          password: {
            label: t("passwordLabel"),
            placeholder: t("passwordPlaceholder"),
            required: t("passwordRequiredText"),
            tooShort: t("passwordTooShortText")
          },
          confirm: {
            label: t("confirmPasswordLabel"),
            placeholder: t("confirmPasswordPlaceholder"),
            required: t("confirmPasswordRequired"),
            dontMatch: t("passwordsDontMatch")
          },
          userReference: {
            label: t("userReferenceLabel"),
            placeholder: t("userReferencePlaceholder")
          },
          subscribeToNewsletter: t("subscribeToNewsletter"),
          iAcceptText: t("iAcceptText"),
          termsText: t("termsText"),
          termsRequired: t("termsRequiredText"),
          loginText: t("loginText"),
          existingUserText: t("existingUserText"),
          registerText: t("registerText"),
          refCode: t("refCode"),
          refCodePlaceholder: t("refCodePlaceholder")
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
    registerFields: ["fullname", "username", "email"]
  },
  argTypes: {
    onRegister: { action: "onRegister" },
    onGoogleRegister: { action: "onGoogleRegister" },
    onGithubRegister: { action: "onGithubRegister" },
    onTwitterRegister: { action: "onTwitterRegister" },
    onRouteToTOS: { action: "onRouteToTOS" },
    onRouteToLogin: { action: "onRouteToLogin" }
  }
};
