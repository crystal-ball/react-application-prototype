import React from 'react'
import PropTypes from 'prop-types'
import { Flex, Icon, Text } from 'componentry'

import { Footer, Header } from '@/components/universal'
import { PACKAGE_VERSION } from '@/config/environment'

/** HomeScreen */
export default function HomeScreen() {
  // Layout notes
  // Large screens ->
  //   40%/60% 2 column layout with a position sticky header
  // Small screens ->
  //   Flex column layout with title then contents

  return (
    <Flex borderLeft direction='column' className='main-section' borderColor='300'>
      <Header />

      <Flex direction='column' px='xl' py='md'>
        <Text variant='heading-2' textAlign='center'>
          Prototype React application for
          <span className='d-inline-block pr-xs' aria-label='crystal ball' role='img'>
            🔮
          </span>
          projects
        </Text>
        <Text italic mt={0} textAlign='center' maxWidth='unset'>
          v{PACKAGE_VERSION}
        </Text>

        <div className='mx-xl mt-xl'>
          <Text variant='heading-3'>
            <Icon id='coffee' /> Application featureset
          </Text>
          <ul className='list-disc list-inside mt-md'>
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
            <li>
              Auto deploy with Zeit{' '}
              <span aria-label='mindblown' role='img'>
                🤯
              </span>
            </li>
            <li>
              All the notifications in Slack{' '}
              <span aria-label='yay' role='img'>
                🎉
              </span>
            </li>
            <li>
              Visual regression testing with Percy{' '}
              <span aria-label='hedgehog' role='img'>
                🦔
              </span>
            </li>
          </ul>
        </div>
      </Flex>

      <Footer />
    </Flex>
  )
}
HomeScreen.displayName = 'HomeScreen'

HomeScreen.defaultProps = {
  appInfo: null,
}

HomeScreen.propTypes = {
  appInfo: PropTypes.shape({
    title: PropTypes.string,
  }),
}
