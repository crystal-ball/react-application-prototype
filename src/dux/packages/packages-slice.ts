/**
 * Sets up the reducer and actions for the packages slice use Redux Toolkit
 * @module
 */

import { PayloadAction, createSlice } from '@reduxjs/toolkit'

import { PackagesById } from './types'

/** Packages' Redux state */
type PackagesState = {
  /** Map of packages with package ids as keys */
  packagesById: PackagesById
  /** Id of the currently selected package */
  selectedPackageId: string
}

const initialState: PackagesState = {
  packagesById: {},
  selectedPackageId: '',
}

export const packagesSlice = createSlice({
  name: 'packages',
  initialState,
  /* eslint-disable no-param-reassign */
  reducers: {
    updatePackages(state, action: PayloadAction<PackagesById>) {
      state.packagesById = action.payload
    },
  },
  /* eslint-enable no-param-reassign */
  // TODO: Add a builder updating selectedPackage when route changes
  // extraReducers: (builder) => {}
})

export const { updatePackages } = packagesSlice.actions

export default packagesSlice.reducer
