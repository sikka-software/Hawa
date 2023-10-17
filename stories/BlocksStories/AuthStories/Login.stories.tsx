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

export const Default: Story = {
  render: (args: any, globals: any) => {
    const locale = globals.globals.locale === "ar" ? "ar" : "en";

    setLocale(locale);
    const [isError, setError] = useState(false);
    const [isLoading, setIsLoading] = useState(false);
    let d = useDarkMode();
    return (
      <div className="hawa-flex hawa-flex-col hawa-w-full hawa-max-w-md">
        <LoginForm
          direction={locale === "ar" ? "rtl" : "ltr"}
          // handleColorMode={(e: any) => console.log("switching color mode")}
          // handleLanguage={(e: any) => console.log("testing", e)}
          // handleRouteToRegister={() =>
          //   console.log("redirecting to register page")
          // }
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
            phoneRequiredText: t("phoneRequiredText"),
            passwordLabel: t("passwordLabel"),
            passwordPlaceholder: t("passwordPlaceholder"),
            passwordRequiredText: t("passwordRequiredText"),
            forgotPasswordText: t("forgotPasswordText"),
            newUserText: t("newUserText"),
            createAccount: t("createAccount"),
            loginText: t("loginText"),
            loginViaGoogleLabel: t("loginViaGoogleLabel"),
            loginViaGithubLabel: t("loginViaGithubLabel"),
            loginViaTwitterLabel: t("loginViaTwitterLabel"),
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
    handleRouteToRegister: { action: "handleRouteToRegister" },
    handleForgotPassword: { action: "handleForgotPassword" },
    handleLogin: { action: "handleLogin" },
    handleColorMode: { action: "handleColorMode" },
    handleLanguage: { action: "handleLanguage" },
  },
};
export const MagicLink: Story = {
  render: (args: any, globals: any) => {
    const locale = globals.globals.locale === "ar" ? "ar" : "en";

    setLocale(locale);
    const [isError, setError] = useState(false);
    const [isLoading, setIsLoading] = useState(false);
    let d = useDarkMode();
    return (
      <div className="hawa-flex hawa-flex-col hawa-w-full hawa-max-w-md">
        <LoginForm
          direction={locale === "ar" ? "rtl" : "ltr"}
          // handleColorMode={(e: any) => console.log("switching color mode")}
          // handleLanguage={(e: any) => console.log("testing", e)}
          // handleRouteToRegister={() =>
          //   console.log("redirecting to register page")
          // }
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
            phoneRequiredText: t("phoneRequiredText"),
            passwordLabel: t("passwordLabel"),
            passwordPlaceholder: t("passwordPlaceholder"),
            passwordRequiredText: t("passwordRequiredText"),
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
    handleRouteToRegister: { action: "handleRouteToRegister" },
    handleForgotPassword: { action: "handleForgotPassword" },
    handleLogin: { action: "handleLogin" },
    handleColorMode: { action: "handleColorMode" },
    handleLanguage: { action: "handleLanguage" },
  },
};
