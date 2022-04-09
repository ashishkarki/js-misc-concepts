/**
 * Liskov Substitution Principle
 * => Any subclass object should be substitutable for the superclass object from which it is derived.
 * => This semantic relationship often called behavioral subtyping, is applied to develop more correct, extendable, and reusable software.
 */
/**
 * https://carstenbehrens.com/liskov-substitution-principle/
 * In the context of JavaScript, this means that:
 * 1. Methods of a subclass that override methods of a base class must have exactly the same number of arguments.
 * 2. Each argument of the overridden method must be the same type as the method of the base class.
 * 3. The return type of the overridden method must be the same as the method of the base class.
 * 4. The types of exceptions thrown from the overridden method must be the same as the method of the base class.
 */
class Bird {
  fly(speed) {
    return `Flying at ${speed} mph`;
  }
}

// This is OKAY as it follows LSP's laws from above
class Eagle extends Bird {
  fly(speed) {
    return `${super.fly(speed)} through the air`;
  }

  // more of its own methods
  dive() {
    return `Diving down`;
  }
}

// LSP violation: the number of arguments of fly method plus return type are different
class Penguin extends Bird {
  /**
   * The Penguin class violates the LSP in three ways:
   * 1. The overridden fly method does not have the same number of arguments.
   * 2. The return type of the fly method is not the same.
   * 3. The types of exceptions thrown are not the same
   */
  fly() {
    return new Error("Can't fly");
  }

  // maybe more of its own methods
}
