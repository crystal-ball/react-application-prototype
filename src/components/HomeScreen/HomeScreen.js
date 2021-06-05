import PropTypes from 'prop-types'
import { Flex, Icon, Text } from 'componentry'

import { Footer, Header } from '@/components/universal'
import { mainAreaCx } from '@/components/App/layout'

/** HomeScreen */
export default function HomeScreen() {
  return (
    <Flex className={mainAreaCx} direction='column'>
      <Header />

      <Flex className='flex-grow' direction='column' px='xl'>
        <Text variant='heading-1' align='center' mt='lg'>
          Prototype application
          <br /> for
          <span className='d-inline-block px-xs' aria-label='crystal ball' role='img'>
            🔮
          </span>
          projects
        </Text>

        <div className='mx-xl mt-xl'>
          <Text variant='heading-3'>
            <Icon id='coffee' /> Application featureset
          </Text>
          <ul className='list-disc list-inside mt-md'>
            <li>
              Automaic deployments with Vercel{' '}
              <span aria-label='mindblown' role='img'>
                🚀
              </span>
            </li>
            <li>
              All the notifications in Slack{' '}
              <span aria-label='yay' role='img'>
                📣
              </span>
            </li>
            <li>
              Visual regression testing with Percy{' '}
              <span aria-label='hedgehog' role='img'>
                🦔
              </span>
            </li>
            <li>
              Application observability with OpenTelemetry and Lightstep{' '}
              <span aria-label='telescope' role='img'>
                🔭
              </span>
            </li>
            <li>JS compilation with Babel+webpack</li>
            <li>Sourcemaps for dev and prod workflows</li>
            <li>
              Automatic script injection with <code>html-webpack-plugin</code>
            </li>
            <li>
              Friendly webpack errors with <code>friendly-errors-webpack-plugin</code>
            </li>
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
