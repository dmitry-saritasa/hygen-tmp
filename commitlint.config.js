/**
 * If you need to add your own validated
 * scope for git commit message, just add a new value to scope-enum
 * as shown below
 * code - this is general scope
 * deployment - when devops team does something related to CI/CD
 */
module.exports = {
  extends: ['@commitlint/config-conventional'],
  rules: {
    'scope-enum': [1, "always", [
      'code',
      'deployment',
    ]],
  }

};
