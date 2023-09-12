import React from "react";
import { CheckEmail, CodeConfirmation } from "../../../blocks/AuthForms";
import { setLocale, t } from "../../../translations/i18n";

export default {
  title: "Blocks/Auth/CheckEmail",
  component: [CheckEmail]
};

export const CheckEmailStory = (args, globals) => {
  const locale = globals.globals.locale === "ar" ? "ar" : "en";
  setLocale(locale);

  return (
    <div className="max-w-md">
      <CheckEmail
        {...args}
        texts={{
          checkEmail: t("checkEmail"),
          pleaseVerify: t("pleaseVerify"),
          resendEmail: t("resendEmail")
        }}
      />
    </div>
  );
};

CheckEmailStory.args = {
  email: "contact@sikka.io"
};
CheckEmailStory.storyName = "Check Email";
