const nestedFxnScope = () => {
  const chalk = require('chalk')

  console.log(chalk.blue.bgGray.bold('NestFxScope print :>> '))

  /**
   * @description Fact that nested functions have access to the variables of the outer scopes
   */
  let a = 10 // global scope for this function
  function outer() {
    let b = 20

    function inner() {
      let c = 30

      console.log(`a: ${a}, b: ${b}, c: ${c}`)
    }

    inner()
  }

  outer()
}

module.exports = nestedFxnScope
