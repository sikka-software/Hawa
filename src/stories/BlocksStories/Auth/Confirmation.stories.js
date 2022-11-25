import React from "react";
import { CodeConfirmation } from "../../../blocks/AuthForms";

export default {
  title: "Blocks/Auth/Confirmation",
  component: [CodeConfirmation],
  parameters: {
    docs: {
      description: {
        component: "`<CodeConfirmation/>` Authentication block for user sign in"
      }
    }
  },
  argTypes: {
    lang: {
      default: true,
      control: "select",
      options: ["ar", "en"],
      description: "The language of the form",
      table: { defaultValue: { summary: "en" } }
    },

    showError: {
      default: false,
      control: "boolean",
      description: "Display the error when auth fails",
      table: { defaultValue: { summary: true } }
    },
    errorTitle: {
      default: " ",
      control: "text",
      description: "The error text for the auth failure",
      table: { defaultValue: { summary: "" } }
    },
    errorText: {
      default: "Something went wrong",
      control: "text",
      description: "The error text for the auth failure",
      table: { defaultValue: { summary: "Something went wrong" } }
    },
    handleSignIn: {
      action: "Signing in Via Email",
      description: "The function to sign in user"
    }
  }
};

export const Confirmation = (args) => {
  return (
    <CodeConfirmation
      error={args.showError}
      texts={{
        codeLabel: "Code",
        codePlaceholder: "123456",
        codeRequiredText: "Code is required",
        confirmText: "Confirm"
      }}
    />
  );
};
