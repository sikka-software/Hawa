const { defineConfig } = require("tsup");
const { elements, layouts } = require("./registry");

const elementEntries = elements.reduce((entries, elementName) => {
  entries[`${elementName}/index`] = `elements/${elementName}/index.ts`;
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
    sourcemap: true,
    dts: true,
    splitting: false,
    treeshake: false,
    minify: false,
    target: "es2019",
    format: ["esm", "cjs"],
    banner: { js: '"use client";' },
    entry: entries,
    tsconfig: "./tsconfig.json",
    external: ["react", "react-dom", "@radix-ui/react-toast", "react-day-picker"],
  });
}
const groupedElementEntries = chunkEntries(elementEntries, 3);
const groupedLayoutEntries = chunkEntries(layoutEntries, 3);

const groupedElements = groupedElementEntries.map((group, i) =>
  createConfigForGroup(group, `Build Elements Group - ${i}`),
);
const groupedLayout = groupedLayoutEntries.map((group, i) =>
  createConfigForGroup(group, `Build Layout Group - ${i}`),
);

const buildAllConfig = defineConfig({
  name: "Build All",
  clean: false,
  dts: true,
  target: "es2019",
  entry: { index: "index.ts" },
  format: ["cjs", "esm"],
  banner: { js: '"use client";' },
});
const buildCoreConfig = defineConfig({
  name: "Build Core",
  clean: false,
  dts: true,
  target: "es2019",
  format: ["cjs", "esm"],
  banner: { js: '"use client";' },
  entry: {
    // CORE
    "types/index": "types/index.ts",
    "hooks/index": "hooks/index.ts",
    "blocks/index": "blocks/index.ts",
    "layout/index": "layout/index.ts",
    "elements/index": "elements/index.ts",
  },
});
const buildBlocksConfig = defineConfig({
  name: "Build Blocks",
  clean: false,
  dts: true,
  target: "es2019",
  format: ["cjs", "esm"],
  banner: { js: '"use client";' },
  entry: {
    // BLOCKS
    "blocks/misc/index": "blocks/misc/index.ts",
    "blocks/auth/index": "blocks/auth/index.ts",
    "blocks/pricing/index": "blocks/pricing/index.ts",
    "blocks/feedback/index": "blocks/feedback/index.ts",
  },
});
module.exports = {
  groupedElements,
  groupedLayout,
  buildAllConfig,
  buildCoreConfig,
  buildBlocksConfig,
};
