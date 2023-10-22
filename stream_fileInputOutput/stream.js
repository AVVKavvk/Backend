const fs = require("fs");
const fileStream = fs.createReadStream(__dirname + "/input.txt");
const outputStream = process.stdout;

fileStream.pipe(outputStream);
