const fs = require("fs");

const a = 100;

setImmediate(() => {
  console.log("setImmediate");
});

Promise.resolve("Promise").then(console.log);

setTimeout(() => {
  console.log("Timer Expired");
}, 0);

fs.readFile("./file.txt", () => {
  setTimeout(() => {
    console.log("\t2nd Timer");
  }, 0);

  process.nextTick(() => {
    console.log("\t2nd process.nextTick");
  });

  setImmediate(() => {
    console.log("\t2nd setImmediate");
  });

  console.log("\tFile Reading CB");
});

process.nextTick(() => {
  console.log("process.nextTick");
});

const printA = () => {
  console.log("a = ", a);
};

printA();

console.log("Last line of file");
