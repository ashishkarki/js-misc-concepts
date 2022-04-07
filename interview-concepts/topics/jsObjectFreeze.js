// object freeze with error
"use strict"; // this will cause object props reassignment to throw error

const objectFreezer = () => {
  const obj = {
    name: "John",
    age: 30,
  };

  // without strict mode, this will fail silently
  // it will ignore the modifications and print the original object
  Object.freeze(obj);

  obj.name = "Jane";
  obj.age = 31;

  console.log(obj);
};

objectFreezer();
