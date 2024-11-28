console.log("Start");

setTimeout(() => {
  console.log("Timer 1");
}, 0);

process.nextTick(() => {
  console.log("Next Tick");
});

console.log("End");

/**
 * Start
 * End
 * Next Tick
 * Timer 1
 */
