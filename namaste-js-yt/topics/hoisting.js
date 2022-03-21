export const hoisting = () => {
  console.log(`Hoisting.js example`);

  // example 1
  (() => {
    console.log(`example 1`);
    console.log(`a = ${a}`);
    var a = 2;
    console.log(`a = ${a}`);
  })();

  // example 2
  (() => {
    console.log(`%%%%%%%\nexample 2`);

    console.log("getName before getName():", getName);
    getName();
    console.log("get name after getName()", getName);
    console.log("x: ", x);

    var x = 7; // var causes hoisting - its function scoped

    function getName() {
      console.log(`x = ${x}`);
    }
  })();

  // example 3: Hoisting only works for function declarations, not expressions.
  (() => {
    console.log(`%%%%%%%\nexample 3`);

    // getName(); // throws "TypeError: getName is not a function"

    var getName = () => {
      // getName is a fxn expression and doesn't get hoisted and
      // actually gets treated like a variable defined with var keyword
      console.log("getName function");
    };
  })();

  // example 4: the sensible fix like other languages using let, const
  (() => {
    console.log(`%%%%%%%\nexample 4`);

    /**
     * Also, variable hoisting does not work for variables initialized with the let or const keyword. If done so, it will result in a ReferenceError. Actually such variables will be hoisted but not assigned with the default value of undefined.
     */
    // following console.logs throws "ReferenceError: Cannot access 'x' before initialization"
    // console.log("x:", x, "..y:", y);
    // console.log("getName: ", getName);

    let x = 7;
    const y = 8;

    const getName = () => {
      console.log("getName function");
    };

    // follwing works as expected
    console.log("x:", x, "..y:", y);
    getName();
  })();
};
