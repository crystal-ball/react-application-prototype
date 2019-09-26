import React from 'react'
import { hot } from 'react-hot-loader/root'
import { Switch, Route } from 'react-router-dom'
import { Flex } from 'componentry'

// Application
import { ScrollToTop } from '@/components/universal'
import Header from './Header/Header'

// Screens
import HomeScreen from '../HomeScreen/HomeScreen'
import BestPracticesScreen from '../BestPracticesScreen/BestPracticesScreen'
import FourOhFourScreen from '../FourOhFourScreen/FourOhFourScreen'

/**
 * Application class component is responsible for setting the base application
 * behaviors and screen layouts+routing.
 */
const App = () => (
  <>
    {/* Base container element with flexbox layout for sticky footers */}
    <Flex className='min-100vh' direction='column'>
      <Header />
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

      {/* Restores scroll position to page top on route change */}
      <ScrollToTop />
    </Flex>
  </>
)

export default hot(App)
