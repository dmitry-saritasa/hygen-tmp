const fs = require('fs');

function getDirectories(path) {
  return fs.readdirSync(path).filter(
    file => fs.statSync(`${path}/${file}`).isDirectory());
}

module.exports = {
  getDirectories,
};
