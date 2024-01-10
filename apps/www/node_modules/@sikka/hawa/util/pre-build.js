const fs = require("fs");
const path = require("path");

const distPath = path.join(__dirname, "dist");

// This function checks if the dist directory exists and removes it
function cleanDistDirectory() {
  console.log("dist path is ", distPath);
  if (fs.existsSync(distPath)) {
    fs.rmdirSync(distPath, { recursive: true });
    console.log("Removed dist directory.");
  } else {
    console.log("No dist directory to remove.");
  }
}

cleanDistDirectory();
