import React, { useState } from "react";
import { SignInBlock as SIB } from "../../../blocks/AuthForms";
import { t, setLocale } from "../../../translations/i18n";

export default {
  title: "Blocks/Auth",
  component: [SIB],
  parameters: {
    docs: {
      description: {
        component: "`<SignInForm/>` Authentication block for user sign in"
      }
    }
  }
};

const SignInTemplate = (args, globals) => {
  const locale = globals.globals.locale === "ar" ? "ar" : "en";
  setLocale(locale);

  return (
    <div className="max-w-md">
      <SIB />
    </div>
  );
};

export const SignInBlock = SignInTemplate.bind({});

SignInBlock.storyName = "Sign Up Block (New)";
