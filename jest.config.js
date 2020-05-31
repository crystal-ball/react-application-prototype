'use strict'

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

  // Require unit test coverage for Redux logic
  coverageThreshold: {
    'src/dux': {
      branches: 35,
      functions: 50,
      statements: 65,
    },
  },

  // Environment setup entrypoints in order of execution
  globalSetup: '<rootDir>/.jest/global-setup',
  setupFiles: ['<rootDir>/.jest/jest-env-setup.js'],
  setupFilesAfterEnv: ['<rootDir>/.jest/jest-after-env-setup.js'],
  globalTeardown: '<rootDir>/.jest/global-teardown',

  // Configure Jest resolver for non-standard project import and UI resources
  // handled by webpack
  moduleNameMapper: {
    // webpack non-js resources loader mocks
    '\\.(png|jpg)$': '<rootDir>/__mocks__/file-loader-mock.js',
    '\\.svg$': '<rootDir>/__mocks__/svgr-loader-mock.js',
    '\\.scss$': '<rootDir>/__mocks__/scss-loader-mock.js',
  },
}
