/**
 * Sets up the reducer and actions for the dependencies slice use Redux Toolkit
 * @module
 */

import { AnyAction, PayloadAction, createSlice } from '@reduxjs/toolkit'
import { PATHNAME_UPDATED, matchRoute, updatePathname } from 'dux-routing'

import { routeDetails } from '@/config/routing'
import { DependenciesById } from './types'

type UpdatePathnameAction = ReturnType<typeof updatePathname>

/** Redux Toolkit matcher for handling PATHNAME_UPDATED actions */
function isPathnameAction(action: AnyAction): action is UpdatePathnameAction {
  return action.type === PATHNAME_UPDATED
}

/** Packages' Redux state */
type DependenciesState = {
  /** Map of dependencies with dependency ids as keys */
  dependenciesById: DependenciesById
  /** Id of the currently selected dependency */
  selectedDependencyId: string
}

const initialState: DependenciesState = {
  dependenciesById: {},
  selectedDependencyId: '',
}

export const dependenciesSlice = createSlice({
  name: 'dependencies',
  initialState,
  /* eslint-disable no-param-reassign */
  reducers: {
    updateDependencies(state, action: PayloadAction<DependenciesById>) {
      state.dependenciesById = action.payload
    },
  },

  extraReducers: (builder) => {
    builder.addMatcher(isPathnameAction, (state, action) => {
      // 🤩 THIS ACTION IS TYPE SAFE
      const match = matchRoute(action.payload.pathname, routeDetails.Stack.path)
      if (match) {
        state.selectedDependencyId = match.params.package
      }
    })
    /* eslint-enable no-param-reassign */
  },
})

export const { updateDependencies } = dependenciesSlice.actions

export default dependenciesSlice.reducer
