import PropTypes from 'prop-types'
import { Flex, Icon, Text } from 'componentry'

import { Footer, Header } from '@/components/universal'
import { PACKAGE_VERSION } from '@/config/environment'
import layoutClasses from '@/components/App/layouts.scss'

/** HomeScreen */
export default function HomeScreen() {
  return (
    <Flex className={layoutClasses.mainSection} direction='column'>
      <Header />

      <Flex className='flex-grow-1' direction='column' px='xl'>
        <Text variant='heading-1' textAlign='center' mt='lg'>
          Prototype application
          <br /> for
          <span className='d-inline-block px-xs' aria-label='crystal ball' role='img'>
            🔮
          </span>
          projects
        </Text>
        <Text mt={0} textAlign='center' maxWidth='unset' italic>
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

HomeScreen.defaultProps = {
  appInfo: null,
}

HomeScreen.propTypes = {
  appInfo: PropTypes.shape({
    title: PropTypes.string,
  }),
}
