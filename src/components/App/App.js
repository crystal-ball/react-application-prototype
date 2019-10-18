import React, { Suspense, lazy } from 'react'
import { hot } from 'react-hot-loader/root'
import { Route, Switch } from 'react-router-dom'

import { ScrollToTop } from '@/components/universal'
import Header from './Header/Header'

// Screens

// webpackPrefetch
const HomeScreen = lazy(() =>
  import(/* webpackChunkName: "HomeScreen" */ '../HomeScreen/HomeScreen'),
)
// TODO: rename to "ConventionsScreen"
const BestPracticesScreen = lazy(() =>
  import(
    /* webpackChunkName: "BestPracticesScreen" */ '../BestPracticesScreen/BestPracticesScreen'
  ),
)
const FeaturesScreen = lazy(() =>
  import(/* webpackChunkName: "FeaturesScreen" */ '../FeaturesScreen/FeaturesScreen'),
)
const IntegrationsScreen = lazy(() =>
  import(
    /* webpackChunkName: "IntegrationsScreen" */ '../IntegrationsScreen/IntegrationsScreen'
  ),
)
const FourOhFourScreen = lazy(() =>
  import(
    /* webpackChunkName: "FourOhFourScreen" */ '../FourOhFourScreen/FourOhFourScreen'
  ),
)

/**
 * Application class component is responsible for setting the base application
 * behaviors and screen layouts+routing.
 */
function App() {
  return (
    <>
      {/* Base container element with flexbox layout for sticky footers */}
      <div className='app-container'>
        <Header />
        <Suspense fallback={<div className='loading' />}>
          <Switch>
            <Route path='/' exact>
              <HomeScreen />
            </Route>
            <Route path='/best-practices'>
              <BestPracticesScreen />
            </Route>
            <Route path='/features'>
              <FeaturesScreen />
            </Route>
            <Route path='/integrations'>
              <IntegrationsScreen />
            </Route>
            <Route>
              <FourOhFourScreen />
            </Route>
          </Switch>
        </Suspense>

        {/* Restores scroll position to page top on route change */}
        <ScrollToTop />
      </div>
    </>
  )
}

export default hot(App)
