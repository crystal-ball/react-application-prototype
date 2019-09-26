const RAD_TOGGLED = 'APP/RAD_TOGGLED'

const defaultState = {
  rad: true,
}

const reducer = (state = defaultState, { type /* , payload */ }) => {
  switch (type) {
    case RAD_TOGGLED:
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

export const dispatchRadToggled = () => ({
  type: RAD_TOGGLED,
})
