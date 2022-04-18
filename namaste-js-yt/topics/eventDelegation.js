/**
 * What is event delegation in JS?
 * => Event Delegation is possible due to "Event Bubbling" i.e. the moving up of event handling from the child to the parent. (OR even "Event Capturing" i.e. the moving down of event handling from the parent to the child.)
 */
/**
 * Lets say we have a ul as parent element and lots and lots of li elements as its child. If we add an event listener for each li, it will be very inefficient.
 * Instead, we can use event delegation -> event handling will be done on the parent element. -> a single event listener will be attached to the parent element which detects click event on any of its child elements.
 */
document.querySelector(".someList").addEventListener("click", function (e) {
  console.log(e.target.innerText);
});

// our html code might look like this:
<div class="someBigContainer">
  <ul class="someList" onclick={() => console.log("representive function")}>
    <li>Item 1</li>
    <li>Item 2</li>
    <li>Item 3</li>
    {/* there are many more li elements */}
  </ul>
</div>;

/**
 * VVIP
 * Ref: https://javascript.info/event-delegation
 * => Capturing and bubbling allow us to implement one of the most powerful event handling patterns called event delegation.
 * => [VVIP] The idea is that if we have a lot of elements handled in a similar way, then instead of assigning a handler to each of them – we put a single handler on their common ancestor.
 */
