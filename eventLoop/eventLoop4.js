const fs = require("fs");

setImmediate(() => {
  console.log("setImmediate");
});
setTimeout(() => {
  console.log("Timer expired");
}, 0);

Promise.resolve("Promise").then(console.log);

fs.readFile("./file.txt", () => {
  console.log("File Reading CB");
});

process.nextTick(() => {
  process.nextTick(() => {
    console.log("\t Inner process.nextTick");
  });
  console.log("\t process.nextTick");
});

console.log("Last line of file");
