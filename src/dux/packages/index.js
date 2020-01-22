import { createAction, createReducer } from '@reduxjs/toolkit'

import { PACKAGE_MAX_SIZE_CHANGED, PACKAGE_SELECTED } from './action-types'

// --------------------------------------------------------
// Action constants + creators

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

export const actions = {
  changeMaxPackageSize,
  selectPackage,
}

// --------------------------------------------------------
// Reduce

const initialState = {
  maxPackageSize: null,
  selectedPackageId: null,
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

// --------------------------------------------------------
// Selectors

export const getSelectedPackageId = state => state.packages.selectedPackageId
export const getPackages = state => Object.values(state.packages.packagesById)
export const getPackage = state =>
  state.packages.packagesById[getSelectedPackageId(state)] || null

export const selectors = {
  getPackages,
  getPackage,
  getSelectedPackageId,
}
