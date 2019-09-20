/* global module */
import { applyMiddleware, createStore } from 'redux'
import createSagaMiddleware from 'redux-saga'
import thunkMiddleware from 'redux-thunk'
import { composeWithDevTools } from 'redux-devtools-extension'

import rootReducer from './reducers'
import rootSaga from './sagas'

export default function configureStore(preloadedState) {
  // Create the middleware "thread" that the sagas run in. From the middleware
  // the root saga is able to respond to incoming actions and dispatch new actions
  const sagaMiddleware = createSagaMiddleware()

  const middlewareEnhancer = applyMiddleware(thunkMiddleware, sagaMiddleware)

  const composeEnhancers = composeWithDevTools({
    trace: true,
  })

  // Create store, overriding preloaded state if needed
  const store = createStore(
    rootReducer,
    preloadedState,
    composeEnhancers(middlewareEnhancer),
  )

  // Fire up those generators
  sagaMiddleware.run(rootSaga)

  // Accept hot reload for reducers in dev envs
  if (module.hot) {
    module.hot.accept('./reducers', () => store.replaceReducer(rootReducer))
  }

  return store
}
