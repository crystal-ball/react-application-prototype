import { PATHNAME_CHANGED } from './action-types'

const parseSearchParams = (search = '') => {
  if (!URLSearchParams) return {}

  const parsedSearchParams = {}
  const searchParams = new URLSearchParams(search)

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

export function changePathname({
  method = 'pushState',
  pathname,
  resetScroll = true,
  searchParams = {},
}) {
  return {
    type: PATHNAME_CHANGED,
    payload: {
      method,
      pathname,
      resetScroll,
      searchParams,
    },
  }
}

export const actions = {
  changePathname,
}

// --------------------------------------------------------
// Reducer

const initialState = {
  pathname: window?.location?.pathname || '/',
  searchParams: parseSearchParams(window?.location?.search),
}

/* eslint-disable default-param-last */
export default function reducer(state = initialState, action) {
  if (action.type === PATHNAME_CHANGED) {
    const { pathname, searchParams } = action.payload

    return {
      pathname,
      searchParams,
    }
  }

  if (action.meta?.searchParamsUpdate) {
    return {
      pathname: state.pathname,
      searchParams: action.meta.searchParams,
    }
  }

  return state
}
/* eslint-disable default-param-last */

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

export const routingMiddleware = store => next => action => {
  // Handle updating the url to match pathname changes
  if (action.type === PATHNAME_CHANGED) {
    const { method, pathname, resetScroll, searchParams } = action.payload

    window.history[method](null, '', pathname + stringifySearchParams(searchParams))

    // Match browser default behavior by resetting scroll to top of body
    if (resetScroll) document.body.scrollTop = 0
  }

  // Handle updating the url to match search param changes
  if (action.meta?.searchParamsUpdate) {
    const { method = 'replaceState', searchParams } = action.meta
    const pathname = getPathname(store.getState())

    window.history[method](null, '', pathname + stringifySearchParams(searchParams))
  }

  next(action)
}

// --------------------------------------------------------
// Event Listeners

export const setupRoutingListeners = store => {
  window.addEventListener('popstate', () => {
    store.dispatch(
      changePathname({
        pathname: window.location.pathname,
        searchParams: parseSearchParams(window.location.search),
      }),
    )
  })
}
