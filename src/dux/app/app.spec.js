import reducer, { dispatchRadToggled, selectRad } from './index'

const mockState = () => ({
  app: {
    rad: true,
  },
})

describe('app dux', () => {
  // --------------------------------------------------------
  // Reducer
  test('When reducer is called with toggle action, the rad state is toggled', () => {
    const newState = reducer(mockState().app, dispatchRadToggled())
    expect(newState.rad).toEqual(false)
  })

  // --------------------------------------------------------
  // Selectors
  test('When selectRad is called, then the current rad state is returned', () => {
    expect(selectRad(mockState())).toEqual(true)
  })

  // --------------------------------------------------------
  // Action creators

  test('When dispatchRadToggled is called, then an action object is returned', () => {
    expect(dispatchRadToggled()).toEqual({ type: 'APP/RAD_TOGGLED' })
  })
})
