/* global process */
/* eslint-disable prefer-destructuring */

// ℹ️ Do not use destructuring, these values are replaced at build time by
// webpack use string matching of the entire process.env.VAR sequence

export const DEBUG = process.env.DEBUG
export const LS_ACCESS_TOKEN = process.env.LS_ACCESS_TOKEN
export const NODE_ENV = process.env.NODE_ENV
export const PACKAGE_VERSION = process.env.PACKAGE_VERSION
export const RELEASE_VERSION = process.env.RELEASE_VERSION
