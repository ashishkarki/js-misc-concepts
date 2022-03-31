export const theEVENTloop = () => {
  console.log(`The JS Event Loop with callback queues etc`);
  /**
   * 1. JS has only one "Call-Stack" which is the "Stack" of functions that are currently being executed.
   * 2. This Call-Stack is stored inside the JS engine. ANYTHING INSIDE THE CALL STACK IS EXECUTED IMMEDIATELY.
   * 3. The first thing that is pushed into the Call-Stack is the Global Execution Context (GEC).
   * [Remember an execution context is the currently running code and anything else (like variables) it needs to run that code.]
   * 4. The JS engine will start by executing the GEC in a line-by-line fashion.
   * 5. Now, what if you need to execute a code after some wait or time-out? this is not possible with call stack since within the stack everything is executed immediately and synchronously.
   * 6. Now, now remember the JS engine (which contains the call stack) itself is contained within the Browser (which has a lot of powers).
   * [Browser can have many other things like localStorage, timers, current URL, Network I/O etc.]
   * 7. Web APIs are the APIs via which the JS engine can communicate with the Browser and use its various features like make HTTP requests, set timers, etc.
   * [Some examples of such APIs are setTimeout, setInterval, fetch, localStorage, console, location, DOM APIs (like document.getElementById...) etc.]
   * 8. Concretely, a browser gives access to the JS engine (to the Web APIs) via the (globally available) "window" object. That is you basically access those features using a syntax like window.setTimeout() or window.localStorage. That being said, you can skip the window object and just use the Web APIs directly in your code that runs within a browser.
   * 10. The JS engine will execute the code in the GEC (and its child contexts) setting aside any callbacks (into the callback queue) to be executed later.
   * 11. When everything in the Call-stack is executed, the GEC exits (somewhat signaling the end of the execution of the code) but when the timers or api calls are done, the callbacks (from the callback queue) have to be inserted into the Call-stack and executed.
   * [NOW, its nearly time for the "Callback Queue" and "Event Loop" to come into the picture.]
   * 12. After a certain time period, Call Stack gets the code through Event Loop which fetches the Callback functions to Call Stack. But, Callback functions can’t directly go to the Event loop. They have to be put into either the Callback Queue or the Microtask Queue.
   * 13. So, once the timer gets expired the callback functions are put inside these queues serially. And whenever the Call stack is empty, the event loop fetches them to (or puts them into) the Call Stack in FIFO order (and those callbacks are deleted from their queues).
   * 14. Then the Call Stack creates an Execution Context and executes those callbacks.
   */

  /**
   * Difference between Microtask Queue and Callback Queue in asynchronous JavaScript:
   * reference: https://www.geeksforgeeks.org/what-is-the-difference-between-microtask-queue-and-callback-queue-in-asynchronous-javascript/
   * => Microtask Queue and Callback Queue work as a mediator, once the timer (for example from setTimeout) gets expired or data is returned (from fetch call to an external api),the callback functions are put inside these queues serially.
   * ==> And whenever the Call stack is empty, the event loop fetches them to Call Stack in FIFO order. Then the Call Stack creates an Execution Context and executes it.
   * => Microtask Queue: Microtask Queue is like the Callback Queue, but Microtask Queue has higher priority. All the callback functions coming through Promises and Mutation Observer will go inside the Microtask Queue.
   * [The MutationObserver interface provides the ability to watch for changes being made to the DOM tree like adding or removing a child node or attribute of an element.]
   * ==> For example, in the case of .fetch(), the callback function gets to the Microtask Queue. Promise handling always has higher priority.
   * ===> Note: Callbacks inside Microtask queue have higher priority for execution (i.e. moving into the call-stack via the event loop) than those in the Callback queue.
   */
  /**
   * STARVATION OF CALLBACK QUEUE:
   * is when no callbacks in the Callback Queue are executed while the Event loop keeps moving higher priority callbacks from the Microtask Queue into the Call-stack.
   * This might have when one callback in the Microtask Queue is taking a long time to execute or it produces another callback which is also taking a long time to execute and so on.
   */
};
