import React, { Suspense, lazy } from 'react'
import { hot } from 'react-hot-loader/root'

import { Hero, ScreenContainer } from '@/components/universal'
import Switch from '@/components/universal/routing/Switch/Switch'

// --------------------------------------------------------
// App routing

const routes = [
  {
    path: '/',
    component: lazy(() =>
      import(/* webpackChunkName: "HomeScreen" */ '../HomeScreen/HomeScreen'),
    ),
  },
  {
    path: '/application-stack',
    component: lazy(() =>
      import(/* webpackChunkName: "StackScreen" */ '../StackScreen/StackScreen'),
    ),
  },
  {
    path: '/optimizations',
    component: lazy(() =>
      import(
        /* webpackChunkName: "OptimizationsScreen" */ '../OptimizationsScreen/OptimizationsScreen'
      ),
    ),
  },
  {
    path: '(.*)',
    component: lazy(() =>
      import(
        /* webpackChunkName: "FourOhFourScreen" */ '../FourOhFourScreen/FourOhFourScreen'
      ),
    ),
  },
]

/**
 * Application class component is responsible for setting the base application
 * behaviors and screen layouts+routing.
 */
function App() {
  return (
    <>
      {/* Base container element with flexbox layout for sticky footers */}
      <div className='d-flex flex-column w-100 min-100vh'>
        <ScreenContainer direction='row'>
          <Hero />
          <Suspense fallback={<div className='loading' />}>
            <Switch routes={routes} />
          </Suspense>
        </ScreenContainer>
      </div>
    </>
  )
}
App.displayName = 'App'

export default hot(App)
