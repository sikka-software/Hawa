import React from "react";
import { SignInPhone } from "../../../blocks/AuthForms/SignInPhone";

export default {
  title: "Blocks/Auth/Sign In with Phone",
  component: [SignInPhone],
  parameters: {
    docs: {
      description: {
        component:
          "`<SignInPhone />` Block for users to sign in with phone number"
      }
    }
  }
};

const SignInPhoneTemplate = (args) => {
  return <SignInPhone {...args} />;
};

export const SignIn = SignInPhoneTemplate.bind({});
SignIn.args = {
  country: "sa",
  onChange: (e) => console.log(e),
  value: "this is value",
  SignInButtonText: "Sign In",
  onSubmit: (e) => console.log("this is submit function = ", e),
  label: "Your Phone"
};
