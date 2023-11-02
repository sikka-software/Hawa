import { CodeBlock, RegisterForm } from "../../../components";
import { ArgsTable, Markdown, Title } from "@storybook/blocks";
import { TranslationTable } from "../../../sharedUI/docsUI";
import { useDarkMode } from "storybook-dark-mode";

const LoginDocs = (args: any, globals: any) => {
  const isDark = useDarkMode();
  return (
    <div className="hawa-flex hawa-flex-col hawa-gap-6">
      <div>
        <Title />
        <span>
          The <span className="inline-code">{"<LoginForm />"}</span> Use this
          form block in your application to display a login form to the users.
        </span>
      </div>

      <div className="hawa-pt-10">
        <h2 id="props">Props</h2>

        <ArgsTable
          exclude={[
            "texts",
            "isLoading",
            "isGoogleLoading",
            "isTwitterLoading",
            "isGithubLoading",
            "onLogin",
            "onGoogleLogin",
            "onGithubLogin",
            "onTwitterLogin",
          ]}
        />
      </div>
      <h2 id="login">Login Handlers</h2>
      <h4>
        Functions to handle the actual authentication process for a regular
        login and for 3rd party login.
      </h4>
      <ArgsTable
        include={[
          "onLogin",
          "onGoogleLogin",
          "onGithubLogin",
          "onTwitterLogin",
        ]}
      />
      <h2 id="loading">Loading Booleans</h2>
      <span>
        Booleans to control loading spinners in the LoginForm block. Make sure
        to use this to show feedback to the user that something is happening
        behind the scene.
      </span>
      <ArgsTable
        include={[
          "isLoading",
          "isGoogleLoading",
          "isTwitterLoading",
          "isGithubLoading",
        ]}
      />

      <div>
        <h2 id="texts">Texts Object</h2>
        <span>Text labels and placeholders used within the form.</span>
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
      </div>

      <div>
        <h2 id="Usage">Usage</h2>
        <CodeBlock
          code={`

 import React from "react";
 import { LoginForm } from "your-library";
  const MyComponent = () => {
   const handleLogin = (e) => {
     console.log("Form submitted:", e);
   };
    const texts = {
     fullNameLabel: "Full Name",
     emailLabel: "Email",
     passwordLabel: "Password",
     // ...other text labels
   };
    return (
     <LoginForm
       texts={texts}
       onLogin={handleLogin}
       viaGoogle={true}
       viaGithub={true}
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
          The <span className="inline-code">LoginForm</span> component can be
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
          The <span className="inline-code">LoginForm</span> component can be
          customized by passing different props like{" "}
          <span className="inline-code">viaGoogle</span>,{" "}
          <span className="inline-code">viaGithub</span>, etc. Or by adjusting{" "}
          <span className="inline-code">loginType</span> prop.
        </span>
      </div>
      {/* <div>
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
      </div> */}
      {/* <div className="hawa-h-screen"></div> */}
    </div>
  );
};

export default LoginDocs;
