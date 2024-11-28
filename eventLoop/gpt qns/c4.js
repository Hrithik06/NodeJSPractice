console.log("Start");

setTimeout(() => {
  console.log("setTimeout 1");

  process.nextTick(() => {
    console.log("nextTick Inside setTimeout");
  });

  Promise.resolve().then(() => {
    console.log("Promise Inside setTimeout");
  });
}, 0);

setImmediate(() => {
  console.log("setImmediate 1");

  process.nextTick(() => {
    console.log("nextTick Inside setImmediate");
  });

  Promise.resolve().then(() => {
    console.log("Promise Inside setImmediate");
  });
});

Promise.resolve().then(() => {
  console.log("Promise Outside");

  process.nextTick(() => {
    console.log("nextTick Inside Promise");
  });
});

process.nextTick(() => {
  console.log("nextTick Outside");
});

console.log("End");
/**
 * Start
 * End
 * nextTick Outside
 * Promise Outside
 * nextTick Inside Promise
 * setTimeout 1
 * nextTick Inside setTimeout
 * Promise Inside setTimeout
 * setImmediate 1
 * nextTick Inside setImmediate
 * Promise Inside setImmediate
 */
