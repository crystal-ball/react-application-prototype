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
  globalSetup: '<rootDir>/.jest/global-setup',
  setupFiles: ['<rootDir>/.jest/jest-env-setup.js'],
  setupFilesAfterEnv: ['<rootDir>/.jest/jest-after-env-setup.js'],
  globalTeardown: '<rootDir>/.jest/global-teardown',

  // Snapshot custom component css (it should be used sparingly and be important
  // enough to verify in tests)
  snapshotSerializers: ['jest-emotion'],

  // Configure Jest resolver for non-standard project import and UI resources
  // handled by webpack
  moduleNameMapper: {
    // webpack non-js resources loader mocks
    '\\.(png|jpg)$': '<rootDir>/__mocks__/file-loader-mock.js',
    '\\.svg$': '<rootDir>/__mocks__/svgr-loader-mock.js',
    '\\.scss$': '<rootDir>/__mocks__/scss-loader-mock.js',
    // Configuration for resolving project `@` relative imports (include after
    // loader mocks to ensure they are matched first for resources like
    // `@/media/some.svg`)
    '@/(.*)$': '<rootDir>/src/$1',
  },
}
