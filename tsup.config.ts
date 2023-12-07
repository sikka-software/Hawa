import { defineConfig } from "tsup";

export default defineConfig({
  clean: true,
  target: "es2019",
  treeshake: true,
  entry: {
    index: "components/index.ts",
    "hooks/index": "components/hooks/index.ts",
    "button/index": "components/elements/button/index.ts",
    "card/index": "components/elements/card/index.ts",
    "accordion/index": "components/elements/accordion/index.ts",
    "skeleton/index": "components/elements/skeleton/index.ts",
    "splitButton/index": "components/elements/splitButton/index.ts",
    "loading/index": "components/elements/loading/index.ts",
    "sheet/index": "components/elements/sheet/index.ts",
    "dropdownMenu/index": "components/elements/dropdownMenu/index.ts",
    "navigationMenu/index": "components/elements/navigationMenu/index.ts",
    "tooltip/index": "components/elements/tooltip/index.ts"
  },
  format: ["cjs", "esm"]
});
