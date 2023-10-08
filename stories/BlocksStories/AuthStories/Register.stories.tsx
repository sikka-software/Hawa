import type { Meta, StoryObj } from "@storybook/react";
import { RegisterForm } from "../../../components";
import { ArgsTable, Story, Title } from "@storybook/blocks";
import { setLocale, t } from "../../translations/i18n";

const meta = {
  title: "Blocks/User Auth/Register Form",
  component: RegisterForm,
  parameters: {
    // layout: "centered",
    docs: {
      page: () => (
        <>
          <h1>{"<RegisterForm/>"}</h1>
          <ArgsTable />
        </>
      ),
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
        {...args}
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
          subscribeToNewsletter: t("subscribeToNewsletter"),
          confirmPasswordLabel: t("confirmPasswordLabel"),
          confirmPasswordPlaceholder: t("confirmPasswordPlaceholder"),
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
        showError={args.showError}
        viaGoogle={args.viaGoogle}
        viaGithub={args.viaGithub}
        registerFields={["fullname", "username", "email"]}
        viaTwitter={args.viaTwitter}
        handleRegister={(e) => console.log("Registering ... ", e)}
        handleGoogleRegister={() => console.log("continue via google")}
        handleGithubRegister={() => console.log("continue via github")}
        handleTwitterRegister={() => console.log("continue via Twitter")}
        handleRouteToLogin={() => console.log("switching to sign in")}
        handleRouteToTOS={() => console.log("routing to TOS page")}
      />
    </div>
  );
};
export const Default: Story = {
  render: Template.bind({}),
  args: {
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
  },
};
