// const flattenArray = require('./topics/flattenArray')
// flattenArray()

// const stOutput = require('./topics/setTimeoutOutput')
// stOutput()

const jsonStrToJsonObj = require("./topics/jsonStrToJsonObj");
const sj = '{"name":"John", "age":30, "city":"New York"}';
const result = jsonStrToJsonObj(sj);
console.log(result.name);
