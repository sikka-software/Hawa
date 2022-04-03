import resolve from "@rollup/plugin-node-resolve";
import commonjs from "@rollup/plugin-commonjs";
import babel from "rollup-plugin-babel";
import external from "rollup-plugin-peer-deps-external";
import { terser } from "rollup-plugin-terser";
import postcss from "rollup-plugin-postcss";

export default [
  {
    input: "src/index.js",
    output: [
      { file: "lib/index.js", format: "cjs" },
      { file: "es/index.es.js", format: "es", exports: "named" }
    ],
    plugins: [
      postcss({ plugins: [], minimize: true }),
      babel({
        exclude: "node_modules/**",
        presets: [
          "@babel/preset-env",
          ["@babel/preset-react", { runtime: "automatic" }]
        ]
      }),
      external(),
      resolve(),
      terser(),
      commonjs()
    ]
  }
];
