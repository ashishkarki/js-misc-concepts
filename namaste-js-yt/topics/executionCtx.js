/**
 * HOW DOES JAVASCRIPT WORK?
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
 *   - creating a memory space for each variable (as the key) with its value set to undefined
 *  - creating a memory space for each function (as the key) with its value set to the actual function body/definition
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
