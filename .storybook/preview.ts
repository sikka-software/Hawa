import "../styles/globals.css";

import type { Preview } from "@storybook/react";
import { themes } from "@storybook/theming";
import {DocsContainer} from './DocsContainer';

const preview: Preview = {
  parameters: {
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
          "https://xakher-images.s3.ap-southeast-1.amazonaws.com/hawa-logo.png",
      },
      dark: {
        ...themes.dark,
        brandTitle: "Hawa UI",
        brandUrl: "https://sikka.io",
        brandImage:
          "https://xakher-images.s3.ap-southeast-1.amazonaws.com/hawa-logo-dark-mode.png",
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

export default preview;
