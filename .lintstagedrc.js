module.exports = {
  '*.{js,ts}': ['eslint --cache --fix', 'prettier --write'],
  '*.{yml,md,json}': 'prettier --write',
}
