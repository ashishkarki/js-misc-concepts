/**
 * Lexical environment is a collection of variables and functions. It is created when a function is called.
 * When a function is invoked, it creates a Function Execution Context (FEC) and pushes it onto the top of the stack. This action also causes a lexical environment to be created for that FEC. The interesting thing is that this function's lexical environment is a combination of its own environment and the environment of all the functions it is nested within.
 * Basically, lexical scope means a function has access to its own variables as well as the variables of its parent (and their parent) function/s.
 */
/** Function vs Block vs Lexical scoping:
 * - Function scope is created when you define a variable using the var keyword.
 * - Block scope is created when you define a variable using the let or const keyword and a block is represented by curly braces {}. This is what a statically typed language like Java does.
 * - Lexical scope is basically the idea (in JS) that a function has access to its own variables as well as the variables of its parent (and their parent) function/s. (BUT the opposite is not true). Both functionally and block scoped variables following this idea of lexical scoping.
 */
/**
 * SCOPE CHAIN: is the order in which the variables are searched for a given variable name from the top of the stack to the bottom and correspondingly from the innermost scope to the outer-most/parent scope
 */
/**
 * What is the difference between lexical scope and closure in JavaScript?
 * The lexical scope allows a function scope to access statically the variables from the outer scopes. Finally, a closure is a function that captures variables from its lexical scope.
 * In simple words, the closure remembers the variables from the place where it is defined, no matter where it is executed
 * reference: https://dmitripavlutin.com/simple-explanation-of-javascript-closures/
 */
export const scopeNLexicalEnv = () => {
  (() => {
    console.log(`%%%%%%%\nexample 1`);

    function a() {
      const c = 20;
      console.log(`within a(), b: ${b}`);
    }

    let b = 2;
    a();

    // following throws: "ReferenceError: b is not defined"
    // console.log(`c from outside a(), c: ${c}`);
  })();

  (() => {
    console.log(`%%%%%%%\nexample 2`);

    function a() {
      var b = 10;
      console.log(`within a(), b: ${b}`);
    }

    a();

    // following throws: "ReferenceError: b is not defined"
    // console.log(`printing b from outside a(): ${b}`);
  })();
};
