const path = require("path");
const toPath = (filePath) => path.join(process.cwd(), filePath);

module.exports = {
  core: {
    builder: "webpack5"
  },
  stories: ["./../src/**/*.stories.@(js|jsx|ts|tsx)"],
  addons: [
    "@storybook/addon-links",
    "@storybook/addon-docs",
    "@storybook/addon-info",
    "@storybook/addon-essentials",
    "storybook-dark-mode",
    {
      name: "@storybook/addon-postcss",
      options: {
        cssLoaderOptions: {
          importLoaders: 1
        },
        postcssLoaderOptions: {
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
