/**
 * currying in JS is a concept where we transform
 * a function that takes multiple arguments into a
 * sequence of nesting functions that take a single argument at a time.
 *
 * example: f(a, b, c) => f(a)(b)(c)
 */

const currying = () => {
  const chalk = require('chalk')

  console.log(chalk.red.bgWhiteBright.bold('Currying print :>> '))

  const add = (a, b, c) => a + b + c
  console.log('uncurried sum: ', add(1, 2, 3))

  const curriedAdd = (a) => (b) => (c) => a + b + c
  console.log('curried sum: ', curriedAdd(1)(2)(3))
}

module.exports = currying
