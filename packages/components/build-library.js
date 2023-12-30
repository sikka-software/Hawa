const { build } = require("tsup");

const {
  groupedLayout,
  groupedElements,
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
  for (const config of groupedLayout) {
    await buildGroup(config);
  }
  for (const config of groupedElements) {
    await buildGroup(config);
  }
}

sequentialBuild().catch((err) => {
  console.error(err);
  process.exit(1);
});
