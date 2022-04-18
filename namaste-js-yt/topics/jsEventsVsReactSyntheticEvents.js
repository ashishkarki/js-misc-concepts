/**
 * What’s the Difference Between Synthetic React Events and JavaScript Events?
 * Main ref: https://betterprogramming.pub/whats-the-difference-between-synthetic-react-events-and-javascript-events-ba7dbc742294
 */
/**
 * 1. HTML defines a set of events, and JavaScript uses event handlers to manage these events. React also implements event handlers, such as onClick, onMouseMove, onLoad, onError, etc.
 * 2. React’s event handlers are named with camelCase APIs (like onClick), while JavaScript event handlers are named with lowercase APIs (like onclick).
 * 3. Most times, we use bubbling event handlers, such as onClick, onMouseMove, onLoad, and onError.
 * 4. In React, to register an event handler for the capturing phase, simply append Capture to the event name. Equivalently, there are onClickCapture, onMouseMoveCapture, onLoadCapture, and onErrorCapture.
 * 5. Two event handlers do not have equivalent capturing handlers. They are onMouseEnter and onMouseLeave. This behavior is consistent with JavaScript events.
 * 6. In JavaScript, a few events — such as focus, blur, and change — do not bubble up. However, React’s team decided to make all events bubble, regardless of if it makes sense or not.
 *
 */

/**
 * How did Event handling work in React before v17 ?
 * Main ref is still: https://betterprogramming.pub/whats-the-difference-between-synthetic-react-events-and-javascript-events-ba7dbc742294
 * Second ref: https://reactjs.org/blog/2018/03/29/react-v-16-3.html
 * PART - 1:
 * 1. In React, an event handler is passed with an instance of SyntheticEvent, a cross-browser wrapper around the browser’s native event.
 * 2. It has the same interface as the browser’s native event, including stopPropagation() and preventDefault().
 * 3. In React, you cannot return false to prevent default behavior. Instead, preventDefault must be called explicitly.
 * 4. The synthetic events work identically across all browsers because they are defined according to the W3C spec.
 *
 * PART - 2:
 * 1. The SyntheticEvent is pooled. This means that the SyntheticEvent object will be reused and all properties will be nullified after the event callback has been invoked.
 * 2. This behavior is designed for performance reasons. As such, a SyntheticEvent cannot be used in an asynchronous way.
 * 3. For example Clicking on the event (object that is printed in the console) is accessing it asynchronously.
 * 4. If you add e.persist() in your code, you will remove the synthetic event from the pool and allow references to the event to be retained by user code.
 * 5. Now SyntheticEvent prints out the event details (for example in the console).
 */

/**
 * How does React event handling work in v17 and after ?
 * Main ref: https://betterprogramming.pub/whats-the-difference-between-synthetic-react-events-and-javascript-events-ba7dbc742294
 * PART-1
 * 1. e.persist() (Line 14) has no effect after React 17.
 * 2. Any events will correctly find (and print whatever) the event object to the console (or any kind of access to the event object).
 * 3. That is because the event object is not pooled anymore after React 17.
 *
 */
