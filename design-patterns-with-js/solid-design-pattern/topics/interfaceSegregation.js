/**
 * Interface Segregation Principle
 * => No code should be forced to depend on methods it does not use. (basically client should not be forced to inherit from a bulky or fat interface)
 * ISP splits interfaces that are very large into smaller and more specific ones so that clients will only have to know about the methods that are of interest to them.
 */

/**
 * Example 1: https://duncan-mcardle.medium.com/solid-principle-4-interface-segregation-javascript-cb2508422c5d
 * Now, this functionality is a little more difficult to demonstrate using JavaScript, due to its lack of interfaces. However, we can demonstrate it by using composition.
 * Instead of inheriting an entire class, we can instead add chunks of functionality to a class. Here’s an example that actually addresses the interface segregation principle:
 */
const InterfaceSegregation = () => {
  class Bird {}

  class Penguin {}

  const flyer = {
    fly() {
      return "I am flying!";
    },
  };

  // Bird can fly, so assign flyer to it
  Object.assign(Bird.prototype, flyer);

  const bird = new Bird();
  console.log(bird.fly()); // I am flying!

  // but Penguin can't fly, so we don't extend it with flyer
  const penguin = new Penguin();
  //   console.log(penguin.fly()); // undefined
};

module.exports = InterfaceSegregation;
