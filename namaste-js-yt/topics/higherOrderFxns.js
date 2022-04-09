/**
 * What is a Higher order function ?
 * => A higher order function is a function that takes a function as an argument and/or returns a function.
 *  =>
 */

/**
 * Higher order function Example 1
 * => writing our own map function
 */
const nums = [1, 2, 3, 4, 5];

/**
 * mapPolyfill is a higher order function that takes
 * another funciton called 'callback' as argument
 */
Array.prototype.mapPolyfill = function (callback) {
  const newArr = [];
  for (let i = 0; i < this.length; i++) {
    newArr.push(callback(this[i]));
  }
  return newArr;
};

// see the results of calling mapPolyfill and map functions are exactly the same
console.log(`mapPolyfill() => ${nums.mapPolyfill((num) => num * 2)}`);
console.log(`object.map() => ${nums.map((num) => num * 2)}`);

/**
 * Side note: A shim is a piece of code used to correct the behavior of code that already exists, usually by adding new API that works around the problem. This differs from a polyfill, which implements a new API that is not supported by the stock browser as shipped.
 *  reference: https://developer.mozilla.org/en-US/docs/Glossary/Shim
 */
