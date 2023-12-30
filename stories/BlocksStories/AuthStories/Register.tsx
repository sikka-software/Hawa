import { ArgsTable, Title } from "@storybook/blocks";
import { useDarkMode } from "storybook-dark-mode";

import { CodeBlock, RegisterForm } from "../../../packages/components";
import { TranslationTable } from "../../../sharedUI/docsUI";

const RegisterDocs = (args: any, globals: any) => {
  const isDark = useDarkMode();
  return (
    <div className="hawa-flex hawa-flex-col hawa-gap-6">
      <div>
        <Title />
        <span>
          The <span className="inline-code">{"<RegisterForm />"}</span>{" "}
          component renders a form that allows users to register an account. It
          includes fields for personal and account information, and options for
          social media registration. It also provides a switch for language and
          color mode.
        </span>
      </div>
      <div className="hawa-pt-10">
        <h2 id="props">Props</h2>
        <ArgsTable
          of={RegisterForm}
          exclude={[
            "texts",
            "viaGoogle",
            "viaGithub",
            "viaTwitter",
            "onGoogleRegister",
            "onTwitterRegister",
            "onGithubRegister"
          ]}
        />
      </div>
      <div>
        <h2 id="3rd-party">3rd Party Auth</h2>
        <ArgsTable
          of={RegisterForm}
          include={[
            "viaGoogle",
            "viaGithub",
            "viaTwitter",
            "onGoogleRegister",
            "onTwitterRegister",
            "onGithubRegister"
          ]}
        />
      </div>

      <div>
        <h2 id="texts">Texts Object</h2>
        <span>Text labels and placeholders used within the form.</span>
        <TranslationTable
          componentProps={[
            {
              key: "fullNameLabel",
              description: "Label for the full name input",
              default: "Full Name"
            },
            {
              key: "fullNamePlaceholder",
              description: "Placeholder for the full name input",
              default: "John Doe"
            },
            {
              key: "fullNameRequiredText",
              description: "Error text if full name is not provided",
              default: "Full Name is required"
            },
            {
              key: "emailLabel",
              description: "Label for the email input",
              default: "Email"
            },
            {
              key: "emailPlaceholder",
              description: "Placeholder for the email input",
              default: "example@example.com"
            },
            {
              key: "emailRequiredText",
              description: "Error text if email is not provided",
              default: "Email is required"
            },
            {
              key: "emailInvalidText",
              description: "Error text if email format is invalid",
              default: "Invalid email format"
            },
            {
              key: "usernameLabel",
              description: "Label for the username input",
              default: "Username"
            },
            {
              key: "usernamePlaceholder",
              description: "Placeholder for the username input",
              default: "username123"
            },
            {
              key: "usernameRequired",
              description: "Error text if username is not provided",
              default: "Username is required"
            },
            {
              key: "passwordLabel",
              description: "Label for the password input",
              default: "Password"
            },
            {
              key: "passwordPlaceholder",
              description: "Placeholder for the password input",
              default: "Enter your password"
            },
            {
              key: "passwordRequiredText",
              description: "Error text if password is not provided",
              default: "Password is required"
            },
            {
              key: "passwordTooShortText",
              description: "Error text if password is too short",
              default: "Password is too short"
            },
            {
              key: "passwordsDontMatch",
              description: "Error text if passwords don't match",
              default: "Passwords don't match"
            },
            {
              key: "confirmPasswordLabel",
              description: "Label for the confirm password input",
              default: "Confirm Password"
            },
            {
              key: "confirmPasswordPlaceholder",
              description: "Placeholder for the confirm password input",
              default: "Re-enter your password"
            },
            {
              key: "confirmPasswordRequired",
              description: "Error text if confirm password is not provided",
              default: "Confirm Password is required"
            },
            {
              key: "refCodePlaceholder",
              description: "Placeholder for the referral code input",
              default: "Enter referral code (if any)"
            },
            {
              key: "subscribeToNewsletter",
              description: "Label for subscribe to newsletter checkbox",
              default: "Subscribe to newsletter"
            },
            {
              key: "forgotPasswordText",
              description: "Text for the forgot password link",
              default: "Forgot Password?"
            },
            {
              key: "termsText",
              description: "Text for terms and conditions",
              default: "Terms and Conditions"
            },
            {
              key: "iAcceptText",
              description: "Text for acceptance of terms",
              default: "I accept the"
            },
            {
              key: "termsRequiredText",
              description: "Error text if terms are not accepted",
              default: "Acceptance of terms is required"
            },
            {
              key: "newUserText",
              description: "Text for new user prompt",
              default: "New user?"
            },
            {
              key: "registerText",
              description: "Text for the register button",
              default: "Register"
            },
            {
              key: "loginText",
              description: "Text for the login prompt",
              default: "Login"
            },
            {
              key: "existingUserText",
              description: "Text for existing user prompt",
              default: "Existing user?"
            },
            {
              key: "registerViaGoogleLabel",
              description: "Label to continue via Google button",
              default: "Continue with Google"
            },
            {
              key: "registerViaGithubLabel",
              description: "Label to continue via Github button",
              default: "Continue with Github"
            },
            {
              key: "registerViaTwitterLabel",
              description: "Label to continue via Twitter button",
              default: "Continue with Twitter"
            },
            {
              key: "refCode",
              description: "Label for the referral code input",
              default: "Referral Code"
            },
            {
              key: "userReferenceLabel",
              description: "Label for the user reference input",
              default: "How did you hear about us?"
            }
          ]}
        />
      </div>

      <div>
        <h2 id="Usage">Usage</h2>
        <CodeBlock
          code={`

 import React from "react";
 import { RegisterForm } from "your-library";
  const MyComponent = () => {
   const handleRegister = (e) => {
     console.log("Form submitted:", e);
   };
    const texts = {
     fullNameLabel: "Full Name",
     emailLabel: "Email",
     passwordLabel: "Password",
     // ...other text labels
   };
    return (
     <RegisterForm
       texts={texts}
       onRegister={handleRegister}
       viaGoogle={true}
       viaGithub={true}
       showTermsOption={true}
       // ...other props
     />
   );
 };
  export default MyComponent;


`}
        />
      </div>

      <div>
        <h2 id="accessibility">Accessibility</h2>
        <span>
          Ensure all interactive elements are accessible by providing
          appropriate ARIA attributes, ensuring keyboard navigation, and other
          accessibility best practices.
        </span>
      </div>
      <div>
        <h2 id="Styling">Styling </h2>
        <span>
          The <span className="inline-code">RegisterForm</span> component can be
          styled via CSS and Tailwind, using class names with{" "}
          <strong>hawa-</strong> prefix in the component, such as{" "}
          <span className="inline-code">.hawa-flex</span>,{" "}
          <span className="inline-code">.hawa-flex-col</span>,{" "}
          <span className="inline-code">.hawa-gap-4</span>, etc.
        </span>
      </div>
      <div>
        <h2 id="Customization">Customization</h2>
        <span>
          The <span className="inline-code">RegisterForm</span> component can be
          customized by passing different props like{" "}
          <span className="inline-code">viaGoogle</span>,{" "}
          <span className="inline-code">viaGithub</span>,
          <span className="inline-code">showTermsOption</span>, etc. Or by
          adjusting <span className="inline-code">registerFields</span> prop.
        </span>
      </div>
      <div>
        <span>
          If you want to add more fields at between the primary fields and the
          submit button, you can use{" "}
          <span className="inline-code">additionalFields</span> prop to pass
          your custom section inside the Register form block. This allows for a
          flexible registration form that can adapt to different requirements.
        </span>
      </div>
      <div>
        <span>
          This documentation provides a clear understanding of what the
          <span className="inline-code">RegisterForm</span> component does, the
          props it accepts, and how to use it in a project. It also provides a
          basic usage example and some accessibility and styling information.
        </span>
      </div>
      <div className="hawa-h-screen"></div>
    </div>
  );
};

export default RegisterDocs;
