/**
 * What are Event Bubbling and Capturing in JS ?
 * => These are two ways of "Event Propagation" in the DOM tree.
 * => Event Bubbling is when an event is triggered on an element, and then bubbles up to its parent element.
 * => Event Capturing is when an event is triggered on an element, and then is captured by its child elements. It is also known as "event trickling".
 * => FIND good description on https://www.w3schools.com/jsref/dom_obj_event.asp
 */

/**
 * Find great read with examples @ https://javascript.info/bubbling-and-capturing
 */
document.onload = function () {
  document.getElementById("granny").addEventListener("click", function (e) {
    console.log("Granny clicked: " + e.target.id);
  });

  document.getElementById("parent").addEventListener("click", function (e) {
    console.log("Parent clicked: " + e.target.id);
  });

  document.getElementById("child").addEventListener("click", function (e) {
    console.log("Child clicked: " + e.target.id);
  });
};
