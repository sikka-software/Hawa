import type { StorybookConfig } from "@storybook/nextjs";
import path from "path";
import { TsconfigPathsPlugin } from "tsconfig-paths-webpack-plugin";

const config: StorybookConfig = {
  stories: [
    "../stories/**/*.mdx",
    "../stories/**/*.stories.@(js|jsx|mjs|ts|tsx)"
  ],
  addons: [
    "@storybook/addon-links",
    "@storybook/addon-essentials",
    "@storybook/addon-interactions",
    "storybook-dark-mode"
  ],
  core: { disableWhatsNewNotifications: true },
  staticDirs: ["../public"],

  framework: { name: "@storybook/nextjs", options: {} },

  webpackFinal: async (config: any) => {
    config.resolve.plugins = [
      new TsconfigPathsPlugin({ extensions: config.resolve.extensions })
    ];

    return config;
  }
};

export default config;
