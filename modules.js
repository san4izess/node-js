const os = require("os");
const testjs = require("./test.js");

console.log(testjs.userName);
console.log(testjs.lol);
const name = "Tommy";
console.log(testjs.sayHi(name));
console.log(testjs.sayHi(testjs.userName));

console.log(os.platform(), os.release());
