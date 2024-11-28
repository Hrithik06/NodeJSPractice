console.log("Start");

setTimeout(() => {
  console.log("setTimeout Callback");
}, 0);

setImmediate(() => {
  console.log("setImmediate Callback");
});

Promise.resolve().then(() => {
  console.log("Promise Callback");
});

process.nextTick(() => {
  console.log("process.nextTick Callback");
});

console.log("End");

/**
 * Start
 * End
 * process.nextTick Callback
 * Promise Callback
 * setTimeout Callback
 * setImmediate Callback
 */
