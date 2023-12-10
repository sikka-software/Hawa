"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.buildBlocksConfig =
  exports.buildCoreConfig =
  exports.buildAllConfig =
  exports.groupedConfigs =
    void 0;
var tsup_1 = require("tsup");

var elementEntries = {
  // ELEMENTS
  "toaster/index": "components/elements/toaster/index.ts",
  "toast/index": "components/elements/toast/index.ts",
  "slider/index": "components/elements/slider/index.ts",
  "simpleTable/index": "components/elements/simpleTable/index.ts",
  "separator/index": "components/elements/separator/index.ts",
  "scrollIndicator/index": "components/elements/scrollIndicator/index.ts",
  "progressCircle/index": "components/elements/progressCircle/index.ts",
  "passwordInput/index": "components/elements/passwordInput/index.ts",
  "pagination/index": "components/elements/pagination/index.ts",
  "interfaceSettings/index": "components/elements/interfaceSettings/index.ts",
  "fileUploader/index": "components/elements/fileUploader/index.ts",
  "destroyableCard/index": "components/elements/destroyableCard/index.ts",
  "colorPicker/index": "components/elements/colorPicker/index.ts",
  "collapsible/index": "components/elements/collapsible/index.ts",
  "codeBlock/index": "components/elements/codeBlock/index.ts",
  "carousel/index": "components/elements/carousel/index.ts",
  "card/index": "components/elements/card/index.ts",
  "chip/index": "components/elements/chip/index.ts",
  "tabs/index": "components/elements/tabs/index.ts",
  "sheet/index": "components/elements/sheet/index.ts",
  "logos/index": "components/elements/logos/index.ts",
  "radio/index": "components/elements/radio/index.ts",
  "table/index": "components/elements/table/index.ts",
  "alert/index": "components/elements/alert/index.ts",
  "label/index": "components/elements/label/index.ts",
  "input/index": "components/elements/input/index.ts",
  "badge/index": "components/elements/badge/index.ts",
  "dialog/index": "components/elements/dialog/index.ts",
  "button/index": "components/elements/button/index.ts",
  "select/index": "components/elements/select/index.ts",
  "avatar/index": "components/elements/avatar/index.ts",
  "switch/index": "components/elements/switch/index.ts",
  "command/index": "components/elements/command/index.ts",
  "popover/index": "components/elements/popover/index.ts",
  "loading/index": "components/elements/loading/index.ts",
  "tooltip/index": "components/elements/tooltip/index.ts",
  "skeleton/index": "components/elements/skeleton/index.ts",
  "combobox/index": "components/elements/combobox/index.ts",
  "textarea/index": "components/elements/textarea/index.ts",
  "pinInput/index": "components/elements/pinInput/index.ts",
  "checkbox/index": "components/elements/checkbox/index.ts",
  "progress/index": "components/elements/progress/index.ts",
  "accordion/index": "components/elements/accordion/index.ts",
  "backToTop/index": "components/elements/backToTop/index.ts",
  "dataTable/index": "components/elements/dataTable/index.ts",
  "appStores/index": "components/elements/appStores/index.ts",
  "sortButton/index": "components/elements/sortButton/index.ts",
  "scrollArea/index": "components/elements/scrollArea/index.ts",
  "breadcrumb/index": "components/elements/breadcrumb/index.ts",
  "phoneInput/index": "components/elements/phoneInput/index.ts",
  "splitButton/index": "components/elements/splitButton/index.ts",
  "dropdownMenu/index": "components/elements/dropdownMenu/index.ts",
  "fileDropzone/index": "components/elements/fileDropzone/index.ts",
  "navigationMenu/index": "components/elements/navigationMenu/index.ts",
  "stopPropagationWrapper/index":
    "components/elements/stopPropagationWrapper/index.ts"
};
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
