/**
 * a closure is a function that has access to variables in its scope even after the function has returned.
 *
 * A closure is the combination of a function and the lexical environment within which that function was declared.
 *
 * IMPORTANT: Closures are created every time a function is created, at the time of function definition.
 */
const closures = () => {
  const chalk = require('chalk')

  console.log(chalk.cyanBright.bgGray.bold('Closures print :>> '))

  function outer() {
    let counter = 0

    function inner() {
      counter++
      console.log(`counter: ${counter}`)
    }

    return inner
  }

  const fn = outer()

  // a new counter variable will be created in the
  // memory every time the outer function is called
  // outer()
  fn() // 1

  /** JS will keep the function 'inner' as well as everything inner needs in memory so that it has a reference to the 'counter' variable between calls
   */
  fn() // 2
}

module.exports = closures
