const TOGGLE_RAD = 'APP/TOGGLE_RAD'

const defaultState = {
  rad: true,
}

const reducer = (state = defaultState, { type /* , payload */ }) => {
  switch (type) {
    case TOGGLE_RAD:
      return {
        rad: !state.rad,
      }
    default:
      return state
  }
}
export default reducer

// Selectors
// ---------------------------------------------------------------------------

export const selectRad = state => state.app.rad

// Action creators
// ---------------------------------------------------------------------------

export const updateRad = () => ({
  type: TOGGLE_RAD,
})
