/** @type { import('@storybook/react-vite').StorybookConfig } */
import type { StorybookConfig } from "@storybook/nextjs";
import path from "path";
import { TsconfigPathsPlugin } from "tsconfig-paths-webpack-plugin";
const getAbsolutePath = (name) => path.dirname(require.resolve(path.join(name, "package.json")))

const config: StorybookConfig = {
  stories: [
    "../stories/**/*.mdx",
    "../stories/**/*.stories.@(js|jsx|mjs|ts|tsx)"
  ],
  addons: [
    // This is needed to have css files in ./preview.ts
    {
      name: "@storybook/addon-styling-webpack",
      options: {
        rules: [
          {
            test: /\.css$/,
            use: [
              "style-loader",
              {
                loader: "css-loader",
                options: { importLoaders: 1 }
              },
              {
                loader: "postcss-loader",
                options: {
                  postcssOptions: {
                    plugins: [
                      require("tailwindcss")(
                        path.resolve(
                          __dirname,
                          "../../components/tailwind.config.ts"
                        )
                      ),
                      require("autoprefixer")
                    ]
                  },
                  implementation: require.resolve("postcss")
                }
              }
            ]
          }
        ]
      }
    },
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
      "@elements": path.resolve(__dirname, "../../components/elements"),
      "@blocks": path.resolve(__dirname, "../../components/blocks")
    };

    return config;
  }
};

export default config;



// {
//   name: "@storybook/addon-styling-webpack",
//   options: {
//     rules: [
//       {
//         test: /\.css$/,
//         use: [
//           "style-loader",
//           {
//             loader: "css-loader",
//             options: { importLoaders: 1 }
//           },
//           {
//             loader: "postcss-loader",
//             options: {
//               postcssOptions: {
//                 plugins: [
//                   require("tailwindcss")(
//                     path.resolve(
//                       __dirname,
//                       "../../components/tailwind.config.ts"
//                     )
//                   ),
//                   require("autoprefixer")
//                 ]
//               },
//               implementation: require.resolve("postcss")
//             }
//           }
//         ]
//       }
//     ]
//   }
// },