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
// Action constants

const ROUTE_NAVIGATED = 'ROUTING/ROUTE_NAVIGATED'

// --------------------------------------------------------
// Reducer

const initialState = {
  pathname: window?.location?.pathname || '/',
  searchParams: parseSearchParams(window?.location?.search),
}

/* eslint-disable default-param-last */
export default function routingReducer(state = initialState, { type, payload }) {
  if (type === ROUTE_NAVIGATED) {
    return {
      pathname: payload.pathname,
      searchParams: parseSearchParams(payload.searchParams),
    }
  }
  return state
}
/* eslint-enable default-param-last */

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
// Action creators

export const routeNavigated = ({
  event = 'replaceState',
  pathname,
  resetScroll = true,
  searchParams = {},
}) => ({
  type: ROUTE_NAVIGATED,
  payload: {
    event,
    pathname,
    resetScroll,
    searchParams,
  },
})

export const actions = {
  routeNavigated,
}

// --------------------------------------------------------
// Middleware

export const routingMiddleware = (/* store */) => next => action => {
  if (action.type === ROUTE_NAVIGATED) {
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
