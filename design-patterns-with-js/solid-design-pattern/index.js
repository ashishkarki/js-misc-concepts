// Single Responsibility Principle
(() => {
  console.log(`SOLID: single responsibility principle`);
  const { Journal, FileStore } = require("./topics/singleResponsibility");

  // Journal objects
  const j1 = new Journal("My journal");
  j1.addEntry("I cried today");
  j1.addEntry("I ate a bug");
  j1.printEntries();

  //////////////
  // now store them using FileStore
  const fileDir = `${__dirname}/topics/files`;
  const fileName = `journal-${Date.now()}.txt`;
  const fs = new FileStore(fileDir, fileName);

  // then store this journal
  fs.storeToDisk(j1.name, j1.entries);
})();

// Open Closed Principle
(() => {
  console.log(`\nSOLID: open closed principle`);
  const {
    Product,
    ProductFilter,
    Colors,
    Sizes,
    SophisticatedFilter,
    ColorSpecification,
    SizeSpecification,
    AndSpecification,
  } = require("./topics/openClosed");

  // Product objects
  const p1 = new Product("Shoes", Colors.RED, Sizes.LARGE);
  const p2 = new Product("Socks", Colors.BLUE, Sizes.MEDIUM);
  const p3 = new Product("Sandals", Colors.GREEN, Sizes.SMALL);

  // ProductFilter objects
  const pf = new ProductFilter();
  const products = [p1, p2, p3];

  const filteredProdsByGreenColor = pf.filterByColor(products, Colors.GREEN);
  filteredProdsByGreenColor.forEach((p) => console.log(p.toString()));

  const filteredProdsByLargeSize = pf.filterBySize(products, Sizes.LARGE);
  filteredProdsByLargeSize.forEach((p) => console.log(p.toString()));

  // By using a more sophisticated filter, we can filter by color and size at the same time.
  console.log(`\nPrinting with NEW, more sophisticated filter`);
  const sf = new SophisticatedFilter();
  for (const filteredItem of sf.filter(
    products,
    new ColorSpecification(Colors.RED)
  )) {
    console.log(filteredItem.toString());
  }

  // using combined specifications
  let spec = new AndSpecification(
    new ColorSpecification(Colors.GREEN),
    new SizeSpecification(Sizes.LARGE)
  );
  for (const filteredItem of sf.filter(products, spec)) {
    console.log(filteredItem.toString());
  }
})();
