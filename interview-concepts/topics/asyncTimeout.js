// create a `wait` function using setTimeout and async await
const wait = async (timeout) => {
  // https://javascript.info/promise-basics
  return new Promise((resolve, _reject) =>
    setTimeout(() => resolve(console.log("hi")), timeout)
  );
};

(async () => {
  console.log("before inside wait's iife");

  await wait(100);

  // https://javascript.info/promise-basics
  // more importantly, https://www.freecodecamp.org/news/async-await-in-javascript/
  await new Promise((resolve, _reject) =>
    setTimeout(() => resolve(console.log("hi2")), 3000)
  );

  setTimeout(() => {
    console.log(`timeout after 1 second inside wait's iife`);
  }, 0);

  console.log("after inside wait's iife");
})();

setTimeout(() => {
  console.log(`timeout after 1 second - outside the wait's parent iife`);
}, 0);
