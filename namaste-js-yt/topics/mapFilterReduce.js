const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// using reduce to sum them
const sum = arr.reduce((acc, curr) => acc + curr, 0);
console.log(`Reduce, sum: ${sum}`);

// using reduce to calculate max
const actualMax = arr.slice(1).reduce((max, curr) => {
  //   if (curr > max) {
  //     // what is going to be the new value of 'max'
  //     return curr;
  //   }

  //   // if max is still the max, return max
  //   return max;

  // or this works too
  // at each step, return the max of the current value and the max value -> which before the reduce completes its cycle is always assigned to the local max value
  return Math.max(max, curr);

  // or this works too
  if (curr > max) {
    max = curr;
  }

  return max;
}, arr[0]);
console.log(`Reduce, max: ${actualMax}`);

// combining reduce and filter etc
const users = [
  { firstName: "John", lastName: "Doe", age: 20 },
  { firstName: "Jane", lastName: "Doe", age: 30 },
  { firstName: "John", lastName: "Smith", age: 40 },
  { firstName: "Jane", lastName: "Smith", age: 50 },
];

// find firstName of all users whose age <= 30
const predicate = (user) => user.age <= 30;
const mapper = (user) => user.firstName;
const filteredUsers = users.filter(predicate).map(mapper);
console.log(`firstName of all users whose age <= 30: ${filteredUsers}`);
