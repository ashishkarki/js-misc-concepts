class Person {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }

  introduce() {
    console.log(`Hi, my name is ${this.name} and I am ${this.age} years old.`);
  }
}

class Accountant {
  constructor(yearsOfExperience, highestDegree) {
    this.yearsOfExperience = yearsOfExperience;
    this.highestDegree = highestDegree;
  }

  introduceAccountant() {
    console.log(
      `I am an Accountant and have ${this.highestDegree} degree and also have ${this.yearsOfExperience} years of experience.`
    );
  }
}

class Employee extends Person {
  constructor(name, age, salary) {
    super(name, age);
    this.salary = salary;
  }

  introduce() {
    super.introduce();
    console.log(`And, my salary is ${this.salary}.`);
  }
}
class ComposedEmployee {
  constructor(person, accountant, salary) {
    this.person = person;
    this.accountant = accountant;
    this.salary = salary;
  }

  introduce() {
    this.person.introduce();
    this.accountant.introduceAccountant();
    console.log(`And, my salary is ${this.salary}.`);
  }
}

// inheritance
const employee = new Employee("John", 30, "100k");
employee.introduce();

// composition
const person = new Person("John", 30);
const accountant = new Accountant(5, "Bachelor");
const composedEmployee = new ComposedEmployee(person, accountant, "100k");
composedEmployee.introduce();
