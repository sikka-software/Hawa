import { defineConfig } from "tsup";

export default defineConfig({
  clean: true,
  target: "es2019",
  entry: {
    index: "components/index.ts",
    "button/index": "components/elements/button/index.ts",
    "accordion/index": "components/elements/accordion/index.ts",
    "skeleton/index": "components/elements/skeleton/index.ts",
    "splitButton/index": "components/elements/splitButton/index.ts"
  },
  format: ["cjs", "esm"]
});
