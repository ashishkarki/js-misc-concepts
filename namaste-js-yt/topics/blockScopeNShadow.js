export const blockScopeNShadow = () => {
  /**
   * A block in JS is anythig enclosed in curly braces {}
   * A block is also called compound statement.
   */
  /**
   * VVIP: all the rules that apply to these function declarations work the
   * same for function expressions as well as arrow based functions.
   */
  console.log(`Block Scope and Shadowing in JS`);

  (() => {
    console.log(`%%%%%%%%\nexample 1`);
    {
      /**
       * you can access var scoped 'a' outside this block marked by these curly braces
       * but you cannot access block scoped 'b' outside this block since anything with let/const is strictly only avilable only within that block
       */
      var a = 1; // hoisted but in global scope
      let b = 2; // hoisted but in separate block scope
      const c = 3; // hoisted but in separate block scope
    }
  })();

  (() => {
    console.log(`%%%%%%%%%\n example 2: What is Shadowing?`);

    var a = 1;
    let b = 2; // this will be outer-block (also called Script) scoped

    {
      // a gets overwritten since var doesn't care about this block {}
      var a = 10; // shadowing
      let b = 20; // not shadowing since let/const is strictly within this block and this 'b' is different from the above global 'b'
      const c = 30;
      console.log(`var a inside block: ${a}`); // 10
      console.log(`let b inside block: ${b}`); // 20
      console.log(`const c inside block: ${c}`); // 30
    }

    // since a is accessible globally, it is shadowed by the var a inside the block
    console.log(`var a outside the block: ${a}`); // will print the modified value of 10

    function shadower() {
      // a declared with var keyword is function scope and is only accessible within this function. Hence, it doesn't Shadow the global 'a'
      var a = 100;
      console.log(`var a inside shadower(): ${a}`);
    }

    shadower();
    console.log(`var a after/outside shadower(): ${a}`); // prints 10 from line 28 within that block
  })();

  (() => {
    console.log(`%%%%%%%%%\n example 3: illegal Shadowing?`);

    // scenario 1: anything declared/defined with let cannot be re-declared
    let a = 1;
    {
      //var a = 10; // throws SyntaxError: Identifier 'a' has already been declared
      let a = 10; // OKAY since within this block 'a' is different from the above global 'a' as defined using the let keyword
    }

    // scenario 2: anthing with var can be re-declared with a let
    var b = 1;
    {
      let b = 10; // OKAY since within this block 'b' is different from the above global 'b' as defined using the let keyword
      //   var b = 100; // OKAY since var is flexible and doesn't care about this block {}
    }

    // scenario 3: this works too as var is function scoped and creates a new memory space for the variable
    let c = 20; // this is in block-script scope
    function varOkay() {
      var c = 200; // this is in varOkay function's scope
    }
  })();
};
