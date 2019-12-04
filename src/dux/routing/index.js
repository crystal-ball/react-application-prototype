import { createAction, createReducer } from '@reduxjs/toolkit'

const parseSearchParams = (search = '') => {
  if (!URLSearchParams) return {}
  const searchParams = new URLSearchParams(search)
  const parsedSearchParams = {}

  for (const [key, value] of searchParams.entries()) {
    parsedSearchParams[key] = value
  }
  return parsedSearchParams
}

const stringifySearchParams = (params = {}) => {
  if (!URLSearchParams) return ''
  const searchParams = new URLSearchParams()

  Object.keys(params).forEach(key => {
    searchParams.set(key, params[key])
  })
  const stringifiedParams = searchParams.toString()
  return stringifiedParams ? `?${stringifiedParams}` : ''
}

// --------------------------------------------------------
// Action constants + creators

export const changeLocation = createAction(
  'ROUTING/LOCATION_CHANGED',
  ({ event = 'replaceState', pathname, resetScroll = true, searchParams = {} }) => ({
    payload: {
      event,
      pathname,
      resetScroll,
      searchParams,
    },
  }),
)

export const actions = {
  changeLocation,
}

// --------------------------------------------------------
// Reducer

const initialState = {
  pathname: window?.location?.pathname || '/',
  searchParams: parseSearchParams(window?.location?.search),
}

/* eslint-disable no-param-reassign */
export default createReducer(initialState, {
  [changeLocation]: (state, action) => {
    const { pathname, searchParams } = action.payload
    state.pathname = pathname
    state.searchParams = parseSearchParams(searchParams)
  },
})
/* eslint-enable no-param-reassign */

// --------------------------------------------------------
// Selectors

export const getPathname = state => state.routing.pathname
export const getSearchParams = state => state.routing.searchParams
export const getRouting = state => state.routing

export const selectors = {
  getPathname,
  getSearchParams,
  getRouting,
}

// --------------------------------------------------------
// Middleware

export const routingMiddleware = (/* store */) => next => action => {
  if (action.type === changeLocation.type) {
    window.history[action.payload.event](
      null,
      '',
      action.payload.pathname + stringifySearchParams(action.payload.searchParams),
    )
    // Force scroll to top this is what browsers normally do when
    // navigating by clicking a link.
    // Without this, scroll stays wherever it was which can be quite odd.
    if (action.payload?.resetScroll) document.body.scrollTop = 0
  }
  next(action)
}
