import { RootState } from '@/dux/root-reducer'
import { Dependency } from '@/entities/dependency'
import { DependenciesById } from './types'

/** Select the fetched packages data normalized by id */
export const selectDependenciesById = (state: RootState): DependenciesById => {
  return state.dependencies.dependenciesById
}

/** Select the currently selected package's id */
export const selectSelectedDependencyId = (state: RootState): string => {
  return state.dependencies.selectedDependencyId
}

/** Select a package's details by id */
export const selectDependency =
  (packageId: string) =>
  (state: RootState): Dependency => {
    return selectDependenciesById(state)[packageId]
  }
