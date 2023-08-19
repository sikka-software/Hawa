import "../src/tailwind.css";
import { useEffect, useContext } from "react";
import { setLocale } from "../src/translations/i18n";
// import { Context } from "@storybook/addon-context";

const withI18n = (StoryFn, context) => {
  const locale = context.globals.locale || "en";
  setLocale(locale);
  return <StoryFn />;
};

export const decorators = [withI18n];

export const parameters = {
  actions: { argTypesRegex: "^on[A-Z].*" },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/
    }
  },

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
export const globalTypes = {
  // theme: {
  //   description: "Global theme for components",
  //   defaultValue: "light",
  //   toolbar:
  //     // The label to show for this toolbar item

  //     {
  //       title: "Color Mode",
  //       icon: "circlehollow",
  //       // Array of plain string values or MenuItem shape (see below)
  //       items: ["light", "dark"],
  //       // Change title based on selected value
  //       dynamicTitle: true,
  //       onClick: () => console.log("Logging data!"),
  //       right: true, // Places this on the right side of the toolbar
  //       onChange: (value) => console.log(value)
  //     }
  // },
  locale: {
    name: "Locale",
    description: "Internationalization locale",
    defaultValue: "en",
    toolbar: {
      icon: "globe",
      items: [
        { value: "en", right: "EN", title: "English" },
        { value: "ar", right: "AR", title: "Arabic" }
        // ... other locales
      ]
    }
  }
};
// const preview = {
//   globalTypes: {
//     locale: {
//       description: "Internationalization locale",
//       defaultValue: "en",
//       toolbar: {
//         icon: "globe",
//         items: [
//           { value: "en", right: "🇺🇸", title: "English" },
//           { value: "fr", right: "🇫🇷", title: "Français" },
//           { value: "es", right: "🇪🇸", title: "Español" },
//           { value: "zh", right: "🇨🇳", title: "中文" },
//           { value: "kr", right: "🇰🇷", title: "한국어" }
//         ]
//       }
//     }
//   }
// };

// export default preview;
// export const globalTypes = {
//   darkMode: true
// };
