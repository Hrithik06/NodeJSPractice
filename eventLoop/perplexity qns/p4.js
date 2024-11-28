const fs = require("fs");

console.log("Start");

fs.readFile("./test.txt", "utf8", (err, data) => {
  console.log("File Read");
});

setTimeout(() => {
  console.log("Timer 1");
}, 0);

setImmediate(() => {
  console.log("Immediate 1");
});

process.nextTick(() => {
  console.log("Next Tick");
});

console.log("End");

/**
 * Start
 * End
 * Next Tick
 * Timer 1
 * Immediate 1
 * File Read
 */
