/**
 * Crazy JS interview question around closures
 */
function outer(outerParam) {
  //   var counter = 0; // prints 1

  function incrementCounter() {
    counter++;

    console.log(`counter: ${counter}, outerParam: ${outerParam}`);
  }

  //   var counter = 0; // this works too and prints 1
  let counter = 0; // prints 1 as well

  return incrementCounter;
}

const fn = outer("hello");
fn(); // prints 1
