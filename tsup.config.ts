import { defineConfig } from "tsup";

export default defineConfig({
  clean: true,
  target: "es2019",
  entry: {
    index: "components/index.ts",
    "Button/index": "components/elements/Button/index.ts"
  },

  format: ["cjs", "esm"]
});
