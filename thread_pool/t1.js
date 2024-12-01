const fs = require("fs");
const crypto = require("crypto");
process.env.UV_THREADPOOL_SIZE = 22;
crypto.pbkdf2("password", "salt", 5000000, 50, "sha512", (err, key) => {
  console.log("1 - crypto PBKDF2 done");
});

fs.readFile("./file.txt", "utf8", () => {
  console.log("File Reading CB");
});

crypto.pbkdf2("password", "salt", 5000000, 50, "sha512", (err, key) => {
  console.log("2 - crypto PBKDF2 done");
});

crypto.pbkdf2("password", "salt", 5000000, 50, "sha512", (err, key) => {
  console.log("3 - crypto PBKDF2 done");
});

crypto.pbkdf2("password", "salt", 5000000, 50, "sha512", (err, key) => {
  console.log("4 - crypto PBKDF2 done");
});
