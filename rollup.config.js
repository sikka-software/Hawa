import resolve from "@rollup/plugin-node-resolve";
import commonjs from "@rollup/plugin-commonjs";
// import babel from "rollup-plugin-babel";
import { babel } from "@rollup/plugin-babel";

import external from "rollup-plugin-peer-deps-external";
// import { terser } from "rollup-plugin-terser";
import terser from "@rollup/plugin-terser";
import postcss from "rollup-plugin-postcss";
import typescript from "rollup-plugin-typescript2";
import swc from "rollup-plugin-swc";
import cleaner from "rollup-plugin-cleaner";
import preserveDirectives from "rollup-plugin-preserve-directives";

export default [
  {
    input: "src/index.ts",
    output: [
      { file: "lib/index.js", format: "cjs", preserveModules: true },
      {
        file: "es/index.es.js",
        format: "es",
        exports: "named",
        preserveModules: true
      }
    ],
    plugins: [
      cleaner({
        targets: ["./lib", "./es"]
      }),
      postcss({ plugins: [], minimize: true }),
      babel({
        babelHelpers: "bundled",
        exclude: "node_modules/**",
        presets: [
          "@babel/preset-env",
          ["@babel/preset-react", { runtime: "automatic" }]
        ]
      }),
      external(),
      resolve({
        extensions: [".tsx", ".ts"]
      }),
      typescript({ tsconfig: "./tsconfig.json" }),
      terser(),
      swc({
        jsc: {
          parser: {
            syntax: "typescript"
          }
        }
      }),
      commonjs(),
      preserveDirectives()
    ],
    onwarn: function (warning, handler) {
      // Skip certain warnings

      // should intercept ... but doesn't in some rollup versions
      if (warning.code === "THIS_IS_UNDEFINED") {
        return;
      }

      // console.warn everything else
      handler(warning);
    }
  }
];
