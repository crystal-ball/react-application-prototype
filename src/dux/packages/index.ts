import {
  PATHNAME_UPDATED,
  matchRoute,
  parseSearchParams,
  updatePathname,
} from 'dux-routing'

import { routes } from '@/config/routing'
import { ReduxState } from '@/dux/types'
import {
  Package,
  PackagesActionTypes,
  PackagesById,
  PackagesState,
  Status,
} from './types'

// --- Action creators ------------------------------------
/* eslint-disable @typescript-eslint/explicit-module-boundary-types */

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

/* eslint-enable @typescript-eslint/explicit-module-boundary-types */

type Action = ReturnType<typeof updatePathname | typeof updatePackageSearchFilter>

// --- Reducer -------------------------------------------

const initialState: PackagesState = {
  packagesById: {},
  packageSearchFilter: parseSearchParams(document.location.search).search || '',
  selectedPackageId: '',
  status: Status.Idle,
}

/* eslint-disable default-param-last */
export default function reducer(state = initialState, action: Action): PackagesState {
  switch (action.type) {
    case PackagesActionTypes.PackageSearchFilterUpdated: {
      return {
        ...state,
        packageSearchFilter: action.payload,
      }
    }

    case PATHNAME_UPDATED: {
      const { pathname } = action.payload
      const packagePathnameMatch = matchRoute(pathname, routes.stack)

      if (packagePathnameMatch) {
        const selectedPackageId = packagePathnameMatch.params.package
        return {
          ...state,
          selectedPackageId,
        }
      }

      return state
    }

    default:
      return state
  }
}
/* eslint-enable default-param-last */

// --- Selectors------------------------------------------

/** Get the cache of fetched packages data normalized by id */
function getPackagesById(state: ReduxState): PackagesById {
  return state.packages.packagesById
}

/** Get the currently selected package's id */
export function getSelectedPackageId(state: ReduxState): string {
  return state.packages.selectedPackageId
}

/** Get a package's details from the cache by id */
export function getPackage(packageId: string) {
  return (state: ReduxState): Package => getPackagesById(state)[packageId]
}

/** Get the current package search filter */
export function getPackageSearchFilter(state: ReduxState): string {
  return state.packages.packageSearchFilter
}
