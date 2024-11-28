const fs = require("fs");

console.log("Start");

setTimeout(() => {
  console.log("setTimeout 1");

  setImmediate(() => {
    console.log("setImmediate Inside setTimeout");
  });

  fs.readFile(__filename, () => {
    console.log("File Read Callback Inside setTimeout");

    process.nextTick(() => {
      console.log("nextTick Inside File Read In setTimeout");
    });
  });
}, 0);

setImmediate(() => {
  console.log("setImmediate 1");

  setTimeout(() => {
    console.log("setTimeout Inside setImmediate");
  }, 0);

  process.nextTick(() => {
    console.log("nextTick Inside setImmediate");
  });
});

fs.readFile(__filename, () => {
  console.log("File Read Callback");

  setImmediate(() => {
    console.log("setImmediate Inside File Read");
  });

  setTimeout(() => {
    console.log("setTimeout Inside File Read");
  }, 0);

  process.nextTick(() => {
    console.log("nextTick Inside File Read");
  });
});

console.log("End");

/**
 * Start
 * End
 * setTimeout 1
 * setImmediate 1
 * nextTick Inside setImmediate
 * setTimeout Inside setImmediate
 * File Read Callback
 * nextTick Inside File Read
 * setImmediate Inside File Read
 * setTimeout Inside File Read
 * File Read Callback Inside setTimeout
 * nextTick Inside File Read In setTimeout
 */
