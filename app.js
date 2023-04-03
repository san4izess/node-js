const fs = require("fs");

fs.readFile("file.txt", "utf-8", (error, data) => {
  fs.writeFile("test2.txt", data, () => {});
});
