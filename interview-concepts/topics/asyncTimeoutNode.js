const { setTimeout } = require("timers/promises");

const asyncTimeout = async () => {
  console.log(`Print before`);
  const res = await setTimeout(1000, "timeout");
  console.log(`res: ${res}`);
  console.log(`Print after`);
};

(async () => {
  await asyncTimeout();
})();
