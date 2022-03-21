export const howFxnWorks = () => {
  console.log("howFxnWorks.js example");

  // example 1
  (() => {
    console.log(`example 1\n%%%%%%%%%%%%%%`);

    var x = 10;
    a(); // prints 100 from its scope
    b(); // prints 1000 from its scope

    console.log("x (from global scope):", x); // due to use of var keyword
    // and the resulting lexical scoping, this x will be the global x

    function a() {
      var x = 100; // if this is commented, the global x will be used
      console.log(`x (inside fxn a) = ${x}`);
    }

    function b() {
      var x = 1000;
      console.log(`x (inside fxn b) = ${x}`);
    }
  })();
};
