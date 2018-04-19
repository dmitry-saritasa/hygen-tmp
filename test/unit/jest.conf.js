const path = require('path');
const jestMapper = require('../../aliases.config').jest;

module.exports = {
  rootDir:              path.resolve(__dirname, '../../'),
  moduleFileExtensions: [
    'js',
    'json',
    'vue',
  ],
  moduleNameMapper: jestMapper,
  transform:        {
    '^.+\\.js$':   '<rootDir>/node_modules/babel-jest',
    '.*\\.(vue)$': '<rootDir>/node_modules/vue-jest',
  },
  testPathIgnorePatterns: [
    '<rootDir>/test/e2e',
  ],
  snapshotSerializers: [
    '<rootDir>/node_modules/jest-serializer-vue',
  ],
  setupFiles: [
    '<rootDir>/test/unit/setup',
  ],
  mapCoverage:         true,
  coverageDirectory:   '<rootDir>/test/unit/coverage',
  collectCoverageFrom: [
    'src/**/*.{js,vue}',
    '!src/App.vue',
    '!src/main.js',
    '!src/router/index.js',
    '!**/node_modules/**',
  ],
  globals: {
    'vue-jest': {
      // Disable CSS compilation until it's more stable
      // https://github.com/vuejs/vue-jest/issues/74
      experimentalCSSCompile: false,
    },
  },
};
