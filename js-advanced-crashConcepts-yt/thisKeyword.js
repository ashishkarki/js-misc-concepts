/**
 * this makes functions reusable by letting you decide what object it belongs to
 * this's value is determined entirely by how a function is called
 */
/**
 * Order of precedence:
 * 1. New binding
 * 2. Explicit binding
 * 3. Implicit binding
 * 4. Window object
 */
const thisKeyword = () => {
  const chalk = require('chalk')
  const fmt = chalk.green.bgMagenta.bold

  console.log(fmt('thisKeyword.js'))

  const person = {
    name: 'John',
    sayMyname: function () {
      console.log(`My name is ${this.name}`)
    },
  }

  // 1. implicit binding -> whatever is to the left of dot is the this
  person.sayMyname()

  // 2. explicit binding -> specify what object to use
  const sayMyName = person.sayMyname.bind(person)
  sayMyName()

  // 2.1 also, call binding -> call the function with the object as the this
  person.sayMyname.call(person)

  // 2.2 apply binding -> call the function with the object as the this
  person.sayMyname.apply(person)

  // 3. new binding -> create a new object and use it as the this
  function Person(fname) {
    // this = {} will be implicitly created by JS when using new keyword
    this.fname = fname
  }

  const john = new Person('John')
  console.log(john.fname)

  // 4. default binding -> use the global object as the this
  console.log(this, this.name)
}

module.exports = thisKeyword
