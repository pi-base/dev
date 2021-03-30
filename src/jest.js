module.exports = {
  clearMocks: true,
  coverageDirectory: 'coverage',
  coveragePathIgnorePatterns: ['/node_modules/'],
  coverageProvider: 'v8',
  errorOnDeprecated: true,
  moduleFileExtensions: ['js', 'ts'],
  notify: true,
  notifyMode: 'failure-change',
  resetMocks: true,
  roots: ['src'],
  testEnvironment: 'node',
  testMatch: ['**/*.test.ts'],
  transform: {
    '^.+\\.ts$': 'ts-jest',
  },
  verbose: true,
}
