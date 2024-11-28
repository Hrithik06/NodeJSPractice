console.log("Start");

setTimeout(() => {
  console.log("setTimeout 1");

  setTimeout(() => {
    console.log("Nested setTimeout");
  }, 0);

  setImmediate(() => {
    console.log("Nested setImmediate");
  });
}, 0);

setImmediate(() => {
  console.log("setImmediate 1");

  setTimeout(() => {
    console.log("setTimeout Inside setImmediate");
  }, 0);

  setImmediate(() => {
    console.log("setImmediate Inside setImmediate");
  });
});

console.log("End");
/**
 * Start
 * End
 * setTimeout 1
 * setImmediate 1
 * Nested setTimeout
 * setTimeout Inside setImmediate
 * Nested setImmediate
 * setImmediate Inside setImmediate
 */
