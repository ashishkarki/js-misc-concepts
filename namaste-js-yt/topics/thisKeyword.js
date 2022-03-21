export const thisKeyword = () => {
  console.log(`thisKeyword.js example`);

  /**
   * refer: https://javascript.plainenglish.io/learn-node-js-part-4-bc5b545e6863#:~:text=Learn%20Node.,-js%20(Part%204&text=According%20to%20MDN%20web%20docs,is%20called%20(runtime%20binding).
   * In general (within a browser environment), this keyword is a property of an execution context (global, function or eval) that, in non–strict mode, is always a reference to an object and in strict mode can be any value.
   * it is clear that globalThis, window, frames, self and this are the same thing in the browser.
   * BUT, in Node.js, they are different.
   * In Node.js, window, frames, self and this will not work, and we must instead use global or globalThis.
   * The this keyword could be used inside functions running in non–strict mode, but this will be undefined in Modules and inside functions running in strict mode.
   */
};
