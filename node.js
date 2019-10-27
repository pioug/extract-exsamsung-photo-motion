const fs = require("fs");
const path = require("path");
const input = process.argv.slice(2)[0];
const file = fs.readFileSync(input).toString("hex");
const MAGIC = Buffer.from("MotionPhoto_Data", "utf8").toString("hex");
const videoStart = file.indexOf(MAGIC) + MAGIC.length;
const videoString = file.substring(videoStart, file.length);
const videoBuffer = Buffer.from(videoString, "hex");
fs.writeFileSync(
  `./${path.basename(input, path.extname(input))}.mp4`,
  videoBuffer
);
