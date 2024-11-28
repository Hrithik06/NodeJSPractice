const fs = require("fs");

console.log("Start");

Promise.resolve().then(() => {
  console.log("Promise 1");
  process.nextTick(() => console.log("Next Tick inside Promise"));
});

fs.readFile("test.txt", "utf8", (err, data) => {
  console.log("File Read");
  setImmediate(() => console.log("Immediate inside File Read"));
  process.nextTick(() => console.log("Next Tick inside File Read"));
  Promise.resolve().then(() => console.log("Promise inside File Read"));
});

setImmediate(() => {
  console.log("Immediate 1");
  process.nextTick(() => console.log("Next Tick inside Immediate"));
});

setTimeout(() => {
  console.log("Timer 1");
  process.nextTick(() => console.log("Next Tick inside Timer"));
}, 0);

process.nextTick(() => {
  console.log("Next Tick 1");
});

console.log("End");
/**
 * Start
 * End
 * Next Tick 1
 * Promise 1
 * Next Tick inside Promise
 * Timer 1
 * Next Tick inside Timer
 * Immediate 1
 * Next Tick inside Immediate
 * File Read
 * Next Tick inside File Read
 * Promise inside File Read
 * Immediate inside File Read
 */
