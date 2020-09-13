/* global process */
/* eslint-disable prefer-destructuring */

// ℹ️ Do not use destructuring, these values are replaced at build time by
// webpack use string matching of the entire process.env.VAR sequence

export const APPLICATION_DEPENDENCIES = process.env.APPLICATION_DEPENDENCIES
export const DEBUG = process.env.DEBUG
export const NODE_ENV = process.env.NODE_ENV
export const PACKAGE_VERSION = process.env.PACKAGE_VERSION
