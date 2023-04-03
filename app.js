const fs = require("fs");

const zlib = require("zlib");

const readStream = fs.createReadStream("docs/text2.txt");

const writeStream = fs.createWriteStream("docs/new-text.txt");

const compressstream = zlib.createGzip();

// readStream.on("data", (chunk) => {
//   writeStrem.write("\n___START___\n");
//   writeStrem.write(chunk);
//   writeStrem.write("\n___END___\n");
// });

const handleError = () => {
  console.log("Error");
  readStream.destroy();
  writeStream.end("Finished with error...");
};

readStream
  .on("error", handleError)
  .pipe(compressstream)
  .pipe(writeStream)
  .on("error", handleError);
