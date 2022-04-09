/**
 * Dependency Inversion Principle
 * => High-level modules should not depend on low-level modules. Both should depend on abstractions (e.g interfaces)
 * => Abstractions should not depend on details. Details (concrete implementations) should depend on abstractions
 */

/**
 * EXAMPLE 1
 */

/**
 * Example 2: GOOD EXAMPLE
 * Ref: https://javascript.plainenglish.io/decoupling-code-in-javascript-with-the-dependency-inversion-principle-6d23342b4aaa
 * 1. In general, it indicates decoupling elements by providing their dependencies from the outside, instead of creating them directly, which would create adhesion.
 * 2. Another implementation of Dependency Injection in JavaScript is with ES6 modules, with the ability to use and encapsulate the same code and then import it where we need it.
 */
// say this is in a file called utils.js
export const doGet = (url) => {
  // here we can easily switch between different ways to call the API
  // we can use fetch or axios, or even a mock API
  return fetch(url, {
    method: "GET",
    mode: "same-origin",
  }).then((r) => r.json());
};

// use this in a file called app.js
import { doGet } from "./utils.js";
const url = "https://jsonplaceholder.typicode.com/posts";
class Example {
  constructor() {
    ////
  }

  downloadDataFromAPI(params) {
    doGet(url).then((r) => {
      console.log("Posts:" + r);
    });
  }
}
