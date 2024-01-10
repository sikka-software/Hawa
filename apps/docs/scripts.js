import { parse, withCustomConfig } from "react-docgen-typescript";

import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const tsconfigPath = path.resolve(__dirname, "./tsconfig.json");

// Path to your tsconfig.json

// Create a parser with custom configuration
const parser = withCustomConfig(tsconfigPath, {});

/**
 * Extracts metadata from a component file.
 * @param componentFilePath Path to the component file.
 * @returns Metadata of the component.
 */
async function extractMetadata(componentFilePath) {
  const content = fs.readFileSync(componentFilePath, "utf8");

  // Path to your React component (tsx file)
  const componentPath = path.resolve(__dirname, componentFilePath);

  // Read the source code of your component
  const source = fs.readFileSync(componentPath, "utf8");

  // Parse the component
  const componentInfo = parser.parse(componentPath);

  try {
    const metadata = parser.parse(componentPath);
    console.log("🚀 meta data is ", metadata);
    return metadata;
  } catch (error) {
    console.error(`Error parsing ${componentFilePath}: `, error);
    return null;
  }
}

/**
 * Generates markdown content from metadata.
 * @param metadata Metadata of the component.
 * @returns Markdown content.
 */
function generateMarkdown(metadata) {
  let markdown = `# ${metadata.displayName}\n\n`;
  markdown += `${metadata.description}\n\n`;
  markdown += `## Props\n`;
  for (const propName in metadata.props) {
    const prop = metadata.props[propName];
    markdown += `- ${propName} (${prop.type.name}): ${prop.description}\n`;
  }
  return markdown;
}

/**
 * Generates documentation for all components in a directory.
 * @param componentsDirectory Path to the components directory.
 * @param docsDirectory Path to the documentation directory.
 */
function generateDocumentationForAllComponents(
  componentsDirectory,
  docsDirectory
) {
  const componentFiles = fs
    .readdirSync(componentsDirectory)
    .filter((file) => file.endsWith(".tsx") || file.endsWith(".jsx"));

  componentFiles.forEach((file) => {
    const filePath = path.join(componentsDirectory, file);
    const metadata = extractMetadata(filePath);
    if (metadata) {
      const markdown = generateMarkdown(metadata);
      const docFilePath = path.join(
        docsDirectory,
        `${metadata.displayName}.md`
      );
      console.log("👉 docFilePath", docFilePath);
      fs.writeFileSync(docFilePath, markdown);
      console.log(`Documentation generated for ${metadata.displayName}`);
    }
  });
}

// Example usage
const componentsDirectory = "../../packages/components/elements/accordion";
const docsDirectory = "./pages/generated";
generateDocumentationForAllComponents(componentsDirectory, docsDirectory);
