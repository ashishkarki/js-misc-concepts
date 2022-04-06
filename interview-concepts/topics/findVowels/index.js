// function to count the number of vowels in a string
const countVowels = (str) => {
  const vowels = ["a", "e", "i", "o", "u"];
  //   let count = 0;
  //   for (let char of str.toLowerCase()) {
  //     if (vowels.includes(char)) {
  //       count++;
  //     }
  //   }
  //   return count;

  return str
    .toLowerCase()
    .split("")
    .filter((char) => vowels.includes(char)).length;
};

module.exports = countVowels;
