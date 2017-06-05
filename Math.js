var counter = function(arr) {
  console.log("There are " + arr.length + " items in array.");
}

var add = function(a, b) {
  console.log("Sum: " + (a + b));
}

module.exports = {
  counter: counter,
  adder: add
};
