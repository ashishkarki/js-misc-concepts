/**
 * REFERENCE: https://www.youtube.com/watch?v=y17RuWkWdn8
 */

/**
 * DOM manipulation technique #1
 * add elements to the body
 */
const body = document.body;

/**
 * append can append strings or html element to the body
 * it can also append one or more elements
 */
body.append("Appended text using 'append'", "more appended");

/**
 * appendChild can append html element to the body
 * it can however only append One element at a time
 */
const div = document.createElement("div");
// div.append("Appended text to created div");
// div.innerText = "Appended innerText to created div";
div.textContent = "Appended textContent to created div";

// also note that in order to apply html tag we need to use innerHTML
// div.innerHTML = "<h1>Appended innerHTML to created div</h1>";
// using innerHTML is bit risky since any html tag can be used
// so a solution is to manually create that html tag and appending it
const h1 = document.createElement("h1");
h1.textContent = "Appended textContent to created h1";
div.appendChild(h1);

body.appendChild(div);

/**
 * DOM manipulation technique #2
 * selecting elements from the DOM
 */
const divs = document.querySelectorAll("div"); // select all elements with tag name "div"
console.log("divs: ", JSON.stringify(divs));
/**
 * there is a difference between innerText vs textContent
 * innerText is only the text inside the element and only the stuff that is visible. innerText takes styling and scripts into account and only shows the resulting text.
 * textContent is the text inside the element and also the stuff that is hidden including all the spacing etc. it is unaware of styling and prints everything inside as-is.
 */
console.log("divs[1].innerText: ", divs[0].innerText);
console.log("divs[1].textContent: ", divs[0].textContent);

// if you want to select only one element, use querySelector
const div1 = document.querySelector("div");
console.log("div1: ", JSON.stringify(div1));

// also can select elements by class name
const divsByClass = document.getElementsByClassName("div");
console.log("divsByClass: ", JSON.stringify(divsByClass));

// also can select elements by id
const divById = document.getElementById("div");
// this also works
const divById2 = document.querySelector("#div");
console.log("divById: ", JSON.stringify(divById));

// also can select elements by tag name
const divsByTagName = document.getElementsByTagName("div");
console.log("divsByTagName: ", JSON.stringify(divsByTagName));

// also can select elements by attribute
const divsByAttribute = document.querySelectorAll("[data-test]");
console.log("divsByAttribute: ", JSON.stringify(divsByAttribute));

// also can select elements by attribute value
const divsByAttributeValue = document.querySelectorAll("[data-test='test']");
console.log("divsByAttributeValue: ", JSON.stringify(divsByAttributeValue));

/**
 * DOM manipulation technique #3
 * removing elements from the DOM
 */
const divParent = document.querySelector("div");
const spanHi = document.querySelector("#hi");

// one way is directly removing the child
// spanHi.remove();
// // other way is using its parent to remove it from dom
// spanHi.parentNode.removeChild(spanHi); // or the way below
// divParent.removeChild(spanHi);

/**
 * DOM manipulation technique #4
 * adding+manipulating attributes of html elements
 */
const spanHello = document.querySelector("#hello");

// get any attribute using JS
console.log(`spanHello.getAttribute("id"): ${spanHello.getAttribute("id")}`);
// or you can just get it as a method (for most attributes)
console.log(`spanHello.id: ${spanHello.id}`);

// set any attribute using JS
// spanHello.setAttribute("data-test", "test");
// console.log(
//   `spanHello.getAttribute("data-test"): ${spanHello.getAttribute("data-test")}`
// );
// or you can just set it as a method (for most attributes)
spanHello.dataTest = "test2";
console.log(`spanHello.dataTest: ${spanHello.dataTest}`);

// remove any attribute using JS
spanHello.removeAttribute("title");
console.log(
  `spanHello.getAttribute("title") after removing: ${spanHello.getAttribute(
    "title"
  )}`
);

/**
 * DOM manipulation technique #5
 * accessing 'data-*' attributes
 */
// const divData = document.querySelector("[data-test='test']");
// console.log(`divData.datatest: ${divData.datatest}`);
spanHi.setAttribute("data-best", "best");

const dataset = spanHi.dataset;
console.log("spanHi.databest: ", spanHi.getAttribute("data-best"));
console.log(`spanHi.dataset: ${JSON.stringify(dataset)}`);

/**
 * DOM manipulation technique #6
 * manipulating classes of an element
 */
spanHi.classList.add("hi");
spanHi.classList.remove("hi");
spanHi.classList.toggle("hi2"); // add if not present and vice versa

/**
 * DOM manipulation technique #7
 * manipulating directly the style of an element
 */
spanHi.style.color = "red";
spanHi.style.backgroundColor = "yellow";
spanHi.style.padding = "10px";
