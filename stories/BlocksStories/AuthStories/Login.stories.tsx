import type { Meta, StoryObj } from "@storybook/react";
import { LoginForm } from "../../../components";
import { ArgsTable, Story, Title } from "@storybook/blocks";
import { setLocale, t } from "../../translations/i18n";
import { useState } from "react";
import { useDarkMode } from "storybook-dark-mode";
import TranslationTable from "../../TranslationTable";

const meta = {
  title: "Blocks/User Auth/Login Form",
  component: LoginForm,
  parameters: {
    // layout: "centered",
    docs: {
      page: () => (
        <>
          <h1>{"<LoginForm/>"}</h1>
          <h4>
            Use this form block in your application to display a login form to
            the users.
          </h4>
          <ArgsTable
            exclude={[
              "texts",
              "isLoading",
              "isGoogleLoading",
              "isTwitterLoading",
              "isGithubLoading",
              "handleLogin",
              "handleGoogleLogin",
              "handleGithubLogin",
              "handleTwitterLogin",
            ]}
          />
          <h1>Login Handlers</h1>
          <h4>
            Functions to handle the actual authentication process for a regular
            login and for 3rd party login.
          </h4>
          <ArgsTable
            include={[
              "handleLogin",
              "handleGoogleLogin",
              "handleGithubLogin",
              "handleTwitterLogin",
            ]}
          />
          <h1>Loading Booleans</h1>
          <h4>
            Booleans to control loading spinners in the LoginForm block. Make
            sure to use this to show feedback to the user that something is
            happening behind the scene.
          </h4>
          <ArgsTable
            include={[
              "isLoading",
              "isGoogleLoading",
              "isTwitterLoading",
              "isGithubLoading",
            ]}
          />
          <h1>Texts Object</h1>
          <h4>Text labels and placeholders used within the form.</h4>
          <TranslationTable
            componentProps={[
              {
                key: "emailLabel",
                description: "Label for the email input",
                default: "Email",
              },
              {
                key: "emailPlaceholder",
                description: "Placeholder for the email input",
                default: "contact@sikka.io",
              },
              {
                key: "emailRequiredText",
                description: "Error text if email is not provided",
                default: "Email is required",
              },
              {
                key: "emailInvalidText",
                description: "Error text if email format is invalid",
                default: "Invalid email format",
              },
              {
                key: "usernameLabel",
                description: "Label for the username input",
                default: "Username",
              },
              {
                key: "usernamePlaceholder",
                description: "Placeholder for the username input",
                default: "sikka_sa",
              },
              {
                key: "usernameRequired",
                description: "Error text if username is not provided",
                default: "Username is required",
              },
              {
                key: "phoneRequiredText",
                description: "Error text if phone number is not provided",
                default: "Phone number is required",
              },
              {
                key: "passwordLabel",
                description: "Label for the password input",
                default: "Password",
              },
              {
                key: "passwordPlaceholder",
                description: "Placeholder for the password input",
                default: "Enter your password",
              },
              {
                key: "passwordRequiredText",
                description: "Error text if password is not provided",
                default: "Password is required",
              },
              {
                key: "forgotPasswordText",
                description: "Text for the forgot password link",
                default: "Forgot Password?",
              },
              {
                key: "newUserText",
                description: "Text for new user prompt",
                default: "New user?",
              },
              {
                key: "createAccount",
                description: "Text for the create account link",
                default: "Create Account",
              },
              {
                key: "loginText",
                description: "Text for the login button",
                default: "Login",
              },
              {
                key: "loginViaGoogleLabel",
                description: "Label for login via Google button",
                default: "Login via Google",
              },
              {
                key: "loginViaGithubLabel",
                description: "Label for login via Github button",
                default: "Login via Github",
              },
              {
                key: "loginViaTwitterLabel",
                description: "Label for login via Twitter button",
                default: "Login via Twitter",
              },
            ]}
          />
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
