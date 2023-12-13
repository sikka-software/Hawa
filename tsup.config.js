"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.buildBlocksConfig = exports.buildCoreConfig = exports.buildAllConfig = exports.groupedLayout = exports.groupedElements = void 0;
var tsup_1 = require("tsup");
var elements = [
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
var layouts = [
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
var elementEntries = elements.reduce(function (entries, elementName) {
    entries["".concat(elementName, "/index")] =
        "components/elements/".concat(elementName, "/index.ts");
    return entries;
}, {});
var layoutEntries = layouts.reduce(function (entries, layoutName) {
    entries["".concat(layoutName, "/index")] = "components/layout/".concat(layoutName, "/index.ts");
    return entries;
}, {});
function chunkEntries(entries, chunkSize) {
    return Object.entries(entries).reduce(function (resultArray, _a, index) {
        var key = _a[0], value = _a[1];
        var chunkIndex = Math.floor(index / chunkSize);
        if (!resultArray[chunkIndex]) {
            resultArray[chunkIndex] = {};
        }
        resultArray[chunkIndex][key] = value;
        return resultArray;
    }, []);
}
function createConfigForGroup(entries, name) {
    return (0, tsup_1.defineConfig)({
        name: name || "Grouped Entries",
        clean: false,
        dts: true,
        target: "es2019",
        format: ["cjs", "esm"],
        entry: entries
    });
}
var groupedElementEntries = chunkEntries(elementEntries, 3);
var groupedLayoutEntries = chunkEntries(layoutEntries, 3);
exports.groupedElements = groupedElementEntries.map(function (group, i) {
    return createConfigForGroup(group, "Build Elements Group - ".concat(i));
});
exports.groupedLayout = groupedLayoutEntries.map(function (group, i) {
    return createConfigForGroup(group, "Build Layout Group - ".concat(i));
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
