import "../src/tailwind.css";

export const parameters = {
  actions: { argTypesRegex: "^on[A-Z].*" },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/
    }
  },
  options: {
    storySort: {
      order: [
        "Getting Started",
        ["Overview", "Installation", "Usage", "Customization"],
        "Blocks",
        [
          "Introduction",
          "Auth",
          ["Landing", "Sign In", "Sign Up", "Reset Password", "New Pasword"],
          "Account",
          ["User Profile", "User Settings"],
          "Payment",
          ["Payment Selection", "User Settings"]
        ],
        "Layout",
        ["Introduction", "App Layout", "Container", "Dialog"],
        "Elements",
        [
          "Introduction",
          "Buttons",
          ["Sign In", "Sign Up", "Reset Password", "New Pasword"],
          "Cards",
          ["User Profile", "User Settings"],
          "Notifications",
          "Selections",
          "SettingsRow",
          "Alert",
          "Table",
          "PopMenu",
          "Snackbar",
          "TextFields"
        ]
      ]
    }
  }
};

export const globalTypes = {
  darkMode: true
};
