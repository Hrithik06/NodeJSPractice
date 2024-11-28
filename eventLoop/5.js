const fs = require("fs");

setTimeout(function () {
  Promise.resolve("Inside setTimeout Promise").then(console.log);

  console.log("Timer");

  process.nextTick(function () {
    console.log("Inside setTimeout process.nextTick");
  });

  setImmediate(() => {
    console.log("Inside setTimeout setImmediate");
  });
}, 0);

setImmediate(() => {
  console.log("setImmediate");

  Promise.resolve("2 Inside setImmediate Promise").then(console.log);

  process.nextTick(function () {
    console.log("2 Inside setImmediate process.nextTick");
  });

  setImmediate(() => {
    console.log("3 Inside setImmediate setImmediate");
  });
});

fs.readFile("./file.txt", (err, data) => {
  console.log("File Reading CB");
});

console.log("Last Line of code");

/**
 *Last line.....
 *Timer
 *Inside process.nextTick
 *Inside Promise
 *setImmediate
 *2 Inside setImmediate process.nextTick
 *2 Inside setImmediate Promise"
 *Inside setTimeout setImmediate
 *3 Inside setImmediate setImmediate"
 */
