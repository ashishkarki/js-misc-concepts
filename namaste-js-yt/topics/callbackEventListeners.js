export const callbackEventListeners = () => {
  console.log(`callbackEventListeners`);

  /**
   * What is callback function in JS ?
   * => A callback function is a function passed into another function as an argument, which is then invoked inside the outer function to complete some kind of routine or action.
   * => While JS is a synchronous and single threaded language, it is possible to use callbacks to create asynchronous code.
   * => Callbacks are used in many different ways, but the most common use is for events and their callbacks.
   */

  /**
   * Example 1: of callback with a closure
   */
  () => {
    function attachEvtListener() {
      let count = 0;
      document.getElementById("btn").addEventListener("click", function foo() {
        console.log(`foo: ${++count}`);
      });
    }

    attachEvtListener();
  };
  // (); // don't make this one an IIFE

  /**
   * Garbage collection and removeEventListeners
   * => Event listeners are memory heavy i.e. they take space in memory for their closures.
   * => Too many event listeners can cause memory to be used in large amounts so its tantamount to remove Listeners we no longer need.
   */
};
