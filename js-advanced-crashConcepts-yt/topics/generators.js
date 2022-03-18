/**
 * Generators are functions that help us write iterators in a less verbose way
 */
const generators = () => {
  const chalk = require('chalk')
  const fmt = chalk.blue.bgMagenta.bold

  console.log(fmt('generators.js'))

  /**
   * Normal functions run to completion that is to
   * the last line. To stop them mid-way we have to
   * either return or throw error
   *
   * But, generators functions can return a value
   * any time it 'yields' a value
   */
  function* generatorFxn() {
    yield 1
    yield 2
    yield 3
  }

  // Generator function can be called like a normal function
  // the returned value is an iterator object
  const generatorObj = generatorFxn()

  // We can iterate over the iterator object
  for (const value of generatorObj) {
    console.log(value)
  }
}

module.exports = generators
