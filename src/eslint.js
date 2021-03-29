const js = {
  env: {
    node: true,
    es6: true,
    'jest/globals': true
  },
  plugins: [
    'jest',
    'prettier',
  ],
  extends: [
    'eslint:recommended',
    'plugin:prettier/recommended',
    'plugin:@typescript-eslint/recommended',
    'plugin:@typescript-eslint/recommended-requiring-type-checking'
  ],
  rules: {
    "jest/no-focused-tests": "error",
    "jest/no-identical-title": "error",
    "jest/prefer-to-have-length": "warn",
    "jest/valid-expect": "error",
    'prettier/prettier': 'error'
  },
}

module.exports = {
  ...js,
  ignorePatterns: ['*.d.ts'],
  extends: [
    'eslint:recommended',
    'plugin:prettier/recommended',
  ],
  overrides: [{
    files: ["**/*.ts", "**/*.tsx"],
    parser: '@typescript-eslint/parser',
    parserOptions: {
      project: './tsconfig.json'
    },
    plugins: [...js.plugins, '@typescript-eslint'],
    extends: [
      ...js.extends,
      'plugin:@typescript-eslint/recommended',
      'plugin:@typescript-eslint/recommended-requiring-type-checking'
    ]
  }]
}
