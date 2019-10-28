/* global global */
import routingReducer, {
  getPathname,
  getRouting,
  getSearchParams,
  routingMiddleware,
} from './index'

const mockState = () => ({
  routing: {
    pathname: '/',
    searchParams: { level: 'beginning' },
  },
})

describe('Redux: routing', () => {
  test('When reducer is called with routing action, then the route is updated', () => {
    const newState = routingReducer(mockState().routing, {
      type: 'ROUTING/ROUTE_NAVIGATED',
      payload: {
        pathname: '/rad/route',
        searchParams: { level: 'ultra' },
      },
    })

    expect(newState).toEqual({
      pathname: '/rad/route',
      searchParams: { level: 'ultra' },
    })
  })

  describe('selectors', () => {
    test('When getPathname is called, then it returns the current pathname', () => {
      expect(getPathname(mockState())).toEqual('/')
    })

    test('When getSearchParams is called, then it returns the current search params', () => {
      expect(getSearchParams(mockState())).toStrictEqual({ level: 'beginning' })
    })

    test('When getRouting is called, then it returns the current routing', () => {
      expect(getRouting(mockState())).toStrictEqual({
        pathname: '/',
        searchParams: { level: 'beginning' },
      })
    })
  })

  describe('routingMiddleware', () => {
    test('When routingMiddleware is called with route navigate, then url is updated', () => {
      const nextSpy = jest.fn()
      const historySpy = jest.spyOn(global.history, 'replaceState')

      routingMiddleware()(nextSpy)({
        type: 'ROUTING/ROUTE_NAVIGATED',
        payload: {
          event: 'replaceState',
          pathname: '/rad/route',
          searchParams: {},
        },
      })

      expect(nextSpy).toHaveBeenCalled()
      expect(historySpy).toHaveBeenCalledWith(null, '', '/rad/route')
    })

    test('When routingMiddleware is called with search params, then url contains search params', () => {
      const nextSpy = jest.fn()
      const historySpy = jest.spyOn(global.history, 'replaceState')

      routingMiddleware()(nextSpy)({
        type: 'ROUTING/ROUTE_NAVIGATED',
        payload: {
          event: 'replaceState',
          pathname: '/rad/route',
          searchParams: { level: 'ultra' },
        },
      })

      expect(nextSpy).toHaveBeenCalled()
      expect(historySpy).toHaveBeenCalledWith(null, '', '/rad/route?level=ultra')
    })
  })
})
