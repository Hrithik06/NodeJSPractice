const fs = require("fs");
const crypto = require("crypto");

console.log("Start");

const fileRead = () => {
  fs.readFile("test.txt", "utf8", (err, data) => {
    console.log("File Read Complete");

    setImmediate(() => {
      console.log("Immediate inside File Read");
      process.nextTick(() => console.log("Next Tick in Immediate in File"));
    });

    Promise.resolve()
      .then(() => console.log("Promise in File"))
      .then(() =>
        process.nextTick(() => console.log("Next Tick in Promise in File"))
      );
  });
};

const cryptoHash = () => {
  crypto.pbkdf2("secret", "salt", 100000, 512, "sha512", () => {
    console.log("Crypto Complete");

    setTimeout(() => {
      console.log("Timer in Crypto");
    }, 0);

    process.nextTick(() => console.log("Next Tick in Crypto"));
  });
};

setTimeout(() => {
  console.log("Timer 1");
  process.nextTick(() => console.log("Next Tick in Timer"));
}, 0);

setImmediate(() => {
  console.log("Immediate 1");
  Promise.resolve().then(() => console.log("Promise in Immediate"));
});

fileRead();
cryptoHash();

process.nextTick(() => console.log("Next Tick 1"));

console.log("End");

/**
 * Start
 * End
 * Next Tick 1
 * Timer 1
 * Next Tick in Timer
 * Immediate 1
 * Promise in Immediate
 * Crypto Complete
 * Next Tick in Crypto
 * Timer in Crypto
 * File Read Complete
 * Promise in File
 * Next Tick in Promise in File
 * Immediate inside File Read
 * Next Tick in Immediate in File
 */
