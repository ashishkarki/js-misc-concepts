const titleCase = (s) => {
  const lowered = s.toLowerCase();

  const words = lowered.split(" ");
  const titled = words.map((word) => {
    return word[0].toUpperCase() + word.slice(1);
  });

  return titled;
};

module.exports = titleCase;
