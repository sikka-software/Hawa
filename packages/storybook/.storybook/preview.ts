import type { Preview } from "@storybook/react";
import { themes } from "@storybook/theming";

import "../../components/styles.css";
import { DocsContainer } from "./DocsContainer";
import "./stories.css";

const preview: Preview = {
  parameters: {
    grid: {
      cellSize: 15
    },
    options: {
      storySort: {
        order: [
          "Overview",
          "Installation",
          "Usage",
          "Blocks",
          "Layout",
          "Elements",
          [
            "Introduction",
            ["Container"],
            "Inputs",
            "Tables",
            "Loading",
            "Button",
            "Cards"
          ]
        ]
      }
    },
    docs: {
      container: DocsContainer
    },
    darkMode: {
      current: "light",
      light: {
        ...themes.light,
        brandTitle: "Hawa UI",
        brandUrl: "https://sikka.io",
        brandImage:
          "https://sikka-images.s3.ap-southeast-1.amazonaws.com/hawa/hawa-bilingual-wordmark-ltr.png"
      },
      dark: {
        ...themes.dark,
        brandTitle: "Hawa UI",
        brandUrl: "https://sikka.io",
        brandImage:
          "https://sikka-images.s3.ap-southeast-1.amazonaws.com/hawa/hawa-bilingual-wordmark-ltr-white.png"
      },
      darkClass: ["hawa-dark", "dark"],
      lightClass: ["hawa-light", "light"],
      stylePreview: true
      // classTarget: "body",
    },
    actions: { argTypesRegex: "^on[A-Z].*" },
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/
      }
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
        { value: "ar", right: "AR", title: "عربي" }
      ]
    }
  }
};
export default preview;
