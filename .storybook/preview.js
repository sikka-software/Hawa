import { ThemeProvider } from "@mui/material/styles";
import { ThemeProvider as Emotion10ThemeProvider } from "emotion-theming";
import { CreateHawaTheme } from "./../src";
import "../src/tailwind.css";
export const theme = CreateHawaTheme(
  {
    borderRadius: 10,
    actionColor: "#3b28cc",
    actionTextColor: "#ffffff",
    layoutColor: "#ADD7F6",
    font: "Roboto"
  },
  { mobile: 0, tablet: 768, laptop: 1024, desktop: 1200 }
);

const withThemeProvider = (Story, context) => {
  return (
    <Emotion10ThemeProvider theme={theme}>
      <ThemeProvider theme={theme}>
        <Story {...context} theme={theme} />
      </ThemeProvider>
    </Emotion10ThemeProvider>
  );
};

export const decorators = [withThemeProvider];

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
