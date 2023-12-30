const { defineConfig } = require("tsup");

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
  "glow",
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
  "signature",
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
const elementEntries = elements.reduce((entries, elementName) => {
  entries[`${elementName}/index`] =
    `elements/${elementName}/index.ts`;
  return entries;
}, {});
const layoutEntries = layouts.reduce((entries, layoutName) => {
  entries[`${layoutName}/index`] = `layout/${layoutName}/index.ts`;
  return entries;
}, {});

function chunkEntries(entries, chunkSize) {
  return Object.entries(entries).reduce((resultArray, [key, value], index) => {
    const chunkIndex = Math.floor(index / chunkSize);

    if (!resultArray[chunkIndex]) {
      resultArray[chunkIndex] = {};
    }

    resultArray[chunkIndex][key] = value;

    return resultArray;
  }, []);
}

function createConfigForGroup(entries, name) {
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

const groupedElements = groupedElementEntries.map((group, i) =>
  createConfigForGroup(group, `Build Elements Group - ${i}`)
);
const groupedLayout = groupedLayoutEntries.map((group, i) =>
  createConfigForGroup(group, `Build Layout Group - ${i}`)
);

const buildAllConfig = defineConfig({
  name: "Build All",
  clean: false,
  dts: true,
  target: "es2019",
  entry: { index: "index.ts" },
  format: ["cjs", "esm"]
});
const buildCoreConfig = defineConfig({
  name: "Build Core",
  clean: false,
  dts: true,
  target: "es2019",
  format: ["cjs", "esm"],
  entry: {
    // CORE
    "types/index": "types/index.ts",
    "hooks/index": "hooks/index.ts",
    "blocks/index": "blocks/index.ts",
    "layout/index": "layout/index.ts",
    "elements/index": "elements/index.ts"
  }
});
const buildBlocksConfig = defineConfig({
  name: "Build Blocks",
  clean: false,
  dts: true,
  target: "es2019",
  format: ["cjs", "esm"],
  entry: {
    // BLOCKS
    "blocks/misc/index": "blocks/misc/index.ts",
    "blocks/auth/index": "blocks/auth/index.ts",
    "blocks/pricing/index": "blocks/pricing/index.ts",
    "blocks/feedback/index": "blocks/feedback/index.ts"
  }
});
module.exports = {
  groupedElements,
  groupedLayout,
  buildAllConfig,
  buildCoreConfig,
  buildBlocksConfig
};
