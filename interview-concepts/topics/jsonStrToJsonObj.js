/**
 * Takes a json object wrapped in a string and returns an object which is a JSON
 */
const jsonStrToJsonObj = (jsonStr) => {
  // const sj = '{"name":"John", "age":30, "city":"New York"}';
  const jsonObj = solution2(jsonStr);
  //solution1(jsonStr);

  console.log(`object: ${jsonObj}`);
  return jsonObj;
};

// Space: O(n) - where n is the length of the original string
// Time: O(n) - where n is the length of the original string
const solution2 = (jsonStr) => {
  const jsonObj = {};
  const jsonArr = jsonStr.replace(/[{}"]/g, "").split(",");
  jsonArr.forEach((item) => {
    const keyValue = item.split(":");
    jsonObj[keyValue[0]] = keyValue[1];
  });
  return jsonObj;
};

const solution1 = (jsonStr) => JSON.parse(jsonStr);

module.exports = jsonStrToJsonObj;
