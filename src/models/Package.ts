/**
 * Types and utility fns for working with a Package
 * @module
 */

export type Package = {
  /** Whether the package is only used in development */
  devDependency: boolean
  /** Package's description from package.json */
  description: string
  /** Published dependency name */
  name: string
  /** Published dependency version */
  version: string
}

// See https://docs.npmjs.com/about-packages-and-modules for info on packages vs modules:
// A module is any file or directory in `node_modules` that can be loaded by Node.js
// A package is a file or directory that is described by a package.json file
