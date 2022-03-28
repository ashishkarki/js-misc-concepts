function foo() {
  //   var i = 1;

  for (var i = 1; i <= 5; i++) {
    // try using let to fix this
    // using let causes 1...5 after 1000 ms at the same time (if not multiplied by i below)
    // let causes each i to be different in a different block scope

    ((j) => {
      setTimeout(() => {
        console.log(`i: ${j}`); // eventually prints 6 - 5 times
        // since usage of var means all the 'i's will be in same local soope and point to the same, final value of 6
      }, i * 1000);
    })(i);
  }

  console.log("hello hi");
}

foo();
