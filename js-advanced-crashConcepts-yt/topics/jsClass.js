const jsClass = () => {
  const chalk = require('chalk')
  const fmt = chalk.green.bgYellowBright.bold

  console.log(fmt('jsClass.js'))

  // 1. Class
  class Person {
    constructor(name, age) {
      this.name = name
      this.age = age
    }

    sayNameAndAge() {
      console.log(`My name is ${this.name} and I am ${this.age} years old`)
    }
  }

  const john = new Person('John', 30)
  john.sayNameAndAge()

  // 2. Inheritance
  class Student extends Person {
    constructor(name, age, grade) {
      super(name, age)
      this.grade = grade
    }

    sayGrade() {
      console.log(`${this.name} is in grade ${this.grade}`)
    }
  }

  const jane = new Student('Jane', 20, 'A')
  jane.sayNameAndAge()
  jane.sayGrade()
}

module.exports = jsClass
