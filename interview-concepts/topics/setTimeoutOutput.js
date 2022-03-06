const setTimeoutOutput = () => {
  function f() {
    // var i
    for (var i = 0; i < 3; i++) {
      function g(x) {
        setTimeout(() => {
          console.log(x)
        }, x * 1000)
      }

      g(i)
    }
  }

  f()
  // prints 3, 3, 3 when using var in the for loop

  const compose = (...fns) => (...args) =>
    fns.reduceRight((acc, curr) => curr(acc), args)
}

module.exports = setTimeoutOutput
