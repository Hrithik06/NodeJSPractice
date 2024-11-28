const fs = require("fs");

console.log("Start");

fs.readFile(__filename, () => {
  console.log("File Read Callback");

  setTimeout(() => {
    console.log("setTimeout Inside File Read");
  }, 0);

  setImmediate(() => {
    console.log("setImmediate Inside File Read");
  });

  Promise.resolve().then(() => {
    console.log("Promise Inside File Read");
  });

  process.nextTick(() => {
    console.log("nextTick Inside File Read");
  });
});

setTimeout(() => {
  console.log("setTimeout Outside File Read");
}, 0);

setImmediate(() => {
  console.log("setImmediate Outside File Read");
});

console.log("End");
/**
 * Start
 * End
 * setTimeout Outside File Read
 * setImmediate Outside File Read
 * File Read Callback
 * nextTick Inside File Read
 * Promise Inside File Read
 * setTimeout Inside File Read
 * setImmediate Inside File Read
 */
