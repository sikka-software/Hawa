/** @type { import('@storybook/react-vite').StorybookConfig } */
import type { StorybookConfig } from "@storybook/nextjs";
import path from "path";
import { TsconfigPathsPlugin } from "tsconfig-paths-webpack-plugin";

const getAbsolutePath = (name) =>
  path.dirname(require.resolve(path.join(name, "package.json")));

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
      ...(config.resolve.plugins || []),
      new TsconfigPathsPlugin({ extensions: config.resolve.extensions })
    ];
    config.resolve.alias = {
      ...config.resolve.alias,
      "@/": path.resolve(__dirname, "../../components/"),
      "@util": path.resolve(__dirname, "../../components/util"),
      "@layout": path.resolve(__dirname, "../../components/layout"),
      "@elements": path.resolve(__dirname, "../../components/elements"),
      "@blocks": path.resolve(__dirname, "../../components/blocks")
    };

    return config;
  }
};

export default config;
