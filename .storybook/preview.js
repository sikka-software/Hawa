import "../src/tailwind.css";

export const parameters = {
  actions: { argTypesRegex: "^on[A-Z].*" },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/
    }
  },
  // backgrounds: {
  //   default: "light",
  //   values: [
  //     {
  //       name: "light",
  //       value: "#ffffff"
  //     },
  //     {
  //       name: "dark",
  //       value: "#1d1d1d"
  //     }
  //   ]
  // },
  darkMode: {
    darkClass: "dark",
    lightClass: "light",
    stylePreview: true
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
          "Code",
          ["Inline Code", "Code Block"],
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

// export const globalTypes = {
//   darkMode: true
// };
