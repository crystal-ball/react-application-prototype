import React from 'react'
import { Flex, Header, Text } from 'componentry'
import classnames from 'classnames'

import RadState from './RadState'
import RadToggle from './RadToggle'
import Webpack from '@/media/webpack-logo.svg'
import MagicImg from '@/media/karly-santiago.jpg'

import { component } from './home-screen.scss'

const HomeScreen = () => (
  // Layout notes
  // Large screens ->
  //   40%/60% 2 column layout with a position sticky header
  // Small screens ->
  //   Flex column layout with title then contents
  <Flex className={classnames(component, 'flex-grow-1')}>
    <div className='title-container mx-3'>
      <h1 className='sticky-title font-ornamental display-1'>
        The Order
        <br />
        of the
        <br />
        Crystal Code Wizards
      </h1>
    </div>
    <div className='features-list-container'>
      <div className='hero d-flex flex-column align-items-center'>
        <Webpack />
      </div>
      <Header textAlign='center'>webpack-base</Header>
      <Text italic textAlign='center'>
        v{process.env.PACKAGE_VERSION}
      </Text>
      <Text italic textAlign='center'>
        Test applicaton for <code>webpack-base</code> projects.
      </Text>
      <Flex>
        <div className='w-75 pl-3'>
          <RadToggle />
          <RadState />
          <ul>
            <li>
              JS loader setup to transpile all source in the{' '}
              <code>babelLoaderInclude</code> with the <code>babel-loader</code>
            </li>
            <li>Appropriate sourcemaps for dev vs prod builds</li>
            <li>
              Handles adding scripts to <code>index.html</code>
            </li>
            <li>Friendly errors</li>
            <li>Dev server with hot reloading</li>
            <li>Progress indicators</li>
            <li>Production optimizations including uglify and module concatenation</li>
            <li>Output directory cleaning</li>
            <li>
              Injected <code>PUBLIC_PATH</code> for routing
            </li>
          </ul>
        </div>
      </Flex>

      <img src={MagicImg} className='mw-100' alt='In pursuit of magic' />
    </div>
  </Flex>
)

export default HomeScreen
