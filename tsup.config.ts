import { defineConfig } from "tsup";

export default defineConfig({
  clean: true,
  target: "es2019",
  entry: {
    "types/index": "components/types/index.ts",
    // ALL
    index: "components/index.ts",
    // CORE
    "blocks/index": "components/blocks/index.ts",
    "layout/index": "components/layout/index.ts",
    "elements/index": "components/elements/index.ts",
    // BLOCKS
    "blocks/auth/index": "components/blocks/auth/index.ts",
    "blocks/feedback/index": "components/blocks/feedback/index.ts",
    "blocks/misc/index": "components/blocks/misc/index.ts",
    "blocks/pricing/index": "components/blocks/pricing/index.ts",

    // ELEMENTS
    "hooks/index": "components/hooks/index.ts",
    "button/index": "components/elements/button/index.ts",
    "card/index": "components/elements/card/index.ts",
    "accordion/index": "components/elements/accordion/index.ts",
    "skeleton/index": "components/elements/skeleton/index.ts",
    "splitButton/index": "components/elements/splitButton/index.ts",
    "loading/index": "components/elements/loading/index.ts",
    "sheet/index": "components/elements/sheet/index.ts",
    "dropdownMenu/index": "components/elements/dropdownMenu/index.ts",
    "dialog/index": "components/elements/dialog/index.ts",
    "navigationMenu/index": "components/elements/navigationMenu/index.ts",
    "logos/index": "components/elements/logos/index.ts",
    "tooltip/index": "components/elements/tooltip/index.ts"
  },
  format: ["cjs", "esm"]
});
