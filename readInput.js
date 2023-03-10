const fs = require("fs");

const filename = process.argv[2];
if (!filename) {
  console.log("Usage: node main.js <filename|->");
  process.exit();
}

let data;

exports.parseInput = async () => {
  if (filename === "-") {
    var stdinBuffer = fs.readFileSync(0); // STDIN_FILENO = 0
    data = stdinBuffer.toString();
  } else {
      try {
        data = await readFile(filename);
      } catch (err) {
        console.err(err);
      }
  }

  return JSON.parse(data);
};

function readFile(filepath) {
  return new Promise((resolve, reject) => {
    fs.readFile(filepath, 'utf-8', (err, data) => {
      if (err) {
        reject(err);
        return;
      }

      resolve(data);
    });
  });
};
