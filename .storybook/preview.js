import "../src/tailwind.css";
import { useEffect, useContext } from "react";
import { setLocale } from "../src/translations/i18n";
// import { Context } from "@storybook/addon-context";
import { themes } from "@storybook/theming";

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
    current: "light",
    light: {
      ...themes.light,
      brandTitle: "Hawa UI",
      brandUrl: "https://sikka.io",
      brandImage:
        "https://xakher-images.s3.ap-southeast-1.amazonaws.com/hawa-logo.png"
    },
    dark: {
      ...themes.dark,
      brandTitle: "Hawa UI",
      brandUrl: "https://sikka.io",
      brandImage:
        "https://xakher-images.s3.ap-southeast-1.amazonaws.com/hawa-logo-dark-mode.png"
    },
    darkClass: "dark",
    lightClass: "light",
    stylePreview: true
  },

  options: {
    showPanel: false,

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
  locale: {
    name: "Locale",
    description: "Langauge Switcher",
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
