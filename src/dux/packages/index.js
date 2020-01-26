import { createAction, createReducer } from '@reduxjs/toolkit'

import { parseSearchParams } from '@/utils/routing'
import { PACKAGE_MAX_SIZE_CHANGED, PACKAGE_SELECTED } from './action-types'

// --- Action creators ------------------------------------

export const changeMaxPackageSize = createAction(PACKAGE_MAX_SIZE_CHANGED)
export const selectPackage = createAction(PACKAGE_SELECTED, function prepare(
  selectedPackageId,
) {
  return {
    payload: selectedPackageId,
    meta: {
      searchParamsUpdate: true,
      searchParams: {
        package: selectedPackageId,
      },
    },
  }
})

// --- Reducer -------------------------------------------

const initialState = {
  /** Maximum size in kB to show for packages */
  maxPackageSize: 0,
  /** Id of the currently selected package */
  selectedPackageId: parseSearchParams(document.location.search).package || null,
  /** Map of packages with package ids as keys */
  packagesById: {
    componentry: {
      id: 'componentry',
      name: 'Componentry',
      size: 6.7,
    },
    redux: {
      id: 'redux',
      name: 'Redux',
      size: 2.7,
    },
  },
}

/* eslint-disable no-param-reassign */
export default createReducer(initialState, {
  [changeMaxPackageSize]: (state, action) => {
    state.maxPackageSize = action.payload
  },
  [selectPackage]: (state, action) => {
    state.selectedPackageId = action.payload
  },
})
/* eslint-enable no-param-reassign */

// --- Selectors------------------------------------------

export const getSelectedPackageId = state => state.packages.selectedPackageId
export const getPackages = state => Object.values(state.packages.packagesById)
export const getPackage = state =>
  state.packages.packagesById[getSelectedPackageId(state)] || null

export const selectors = {
  getPackages,
  getPackage,
  getSelectedPackageId,
}
