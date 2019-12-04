/* global module */
import { configureStore } from '@reduxjs/toolkit'
import createSagaMiddleware from 'redux-saga'

import rootReducer from './reducers'
import rootSaga from './sagas'
import { routingMiddleware } from './routing'

export default function createStore(preloadedState) {
  // Create the middleware "thread" that the sagas run in. From the middleware
  // the root saga is able to respond to incoming actions and dispatch new actions
  const sagaMiddleware = createSagaMiddleware()

  // Create store, overriding preloaded state if needed
  const store = configureStore({
    reducer: rootReducer,
    middleware: [routingMiddleware, sagaMiddleware],
    preloadedState,
  })

  // Fire up those generators
  sagaMiddleware.run(rootSaga)

  // Accept hot reload for reducers in dev envs
  if (process.env.NODE_ENV === 'development' && module.hot) {
    module.hot.accept('./reducers', () => store.replaceReducer(rootReducer))
  }

  return store
}
