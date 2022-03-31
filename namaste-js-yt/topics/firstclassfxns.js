/**
 * In JavaScript, functions are first class objects which means
 * that you can pass them around just like any other object.
 *
 */
export const firstClassFxns = () => {
  /**
   * 1 => Function Statement: is basically a function declaration
   */
  function foo() {
    // anthing goes here
    console.log(`this is a function statement`);
  }
  foo();

  /**
   * 2 => Function Expression: is a function declaration that is assigned to a variable (and keep in mind it treated like any normal variable).
   * That is they are hoisted and set to undefined during the memory phase of code execution.
   */
  // hence calling bar before its declaration causes
  // ReferenceError: Cannot access 'bar' before initialization
  //   bar(); // throws ReferenceError

  const bar = function () {
    // anthing goes here
    console.log(`this is a function expression`);
  };
  bar(); // this is okay

  /**
   * 3 => Function Declaration: is exactly the same as a function statement and it is hoisted to the top of the code.
   */
  function baz() {
    // anthing goes here
    console.log(`this is a function declaration`);
  }
  baz(); // this is okay

  /**
   * 4 => Anonymous Function: is a function that is not assigned to a variable. It is also called an anonymous function because it has no name.
   * You cannot create a Standalone Anonymous Function in JavaScript. If done, it will result in "SyntaxError"
   */

  // FOLLOWING WILL RESULT IN "SyntaxError: Function statements require a function name"
  //   function () {
  //     // anthing goes here
  //     console.log(`this is an anonymous function`);
  //   }

  // SO WHERE CAN WE USE Anonymous FunctionS?
  // We can use them wherever we need to assign them to a variable (or to pass them as arguments to another function).
  // FOR EXAMPLE: We can use them as callbacks in forEach, map, filter, reduce, every, some, find, findIndex, etc.
  function doSomething(callback) {
    callback();
  }
  doSomething(() =>
    console.log(`I am an anonymous function, being passed to another funciton`)
  );

  /**
   * 5 => Named Function Expression: is a function expression (like from above) that is assigned to a variable.
   * So basically when a named function is assigned to a variable forming an expression, it is called a named function expression.
   * There is a GOTCHA to note though: you cannot directly call the named function -> if done, results in "ReferenceError: namedFxn is not defined"
   */
  const namedFxnExpression = function namedFxn() {
    // anthing goes here
    console.log(`this is a named function expression`);
    // funny thing is namedFxn can be accessed inside the function body of namedFxnExpression
    // However, you cannot still invoke namedFxn() here as well.
    // If done so will result in "RangeError: Maximum call stack size exceeded"
    console.log(`namedFxn: ${namedFxn}`);
  };
  namedFxnExpression();
  // namedFxn(); // throws ReferenceError -> cannot call the namedFxn directly

  /**
   * 6 => Difference between Parameters and Arguments:
   * - Parameters are the names of the arguments that are passed to the function (and are also the names of the variables that are created in the function scope).
   * - Arguments are the actual values that are passed to the function (from the calling function that is).
   */
  const add = function (param1, param2) {
    return param1 + param2;
  };
  const arg1 = 1,
    arg2 = 2;
  console.log(`add(${arg1}, ${arg2}) = ${add(arg1, arg2)}`);

  /**
   * 7 => First class function (finally the main topic): is the idea that a function is like any other variable or object in JavaScript.
   * That is treated like any other variable. You can assign it to a variable, pass it as an argument to another function, return it from a function, etc.
   * This concept is also known as First Class Citizens.
   */

  /**
   * 8 => Arrow Function: came as part of ES6 and is a concise way to define a function.
   * Every function format from above can be written as an arrow function.
   * The good thing is that an arrow function preserves the context of the function where it was defined. So you can use the this keyword inside an arrow function without worrying about setting the context.
   *
   * The bad thing is that an arrow function cannot be used as a constructor. More on this below:
   * reference: https://blog.logrocket.com/anomalies-in-javascript-arrow-functions/#:~:text=Arrow%20functions%20can%20never%20be,exist%20for%20an%20arrow%20function.
   * Arrow functions can never be used as constructor functions. Hence, they can never be invoked with the new keyword.
   * As such, a prototype property does not exist for an arrow function. These are very important differences between arrow functions and regular functions.
   * Also, Unlike regular functions, arrow functions do not allow duplicate parameters, whether in strict or non-strict mode. Duplicate parameters will cause a Syntax Error to be thrown.
   */
};
