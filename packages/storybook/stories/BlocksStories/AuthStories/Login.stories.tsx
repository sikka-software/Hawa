import { useState } from "react";

import { Story } from "@storybook/blocks";
import type { Meta, StoryObj } from "@storybook/react";
import { useDarkMode } from "storybook-dark-mode";

import { LoginForm } from "@sikka/hawa/blocks/auth";
import { InterfaceSettings } from "@sikka/hawa/elements";
import { Button } from "@sikka/hawa/elements/button";

import { setLocale, t } from "../../../translations/i18n";

const meta = {
  title: "Blocks/User Auth/Login Form",
  component: LoginForm,
  parameters: {
    controls: {
      exclude: ["direction"],
    },
  },
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
    <div className="hawa-flex hawa-w-full hawa-max-w-md hawa-flex-col hawa-gap-4">
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
      <InterfaceSettings
        handleColorMode={(e) => {
          console.log(e);
        }}
        handleLanguage={(e) => {
          console.log(e);
        }}
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
  render: (args: any, globals: any) => {
    const locale = globals.globals.locale === "ar" ? "ar" : "en";
    const direction = locale === "ar" ? "rtl" : "ltr";

    setLocale(locale);
    const [isError, setError] = useState(false);
    const [isLoading, setIsLoading] = useState(false);
    let d = useDarkMode();

    return (
      <div className="hawa-flex hawa-w-full hawa-max-w-md hawa-flex-col hawa-gap-4">
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
  },

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
      <div className="hawa-flex hawa-w-full hawa-max-w-md hawa-flex-col">
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
          additionalButtons={<Button variant={"outline"}>{t("type-password")}</Button>}
          {...args}
        />
      </div>
    );
  },

  args: {
    loginType: "email_link",
  },

  argTypes: {
    onLogin: { action: "onLogin" },
    onRouteToRegister: { action: "onRouteToRegister" },
    onForgotPassword: { action: "onForgotPassword" },
  },
};
export const Advanced: Story = {
  render: (args: any, globals: any) => {
    const locale = globals.globals.locale === "ar" ? "ar" : "en";
    const direction = locale === "ar" ? "rtl" : "ltr";

    setLocale(locale);
    const [isError, setError] = useState(false);
    const [isLoading, setIsLoading] = useState(false);
    const [loginType, setLoginType] = useState<"email" | "phone" | "link">("email");
    let d = useDarkMode();
    return (
      <div className="hawa-flex hawa-w-full hawa-max-w-md hawa-flex-col">
        <LoginForm
          direction={direction}
          loginType={loginType}
          currentColorMode={d ? "dark" : "light"}
          currentLanguage={globals.globals.locale}
          showError={isError}
          allowRegister={true}
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
            loginText: loginType === "link" ? t("send-email-to-login") : t("continue"),
            loginViaGoogleLabel: t("loginViaGoogleLabel"),
            loginViaGithubLabel: t("loginViaGithubLabel"),
            loginViaTwitterLabel: t("loginViaTwitterLabel"),
          }}
          additionalButtons={
            <div className="hawa-gap-2 hawa-flex hawa-w-full">
              <Button
                type="button"
                variant="outline"
                className="hawa-w-full"
                onClick={() => setLoginType(loginType === "link" ? "email" : "link")}
              >
                {loginType === "link" ? t("use_password") : t("use_login_link")}
              </Button>
              <Button
                type="button"
                variant="outline"
                className="hawa-w-full"
                onClick={() => setLoginType(loginType === "link" ? "email" : "link")}
              >
                {loginType === "link" ? t("use_password") : t("use_login_link")}
              </Button>
            </div>
          }
          {...args}
        />
      </div>
    );
  },

  argTypes: {
    onLogin: { action: "onLogin" },
    onRouteToRegister: { action: "onRouteToRegister" },
    onForgotPassword: { action: "onForgotPassword" },
  },
};
