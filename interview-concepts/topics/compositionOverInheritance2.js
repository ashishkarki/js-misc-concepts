/**
 * Reference: https://imfaber.me/composition-over-inheritance-in-javascript/
 *
 * COMPOSITION USING FUNCTIONS
 * The key is trying to think in terms of what the objects do rather than what they are.
 * In other words we compose our objects specifying what they can do.
 */

/** Hence, some example actions can look like following:
 * Pet owner: can eat, can run, can adopt
 * Cat: can eat, can run, can meow
 * Dog: can eat, can run, can bark
 * Lion: can eat, can run, can hunt, can roar

 */

/**
 * Now that we have defined what our objects are able to do,
 * we can create these abilities using some factory functions
 */
const canEat = (state) => ({
  eat: () => console.log(`I love eating ${state.food}`),
});

const canRun = (state) => ({
  run: () => console.log(`I'm running hard`),
});

const canAdopt = (state) => ({
  adopt: () => console.log(`I adopted ${state.pet}`),
});

const canBark = (state) => ({
  bark: () =>
    console.log(
      `Woof! I'm ${state.name} and ${state.owner.name} is my master.`
    ),
});

const canTalk = (state) => ({
  talk: () => console.log(`Hi! I'm ${state.name}`),
});

/**
 * Now, instead of extending a super-class we can create factories
 * that combine the required abilities and return objects with their
 * state and methods.
 */
const createPetOwner = (
  name,
  email,
  food = "something yummy!!",
  pet = "none"
) => {
  const state = {
    name,
    email,
    food,
    pet,
  };

  return {
    ...state,
    ...canEat(state),
    ...canRun(state),
    ...canAdopt(state),
    ...canTalk(state),
  };
};

const createDog = (name, owner, food = "canny-soup") => {
  const state = {
    name,
    owner,
    food,
  };

  return {
    ...state,
    ...canEat(state),
    ...canRun(state),
    ...canBark(state),
  };
};

/**
 * We can now create pet owners, dogs etc… and use their abilities.
 */
fabrizio = createPetOwner("Fabrizio", "example@example.com");
bingo = createDog("Bingo", fabrizio);

console.log(fabrizio.talk()); // Hi! I'm Fabrizio
console.log(fabrizio.eat()); // I love eating yummy!!
console.log(fabrizio.run()); // I'm running hard

console.log(bingo.bark()); // Woof! I'm Bingo and Fabrizio is my
