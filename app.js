console.log("HI");
require("./xyz");

const obj = require("./sum");
console.log(obj.x);
obj.calSum(6, 5);

const { x, calSum } = require("./sum");
console.log(x);
calSum(6, 5);
z = 10;

// console.log(require("fs").readFileSync.toString());

function Module(id = "", parent) {
  this.id = id;
  this.path = path.dirname(id);
  setOwnProperty(this, "exports", {});
  this[kModuleParent] = parent;
  updateChildren(parent, this, false);
  this.filename = null;
  this.loaded = false;
  this.children = [];
}
console.log(Module);
