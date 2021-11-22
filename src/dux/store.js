/* global module */
import { configureStore } from '@reduxjs/toolkit'
import { routingMiddleware, setupRoutingListeners } from 'dux-routing'
import createSagaMiddleware from 'redux-saga'

import { NODE_ENV } from '@/config/environment'
import { rootReducer } from './root-reducer'
import rootSaga from './sagas'

export function createStore(preloadedState) {
  // Create the middleware "thread" that the sagas run in. From the middleware
  // the root saga is able to respond to incoming actions and dispatch new actions
  const sagaMiddleware = createSagaMiddleware()

  // Create store, overriding preloaded state if needed
  const store = configureStore({
    reducer: rootReducer,
    middleware: (getDefaultMiddleware) =>
      getDefaultMiddleware().concat(routingMiddleware, sagaMiddleware),
    preloadedState,
  })

  // Fire up those generators
  sagaMiddleware.run(rootSaga)

  // Accept hot reload for reducers in dev envs
  if (NODE_ENV === 'development' && module.hot) {
    module.hot.accept(
      './root-reducer',

      () => {
        store.replaceReducer(rootReducer)
      },
    )
  }

  setupRoutingListeners(store)

  return store
}

// ?? How to export the type of dispatch with `createStore` pattern?
// export type AppDispatch = typeof store.dispatch
