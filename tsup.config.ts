import { defineConfig } from "tsup";

const elements = [
  "accordion",
  "alert",
  "appStores",
  "avatar",
  "backToTop",
  "badge",
  "breadcrumb",
  "button",
  "card",
  "carousel",
  "checkbox",
  "chip",
  "codeBlock",
  "collapsible",
  "colorPicker",
  "combobox",
  "command",
  "count",
  "dataTable",
  "destroyableCard",
  "dialog",
  "dropdownMenu",
  "fileDropzone",
  "fileUploader",
  "input",
  "interfaceSettings",
  "label",
  "loading",
  "logos",
  "navigationMenu",
  "pagination",
  "passwordInput",
  "phoneInput",
  "pinInput",
  "popover",
  "progress",
  "progressCircle",
  "radio",
  "scrollArea",
  "scrollIndicator",
  "select",
  "separator",
  "sheet",
  "simpleTable",
  "skeleton",
  "slider",
  "sortButton",
  "splitButton",
  "stopPropagationWrapper",
  "switch",
  "table",
  "tabs",
  "textarea",
  "toast",
  "toaster",
  "tooltip"
];

const layouts = [
  "appLayout",
  "appMenubar",
  "appTabs",
  "appTopbar",
  "copyrights",
  "docsLayout",
  "docsSidebar",
  "navbar",
  "sidebar",
  "stats"
];
const elementEntries = elements.reduce((entries: any, elementName) => {
  entries[`${elementName}/index`] =
    `components/elements/${elementName}/index.ts`;
  return entries;
}, {});
const layoutEntries = layouts.reduce((entries: any, layoutName) => {
  entries[`${layoutName}/index`] = `components/layout/${layoutName}/index.ts`;
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

function createConfigForGroup(entries: any, name?: string) {
  return defineConfig({
    name: name || "Grouped Entries",
    clean: false,
    dts: true,
    target: "es2019",
    format: ["cjs", "esm"],
    entry: entries
  });
}
const groupedElementEntries = chunkEntries(elementEntries, 3);
const groupedLayoutEntries = chunkEntries(layoutEntries, 3);

export const groupedElements = groupedElementEntries.map((group: any, i: any) =>
  createConfigForGroup(group, `Build Elements Group - ${i}`)
);
export const groupedLayout = groupedLayoutEntries.map((group: any, i: any) =>
  createConfigForGroup(group, `Build Layout Group - ${i}`)
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
