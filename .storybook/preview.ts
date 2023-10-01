import "../styles/globals.css";

import type { Preview } from "@storybook/react";
import { themes } from "@storybook/theming";
import { DocsContainer } from "./DocsContainer";

const preview: Preview = {
  parameters: {
    options: {
      storySort: {
        order: ["Elements", ["Loading", "Button", "Cards"]],
      },
    },

    docs: {
      container: DocsContainer,
    },

    darkMode: {
      current: "light",
      light: {
        ...themes.light,
        brandTitle: "Hawa UI",
        brandUrl: "https://sikka.io",
        brandImage:
          "https://sikka-images.s3.ap-southeast-1.amazonaws.com/hawa/hawa-wordmark-black.png",
      },
      dark: {
        ...themes.dark,
        brandTitle: "Hawa UI",
        brandUrl: "https://sikka.io",
        brandImage:
          "https://sikka-images.s3.ap-southeast-1.amazonaws.com/hawa/hawa-wordmark-white.png",
      },
      darkClass: "dark",
      lightClass: "light",
      stylePreview: true,
    },
    actions: { argTypesRegex: "^on[A-Z].*" },
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/,
      },
    },
  },
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
        { value: "ar", right: "AR", title: "Arabic" },
      ],
    },
  },
  // gogo : {
  //   name: "gogo",
  //   description: "test button",
  //   defaultValue: "en",
  //   toolbar: {
  //     icon: "globe",
  //     items: [
  //       { value: "en", right: "EN", title: "English" },
  //       { value: "ar", right: "AR", title: "Arabic" }
  //     ]
  //   }
  // }
};
export default preview;
