/**
 * Entrypoint for configuring and setting up the test environment immediately
 * after Jest has been has been installed in the environment.
 */

// Setup extended Jest matchers
// https://github.com/jest-community/jest-extended
import 'jest-extended'

// Setup custom Jest matchers to assert on the state of the DOM
// https://github.com/testing-library/jest-dom
import '@testing-library/jest-dom'
