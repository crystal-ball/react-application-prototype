/* global module */
import { applyMiddleware, createStore, compose } from 'redux'
import createSagaMiddleware from 'redux-saga'

import rootReducer from './reducers'
import rootSaga from './sagas'

const NODE_ENV = process.env.NODE_ENV // eslint-disable-line

// Create the middleware "thread" that the sagas run in. From the middleware
// the root saga is able to respond to incoming actions and dispatch new actions
const sagaMiddleware = createSagaMiddleware()

// In dev envs and when app is entered in debug add Redux devtools compose
/* eslint-disable no-underscore-dangle */
let composeEnhancers = compose
if (
  (NODE_ENV === 'development' || window.location.href.includes('debug=true')) &&
  typeof window === 'object' &&
  window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
) {
  composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({
    trace: true,
  })
}

// Create store, overriding preloaded state if needed
const store = createStore(
  rootReducer,
  /* preloadedState, */
  composeEnhancers(applyMiddleware(sagaMiddleware)),
)

// Fire up those generators
sagaMiddleware.run(rootSaga)

// Accept hot reload for reducers in dev envs
if (module.hot) {
  module.hot.accept('./reducers', () => {
    store.replaceReducer(rootReducer)
  })
}

export default store
