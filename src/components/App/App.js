import React, { Suspense, lazy } from 'react'
import { hot } from 'react-hot-loader/root'
import { Switch, Route } from 'react-router-dom'

// Application
import { ScrollToTop } from '@/components/universal'
import Header from './Header/Header'

// Screens
const HomeScreen = lazy(() => import('../HomeScreen/HomeScreen'))
const BestPracticesScreen = lazy(() =>
  import('../BestPracticesScreen/BestPracticesScreen'),
)
const FourOhFourScreen = lazy(() => import('../FourOhFourScreen/FourOhFourScreen'))

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
