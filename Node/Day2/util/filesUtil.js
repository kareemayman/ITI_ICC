const fs = require('fs');

function readFile(filePath) {
  return JSON.parse(fs.readFileSync(filePath).toString());
}

function saveFile(filePath, data) {
    fs.writeFileSync(filePath, JSON.stringify(data));
}

module.exports = {
    readFile,
    saveFile,
}