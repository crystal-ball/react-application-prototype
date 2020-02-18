/* global module */
import { configureStore } from '@reduxjs/toolkit'
import createSagaMiddleware from 'redux-saga'
import { routingMiddleware, setupRoutingListeners } from 'dux-routing'

import { NODE_ENV } from '@/config/environment'
import rootReducer from './reducers'
import rootSaga from './sagas'

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
  if (NODE_ENV === 'development' && module.hot) {
    module.hot.accept('./reducers', () => store.replaceReducer(rootReducer))
  }

  setupRoutingListeners(store)

  return store
}
