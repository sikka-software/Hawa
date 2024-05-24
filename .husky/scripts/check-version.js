const fs = require("fs");
const path = require("path");
const { execSync } = require("child_process");

// Path to package.json
const packageJsonPath = path.join(
  __dirname,
  "../../packages/components/package.json",
);

// Read package.json file
const packageJson = JSON.parse(fs.readFileSync(packageJsonPath, "utf8"));

// Print the version
const version = packageJson.version;

// Function to check if the version with "-next" suffix is published under the @next tag on npm
function isNextVersionPublished(packageName, version) {
  const nextVersion = `${version}-next`;
  try {
    const result = execSync(`npm dist-tag ls ${packageName}`, { stdio: "pipe" })
      .toString()
      .trim();
    const nextTag = result
      .split("\n")
      .find((line) => line.startsWith("next:"))
      .split(": ")[1];
    return nextTag === nextVersion;
  } catch (error) {
    return false;
  }
}

// Check if the version with "-next" suffix is already published under the @next tag
const isPublished = isNextVersionPublished(packageJson.name, version);

if (isPublished) {
  console.log(
    `Version ${version}-next is already published under the @next tag. Please increment the version number.`,
  );
  process.exit(1); // Exit with a non-zero status code to reject the commit
}
