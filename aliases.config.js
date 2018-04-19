const path = require('path');

function resolveSrc(_path) {
  return path.join(__dirname, _path);
}

const aliases = {
  '@':        'src',
  _api:       'src/api',
  _apps:      'src/apps',
  _assets:    'src/assets',
  _lib:       'src/lib',
  _router:    'src/router',
  _store:     'src/store',
};

module.exports = {
  webpack: {},
  jest:    {},
};

for (const alias in aliases) {
  module.exports.webpack[alias] = resolveSrc(aliases[alias]);
  module.exports.jest[`^${alias}/(.*)$`] =
    `<rootDir>/${aliases[alias]}/$1`;
}
