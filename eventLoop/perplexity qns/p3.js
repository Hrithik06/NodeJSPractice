console.log("Start");

setTimeout(() => {
  console.log("Timer 1");
}, 0);

setTimeout(() => {
  console.log("Timer 2");
}, 0);

Promise.resolve()
  .then(() => console.log("Promise 1"))
  .then(() => console.log("Promise 2"));

process.nextTick(() => {
  console.log("Next Tick");
});

console.log("End");

/**
 * Start
 * End
 * Next Tick
 * Promise 1
 * Promise 2
 * Timer 1
 * Timer 2
 */
