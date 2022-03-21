/**
 * HOW DOES JAVASCRIPT WORK? (reference: https://www.youtube.com/watch?v=iLWTnMzWtj4&list=PLlasXeu85E9cQ32gLCvAvr9vNaUccPVNP&index=3)
 * also refer to this super article: https://www.freecodecamp.org/news/execution-context-how-javascript-works-behind-the-scenes/
 *
 * The execution process of JS  happens inside an execution context. That context has two components:
1.Memory component (also called "variable environment")
2.Code component (also called "thread of execution")
- In memory component variable and functions values are stored in a key value format where the key is the variable name and the value is either undefined for a variable or the function body for a function.
- Code component is a place where whole JavaScript code is executed in a single-threaded and line-by-line or sequential fashion.
 */
/**
 * The execution context (in this case called the GLOBAL EXECUTION CONTEXT) is created in two phases:
 * 1. (Memory) Creation phase: JS goes through the code in a line-by-line fashion and creates a memory space for each of them by:
 *   - creating a memory space for each variable (declared with the var keyword) (as the key) with its value set to undefined
 *  - creating a memory space for each function (that has a declaration/body) (as the key) with its value set to the actual function body/definition
 * VVIP: This process of storing variables and function declaration in memory prior to the execution of the code is known as Hoisting. (see fcc link above)
 * VVIP: Hoisting only works for function declarations, not expressions. Here is an example of a function expression where the code execution will break (see fcc link)
 * ** that is following will throw error:
 *  getAge(1990);
    var getAge = function (yearOfBirth) {
        console.log(new Date().getFullYear - yearOfBirth)
    }; // getAge is fxn expression like a variable and gets stored as undefined
 * Also, variable hoisting does not work for variables initialized with the let or const keyword. Trying to access a variable ahead of declaration and use the let and const keywords to declare it later will result in a ReferenceError. In this case, they will be hoisted but not assigned with the default value of undefined. (see fcc link)
 * 2. (Code) Execution phase: AGAIN, JS goes through the code in a line-by-line fashion and executes each of them by:
 * - assigning values (in place of undefined) to each variable
 * - skips any function body and moves to the next line (since values have already been assigned to such functions)
 * - whenever JS encounters a function call/invocation, it creates a NEW execution context (within the global context) and executes the function (with/without parameters) in that NEW context
 * -- the funny thing is this NEW execution context has its own Memory component and Code component. This context is also created in two phases.
 * -- while evaluating the lines within this NEW context, a "return" keyword instructs JS to stop executing this NEW context and return to this NEW context's immediate parent context.
 * -- once the NEW context "returns", this NEW context will be completely deleted from memory and the execution will continue in the parent context.
 */
/**
 * Now, the question is how does JS keep track of so many execution contexts and their sub contexts and so on ?
 * JS keeps track of such execution contexts by creating a stack and each time a new execution context is created, it is pushed to the top of the stack. This stack is aptly called the CALL STACK. Also known as Program Stack or Control Stack or Runtime Stack or Machine Stack (phew...).
 * Obviously, the top of the stack is the current execution context and
 * The GLOBAL CONTEXT is always at the bottom of the stack meaning global is the first context always to be pushed onto the stack.
 * Nested or child contexts are pushed on top of their immediate parent contexts and are popped off the stack when the execution context is returned (using the return keyword).
 */

/**
 * When a function is defined in another function, the inner function has access to the code defined in that of the outer function, and that of its parents. This behavior is called lexical scoping.
 * However, the outer function does not have access to the code within the inner function.
 * This concept of scope brings up an associate phenomenon in JavaScript called closures. These are when inner functions that always get access to the code associated with the outer functions, even after the execution of the outer functions is complete.
 */

/**
 * In the GEC or Global Execution Context (outside of any function and object), this refers to the global object — which is the window object. Thus, function declarations and variables initialized with the var keyword get assigned as properties and methods to the global object – window object.
 * In the case of the FEC (Function Execution Context), it doesn't create the this object. Rather, it get's access to that of the environment it is defined in.Here that'll be the window object, as the function is defined in the GEC:
 ** var msg = "I will rule the world!";
    function printMsg() {
        console.log(this.msg);
    }
    printMsg(); // logs "I will rule the world!" to the console.
 * In objects, the this keyword doesn't point to the GEC, but to the object itself.
    add
 */
