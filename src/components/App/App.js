import React, { Suspense, lazy } from 'react'
import { hot } from 'react-hot-loader/root'

import { Hero, ScreenContainer } from '@/components/universal'
import Switch from '@/components/universal/routing/Switch/Switch'
import { routes } from '@/config/routing'

// --------------------------------------------------------
// App routing

const routeConfigs = [
  {
    route: routes.home,
    component: lazy(() =>
      import(/* webpackChunkName: "HomeScreen" */ '../HomeScreen/HomeScreen'),
    ),
  },
  {
    route: routes.stack,
    component: lazy(() =>
      import(/* webpackChunkName: "StackScreen" */ '../StackScreen/StackScreen'),
    ),
  },
  {
    route: '(.*)',
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
            <Switch routes={routeConfigs} />
          </Suspense>
        </ScreenContainer>
      </div>
    </>
  )
}
App.displayName = 'App'

export default hot(App)
