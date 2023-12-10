import { defineConfig } from "tsup";

const elements = [
  "card",
  "chip",
  "tabs",
  "sheet",
  "logos",
  "radio",
  "table",
  "alert",
  "label",
  "input",
  "badge",
  "toast",
  "dialog",
  "button",
  "select",
  "avatar",
  "switch",
  "slider",
  "command",
  "popover",
  "loading",
  "tooltip",
  "toaster",
  "skeleton",
  "combobox",
  "textarea",
  "pinInput",
  "checkbox",
  "progress",
  "carousel",
  "accordion",
  "backToTop",
  "codeBlock",
  "separator",
  "dataTable",
  "appStores",
  "sortButton",
  "scrollArea",
  "pagination",
  "breadcrumb",
  "phoneInput",
  "splitButton",
  "colorPicker",
  "collapsible",
  "simpleTable",
  "dropdownMenu",
  "fileDropzone",
  "fileUploader",
  "passwordInput",
  "navigationMenu",
  "progressCircle",
  "scrollIndicator",
  "destroyableCard",
  "interfaceSettings",
  "stopPropagationWrapper"
];

const elementEntries = elements.reduce((entries: any, elementName) => {
  entries[`${elementName}/index`] =
    `components/elements/${elementName}/index.ts`;
  return entries;
}, {});

function chunkEntries(entries: any, chunkSize: any) {
  return Object.entries(entries).reduce(
    (resultArray: any, [key, value], index) => {
      const chunkIndex = Math.floor(index / chunkSize);

      if (!resultArray[chunkIndex]) {
        resultArray[chunkIndex] = {};
      }

      resultArray[chunkIndex][key] = value;

      return resultArray;
    },
    []
  );
}

const groupedEntries = chunkEntries(elementEntries, 3);

function createConfigForGroup(entries: any) {
  return defineConfig({
    name: "Build Elements Group",
    clean: false,
    dts: true,
    target: "es2019",
    format: ["cjs", "esm"],
    entry: entries
  });
}

export const groupedConfigs = groupedEntries.map((group: any) =>
  createConfigForGroup(group)
);

export const buildAllConfig = defineConfig({
  name: "Build All",
  clean: false,
  dts: true,
  target: "es2019",
  entry: { index: "components/index.ts" },
  format: ["cjs", "esm"]
});
export const buildCoreConfig = defineConfig({
  name: "Build Core",
  clean: false,
  dts: true,
  target: "es2019",
  format: ["cjs", "esm"],
  entry: {
    // CORE
    "types/index": "components/types/index.ts",
    "hooks/index": "components/hooks/index.ts",
    "blocks/index": "components/blocks/index.ts",
    "layout/index": "components/layout/index.ts",
    "elements/index": "components/elements/index.ts"
  }
});
export const buildBlocksConfig = defineConfig({
  name: "Build Blocks",
  clean: false,
  dts: true,
  target: "es2019",
  format: ["cjs", "esm"],
  entry: {
    // BLOCKS
    "blocks/misc/index": "components/blocks/misc/index.ts",
    "blocks/auth/index": "components/blocks/auth/index.ts",
    "blocks/pricing/index": "components/blocks/pricing/index.ts",
    "blocks/feedback/index": "components/blocks/feedback/index.ts"
  }
});
