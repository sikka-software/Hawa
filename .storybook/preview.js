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
        "Introduction",
        "Getting Started",
        "Theme",
        ["Theme Introduction", "Theme Configuration"],
        "Blocks",
        [
          "Blocks Introduction",
          "Auth",
          ["Sign In", "Sign Up", "Reset Password", "New Pasword"],
          "Account",
          ["User Profile", "User Settings"],
          "Payment",
          ["Payment Selection", "User Settings"]
        ],
        "Layout",
        ["Layout Introduction", "App Layout", "Container", "Dialog"],
        "Elements",
        [
          "Elements Introduction",
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
