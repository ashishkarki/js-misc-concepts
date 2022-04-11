/**
 * Open Closed Principle
 * => You should be able to extend the functionality of an object without changing its structure.
 * => A class should be open for extension, but closed for modification.
 */

/* Creating a constant object, and freezing it. */
const Colors = Object.freeze({
  RED: "red",
  GREEN: "green",
  BLUE: "blue",
});

const Sizes = Object.freeze({
  SMALL: "small",
  MEDIUM: "medium",
  LARGE: "large",
});

/* "A product has a name, color, and size."

The class has three private fields: #name, #color, and #size. The constructor initializes these
fields. The getters color and size return the values of the private fields. The toString method
returns a string representation of the product */
class Product {
  #name = "";
  #color = "";
  #size = "";

  constructor(name, color, size) {
    this.#name = name;
    this.#color = color;
    this.#size = size;
  }

  get color() {
    return this.#color;
  }

  get size() {
    return this.#size;
  }

  toString() {
    return `${this.#name}: (${this.#color}, ${this.#size})`;
  }
}

class ProductFilter {
  filterByColor(products, color) {
    return products.filter((product) => product.color === color);
  }

  filterBySize(products, size) {
    return products.filter((product) => product.size === size);
  }

  // now say we want to implement a new filter by size and color
  // but, this code has already been tested and deployed in production
  // Do, we want to tinker with the code, and add new filters?
  // RATHER, WE EXTEND THE CLASS, AND ADD NEW FILTERS
  // One way to do this (remove redundancy) is by using "Specification Pattern"
  // https://en.wikipedia.org/wiki/Specification_pattern
  // https://medium.com/c-sharp-progarmming/specification-design-pattern-c814649be0ef
  // => Many reasons may cause us to use this design pattern. One of these is to avoid repeating the condition rules in the code.
}

// Specifications
class Specification {
  constructor() {
    if (new.target === Specification) {
      // this.constructor.name === 'Specification'
      throw new Error("Specification is an abstract class");
    }
  }

  isSatisfied(item) {
    throw new Error("isSatisfied() not implemented");
  }
}

class ColorSpecification extends Specification {
  constructor(color) {
    super();
    this.color = color;
  }

  isSatisfied(product) {
    return product.color === this.color;
  }
}

class SizeSpecification extends Specification {
  constructor(size) {
    super();
    this.size = size;
  }

  isSatisfied(product) {
    return product.size === this.size;
  }
}

class SophisticatedFilter {
  filter(products, spec) {
    return products.filter((product) => spec.isSatisfied(product));
  }
}

// Combinator
class AndSpecification extends Specification {
  constructor(...specs) {
    super();
    this.specs = specs;
  }

  isSatisfied(item) {
    return this.specs.every((spec) => spec.isSatisfied(item));
  }
}

class OrSpecification extends Specification {
  constructor(...specs) {
    super();
    this.specs = specs;
  }

  isSatisfied(item) {
    return this.specs.some((spec) => spec.isSatisfied(item));
  }
}

// this will throw an error because we are trying to create a new instance of an abstract class
// const spect = new Specification();

// export the classes
module.exports = {
  Colors,
  Sizes,
  Product,
  ProductFilter,

  // Specifications
  ColorSpecification,
  SizeSpecification,
  SophisticatedFilter,
  AndSpecification,
};
