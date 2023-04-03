const fs = require("fs");

fs.readFile("file.txt", "utf-8", (error, data) => {
  fs.mkdirSync("./files", () => {});
  fs.writeFileSync(
    "./files/test2.txt",
    `${data}add a example text`,
    (error) => {
      error ? console.log(error) : null;
    }
  );
});

setTimeout(() => {
  fs.unlink("files/test2.txt", () => {});
}, 4000);

setTimeout(() => {
  fs.rmdir("files", () => {});
}, 6000);
