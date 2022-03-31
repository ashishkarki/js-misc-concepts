/**
 * example of a callback function with closures
 */
window.onload = () => {
  function attachEvtListener() {
    let count = 0;
    document.getElementById("btn").addEventListener("click", function foo() {
      console.log(`foo: ${++count}`);
    });
  }

  attachEvtListener();
};
