/*
  This script generate <link> tag and fontFace code for every fonts file in /public/fonts folder
  and OUTPUT the result in temp directory
 */

const fsWalk = require("@nodelib/fs.walk");
const fs = require("fs");
const path = require("path");

const ROOT = process.cwd();
const PUBLIC = "public";
const FONTS = "fonts";
const OUTPUT = "temp";
const OUTPUT_FILE_NAME = "fontsCode.txt";
const FONTS_PATH = path.join(ROOT, PUBLIC, FONTS);
const OUTPUT_FOLDER = path.join(ROOT, OUTPUT);
const OUTPUT_FILE_PATH = path.join(ROOT, OUTPUT, OUTPUT_FILE_NAME);

// Check if fonts folder exists in /public
if (fs.existsSync(FONTS_PATH) == false) {
  console.log("Fonts not found in /public. Create a fonts folder.");
  process.exit(0);
}

// List all the fonts file
const entries = fsWalk.walkSync(FONTS_PATH, {
  entryFilter: (entry) => entry.dirent.isFile(),
});

// Check if any fonts exists
if (entries.length == 0) {
  console.log("No fonts found in fonts folder");
  process.exit(0);
}

let head = "";
let fontFace = "";

// Generate code for every font file
entries.forEach((entry) => {
  head += `
  \n<link
    rel="preconnect"
    href="/fonts/${entry.name}"
    as="font"
    type="font/woff2"
    crossOrigin="anonymous"
  />
  `;
  fontFace += `
  \n@font-face {
    font-family: ;
    font-style: normal;
    font-weight: ;
    font-display: optional;
    src: url("/fonts/${entry.name}") format("woff2");
  }
  `;
});

// Create temp folder if not exists
if (fs.existsSync(OUTPUT_FOLDER) == false) {
  fs.mkdirSync(OUTPUT_FOLDER);
}

// Write output to the file
fs.writeFileSync(OUTPUT_FILE_PATH, head);
fs.appendFileSync(OUTPUT_FILE_PATH, fontFace);
