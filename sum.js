// Modules protect their variables and functions from leaking by default
console.log("Sum Module");

const x = 64;

const calSum = (a, b) => {
  console.log(a + b);
};

//explictily export the functions
// module.exports = { x: x, calSum: calSum };
// module.exports = { x, calSum };
console.log(module.exports);
module.exports.x = x;
module.exports.calSum = calSum;
console.log(module.exports);
