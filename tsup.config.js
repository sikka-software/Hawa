"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.buildBlocksConfig =
  exports.buildCoreConfig =
  exports.buildAllConfig =
  exports.groupedConfigs =
    void 0;
var tsup_1 = require("tsup");
var elements = [
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

var elementEntries = elements.reduce(function (entries, elementName) {
  entries["".concat(elementName, "/index")] = "components/elements/".concat(
    elementName,
    "/index.ts"
  );
  return entries;
}, {});
function chunkEntries(entries, chunkSize) {
  return Object.entries(entries).reduce(function (resultArray, _a, index) {
    var key = _a[0],
      value = _a[1];
    var chunkIndex = Math.floor(index / chunkSize);
    if (!resultArray[chunkIndex]) {
      resultArray[chunkIndex] = {};
    }
    resultArray[chunkIndex][key] = value;
    return resultArray;
  }, []);
}
var groupedEntries = chunkEntries(elementEntries, 3);
function createConfigForGroup(entries) {
  return (0, tsup_1.defineConfig)({
    name: "Build Elements Group",
    clean: false,
    dts: true,
    target: "es2019",
    format: ["cjs", "esm"],
    entry: entries
  });
}
exports.groupedConfigs = groupedEntries.map(function (group) {
  return createConfigForGroup(group);
});
exports.buildAllConfig = (0, tsup_1.defineConfig)({
  name: "Build All",
  clean: false,
  dts: true,
  target: "es2019",
  entry: { index: "components/index.ts" },
  format: ["cjs", "esm"]
});
exports.buildCoreConfig = (0, tsup_1.defineConfig)({
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
exports.buildBlocksConfig = (0, tsup_1.defineConfig)({
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
