/**
 * Type and fns for application Dependency entity
 * @module
 */

/** Dependency development vs production type */
export type DependencyType = 'dependencies' | 'devDependencies'

export type Dependency = {
  /** Dependency development vs production type */
  type: DependencyType
  /** Published dependency name */
  name: string
  /** Published dependency version */
  version: string
}

// ℹ️ Fun facts:
// See https://docs.npmjs.com/about-packages-and-modules for info on packages vs modules:
// A module is any file or directory in `node_modules` that can be loaded by Node.js
// A package is a file or directory that is described by a package.json file
