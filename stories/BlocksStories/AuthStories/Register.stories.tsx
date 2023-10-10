import type { Meta, StoryObj } from "@storybook/react";
import { CodeBlock, RegisterForm } from "../../../components";
import {
  ArgsTable,
  CodeOrSourceMdx,
  Markdown,
  Story,
  Title,
} from "@storybook/blocks";
import { setLocale, t } from "../../translations/i18n";
import RegisterDocs from "./Register.mdx";
const meta = {
  title: "Blocks/User Auth/Register Form",
  component: RegisterForm,
  parameters: {
    docs: {
      toc: { headingSelector: "h2" },
      page: RegisterDocs,
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
        direction={locale === "ar" ? "rtl" : "ltr"}
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
          registerText: t("registerText"),
          loginText: t("loginText"),
          existingUserText: t("existingUserText"),
          registerViaGoogleLabel: t("registerViaGoogleLabel"),
          registerViaGithubLabel: t("registerViaGithubLabel"),
          registerViaTwitterLabel: t("registerViaTwitterLabel"),
          refCode: t("refCode"),
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
    showUserSource: true,
    showNewsletterOption: true,
    showTermsOption: true,
    showRefCode: true,
    showError: false,
    errorTitle: "Error",
    errorText: "Something went wrong",
    registerFields: ["fullname", "username", "email"],
  },
  argTypes: {
    handleRegister: { action: "handleRegister" },
    handleGoogleRegister: { action: "handleGoogleRegister" },
    handleGithubRegister: { action: "handleGithubRegister" },
    handleTwitterRegister: { action: "handleTwitterRegister" },
    handleRouteToLogin: { action: "handleRouteToLogin" },
    handleRouteToTOS: { action: "handleRouteToTOS" },
    handleColorMode: { action: "handleColorMode" },
    handleLanguage: { action: "handleLanguage" },
  },
};
