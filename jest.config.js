/* eslint-env node */

module.exports = {
  // Provides nice test output of what's being run
  verbose: true,

  // OS notifications of test results is an opt in feature, enable by setting
  // a truthy env value in your shell environment
  notify: Boolean(process.env.ENABLE_JEST_NOTIFICATIONS),

  // Ignore Cypress acceptance tests
  testPathIgnorePatterns: ['/node_modules/', '<rootDir>/cypress'],

  // Collect test coverage of source files (excluding stories), report
  // text-summary for devs and lcov for reporting to Code Climate in CI/CD envs.
  collectCoverage: true,
  coverageReporters: ['text-summary', 'lcov'],
  collectCoverageFrom: ['src/**/*.js', '!**/*.stories.js'],

  // Environment setup entrypoints in order of execution
  globalSetup: '<rootDir>/test/global-setup',
  setupFiles: ['<rootDir>/test/jest-env-setup.js'],
  setupFilesAfterEnv: ['<rootDir>/test/jest-after-env-setup.js'],
  globalTeardown: '<rootDir>/test/global-teardown',

  // Configure Jest resolver for non-standard project import and UI resources
  // handled by webpack
  moduleNameMapper: {
    // Configuration for resolving project `@` relative imports
    '@/(.*)$': '<rootDir>/src/$1',
    // webpack non-js resources loader mocks
    '\\.(png|jpg)': '<rootDir>/__mocks__/file-loader-mock.js',
    '\\.scss': '<rootDir>/__mocks__/scss-loader-mock.js',
  },
}
