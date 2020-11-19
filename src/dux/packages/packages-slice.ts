/**
 * Sets up the reducer and actions for the packages slice use Redux Toolkit
 * @module
 */

import { AnyAction, PayloadAction, createSlice } from '@reduxjs/toolkit'
import { PATHNAME_UPDATED, matchRoute, updatePathname } from 'dux-routing'

import { routeDetails } from '@/config/routing'
import { PackagesById } from './types'

type UpdatePathnameAction = ReturnType<typeof updatePathname>

/** Redux Toolkit matcher for handling PATHNAME_UPDATED actions */
function isPathnameAction(action: AnyAction): action is UpdatePathnameAction {
  return action.type === PATHNAME_UPDATED
}

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

  extraReducers: (builder) => {
    builder.addMatcher(isPathnameAction, (state, action) => {
      // 🤩 THIS ACTION IS TYPE SAFE
      const match = matchRoute(action.payload.pathname, routeDetails.Stack.path)
      if (match) {
        state.selectedPackageId = match.params.package
      }
    })
    /* eslint-enable no-param-reassign */
  },
})

export const { updatePackages } = packagesSlice.actions

export default packagesSlice.reducer
