/**
 * What is Prototypal Inheritance in JS ?
 * Reference: https://javascript.info/prototype-inheritance
 * => In programming, we often want to take something and extend it.
 * => For instance, we have a 'user' object with its properties and methods, and want to make 'admin' and 'guest' as slightly modified variants of it. We’d like to reuse what we have in user, not copy/reimplement its methods, just build a new object on top of it.
 * => Prototypal inheritance is a language feature that helps in that.
 */
/**
 * [[Prototype]] ??
 * => In JavaScript, objects have a special hidden property [[Prototype]] (as named in the specification), that is either null or references another object. That referenced object is called “a prototype”.
 * => The property [[Prototype]] is internal and hidden, but there are many ways to set it.
 * One of them is to use the special name __proto__, like this
 */
const animal = {
  eats: true,
  walk() {
    console.log("Animal can walk");
  },
};
const rabbit = {
  jumps: true,
};

rabbit.__proto__ = animal; // sets rabbit.[[Prototype]] = animal

/**
 * Now if we read a property from rabbit, and it’s missing, JavaScript will automatically take it from animal like so
 */
console.log(rabbit.eats); // true: this comes from animal
console.log(rabbit.jumps); // true: this is defined in rabbit itself

/**
 * Here we can say that "animal is the prototype of rabbit" or "rabbit prototypically inherits from animal".
 * So if animal has a lot of useful properties and methods, then they become automatically available in rabbit. Such properties are called “inherited”.
 */

/**
 * The prototype chain can be longer, like so
 */
const longEar = {
  earLength: 10,
  __proto__: rabbit, // can be defined this way too
};

console.log(longEar.walk()); // true: comes from 'animal' using prototype chain
console.log(longEar.jumps); // true: comes from 'rabbit' using prototype chain

/**
 * There are only two limitations (to assigning a prototype):
 * 1. The references can’t go in circles. JavaScript will throw an error if we try to assign __proto__ in a circle.
 * 2. The value of __proto__ can be either an object or null. Other types are ignored.
 * Also it may be obvious, but still: there can be only one [[Prototype]]. An object may not inherit from two others.
 */

/**
 * VVIP:
 * __proto__ is a historical getter/setter for [[Prototype]].
 * Please note that __proto__ is not the same as the internal [[Prototype]] property. It’s a getter/setter for [[Prototype]].
 * The __proto__ property is a bit outdated. It exists for historical reasons, modern JavaScript suggests that we should use Object.getPrototypeOf/Object.setPrototypeOf functions instead that get/set the prototype.
 */

/**
 * Writing doesn’t use prototype
 * The prototype is only used for reading properties. Write/delete operations work directly with the object.
 * Accessor properties are an exception, as assignment is handled by a setter function. So writing to such a property is actually the same as calling a function.
 */

/**
 * The value of “this”
 * The answer is simple: this is not affected by prototypes at all.
 * No matter where the method is found: in an object or its prototype. In a method call, this is always the object before the dot.
 * We may have a big object with many methods, and have objects that inherit from it. And when the inheriting objects run the inherited methods, they will modify only their own states, not the state of the big object.
 * For instance, here animal represents a “method storage”, and rabbit makes use of it. The call rabbit.sleep() sets this.isSleeping on the rabbit object only (and not on the animal object)
 * As a result, methods are shared, but the object state is not. See example below::
 */
// animal has methods
const animal2 = {
  walk() {
    if (!this.isSleeping) {
      console.log("I am walking since I am not sleeping");
    }
  },
  sleep() {
    this.isSleeping = true;
  },
};

let rabbit2 = {
  name: "White Rabbit",
  __proto__: animal2,
};

// only modified the sleep method of rabbit2 object
rabbit2.sleep();

console.log(rabbit2.isSleeping); // true
// console.log(animal2.isSleeping); // undefined

/**
 * Almost all other key/value-getting methods, such as Object.keys, Object.values and so on ignore inherited properties.
 * They only operate on the object itself. Properties from the prototype are not taken into account.
 * ===============
 * The for..in loop iterates over inherited properties too.
 * If that’s not what we want, and we’d like to exclude inherited properties, there’s a built-in method obj.hasOwnProperty(key): it returns true if obj has its own (not inherited) property named key.
 * [ASIDE] …But why does hasOwnProperty not appear in the for..in loop like eats and jumps do, if for..in lists inherited properties?
 * => The answer is simple: it’s not enumerable. Just like all other properties of Object.prototype, it has enumerable:false flag. And for..in only lists enumerable properties.
 */

/**
 * What is the difference between Object.create() and Object.assign() ?
 * Reference: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/create
 * => Object.create() is a method that creates a new object, and sets its prototype to a specified object.
 * => Object.assign() is a method that copies the enumerable own properties of one or more source objects to a target object.
 */

/**
 * Practice Questions below:
 */
// Question 1: Given the following objects.
// Part 1 => Use __proto__ to assign prototypes in a way that any property lookup will follow the path: pockets → bed → table → head. For instance, pockets.pen should be 3 (found in table), and bed.glasses should be 1 (found in head).
// Part 2 => Answer the question: is it faster to get glasses as pockets.glasses or head.glasses? Benchmark if needed.
let head = {
  glasses: 1,
};

let table = {
  pen: 3,
};

let bed = {
  sheet: 1,
  pillow: 2,
};

let pockets = {
  money: 2000,
};

/**
 * VVIP: __proto__ vs prototype in JS ?
 * // Ref: https://stackoverflow.com/questions/9959727/proto-vs-prototype-in-javascript?answertab=modifieddesc#tab-top
 * // particularly the answer by user: https://stackoverflow.com/users/9868445/aderchox
 * => __proto__ is an object referencing another object which is also a property of all objects, called [[Prototype]].
 * => Because JavaScript doesn't want to allow getting / setting the [[Prototype]] directly, so it allows it through a middle layer which is __proto__. So you can think of __proto__ as a getter/setter of the [[Prototype]] property.
 * ==============
 * What is 'prototype' in JS then ?
 * => prototype is a property of an object which is used to store the methods and properties of the object.
 * => It is something specific to functions(Initially defined in Function, i.e, Function.prototype and then prototypically inherited by newly created functions, and then again those functions give it to their children, forming a chain of prototypical inheritance).
 * JavaScript uses a parent function's prototype to set its child functions' [[prototype]] when that parent function is run with new (remember we said all objects have [[prototype]]? well, functions are objects too, so they have [[prototype]] as well). So when the [[prototype]] of a function(child) is set to the prototype of another function(parent), you will have this in the end:
 */
let child = new Parent();
child.__proto__ === Parent.prototype; // --> true.
// (Remember child.[[prototype]] is inaccessible, so we checked it using __proto__.)
