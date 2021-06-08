const fs = require("fs");
const path = require("path");

const EXCLUDED_FILES = ["batchfile.png"];

function assetchecker() {
  let files = new Set();
  const assetPath = path.resolve(__dirname, "../../client/src/assets/icons");
  fs.readdir(assetPath, (err, dirFiles) => {
    for (let file of dirFiles) {
      if (!files.has(file)) {
        files.add(file);
      }
    }
    const dataPath = path.resolve(
      __dirname,
      "../../client/src/_data/InlineHome.json"
    );
    const jsonData = require(dataPath);
    for (let project of jsonData.project) {
      for (let lang of project.languages) {
        if (EXCLUDED_FILES.includes(lang.logo)) {
          continue;
        }
        if (!files.has(lang.logo)) {
          console.error("File not found:", lang.logo);
          process.exit(1);
        }
      }
    }
  });
}

assetchecker();
