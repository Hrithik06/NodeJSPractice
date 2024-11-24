const https = require("https");
const fs = require("fs");
const path = require("path");

const filePath = path.join(__dirname, "file.txt");

const contentSync = fs.readFileSync(filePath, "utf8");
console.log("Sync File Read");

console.log("First Key Generated Sync");
var a = 35235235223;
var b = 23423;
https.get("https://dummyjson.com/products/1", (err, res) => {
  console.log("\nAPI data fetch success");
});

setTimeout(() => {
  console.log("\nsetTimeout called after 5s");
}, 5000);

fs.readFile("./file.txt", "utf8", (err, data) => {
  console.log("\nAsync File Read");
});

function multiplyFun(x, y) {
  const result = x * y;
  return result;
}
const c = multiplyFun(a, b);
console.log(`\n${a} * ${b} = `, c);
