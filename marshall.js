const { marshall } = require("@aws-sdk/util-dynamodb");
const readInput = require("./readInput");

(async () => {
  const json = await readInput.parseInput();

  const marshalledData = marshall(json);
  console.log(JSON.stringify(marshalledData));
})();
