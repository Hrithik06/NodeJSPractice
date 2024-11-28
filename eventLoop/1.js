const fs = require("fs");

const a = 100;

setImmediate(() => {
  console.log("setImmediate");
});

fs.readFile("./file.txt", () => {
  console.log("File Reading CB");
});

setTimeout(() => {
  console.log("Timer Expired");
}, 0);

const printA = () => {
  console.log("a = ", a);
};

printA();

console.log("Last line of file");
