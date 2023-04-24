import resolve from "@rollup/plugin-node-resolve";
import commonjs from "@rollup/plugin-commonjs";
import babel from "rollup-plugin-babel";
import external from "rollup-plugin-peer-deps-external";
import { terser } from "rollup-plugin-terser";
import postcss from "rollup-plugin-postcss";
import typescript from "rollup-plugin-typescript2";
import {swc} from "rollup-plugin-swc3";
import cleaner from "rollup-plugin-cleaner";

export default [
  {
    input: "src/index.ts",
    output: [
      { file: "lib/index.js", format: "cjs" },
      { file: "es/index.es.js", format: "es", exports: "named" }
    ],
    plugins: [
      cleaner({
        targets: ["./lib", "./es"]
      }),
      postcss({ plugins: [], minimize: true }),
      babel({
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
      commonjs()
    ]
  }
];
