/**
 * bind vs call vs apply in JS?
 * => bind: returns a new function that, when called, has its this keyword set to the provided value, with a given sequence of arguments preceding any provided when the new function is called.
 * => call: calls a function with a given this value and arguments provided individually.
 * => apply: calls a function with a given this value and arguments provided as an array.
 */

/**
 * Ref: https://www.w3docs.com/snippets/javascript/javascript-bind-vs-apply-and-call.html
 * Among these three methods above, bind() works a little bit differently.
 * Unlike call() and apply() that execute the current function immediately, bind() returns a new function.
 * You can use bind() for events like onClick where you don’t know when they will be fired but you know the desired context.
 */

/**
 * Ref for example set #1 below:
 * https://dev.to/jcfrane/call-vs-apply-vs-bind-2d4c
 */
// call() basically calls a function with the given lexical context as parameter like so
let humanCall = { name: "Ashish" };
function sayNameCall(greeting) {
  console.log(greeting + " to you: " + this.name);
}
// sayNameCall.call(humanCall, "Hi!"); // Outputs Hi! JC

// ref: https://medium.com/developers-arena/how-to-create-a-polyfill-for-call-apply-and-bind-917ae110edc3
// our Polyfill for call
Function.prototype.customCall = function (context, ...args) {
  console.log(`calling using polyfilled call`);
  context.fxnToBeInvoked = this;
  context.fxnToBeInvoked(...args);
};

// our polyfill for apply
// the polyfill for call and be converted into the polyfill for apply.
// All we need to do is to accept the second argument as an array.
Function.prototype.customApply = function (context, args) {
  console.log(`context from polyfilled apply`);
  context.fxnToBeInvoked = this;
  context.fxnToBeInvoked(...args);
};

sayNameCall.customCall(humanCall, "polyfilledCall greetings");

// The bind function actually returns another function, which means
// we need to use a closure to create our own customBind function.
Function.prototype.customBind = function (context) {
  context.fxnToBeInvoked = this;

  return function (...args) {
    context.fxnToBeInvoked(...args);
  };
};

// const boundPrinter = printer.customBind(Person);
// boundPrinter();
//////// end of another ref ////////////

// apply() is just like call() except that it accepts arguments in array like so:
let humanApply = { name: "JC" };
function sayNameApply(greeting, city) {
  console.log(greeting + " " + this.name + " from " + city);
}
sayNameApply.apply(humanApply, ["Hi", "Boston"]); // Outputs Hi! JC from Boston

// with call() you have to supply the arguments individually like so:
console.log(sayNameCall.call(humanApply, "Hi!", "Boston")); // Outputs Hi! JC from Boston

/**
 * The bind() is somewhat special. It is a higher-order function which means it returns another function when you invoke it.
 * The function returned is curried, meaning you can call it multiple times to provide different arguments in each call.
 */
let humanBind = { name: "JC" };
function sayNameBind(greeting, city) {
  console.log(greeting + " " + this.name + " from " + city);
}

let greet = sayNameBind.bind(humanBind);
greet("Hi!", "Boston"); // Outputs Hi! JC from Taguig
greet("Hello!", "New York"); // Outputs Hello! JC from Makati

/**
 * Finally Polyfill for bind
 */
const Person = {
  firstName: "ash",
  lastName: "kerry",
};

// ref on Object.freeze: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/freeze
// Person is now definitely constant
Object.freeze(Person);

const printer = function (...args) {
  console.log(`%%%%%%\nPrinting from our printer function`);
  console.log(`firstName: ${this.firstName}, lastName: ${this.lastName}`);
  console.log(`Printing all our args: ${args}`);
  console.log(`*****************`);
};

const boundPrinter = printer.bind(Person);
boundPrinter();
// boundPrinter("Hello", "World");

// our Polyfill for bind
Function.prototype.polyfilledBind = function (context) {
  const fxnToBeInvoked = this;

  return function (...args) {
    console.log(
      `context from polyfilled bind: ${JSON.stringify(
        context
      )}, args: ${JSON.stringify(args)}`
    );
    return fxnToBeInvoked.apply(context, args);
  };
};

const boundPrinter3 = printer.polyfilledBind(Person);
console.log(`type of boundPrinter3: ${typeof boundPrinter3}`);
boundPrinter3("one", "two", "three");
