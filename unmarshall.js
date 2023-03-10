const { unmarshall } = require("@aws-sdk/util-dynamodb");
const readInput = require("./readInput");

(async () => {
  const json = await readInput.parseInput();

  const unmarshalledData = unmarshall(json);
  console.log(JSON.stringify(unmarshalledData));
})();
