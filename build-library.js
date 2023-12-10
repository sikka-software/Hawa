const { build } = require("tsup");

// const {
//   buildAllConfig,
//   buildBlocksConfig,
//   buildCoreConfig,
//   buildElementsConfig
// } = require("./tsup.config");

// async function sequentialBuild() {
//   await build(buildAllConfig);
//   await build(buildCoreConfig);
//   await build(buildBlocksConfig);
//   await build(buildElementsConfig);
// }

// sequentialBuild().catch((err) => {
//   console.error(err);
//   process.exit(1);
// });

// APPROACH 03
// **********************************
const {
  groupedConfigs,
  buildAllConfig,
  buildBlocksConfig,
  buildCoreConfig
} = require("./tsup.config");

async function buildGroup(config) {
  await build(config);
}

async function sequentialBuild() {
  await build(buildAllConfig);
  await build(buildCoreConfig);
  await build(buildBlocksConfig);
  for (const config of groupedConfigs) {
    await buildGroup(config);
  }
}

sequentialBuild().catch((err) => {
  console.error(err);
  process.exit(1);
});
