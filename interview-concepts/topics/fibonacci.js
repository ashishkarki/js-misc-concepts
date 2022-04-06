const fibo = (n) => {
  if (n < 1) throw new Error("n must be greater than 0");

  if (n > 2) {
    return fibo(n - 1) + fibo(n - 2);
  } else {
    // base case
    return 1; // n -1
  }
};

module.exports = fibo;
