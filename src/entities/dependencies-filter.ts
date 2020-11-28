/**
 * Type and fns for application DependenciesFilter entity
 * @module
 */

/** Iterable set of dependencies filters */
export const DEPENDENCIES_FILTERS = ['all', 'dependencies', 'devDependencies'] as const

export type DependenciesFilter = typeof DEPENDENCIES_FILTERS[number]
