/**
 * local vs session storage in JS ?
 * => localStorage: stores data locally on the client machine.
 * => sessionStorage: stores data locally on the client machine, but only for the duration of the session.
 * => localStorage and sessionStorage are both used to store data on the client machine.
 * => localStorage is used to store data that is not sensitive, and sessionStorage is used to store data that is sensitive.
 */

/**
 * https://www.digitalocean.com/community/tutorials/js-introduction-localstorage-sessionstorage
 * The localStorage and sessionStorage objects, part of the web storage API, are two great tools for saving key/value pairs locally.
 * Using localStorage and sessionStorage for storage is an alternative to using cookies and there are some advantages:
 * => The data is saved locally only and can’t be read by the server, which eliminates the security issue that cookies present.
 * => It allows for much more data to be saved (10mb for most browsers).
 * Cookies are still useful, especially when it comes to authentication, but there are times when using localStorage or sessionStorage may be a better alternative.
 * localStorage and sessionStorage are almost identical and have the same API.
 * [VVIP] The difference is that with sessionStorage, the data is persisted only until the window or tab is closed. With localStorage, the data is persisted until the user manually clears the browser cache or until your web app clears the data.
 */

/**
 * [VVIP] very good discussion around local and session storage vs cookies ?
 * https://www.loginradius.com/blog/engineering/guest-post/local-storage-vs-session-storage-vs-cookies/
 * Session Storage:
 * As the name suggests, session storage only persists the data as long as a browser tab is opened. This means that each time you open a new tab or a new browser window, a new session storage is created. So any data you store inside the session storage will automatically get deleted when you close that tab/window.
 * As long as you are in the same tab, doesn't matter if you refresh (only referesh, but not restart mind you) your browser, the session storage will persist.
 * [Usecase for session storage]:
 * => Booking applications: Since these are critical activities that must be performed in a single go, the data will automatically get deleted when the user jumps to a new tab or a new browser window.
 * ****************
 * Local storage:
 * data in local storage has no default expiry. It's only deleted if you manually delete that data from the local storage either directly, via browser settings, or through your JavaScript code.
 * That means that data in a local storage persists even after a particular tab or browser window is closed.
 * local storage will persist across browser restarts since the key-value is stored in your local machine in the browser's folder/cache.
 * THIS HOWEVER DOESN'T APPLY IN INCOGNITO/PRIVATE MODE as with that mode a browser clears everything including localstorage when you close the incognito window.
 * **************
 * Similarities:
 * => In other words, cookies are blockable by users and so is browser storage. Users can choose not to allow their data to be stored via any of these mechanisms — and hence, your application should never completely rely on these storage mechanisms.
 * => Both cookies and browser storage store key-value pairs as strings and are well supported in all modern browsers. The data inside this can also be easily edited by the user.
 * *************
 * Differences:
 * => browser storage has a greater storage capacity than cookies. Hence, browser storage is always a better choice than cookies to store large client-side data.
 * => Cookies allow you to automatically set a TTL or expiry time; are transferred with every HTTP request to the server; and, can also be accessed by the server. These features are missing in browser storage
 * *************
 * where would cookies be actually more useful than browser storage?
 * => The answer is server side data! If you've dealt with authentication before, you know that at some point you need to store the authentication token or JWT of a user somewhere where it's easily accessible. That's where cookies are helpful.
 * Data such as JWT or Auth token should not be stored in browser storage because they can be accessed by any client side JavaScript running in the browser. This means that if your application somehow leaves an XSS vulnerability, your user's authentication token could be easily leaked to the attacker.
 *  authentication token is often refreshed on expiry and one can use cookies TTL easily to manage that. For simpler cases, one can also store JWT inside regular cookies by setting a TTL.
 * Use cookies for server side data where you need a TTL, session storage for specific use cases discussed above, and local storage to manage global data in your application
 */
