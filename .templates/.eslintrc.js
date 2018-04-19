// https://eslint.org/docs/user-guide/configuring

module.exports = {
  root: true,
  parserOptions: {
    parser: 'babel-eslint'
  },
  env: {
    browser: true,
    es6: true,
    jquery: true,
  },
  extends: [
    'airbnb-base',
  ],
  // required to lint *.vue files
  plugins: [
    'eslint-comments',
    'compat',
  ],
  // add your custom rules here
  rules: {
    // don't require .vue extension when importing
    'import/extensions': ['error', 'always', {
      js: 'never',
    }],
    // disallow reassignment of function parameters
    // disallow parameter object manipulation except for specific exclusions
    'no-param-reassign': ['error', {
      props: true,
      ignorePropertyModificationsFor: [
        'state', // for vuex state
        'acc', // for reduce accumulators
        'e' // for e.returnvalue
      ]
    }],
    'object-curly-spacing': ['error', 'always'],
    'space-in-parens': ['error', 'never'],
    // allow optionalDependencies
    'import/no-extraneous-dependencies': ['error', {
      optionalDependencies: ['test/unit/index.js']
    }],
    'import/newline-after-import': 'error',
    'import/no-named-as-default-member': 'off',
    'no-plusplus': 'off',
    'max-params': ['error', 3],
    'comma-style': ['error', 'last'],
    'comma-dangle': ['error', 'always'],
    'require-jsdoc': 'off',
    'padding-line-between-statements': [
      'error',
      {
        'blankLine': 'always',
        'prev': ['const', 'let', 'var'],
        'next': '*'
      },
      {
        'blankLine': 'always',
        'prev': '*',
        'next': ['const', 'let', 'var']
      },
      {
        'blankLine': 'any',
        'prev': ['const', 'let', 'var'],
        'next': ['const', 'let', 'var']
      },
      {
        'blankLine': 'always',
        'prev': '*',
        'next': ['case', 'default']
      },
      {
        'blankLine': 'always',
        'prev': ['const', 'let', 'var', 'block', 'block-like'],
        'next': ['block', 'block-like']
      },
      {
        'blankLine': 'always',
        'prev': 'directive',
        'next': '*'
      },
      {
        'blankLine': 'any',
        'prev': 'directive',
        'next': 'directive'
      },
      {
        'blankLine': 'always',
        'prev': '*',
        'next': 'return'
      }
    ],
    'no-bitwise': ['error', { 'int32Hint': true }],
    'quotes': ['error', 'single'],
    'semi': ['error', 'always'],
    'dot-location': ['error', 'property'],
    'object-property-newline': 'error',
    'max-len': ['error',
      {
        'code': 80,
        'ignoreComments': true,
        'ignoreTrailingComments': true,
        'ignoreUrls': true,
        'ignoreStrings': true,
        'ignoreTemplateLiterals': true,
      }
    ],
    'no-shadow': 'off',
    'array-bracket-spacing': ['error',
      'always',
      {
        'singleValue': false,
      }
    ],
    'no-underscore-dangle': 'off',
    'spaced-comment': ['error', 'always', { 'exceptions': ['-', '+', '=', '*'] }],
    'key-spacing': ["error", { "align": "value" }],
    'eslint-comments/disable-enable-pair': 'error',
    'eslint-comments/no-duplicate-disable': 'error',
    'eslint-comments/no-unlimited-disable': 'error',
    'eslint-comments/no-unused-disable': 'warn',
    'eslint-comments/no-unused-enable': 'warn',
    // browser compatibility error
    // Use caniuse and @kangax's compat table for determining coverage
    'compat/compat': 'error',
  }
};
