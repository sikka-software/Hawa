import React from "react";
import { SignInPhone } from "../../../blocks/AuthForms/SignInPhone";

export default {
  title: "Blocks/Auth/Sign In With Phone",
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
  return (
    <div className="max-w-md">
      <SignInPhone {...args} />
    </div>
  );
};

export const SignInWithPhone = SignInPhoneTemplate.bind({});
SignInWithPhone.args = {
  country: "sa",
  // handlePhoneChange: (e) => console.log("changing to ", e),
  value: "this is value",
  SignInButtonText: "Sign In",
  // onSubmit: (e) => console.log("this is submit function = ", e),
  label: "Your Phone",
  phoneRequiredText: "Phone number is required",
  handleSignIn: (e) => console.log(e)
};
