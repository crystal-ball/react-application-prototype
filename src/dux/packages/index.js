import { createAction, createReducer } from '@reduxjs/toolkit'

import { MAX_PACKAGE_SIZE_CHANGED } from './actions'

// --------------------------------------------------------
// Action constants + creators

export const changeMaxPackageSize = createAction(MAX_PACKAGE_SIZE_CHANGED)

export const actions = {
  changeMaxPackageSize,
}

// --------------------------------------------------------
// Reduce

const initialState = {
  maxPackageSize: null,
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
})
/* eslint-enable no-param-reassign */

// --------------------------------------------------------
// Selectors

export const getPackages = state => Object.values(state.packages.packagesById)
export const getPackage = id => state => state.packages.packagesById[id] || null

export const selectors = {
  getPackages,
  getPackage,
}
