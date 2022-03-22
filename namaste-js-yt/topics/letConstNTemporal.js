/**
 * Are variables with let and const keyword hoisted ?
 * 1. one thing is clear - you cannot access variables with let/const before they are declared.
 * 2. YES, they are hoisted (similar to var keyword) and assigned with the default value of undefined. But, while variables with var keyword are one way or other a part of the GLOBAL scope, variables with let and const are NOT part of this GLOBAL scope in any way.
 * 3. Variables with let and const are stored in an area separate to GLOBAL scope. And, so the "Temporal Dead Zone" (TDZ) is the time between when such variable is hoisted (and assigned undefined) and when that variable is assigned a value. And, you cannot access variables in the TDZ before they are declared (i.e have been assigned a value).
 */
/**
 * let vs const:
 * 1. let allows you to define and then declare a variable in different places. const forces you to initialize a variable in the same place where it is declared.
 * 2. const disallows reassignment of a variable. let allows reassignment.
 */
export const letConstNTemporal = () => {
  (() => {
    console.log(`%%%%%%%\nexample 1`);

    // console.log(`a with let keyword = ${a}`); // ReferenceError
    console.log(`b with var keyword = ${b}`);

    let a = 2; // yes, a is also hoisted but cannot be accessed before it is assigned a value
    var b = 4; // var is flexible and doesn't care about declaration before access
  })();

  (() => {
    console.log(`%%%%%%%\nexample 2`);

    /**
     * Very important to note is that variables with let and const aren't strictly allowed to be redeclared.
     * And, if done so JS will throw a SyntaxError and halt the execution of any line of that program.
     */
    console.log(`just some placeholder that will not be executed..`);
    let a = 100;
    a = "harry"; // Data-type change is OKAY though since JS is loosly typed
    // let a = 2; // throws SyntaxError: Identifier 'a' has already been declared
    // var a = 2; // throws SyntaxError: Identifier 'a' has already been declared
    console.log(`a = ${a}`);

    /**
     * However with var keyword, redeclaration doesn't result in any SyntaxError although it might be logically wrong
     */
    var b = 100;
    var b = 3.5;
    var b = "barry";
    console.log(`b = ${b}`);
  })();
};
