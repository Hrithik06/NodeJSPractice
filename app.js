console.log("HI");

const obj = require("./sum");
console.log(obj.x);
obj.calSum(6, 5);

const { x, calSum } = require("./sum");
console.log(x);
calSum(6, 5);
z = 10;
