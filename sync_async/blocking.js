const crypto = require("crypto");
console.log("Hi Hello");
var a = 35235235223;
var b = 23423;

//DON'T USE
//Sync Funs block Main Thread
crypto.pbkdf2Sync("password", "salt", 5000000, 20, "sha512");
console.log("First Key Generated Sync");

//Will be called when call stack of Main thread is empty
setTimeout(function () {
  console.log("CALL ME RIGHT NOW!!!!!!!");
}, 0);

//Async Fun
crypto.pbkdf2("password", "salt", 5000000, 20, "sha512", (err, key) => {
  console.log("Second Key Generated ASync");
});

function multiplyFun(x, y) {
  const result = x * y;
  return result;
}
const c = multiplyFun(a, b);
console.log(`\n${a} * ${b} = `, c);
