import { RootState } from '@/dux/root-reducer'
import { Package } from '@/models/Package'
import { PackagesById } from './types'

/** Select the fetched packages data normalized by id */
export const selectPackagesById = (state: RootState): PackagesById => {
  return state.packages.packagesById
}

/** Select the currently selected package's id */
export const selectSelectedPackageId = (state: RootState): string => {
  return state.packages.selectedPackageId
}

/** Select a package's details by id */
export const selectPackage = (packageId: string) => (state: RootState): Package => {
  return selectPackagesById(state)[packageId]
}
