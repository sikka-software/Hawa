import { defineConfig } from "tsup";

export default defineConfig([
  {
    name: "Build All",
    clean: true,
    target: "es2019",
    entry: { index: "components/index.ts" },
    format: ["cjs", "esm"]
  },
  {
    name: "Build Core",
    clean: true,
    target: "es2019",
    entry: {
      // CORE
      "types/index": "components/types/index.ts",
      "hooks/index": "components/hooks/index.ts",
      "blocks/index": "components/blocks/index.ts",
      "layout/index": "components/layout/index.ts",
      "elements/index": "components/elements/index.ts"
    },
    format: ["cjs", "esm"]
  },
  {
    name: "Build Blocks",
    clean: true,
    target: "es2019",
    entry: {
      // BLOCKS
      "blocks/auth/index": "components/blocks/auth/index.ts",
      "blocks/feedback/index": "components/blocks/feedback/index.ts",
      "blocks/misc/index": "components/blocks/misc/index.ts",
      "blocks/pricing/index": "components/blocks/pricing/index.ts"
    },
    format: ["cjs", "esm"]
  },
  {
    name: "Build Elements",
    clean: true,
    target: "es2019",
    entry: {
      // ELEMENTS
      "accordion/index": "components/elements/accordion/index.ts",
      "button/index": "components/elements/button/index.ts",
      "backToTop/index": "components/elements/backToTop/index.ts",
      "card/index": "components/elements/card/index.ts",
      "combobox/index": "components/elements/combobox/index.ts",
      "skeleton/index": "components/elements/skeleton/index.ts",
      "splitButton/index": "components/elements/splitButton/index.ts",
      "loading/index": "components/elements/loading/index.ts",
      "sheet/index": "components/elements/sheet/index.ts",
      "dropdownMenu/index": "components/elements/dropdownMenu/index.ts",
      "dialog/index": "components/elements/dialog/index.ts",
      "dataTable/index": "components/elements/dataTable/index.ts",
      "navigationMenu/index": "components/elements/navigationMenu/index.ts",
      "logos/index": "components/elements/logos/index.ts",
      "avatar/index": "components/elements/avatar/index.ts",
      "radio/index": "components/elements/radio/index.ts",
      "tooltip/index": "components/elements/tooltip/index.ts",
      "textarea/index": "components/elements/textarea/index.ts",
      "table/index": "components/elements/table/index.ts",
      "tabs/index": "components/elements/tabs/index.ts",
      "alert/index": "components/elements/alert/index.ts",
      "label/index": "components/elements/label/index.ts",
      "sortButton/index": "components/elements/sortButton/index.ts",
      "input/index": "components/elements/input/index.ts",
      "fileDropzone/index": "components/elements/fileDropzone/index.ts"
    },
    format: ["cjs", "esm"]
  }
]);
