import React from 'react'
import { Switch, Route } from 'react-router-dom'
import { Flex } from 'componentry'

// Application
import { ScrollToTop } from '@/components/universal'
import Header from './Header'
import Footer from './Footer'

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
    {/* Restores scroll position to page top on route change */}
    <ScrollToTop />
    {/* Base container element with flexbox layout for sticky footers */}
    <Flex className='min-100vh' direction='column'>
      <Header />
      {/* Application screen level routes */}
      <Switch>
        <Route path='/' exact component={HomeScreen} />
        <Route path='/best-practices' exact component={BestPracticesScreen} />
        <Route component={FourOhFourScreen} />
      </Switch>
      <Footer />
    </Flex>
  </>
)

export default App
