const path = require("path");
const toPath = (filePath) => path.join(process.cwd(), filePath);

module.exports = {
  core: {
    builder: "webpack5"
  },
  stories: [
    "./../src/**/*.stories.mdx",
    "./../src/**/*.stories.@(js|jsx|ts|tsx)"
  ],
  addons: [
    "storybook-tailwind-dark-mode",
    "@storybook/addon-links",
    "@storybook/addon-docs",
    "@storybook/addon-essentials",
    {
      name: "@storybook/addon-postcss",
      options: {
        cssLoaderOptions: {
          // When you have splitted your css over multiple files
          // and use @import('./other-styles.css')
          importLoaders: 1
        },
        postcssLoaderOptions: {
          // When using postCSS 8
          implementation: require("postcss")
        }
      }
    }
  ],
  webpackFinal: async (config) => {
    return {
      ...config,
      resolve: {
        ...config.resolve
      }
    };
  }
};
