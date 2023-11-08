import type { Meta, StoryObj } from "@storybook/react";
import { Button, LoginForm } from "../../../components";
import { Story } from "@storybook/blocks";
import { setLocale, t } from "../../translations/i18n";
import { useState } from "react";
import { useDarkMode } from "storybook-dark-mode";

import LoginDocs from "./Login";

const meta = {
  title: "Blocks/User Auth/Login Form",
  component: LoginForm,
  parameters: {
    controls: {
      exclude: ["direction"],
    },
    docs: {
      page: () => <LoginDocs />,
      toc: {
        title: "Register Form",
        headingSelector: "h2,h3",
        ignoreSelector: "div",
      },
    },
  },
  tags: ["autodocs"],
} satisfies Meta<typeof LoginForm>;

export default meta;
type Story = StoryObj<typeof LoginForm>;

const Template = (args: any, globals: any) => {
  const locale = globals.globals.locale === "ar" ? "ar" : "en";
  const direction = locale === "ar" ? "rtl" : "ltr";

  setLocale(locale);
  const [isError, setError] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  let d = useDarkMode();
  return (
    <div className="hawa-flex hawa-flex-col hawa-w-full hawa-max-w-md">
      <LoginForm
        direction={direction}
        currentColorMode={d ? "dark" : "light"}
        currentLanguage={globals.globals.locale}
        showError={isError}
        texts={{
          email: {
            label: t("emailLabel"),
            placeholder: t("emailPlaceholder"),
            required: t("emailRequiredText"),
            invalid: t("emailInvalidText"),
          },
          password: {
            label: t("passwordLabel"),
            placeholder: t("passwordPlaceholder"),
            required: t("passwordRequiredText"),
            tooShort: t("passwordTooShort"),
          },
          username: {
            label: t("usernameLabel"),
            placeholder: t("usernamePlaceholder"),
            required: t("usernameRequired"),
            invalid: t("usernameRequired"),
            tooShort: t("usernameTooShort"),
          },
          phone: {
            required: t("phoneRequiredText"),
            invalid: t("phoneInvalid"),
            label: t("phoneLabel"),
            placeholder: "531045453",
          },

          forgotPassword: t("forgotPasswordText"),
          newUserText: t("newUserText"),
          createAccount: t("createAccount"),
          loginText: t("loginText"),
          continueWithGoogle: t("loginViaGoogleLabel"),
          continueWithGithub: t("loginViaGithubLabel"),
          continueWithTwitter: t("loginViaTwitterLabel"),
        }}
        {...args}
      />
    </div>
  );
};
export const Default: Story = {
  render: Template.bind({}),

  args: {
    loginType: "email",
    allowRegister: true,
  },
  argTypes: {
    onLogin: { action: "onLogin" },
    onRouteToRegister: { action: "onRouteToRegister" },
    onForgotPassword: { action: "onForgotPassword" },
  },
};
export const viaPhone: Story = {
  render: Template.bind({}),

  args: {
    loginType: "phone",
  },
  argTypes: {
    onLogin: { action: "onLogin" },
    onRouteToRegister: { action: "onRouteToRegister" },
    onForgotPassword: { action: "onForgotPassword" },
  },
};
export const MagicLink: Story = {
  render: (args: any, globals: any) => {
    const locale = globals.globals.locale === "ar" ? "ar" : "en";
    const direction = locale === "ar" ? "rtl" : "ltr";

    setLocale(locale);
    const [isError, setError] = useState(false);
    const [isLoading, setIsLoading] = useState(false);
    let d = useDarkMode();
    return (
      <div className="hawa-flex hawa-flex-col hawa-w-full hawa-max-w-md">
        <LoginForm
          direction={direction}
          currentColorMode={d ? "dark" : "light"}
          currentLanguage={globals.globals.locale}
          showError={isError}
          texts={{
            emailLabel: t("emailLabel"),
            emailPlaceholder: t("emailPlaceholder"),
            emailRequiredText: t("emailRequiredText"),
            emailInvalidText: t("emailInvalidText"),
            usernameLabel: t("usernameLabel"),
            usernamePlaceholder: t("usernamePlaceholder"),
            usernameRequired: t("usernameRequired"),
            usernameInvalid: t("usernameInvalid"),
            phoneRequiredText: t("phoneRequiredText"),
            passwordLabel: t("passwordLabel"),
            passwordPlaceholder: t("passwordPlaceholder"),
            passwordRequiredText: t("passwordRequiredText"),
            passwordTooShort: t("passwordTooShort"),
            forgotPasswordText: t("forgotPasswordText"),
            newUserText: t("newUserText"),
            createAccount: t("createAccount"),
            loginText: t("send-email-to-login"),
            loginViaGoogleLabel: t("loginViaGoogleLabel"),
            loginViaGithubLabel: t("loginViaGithubLabel"),
            loginViaTwitterLabel: t("loginViaTwitterLabel"),
          }}
          additionalButtons={
            <Button variant={"outline"}>{t("type-password")}</Button>
          }
          {...args}
        />
      </div>
    );
  },

  args: {
    loginType: "link",
  },

  argTypes: {
    onLogin: { action: "onLogin" },
    onRouteToRegister: { action: "onRouteToRegister" },
    onForgotPassword: { action: "onForgotPassword" },
  },
};
