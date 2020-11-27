import { Dependency } from '@/entities/dependency'

/** Normalized map of fetched dependencies by id */
export type DependenciesById = Record<string, Dependency>
