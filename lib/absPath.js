const { resolve } = require('path');

const absPath = (filepath) => {
  return resolve(process.cwd(), filepath);
}

module.exports = absPath;
