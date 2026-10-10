const assert = require("assert");
const { add } = require("./app");

assert.strictEqual(add(2, 3), 5);
assert.strictEqual(add(10, 20), 30);

console.log("All tests passed successfully!");
