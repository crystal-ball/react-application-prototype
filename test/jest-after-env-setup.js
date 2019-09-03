/* eslint-env node */

/**
 * Entrypoint for configuring and setting up the test environment immediately
 * after Jest has been has been installed in the environment.
 */

/**
 * Load custom jest matchers to assert on the state of the DOM
 * https://github.com/testing-library/jest-dom
 */
import '@testing-library/jest-dom/extend-expect'
