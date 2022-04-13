/**
 * In the following, "building the DOM" or "parsing the html" or "parsing the page" are all considered equivalent.
 */
/**
 * Async and Defer keywords in JS
 * => Async: is used to execute a function asynchronously.
 * => Defer: is used to execute a function after the page has loaded.
 */
/**
 * Normally, when the browser gets to a script tag, it loads and then immediately executes the JS file or code immediately (synchronously). It pauses the execution of the page (basically the parsing of HTML elements) until the JS file is loaded and then executed.
 * But, if we use the async keyword, the browser will load the JS file asynchronously. It will not pause the execution of the page until the JS file is loaded. Once, the JS file is loaded, the browser will then pause execution of the page until the JS file is executed.
 * With defer keyword,
 */
/**
 * Async means loading can happen asynchronously (allowing html parsing to go on during this time) but execution happens synchronously (blocks the parsing of html elements).
 * In other words Async scripts (VVIP):
 * => The browser doesn’t block on async scripts (like defer).
 * => Other scripts don’t wait for async scripts, and async scripts don’t wait for them.
 * => DOMContentLoaded and async scripts don’t wait for each other:
 * ==> DOMContentLoaded may happen both before an async script (if an async script finishes loading after the page is complete)
 * ==> …or after an async script (if an async script is short or was in HTTP-cache)
 * => Async scripts are great when we integrate an independent third-party script into the page: counters, ads and so on, as they don’t depend on our scripts, and our scripts shouldn’t wait for them
 * ==================================================
 * Defer means loading happens asynchronously and then the execution phase also waits for the whole DOM to be parsed/built before it executes.
 * In other words  defer scripts (VVIP):
 * 1. Scripts with defer never block the page.
 * 2. Scripts with defer always execute when the DOM is ready (but before DOMContentLoaded event).
 * 3. Deferred scripts keep their relative order, just like regular scripts.
 */
/**
 * [ASIDE]: Page: DOMContentLoaded, load, beforeunload, unload
 * Ref: https://javascript.info/onload-ondomcontentloaded
 * The lifecycle of an HTML page has three important events:
 * => DOMContentLoaded – the browser fully loaded HTML, and the DOM tree is built, but external resources like pictures <img> and stylesheets may not yet have loaded.
 * => load – not only HTML is loaded, but also all the external resources: images, styles etc.
 * => beforeunload/unload – the user is leaving the page.
 */
/**
 * [ASIDE]: https://developer.mozilla.org/en-US/docs/Web/API/Document/readyState
 */
