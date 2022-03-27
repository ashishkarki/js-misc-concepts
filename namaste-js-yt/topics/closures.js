/**
 * (ref for defn 1 below: https://www.freecodecamp.org/news/closures-in-javascript/)
 * Definition 1: You have a closure when a function reads or modifies the value of a variable defined outside its context.
 *
 * (ref for defn 2 below: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Closures)
 * A closure is the combination of a function bundled together (enclosed) with references to its surrounding state (the lexical environment). In other words, a closure gives you access to an outer function's scope from an inner function
 */
export const closures = () => {
  console.log("closures");

  (() => {
    console.log("Closure example 1");
    const name = "Namaste";
    const sayHello = () => {
      console.log(`Hello ${name}`);
    };
    sayHello();
  })();

  (() => {
    console.log("**********\nClosure example 2");

    function foo() {
      const a = 2; // a is a local variable created within foo()

      function bar() {
        console.log(a); // a is accessible
      }

      return bar;
    }

    foo()(); // 2

    // we can call it like following:
    const baz = foo();
    baz(); // 2
  })();
};

/**
 * USAGE of Closures (examples from: https://www.freecodecamp.org/news/closures-in-javascript/)
 */
export const closuresUsage = () => {
  console.log("closuresUsage");

  (() => {
    console.log("****************");
    console.log(
      `Closure usage 1: Closures are useful for keeping data private using IIFE to build module pattern`
    );

    const module = (function () {
      let privateVar = "Hello World";

      function privateMethod() {
        console.log(privateVar);
      }

      return {
        get: () => privateVar,
        set: function (value) {
          privateVar = value;
        },
        callPrivateMethod: privateMethod,
      };
    })();

    console.log(module.get); // [Function: get]

    const x = module;
    console.log(`get: ${x.get()}`); // Hello World

    x.set("Hello Namaste");
    console.log(`get: ${x.get()}`); // Hello Namaste

    x.callPrivateMethod();
    // x.privateMethod(); // Error: privateMethod is not a function
  })();

  (() => {
    /**
     * Ref: https://www.freecodecamp.org/news/closures-in-javascript/
     * Currying is a design pattern (and a characteristic of some languages) where a function is immediately evaluated and returns a second function. This pattern lets you execute specialization and composition.
     * You create these "curried" functions using closures, defining and returning the inner function of the closure.
     */
    /**
     * ref: https://blog.logrocket.com/understanding-javascript-currying/
     * Currying is a function that takes one argument at a time and returns a new function expecting the next argument.
     * It is a transformation of functions that translates a function from callable as f(a, b, c) into callable as f(a)(b)(c)
     * WHY USE currying? =>
     * - Currying is a checking method to make sure that you get everything you need before you proceed
     * - Divides your function into multiple smaller functions that can handle one responsibility. This makes your function pure and less prone to errors and side effects
     * - Used in functional programming to create a higher-order function
     */
    console.log("****************");
    console.log(
      `Closure Usage 2: Closures can also be used to do currying in JS`
    );

    const multiply = (a, b, c) => a * b * c;
    const curriedMultiply = (a) => (b) => (c) => a * b * c;

    function curriedMultiplyNonArrow(a) {
      return function (b) {
        return function (c) {
          return a * b * c;
        };
      };
    }

    // you can call the above curriedMultiply these two ways:
    // ONE =>
    const multiplyBy5 = curriedMultiply(5);
    const multiplyBy3 = multiplyBy5(3);
    console.log(`method 1 - result: ${multiplyBy3(2)}`);
    // TWO =>
    const result = curriedMultiplyNonArrow(5)(3)(2);
    console.log(`method 2 - result: ${result}`);
  })();

  (() => {
    console.log("****************");
    console.log(`Closure usage 3: Creating functions that only run once`);
    console.log(`To be added`);
  })();

  (() => {
    console.log("****************");
    console.log(`Closure usage 4: Memoization`);
    console.log("To be added");
  })();

  (() => {
    console.log("****************");
    console.log(`Closure usage 5: setTimeout and setInterval functions`);
    console.log("To be added");
  })();

  (() => {
    console.log("****************");
    console.log(`Closure usage 6: Closures in callbacks`);
    console.log("To be added");
  })();

  (() => {
    console.log("****************");
    console.log(`Closure usage 7: Maintaing state in ASYNC world`);
    console.log("To be added");
  })();
};
