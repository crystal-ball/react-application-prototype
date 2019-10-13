const RAD_TOGGLED = 'APP/RAD_TOGGLED'

const defaultState = {
  rad: true,
}

/* eslint-disable default-param-last */
export default function reducer(state = defaultState, { type /* , payload */ }) {
  switch (type) {
    case RAD_TOGGLED:
      return {
        rad: !state.rad,
      }
    default:
      return state
  }
}
/* eslint-disable default-param-last */

// Selectors
// ---------------------------------------------------------------------------

export const selectRad = state => state.app.rad

// Action creators
// ---------------------------------------------------------------------------

export const dispatchRadToggled = () => ({
  type: RAD_TOGGLED,
})
