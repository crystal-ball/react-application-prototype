import { parseSearchParams } from '@/utils/routing'
import { ReduxState } from '@/dux/types'
import { PackagesActionTypes, PackagesState, Status } from './types'

// --- Action creators ------------------------------------

/** Create a selected package id updated action */
export function updateSelectedPackageId(selectedPackageId: string) {
  return {
    type: PackagesActionTypes.SelectedPackageIdUpdated,
    payload: selectedPackageId,
  } as const
}

/** Create a package search filter updated action */
export function updatePackageSearchFilter(packageSearchFilter: string) {
  return {
    type: PackagesActionTypes.PackageSearchFilterUpdated,
    payload: packageSearchFilter,
    meta: {
      searchParams: { search: packageSearchFilter },
    },
  } as const
}

type PackagesActions = ReturnType<
  typeof updateSelectedPackageId | typeof updatePackageSearchFilter
>

// --- Reducer -------------------------------------------

const initialState: PackagesState = {
  packagesById: {},
  packageSearchFilter: parseSearchParams(document.location.search).search || '',
  selectedPackageId: '',
  status: Status.Idle,
}

/* eslint-disable default-param-last */
export default function reducer(
  state = initialState,
  action: PackagesActions,
): PackagesState {
  switch (action.type) {
    case PackagesActionTypes.PackageSearchFilterUpdated: {
      return {
        ...state,
        packageSearchFilter: action.payload,
      }
    }

    case PackagesActionTypes.SelectedPackageIdUpdated: {
      return {
        ...state,
        selectedPackageId: action.payload,
        status: Status.Loading,
      }
    }

    default:
      return state
  }
}
/* eslint-enable default-param-last */

// --- Selectors------------------------------------------

/** Get the currently selected package's id */
export const getSelectedPackageId = (state: ReduxState) =>
  state.packages.selectedPackageId

/** Get the cache of fetched packages data normalized by id */
export const getPackagesById = (state: ReduxState) => state.packages.packagesById

/** Get a package's details from the cache by id */
export const getPackage = (packageId: string) => (state: ReduxState) =>
  getPackagesById(state)[packageId]

/** Get the current package search filter */
export const getPackageSearchFilter = (state: ReduxState) =>
  state.packages.packageSearchFilter
