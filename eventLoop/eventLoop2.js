const fs = require("fs");

const a = 100;

setImmediate(() => {
  console.log("setImmediate");
});

Promise.resolve("Promise").then(console.log);

fs.readFile("./file.txt", () => {
  console.log("File Reading CB");
});

setTimeout(() => {
  console.log("Timer Expired");
}, 0);

process.nextTick(() => {
  console.log("process.nextTick");
});
const printA = () => {
  console.log("a = ", a);
};

printA();

console.log("Last line of file");
