const fs = require("fs");
const path = require("path");

const srcPath = path.resolve(
  __dirname,
  "../../../packages/components/CHANGELOG.md"
);
const destPath = path.join(__dirname, "../content/docs/changelog.mdx");

// Read the content from changelog.md
fs.readFile(srcPath, "utf8", (err, srcContent) => {
  if (err) throw err;

  // Read the header from changelog.mdx
  fs.readFile(destPath, "utf8", (err, destContent) => {
    if (err) throw err;

    // Find the end of the header
    const headerEndIndex = destContent.indexOf("---", 3) + 4; // 3 is the length of '---'
    const header = destContent.substring(0, headerEndIndex);

    // Combine the header and the content
    const combinedContent = header + "\n" + srcContent;

    // Write the combined content to changelog.mdx
    fs.writeFile(destPath, combinedContent, (err) => {
      if (err) throw err;
      console.log("changelog.md was copied to changelog.mdx");
    });
  });
});
