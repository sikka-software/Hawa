import boxen from "boxen";
import chalk from "chalk";
import { build } from "tsup";

import {
  groupedLayout,
  groupedElements,
  buildAllConfig,
  buildBlocksConfig,
  buildCoreConfig
} from "../tsup.config.js";

async function buildGroup(config) {
  await build(config);
}

async function sequentialBuild() {
  console.log(
    boxen(`BUILDING ${chalk.bgBlue("ALL")} COMPONENTS`, {
      padding: 1,
      borderStyle: "round"
    })
  );
  await build(buildAllConfig);
  console.log(
    boxen(`BUILDING ${chalk.bgBlue("CORE")} COMPONENTS`, {
      padding: 1,
      borderStyle: "round"
    })
  );
  await build(buildCoreConfig);
  console.log(
    boxen(`BUILDING ${chalk.bgBlue("BLOCKS")} COMPONENTS`, {
      padding: 1,
      borderStyle: "round"
    })
  );
  await build(buildBlocksConfig);
  console.log(
    boxen(`BUILDING ${chalk.bgBlue("LAYOUT")} COMPONENTS`, {
      padding: 1,
      borderStyle: "round"
    })
  );
  for (const config of groupedLayout) {
    await buildGroup(config);
  }
  console.log(
    boxen(`BUILDING ${chalk.bgBlue("ELEMENTS")} COMPONENTS`, {
      padding: 1,
      borderStyle: "round"
    })
  );
  for (const config of groupedElements) {
    await buildGroup(config);
  }
}

sequentialBuild().catch((err) => {
  console.error(err);
  process.exit(1);
});
