export const jsV8Engine = () => {
  console.log(`js V8 Engine`);

  /**
   * => JS Runtime Environment is a virtual machine that executes JavaScript code. It contains the following stuff (not limited to):
   * 1. JS Engine: among other things contains the call-stack
   * 2. API to interact with outside world or other utility stuff like localStorage, console, setTimeout etc
   * 3. Event Loop
   * 4. Garbage Collector
   * 5. Queues
   *
   * => A browser, for example, can run JS code because it contains a JS Runtime Environment.
   * => NodeJS is a JS runtime environment that runs in a server.
   * => That being said the JS Runtime Implementation (actual code) of a browser most possibly different from that of NodeJS and even amongst different browsers.
   */

  /**
   * The JS Engine is the heart of the JS Runtime Environment. So let's understand what happens inside it:
   * 1. JS Engine Architecture: JS engine takes human readable code and processes that code in three phases:
   *    a. Parsing: JS engine parses the human readable code and converts it into a syntax tree.
   *    a.1 the code is broken down into Tokens (tokens are the smallest unit of code for example let, a, =, 5)
   *   a.2 the Tokens are then converted into AST (Abstract Syntax Tree) by the "Syntax Parser"
   *    b. Compilation: JS engine compiles the syntax tree into bytecode using JIT compilation (JIT = Just In Time) or maybe even AOT (Ahead Of Time) compilation.
   *    b.1 If using JIT, it causes the AST to be (1) first converted to bytecode using an Interpreter and provided for execution (2) while the engine is coverting the code into bytecode, it uses a Compiler to optimize the code (side-by-side). Steps 1 and 2 might be repeated multiple times depending on the JS engine flavor.
   *    b.2 AOT causes the AST to be converted to optimized bytecode using a Compiler as a first step which is then fed into the execution phase.
   *  c. Execution: JS engine executes the bytecode. This can only happen because of two memory structures (1) Memory Heap and (2) Call Stack.
   *  c.1 Memory Heap: JS engine allocates memory for variables and functions.
   * c.2 Call Stack: JS engine maintains a call stack where the code is being executed. This is the exact call-stack from previous discussions.
   *
   * The execution phase is where Garbage Collection and Garbage Collector (GC) come into play. The GC is a part of the JS Engine and it is responsible for collecting the memory that is no longer in use.
   * => The GC uses an algorithm called Mark-and-Sweep to find the memory that is no longer in use. It is a very simple algorithm that is very fast.
   * => Please note though, there are other GCs that are more complex and more powerful that use different algorithms.
   */
  /**
   * JIT vs AOT ?
   * => JIT means the compilation step is performed right at the time of code execution
   * => AOT means the compilation step is performed beforehand and the code is converted to bytecode which is then fed into the execution step.
   * => JIT is faster than AOT because the code is compiled right at the time of execution whereas AOT is slower because the code is compiled beforehand.
   *
   * JIT vs AOT ? SECOND VERSION
   * => Source: https://levelup.gitconnected.com/just-in-time-jit-and-ahead-of-time-aot-compilation-in-angular-8529f1d6fa9d
   * => JIT stated more simply, it is that the code gets compiled when it is needed, not before runtime. It is a way of executing computer code that involves compilation during execution of a program — at run time — rather than prior to execution.
   * => An ahead-of-time (AOT) compiler converts your code during the build time before the browser downloads and runs that code. Compiling your application during the build process provides a faster rendering in the browser.
   *
   */
  /**
   * Interpreter vs Compiler?
   * => Interpreter: takes your code and starts executing the code line-by-line, there is no intermediate step in between.
   * => Compiler: first takes your code and compiles it into bytecode which is an intermediate step. Only, then the bytecode is executed.
   * => Compiler is more efficient than interpreter because the bytecode it creates is very optimized and efficient. But, the interpreter is faster since it doesn't go through two steps like a compiler.
   *
   * IS JS A COMPILED OR AN INTERPRETED LANGUAGE?
   * => Depends, it can act as either a compiled language or an interpreted language. The mode depends on the JS Engine.
   * => In today's modern world, most of the JS Engines within a browser and runtimes are a combination of compiled and interpreted language together. This leads to such JS Engines being either (a) purely interpreted or (b) JIT compiled.
   */
  /**
   * What is JIT Compilation?
   * => JIT Compilation is uses both an interpreter as well as a compiler to execute the code -> it is best of the both worlds.
   */
};
