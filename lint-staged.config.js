module.exports = {
  'src/**/*.js': [
    'eslint --fix',
    'prettier --write',
    'git add',
    'npm run unit --bail --findRelatedTests',
  ],
  '*.json': [
    'prettier --write',
    'git add',
  ],
  '*.vue': [
    'eslint --fix',
    'stylelint --fix',
    'prettier --write',
    'git add',
    'npm run unit --bail --findRelatedTests',
  ],
  '*.scss': [
    'postcss --replace',
    'stylelint --syntax=scss --fix',
    'prettier --write',
    'git add'
  ],
  '*.md': [
    'markdownlint',
    'prettier --write',
    'git add'
  ],
  '*.{png,jpeg,jpg,gif,svg}': [
    'imagemin-lint-staged',
    'git add'
  ],
};
