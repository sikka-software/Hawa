import type { Meta, StoryObj } from "@storybook/react";
import { LoginForm } from "../../components/blocks";
import { ArgsTable, Story, Title } from "@storybook/blocks";
import { setLocale, t } from "../translations/i18n";
import { useState } from "react";
import { useDarkMode } from "storybook-dark-mode";

const meta = {
  title: "Blocks/Login Form",
  component: LoginForm,
  parameters: {
    // layout: "centered",
    docs: {
      page: () => (
        <>
          <h1>{"<LoginForm/>"}</h1>
          <ArgsTable exclude={["texts"]} />
          <h1>Texts Object</h1>
          <ArgsTable include={["texts"]} />
        </>
      ),
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
          loginType="email"
          direction={locale === "ar" ? "rtl" : "ltr"}
          handleForgotPassword={() => console.log("forgot password")}
          handleLogin={(e) => {
            console.log("Form result: ", e);
            setError(!isError);
          }}
          handleColorMode={(e: any) => console.log("switching color mode")}
          handleLanguage={(e: any) => console.log("testing", e)}
          currentColorMode={d ? "dark" : "light"}
          currentLanguage={globals.globals.locale}
          {...args}
          // showError={false}
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
        />
      </div>
    );
  },
  args: {
    showError: false,
  },
};
